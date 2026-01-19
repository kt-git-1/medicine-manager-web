"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type DoseEvent = {
  id: string;
  plannedAt: string;
  takenAt: string | null;
  status: "planned" | "taken" | "missed" | "skipped";
  schedule: {
    timeOfDay: string;
    dosesPerTime: number;
    medication: {
      id: string;
      name: string;
      remainingCount: number | null;
      isActive: boolean;
    };
  };
};

type NotificationEvent = {
  id: string;
  type: string;
  occurredAt: string;
  payloadJson: any;
};

function getOrCreateCaregiverToken(): string {
  const key = "caregiverDeviceToken";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const t = crypto.randomUUID();
  localStorage.setItem(key, t);
  return t;
}

function fmtJstHHmm(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function fmtJstMdHm(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ status }: { status: DoseEvent["status"] }) {
  const map: Record<DoseEvent["status"], { label: string; bg: string; fg: string; bd: string }> = {
    planned: { label: "予定", bg: "#f7f7f7", fg: "#222", bd: "#e5e5e5" },
    taken: { label: "飲んだ", bg: "#e9f9ef", fg: "#0a7a2f", bd: "#bfe9cf" },
    missed: { label: "未服薬", bg: "#fff0f0", fg: "#b00020", bd: "#ffd0d6" },
    skipped: { label: "スキップ", bg: "#f1f1ff", fg: "#3a46c6", bd: "#d7dbff" },
  };
  const s = map[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 8px",
        borderRadius: 999,
        border: `1px solid ${s.bd}`,
        background: s.bg,
        color: s.fg,
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {s.label}
    </span>
  );
}

function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <section
      style={{
        border: "1px solid #eee",
        borderRadius: 14,
        padding: 14,
        background: "white",
        boxShadow: "0 1px 10px rgba(0,0,0,0.03)",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 10, color: "#222" }}>
        {props.title}
      </div>
      {props.children}
    </section>
  );
}

export default function CaregiverDashboardPage() {
  const [token, setToken] = useState<string | null>(null);
  const [doseEvents, setDoseEvents] = useState<DoseEvent[]>([]);
  const [notifications, setNotifications] = useState<NotificationEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [filter, setFilter] = useState<"all" | "planned" | "missed" | "taken">("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setToken(getOrCreateCaregiverToken());
  }, []);

  const headers = useMemo(() => {
    if (!token) return null;
    return {
      "Content-Type": "application/json",
      Authorization: `Device ${token}`,
    };
  }, [token]);

  async function refresh() {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const [resToday, resNotifs] = await Promise.all([
        fetch("/api/family/today", { headers }),
        fetch("/api/family/notifications?limit=20&days=7", { headers }),
      ]);

      const jsonToday = await resToday.json();
      if (!resToday.ok) throw new Error(jsonToday?.error ?? "Failed to load today");
      setDoseEvents(jsonToday.doseEvents ?? []);

      const jsonNotifs = await resNotifs.json();
      if (!resNotifs.ok) throw new Error(jsonNotifs?.error ?? "Failed to load notifications");
      setNotifications(jsonNotifs.items ?? []);
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function take(doseEventId: string) {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/doses/${doseEventId}/take`, {
        method: "POST",
        headers,
        body: JSON.stringify({}),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed to take");
      await refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (headers) refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers]);

  const missedCount = doseEvents.filter((d) => d.status === "missed").length;
  const plannedCount = doseEvents.filter((d) => d.status === "planned").length;
  const takenCount = doseEvents.filter((d) => d.status === "taken").length;

  const lowStock = notifications.filter((n) => n.type === "low_stock");
  const missedNotifs = notifications.filter((n) => n.type === "missed" || n.type === "missed_dose");

  const filtered = doseEvents
    .filter((d) => (filter === "all" ? true : d.status === filter))
    .filter((d) => {
      if (!query.trim()) return true;
      const q = query.trim().toLowerCase();
      return d.schedule.medication.name.toLowerCase().includes(q);
    });

  async function copyToken() {
    if (!token) return;
    await navigator.clipboard.writeText(token);
  }

  return (
    <main style={{ padding: 18, maxWidth: 980, margin: "0 auto", background: "#fafafa", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0, color: "#111" }}>家族ダッシュボード（今日）</h1>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#555" }}>
            代理で「飲んだ」を記録できます（本人は操作なしでもOK）
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            href="/caregiver/pairing"
            style={{
              border: "1px solid #ddd",
              background: "#111",
              color: "white",
              padding: "10px 12px",
              borderRadius: 10,
              fontWeight: 900,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            ペアリングコード発行
          </Link>

          <button
            onClick={refresh}
            disabled={!headers || loading}
            style={{
              border: "1px solid #ddd",
              background: "white",
              padding: "10px 12px",
              borderRadius: 10,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {loading ? "更新中…" : "更新"}
          </button>
        </div>
      </header>

      {err && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            border: "1px solid #ffd0d6",
            background: "#fff0f0",
            color: "#b00020",
            fontWeight: 800,
          }}
        >
          エラー: {err}
        </div>
      )}

      {/* Summary cards */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 14 }}>
        <Card title="今日の状態">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13 }}>
              <b>予定</b> {plannedCount}
            </span>
            <span style={{ fontSize: 13 }}>
              <b>未服薬</b> {missedCount}
            </span>
            <span style={{ fontSize: 13 }}>
              <b>飲んだ</b> {takenCount}
            </span>
          </div>
          {missedCount > 0 && (
            <div style={{ marginTop: 10, padding: 10, borderRadius: 12, border: "1px solid #ffd0d6", background: "#fff0f0" }}>
              <b style={{ color: "#b00020" }}>未服薬があります</b>
              <div style={{ marginTop: 6, fontSize: 13, color: "#555" }}>
                本人に確認して、必要なら代理で「飲んだ」を押してください。
              </div>
            </div>
          )}
        </Card>

        <Card title="残薬アラート（直近7日）">
          {lowStock.length === 0 ? (
            <div style={{ fontSize: 13, color: "#555" }}>今のところアラートはありません</div>
          ) : (
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {lowStock.slice(0, 4).map((n) => (
                <li key={n.id} style={{ marginBottom: 6, fontSize: 13 }}>
                  <b>{n.payloadJson?.medicationName ?? "薬"}</b>{" "}
                  残り {n.payloadJson?.remainingCount ?? "-"}（約 {n.payloadJson?.estimatedDaysLeft ?? "-"} 日）
                </li>
              ))}
            </ul>
          )}
          <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
            ※ 残数入力のある薬のみ推定します
          </div>
        </Card>

        <Card title="通知（直近7日）">
          {notifications.length === 0 ? (
            <div style={{ fontSize: 13, color: "#555" }}>通知はまだありません</div>
          ) : (
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {notifications.slice(0, 5).map((n) => (
                <li key={n.id} style={{ marginBottom: 6, fontSize: 12 }}>
                  <b>
                    {n.type === "missed" || n.type === "missed_dose"
                      ? "未服薬"
                      : n.type === "low_stock"
                      ? "残薬"
                      : "服薬"}
                  </b>{" "}
                  {n.payloadJson?.medicationName ? `- ${n.payloadJson.medicationName}` : ""}
                  <span style={{ color: "#777" }}>（{fmtJstMdHm(n.occurredAt)}）</span>
                </li>
              ))}
            </ul>
          )}
          {missedNotifs.length > 0 && (
            <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
              未服薬通知: {missedNotifs.length} 件
            </div>
          )}
        </Card>
      </section>

      {/* Controls */}
      <section
        style={{
          marginTop: 14,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["all", "planned", "missed", "taken"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              style={{
                border: "1px solid #ddd",
                background: filter === k ? "#111" : "white",
                color: filter === k ? "white" : "#111",
                padding: "7px 10px",
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              {k === "all" ? "全て" : k === "planned" ? "予定" : k === "missed" ? "未服薬" : "飲んだ"}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            placeholder="薬名で検索"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: "8px 10px",
              width: 220,
              background: "white",
            }}
          />
          <button
            onClick={copyToken}
            disabled={!token}
            style={{
              border: "1px solid #ddd",
              background: "white",
              padding: "8px 10px",
              borderRadius: 10,
              fontWeight: 800,
              cursor: "pointer",
            }}
            title="deviceToken をコピー"
          >
            tokenコピー
          </button>
        </div>
      </section>

      {/* Table */}
      <section style={{ marginTop: 12 }}>
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: 14,
            overflow: "hidden",
            background: "white",
            boxShadow: "0 1px 10px rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 900 }}>今日の服薬</div>
            <div style={{ fontSize: 12, color: "#777" }}>表示: {filtered.length} 件</div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ padding: 12, color: "#555" }}>
              条件に一致する予定がありません（薬・スケジュール登録を確認）
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    時刻
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    薬
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    状態
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    残数
                  </th>
                  <th style={{ borderBottom: "1px solid #eee", padding: 12 }}></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((ev) => (
                  <tr key={ev.id}>
                    <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 100 }}>
                      <b style={{ fontSize: 14 }}>{fmtJstHHmm(ev.plannedAt)}</b>
                    </td>
                    <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3" }}>
                      <div style={{ fontWeight: 900 }}>{ev.schedule.medication.name}</div>
                      <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
                        1回 {ev.schedule.dosesPerTime} 回
                        {ev.takenAt ? ` / 記録: ${fmtJstMdHm(ev.takenAt)}` : ""}
                      </div>
                    </td>
                    <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 110 }}>
                      <StatusBadge status={ev.status} />
                    </td>
                    <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 90 }}>
                      {ev.schedule.medication.remainingCount ?? "-"}
                    </td>
                    <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", textAlign: "right", width: 140 }}>
                      <button
                        onClick={() => take(ev.id)}
                        disabled={loading || ev.status === "taken"}
                        style={{
                          border: "1px solid #ddd",
                          background: ev.status === "taken" ? "#f7f7f7" : "#111",
                          color: ev.status === "taken" ? "#777" : "white",
                          padding: "8px 10px",
                          borderRadius: 10,
                          fontWeight: 900,
                          cursor: ev.status === "taken" ? "not-allowed" : "pointer",
                        }}
                      >
                        {ev.status === "taken" ? "済" : "飲んだ(代理)"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {token && (
          <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
            deviceToken（家族）: {token}
          </div>
        )}
      </section>
    </main>
  );
}
