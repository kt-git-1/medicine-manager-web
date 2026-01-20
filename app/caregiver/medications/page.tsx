"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Schedule = {
  id: string;
  timeOfDay: string;
  daysOfWeekMask: number;
  dosesPerTime: number;
};

type Medication = {
  id: string;
  name: string;
  instructions: string | null;
  remainingCount: number | null;
  isActive: boolean;
  schedules: Schedule[];
};

function getOrCreateCaregiverToken(): string {
  const key = "caregiverDeviceToken";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const t = crypto.randomUUID();
  localStorage.setItem(key, t);
  return t;
}

const WEEK: { label: string; bit: number }[] = [
  { label: "月", bit: 1 << 0 },
  { label: "火", bit: 1 << 1 },
  { label: "水", bit: 1 << 2 },
  { label: "木", bit: 1 << 3 },
  { label: "金", bit: 1 << 4 },
  { label: "土", bit: 1 << 5 },
  { label: "日", bit: 1 << 6 },
];

function maskToText(mask: number) {
  if (mask === 127) return "毎日";
  const days = WEEK.filter((w) => (mask & w.bit) !== 0).map((w) => w.label);
  return days.length ? days.join("") : "-";
}

export default function CaregiverMedicationsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // create medication form
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [remaining, setRemaining] = useState<string>("");

  // schedule form (shared)
  const [timeOfDay, setTimeOfDay] = useState("08:00");
  const [dosePerTime, setDosePerTime] = useState(1);
  const [weekChecks, setWeekChecks] = useState<number[]>([
    1 << 0,
    1 << 1,
    1 << 2,
    1 << 3,
    1 << 4,
    1 << 5,
    1 << 6,
  ]); // default毎日

  useEffect(() => setToken(getOrCreateCaregiverToken()), []);

  const headers = useMemo(() => {
    if (!token) return null;
    return {
      "Content-Type": "application/json",
      Authorization: `Device ${token}`,
    };
  }, [token]);

  function weekMask(): number {
    return weekChecks.reduce((acc, b) => acc | b, 0);
  }

  async function refresh() {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/family/medications", { headers });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      setMedications(json.medications ?? []);
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function createMed() {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const body: any = { name: name.trim() };
      if (instructions.trim()) body.instructions = instructions.trim();
      if (remaining.trim()) body.remainingCount = Number(remaining.trim());

      const res = await fetch("/api/family/medications", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      setName("");
      setInstructions("");
      setRemaining("");
      await refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function updateRemaining(medId: string, value: string) {
    if (!headers) return;
    const n = value.trim() ? Number(value.trim()) : null;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/family/medications/${medId}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ remainingCount: n }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      await refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function toggleActive(medId: string, isActive: boolean) {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/family/medications/${medId}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ isActive: !isActive }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      await refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function createSched(medId: string) {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/family/schedules`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          medicationId: medId,
          timeOfDay,
          daysOfWeekMask: weekMask(),
          dosesPerTime: dosePerTime,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      await refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function deleteSched(scheduleId: string) {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/family/schedules/${scheduleId}`, {
        method: "DELETE",
        headers,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed");
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

  function toggleWeek(bit: number) {
    setWeekChecks((prev) =>
      prev.includes(bit) ? prev.filter((x) => x !== bit) : [...prev, bit].sort((a, b) => a - b)
    );
  }

  return (
    <main style={{ padding: 18, maxWidth: 980, margin: "0 auto", background: "#fafafa", minHeight: "100vh" }}>
      {/* Header + 導線 */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>薬・スケジュール管理</h1>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#555" }}>
            家族が薬を登録し、本人は通知を見るだけでも運用できます
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/caregiver/dashboard"
            style={{
              border: "1px solid #ddd",
              background: "white",
              color: "#111",
              padding: "10px 12px",
              borderRadius: 10,
              fontWeight: 900,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            ダッシュボード
          </Link>

          <Link
            href="/caregiver/notifications"
            style={{
              border: "1px solid #ddd",
              background: "white",
              color: "#111",
              padding: "10px 12px",
              borderRadius: 10,
              fontWeight: 900,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            通知一覧
          </Link>

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
              fontWeight: 900,
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

      {/* Create medication */}
      <section style={{ marginTop: 14, background: "white", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
        <div style={{ fontWeight: 900, marginBottom: 10 }}>薬を追加</div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr auto", gap: 8 }}>
          <input
            placeholder="薬名（例：アムロジピン）"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "1px solid #ddd", borderRadius: 10, padding: 10 }}
          />
          <input
            placeholder="メモ（例：朝1錠）"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={{ border: "1px solid #ddd", borderRadius: 10, padding: 10 }}
          />
          <input
            placeholder="残数（任意）"
            value={remaining}
            onChange={(e) => setRemaining(e.target.value)}
            style={{ border: "1px solid #ddd", borderRadius: 10, padding: 10 }}
          />
          <button
            onClick={createMed}
            disabled={loading || !name.trim()}
            style={{
              border: "1px solid #ddd",
              background: "#111",
              color: "white",
              padding: "10px 12px",
              borderRadius: 10,
              fontWeight: 900,
            }}
          >
            追加
          </button>
        </div>
      </section>

      {/* Schedule form (shared) */}
      <section style={{ marginTop: 14, background: "white", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
        <div style={{ fontWeight: 900, marginBottom: 8 }}>スケジュール入力（追加時に使う）</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <label style={{ fontSize: 13 }}>
            時刻{" "}
            <input
              type="time"
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(e.target.value)}
              style={{ border: "1px solid #ddd", borderRadius: 10, padding: 8, marginLeft: 6 }}
            />
          </label>

          <label style={{ fontSize: 13 }}>
            回数{" "}
            <input
              type="number"
              min={1}
              max={10}
              value={dosePerTime}
              onChange={(e) => setDosePerTime(Number(e.target.value))}
              style={{ width: 70, border: "1px solid #ddd", borderRadius: 10, padding: 8, marginLeft: 6 }}
            />
          </label>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 800 }}>曜日</span>
            {WEEK.map((w) => (
              <label key={w.bit} style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13 }}>
                <input type="checkbox" checked={weekChecks.includes(w.bit)} onChange={() => toggleWeek(w.bit)} />
                {w.label}
              </label>
            ))}
            <span style={{ fontSize: 12, color: "#777" }}>（{maskToText(weekMask())}）</span>
          </div>
        </div>
      </section>

      {/* Med list */}
      <section style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontWeight: 900 }}>登録済みの薬</div>
        </div>

        {medications.length === 0 ? (
          <div
            style={{
              marginTop: 10,
              padding: 12,
              background: "white",
              border: "1px solid #eee",
              borderRadius: 14,
              color: "#555",
            }}
          >
            薬がまだありません。上から追加してください。
          </div>
        ) : (
          <div style={{ marginTop: 10, display: "grid", gap: 12 }}>
            {medications.map((m) => (
              <div key={m.id} style={{ background: "white", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 900 }}>
                      {m.name} {!m.isActive && <span style={{ fontSize: 12, color: "#777" }}>（停止中）</span>}
                    </div>
                    <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>{m.instructions ?? "メモなし"}</div>
                  </div>

                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button
                      onClick={() => toggleActive(m.id, m.isActive)}
                      disabled={loading}
                      style={{
                        border: "1px solid #ddd",
                        background: "white",
                        padding: "8px 10px",
                        borderRadius: 10,
                        fontWeight: 900,
                      }}
                    >
                      {m.isActive ? "停止" : "再開"}
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: 10, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ fontSize: 13, fontWeight: 800 }}>残数</div>
                  <input
                    defaultValue={m.remainingCount ?? ""}
                    placeholder="-"
                    style={{ width: 110, border: "1px solid #ddd", borderRadius: 10, padding: 8 }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateRemaining(m.id, (e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                  <span style={{ fontSize: 12, color: "#777" }}>Enterで更新</span>

                  <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                    <button
                      onClick={() => createSched(m.id)}
                      disabled={loading || !m.isActive}
                      style={{
                        border: "1px solid #ddd",
                        background: "#111",
                        color: "white",
                        padding: "8px 10px",
                        borderRadius: 10,
                        fontWeight: 900,
                      }}
                    >
                      スケジュール追加
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, marginBottom: 6 }}>スケジュール</div>
                  {m.schedules.length === 0 ? (
                    <div style={{ fontSize: 13, color: "#555" }}>まだありません（上のボタンで追加）</div>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {m.schedules.map((s) => (
                        <li key={s.id} style={{ marginBottom: 6, fontSize: 13 }}>
                          <b>{s.timeOfDay}</b> / {maskToText(s.daysOfWeekMask)} / 1回 {s.dosesPerTime}
                          <button
                            onClick={() => deleteSched(s.id)}
                            disabled={loading}
                            style={{
                              marginLeft: 10,
                              border: "1px solid #ddd",
                              background: "white",
                              padding: "4px 8px",
                              borderRadius: 10,
                              fontWeight: 900,
                              fontSize: 12,
                            }}
                          >
                            削除
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
