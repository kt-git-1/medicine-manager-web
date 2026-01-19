# Prescription Manager MVP - Implementation Instructions (JP)

## 0. MVP方針（重要）
- ログイン無し。デバイスTokenでスコープ認可。
- 本人(iOS)はローカル通知のみ。Pushはやらない。
- 家族はWebで完結できる（代理で「飲んだ」記録OK）。
- UIは「飲んだ/未」だけ表示（patient/caregiver区別は表示しない）。
- 無料運用: Next.js(Vercel) + Postgres(Supabase等) + Cron(Vercel cron or GitHub Actions)。

---

## 1. ドメイン要件

### 1.1 ロール
- PatientDevice: 本人端末（通知受け取り・必要なら自己記録）
- CaregiverDevice: 家族のWeb閲覧・薬登録・代理記録

### 1.2 主要機能
1) ペアリングコード発行・紐付け
2) 薬登録（薬名/メモ/残数）
3) 服薬スケジュール（時刻 + 曜日）
4) 今日の服薬予定一覧（DoseEvent）
5) 服薬記録（Taken）
6) 未服薬判定（missed）
7) 残薬アラート（low_stock）
8) 家族アプリ内通知（NotificationEvent一覧）

---

## 2. 技術スタック
- Next.js App Router
- Route Handlers for API
- Prisma ORM
- Zod validation
- Postgres
- Cron: /api/internal/jobs/recompute を定期実行

---

## 3. データモデル（Prisma schema）

### 3.1 daysOfWeek ビットマスク
- Mon=1<<0, Tue=1<<1, Wed=1<<2, Thu=1<<3, Fri=1<<4, Sat=1<<5, Sun=1<<6
- mask例：平日 = 0b00011111 = 31

### 3.2 Prisma Models（MVP最小）
- FamilyGroup
  - id (cuid)
  - createdAt

- CaregiverDevice
  - id
  - familyGroupId (FK)
  - deviceToken (unique)
  - label?
  - createdAt

- PatientDevice
  - id
  - familyGroupId? (nullable until claimed)
  - deviceToken (unique)
  - tz (e.g. "Asia/Tokyo")
  - label?
  - createdAt

- PairingCode
  - code (string, unique, short e.g. 6-8 chars)
  - familyGroupId
  - expiresAt
  - usedAt?

- Medication
  - id
  - familyGroupId
  - name
  - instructions?
  - remainingCount? (int)
  - remainingUpdatedAt?
  - isActive (bool default true)
  - createdAt, updatedAt

- DoseSchedule
  - id
  - medicationId
  - timeOfDay (string "HH:MM")
  - daysOfWeekMask (int)
  - dosesPerTime (int default 1)
  - createdAt, updatedAt

- DoseEvent
  - id
  - scheduleId
  - plannedAt (datetime)
  - takenAt?
  - status enum: planned|taken|missed|skipped
  - source enum: patient|caregiver
  - createdAt, updatedAt
  - Unique: (scheduleId, plannedAt) for idempotent generation

- NotificationEvent
  - id
  - familyGroupId
  - type enum: taken|missed|low_stock
  - occurredAt
  - payloadJson (Json)
  - createdAt

---

## 4. 認可（Device Token）
- Header: `Authorization: Device <token>`
- token -> PatientDevice or CaregiverDevice を解決。
- DB操作は必ず familyGroupId スコープで制限。

Internal job:
- Header: `Authorization: Bearer <CRON_SECRET>`

---

## 5. API設計（Route Handlers）

### 5.1 Pairing
- POST /api/pairing/create (caregiver)
  - input: { label? }
  - behavior:
    - caregiver device が無ければ作成（deviceTokenはクライアント生成でもサーバ生成でも可）
    - familyGroup が無ければ作成
    - PairingCode を発行（expiresAt=now+15min）
  - output: { code, expiresAt }

- POST /api/pairing/claim (patient)
  - input: { code }
  - behavior:
    - code 有効 & 未使用 & 未期限切れ
    - patient device を familyGroup に紐付け
    - code.usedAt=now
  - output: { familyGroupId }

### 5.2 Caregiver - Medication
- GET  /api/family/medications
- POST /api/family/medications
  - input: { name, instructions?, remainingCount? }
- PATCH /api/family/medications/:id
  - input: { name?, instructions?, remainingCount?, isActive? }
- DELETE /api/family/medications/:id (論理削除でもOK)

### 5.3 Caregiver - Schedules
- POST /api/family/medications/:id/schedules
  - input: { timeOfDay:"HH:MM", daysOfWeekMask:int, dosesPerTime?:int }
- PATCH /api/family/schedules/:scheduleId
- DELETE /api/family/schedules/:scheduleId

### 5.4 Today View (Patient + Caregiver)
- GET /api/patient/today
  - behavior:
    - patientDevice scope
    - 今日の DoseEvent を返す
    - その前に「今日分が無ければ生成」(idempotent)
- GET /api/family/today
  - behavior:
    - caregiver scope
    - group内 patient の今日分 DoseEvent を返す（MVPは全patient返してOK）

### 5.5 Mark Taken (Patient or Caregiver)
- POST /api/doses/:doseEventId/take
  - input: {}（or { takenAt? }）
  - behavior:
    - status=taken, takenAt=now, source=patient/caregiver
    - remainingCount がある場合は減算（0未満にしない）
    - NotificationEvent(type=taken) を作成（MVPは任意）

### 5.6 Notifications
- GET /api/family/notifications
  - recent 30 days, order by occurredAt desc

### 5.7 Internal Job
- POST /api/internal/jobs/recompute
  - auth: CRON_SECRET
  - tasks:
    1) missed 判定:
       - status=planned かつ now > plannedAt + graceMinutes(90) かつ takenAt null
       - status=missed に更新
       - NotificationEvent(type=missed)
    2) low_stock:
       - remainingCount がある薬について、推定消費量から daysLeft を算出
       - daysLeft <= 3 なら NotificationEvent(type=low_stock)（同一薬で連投防止）
  - output: { updatedMissedCount, lowStockCount }

---

## 6. DoseEvent 生成ロジック（アクセス時生成）
- 対象日: その日の 00:00-23:59（tzは patientDevice.tz）
- active schedules を取得し、曜日がmaskに含まれるもののみ
- plannedAt を date + timeOfDay で生成
- 既存 (scheduleId, plannedAt) があれば作らない（unique制約 + upsert）
- status 初期は planned

---

## 7. Web UI（Next.js pages）
- /caregiver/pairing
  - "コード発行" ボタン、残り時間表示
- /caregiver/dashboard
  - 今日のdose一覧（飲んだ/未）
  - 代理で「飲んだ」ボタン
- /caregiver/medications
  - 薬一覧 + 追加フォーム + スケジュール編集
- /caregiver/notifications
  - 通知ログ

UIは最小限でよい。デザインは後回し。

---

## 8. Zodスキーマ
- request/response を全APIで zod validate
- 例: timeOfDay は `/^\d{2}:\d{2}$/` + 00-23/00-59 範囲チェック

---

## 9. Seed
- demo FamilyGroup + patient + caregiver + medication + schedules を作る seed.ts
- dashboard で動作確認できる状態にする

---

## 10. Acceptance Criteria
- 家族Webでコード発行→本人がclaimできる
- 家族Webで薬/スケジュール登録→今日のDoseEventが生成される
- 家族Webから代理でTakenできる（UIは区別表示しない）
- cronでmissedが付く
- remainingCountがある薬でlow_stock通知が出る
