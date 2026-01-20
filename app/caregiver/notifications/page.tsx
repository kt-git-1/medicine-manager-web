"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type NotificationEvent = {
  id: string;
  type: string; // "missed" | "low_stock" | "taken" など（固定しない）
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

function typeLabel(t: string) {
  if (t === "missed" || t === "missed_dose") return "未服薬";
  if (t === "low_stock") return "残薬";
  if (t === "taken") return "服薬";
  return t;
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

export default function CaregiverNotificationsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [items, setItems] = useState<NotificationEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [days, setDays] = useState(30);
  const [limit, setLimit] = useState(100);

  const [typeFilter, setTypeFilter] = useState<"all" | "missed" | "low_stock" | "taken">("all");
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
      const res = await fetch(`/api/family/notifications?limit=${limit}&days=${days}`, { headers });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Failed to load notifications");
      setItems(json.items ?? []);
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

  const filtered = items
    .filter((n) => {
      if (typeFilter === "all") return true;
      // missed_dose も missed 扱い
      if (typeFilter === "missed") return n.type === "missed" || n.type === "missed_dose";
      return n.type === typeFilter;
    })
    .filter((n) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      const name = (n.payloadJson?.medicationName ?? "") as string;
      return name.toLowerCase().includes(q);
    });

  return (
    <main style={{ padding: 18, maxWidth: 980, margin: "0 auto", background: "#fafafa", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0, color: "#111" }}>通知一覧</h1>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#555" }}>
            未服薬・残薬などのイベントをまとめて確認できます
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
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
            href="/caregiver/medications"
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
            薬を管理
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

      <section
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <Card title="フィルタ">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["all", "missed", "low_stock", "taken"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTypeFilter(k)}
                style={{
                  border: "1px solid #ddd",
                  background: typeFilter === k ? "#111" : "white",
                  color: typeFilter === k ? "white" : "#111",
                  padding: "7px 10px",
                  borderRadius: 999,
                  fontWeight: 900,
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                {k === "all" ? "全て" : k === "missed" ? "未服薬" : k === "low_stock" ? "残薬" : "服薬"}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input
              placeholder="薬名で検索"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: 10,
                padding: "8px 10px",
                width: 240,
                background: "white",
              }}
            />
            <span style={{ fontSize: 12, color: "#777" }}>表示: {filtered.length} 件</span>
          </div>
        </Card>

        <Card title="期間・件数">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <label style={{ fontSize: 12, color: "#555" }}>
              days:
              <input
                type="number"
                min={1}
                max={365}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                style={{
                  marginLeft: 6,
                  width: 90,
                  border: "1px solid #ddd",
                  borderRadius: 10,
                  padding: "8px 10px",
                  background: "white",
                }}
              />
            </label>

            <label style={{ fontSize: 12, color: "#555" }}>
              limit:
              <input
                type="number"
                min={1}
                max={500}
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                style={{
                  marginLeft: 6,
                  width: 90,
                  border: "1px solid #ddd",
                  borderRadius: 10,
                  padding: "8px 10px",
                  background: "white",
                }}
              />
            </label>

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
              {loading ? "更新中…" : "反映"}
            </button>
          </div>

          <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
            ※ “反映”を押すとサーバーから再取得します
          </div>
        </Card>
      </section>

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
          <div
            style={{
              padding: 12,
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: 900 }}>イベント</div>
            <div style={{ fontSize: 12, color: "#777" }}>
              期間: {days}日 / 最大: {limit}件
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ padding: 12, color: "#555" }}>該当する通知がありません</div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    種別
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    薬
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    詳細
                  </th>
                  <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: 12, fontSize: 12, color: "#666" }}>
                    時刻
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((n) => {
                  const name = n.payloadJson?.medicationName ?? "-";
                  const detail =
                    n.type === "low_stock"
                      ? `残り ${n.payloadJson?.remainingCount ?? "-"}（約 ${n.payloadJson?.estimatedDaysLeft ?? "-"} 日）`
                      : n.type === "missed" || n.type === "missed_dose"
                      ? `予定 ${n.payloadJson?.plannedAt ? fmtJstMdHm(n.payloadJson.plannedAt) : "-"}`
                      : "";

                  return (
                    <tr key={n.id}>
                      <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 110 }}>
                        <b style={{ fontSize: 13 }}>{typeLabel(n.type)}</b>
                      </td>
                      <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3" }}>
                        <div style={{ fontWeight: 900 }}>{name}</div>
                        <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>{n.payloadJson?.medicationId ?? ""}</div>
                      </td>
                      <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 320 }}>
                        <span style={{ fontSize: 12, color: "#555" }}>{detail}</span>
                      </td>
                      <td style={{ padding: 12, borderBottom: "1px solid #f3f3f3", width: 140 }}>
                        <span style={{ fontSize: 12, color: "#555" }}>{fmtJstMdHm(n.occurredAt)}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div style={{ marginTop: 10, fontSize: 12, color: "#777" }}>
          ※ payloadJson はイベント種別によって項目が異なります
        </div>
      </section>
    </main>
  );
}
