"use client";

import { useEffect, useMemo, useState } from "react";

function getOrCreateCaregiverToken(): string {
  const key = "caregiverDeviceToken";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const t = crypto.randomUUID();
  localStorage.setItem(key, t);
  return t;
}

type CreatePairingResponse = {
  code: string;
  expiresAt: string; // ISO
};

export default function CaregiverPairingPage() {
  const [token, setToken] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => setToken(getOrCreateCaregiverToken()), []);

  const headers = useMemo(() => {
    if (!token) return null;
    return {
      "Content-Type": "application/json",
      Authorization: `Device ${token}`,
    };
  }, [token]);

  async function createCode() {
    if (!headers) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/pairing/create", {
        method: "POST",
        headers,
        body: JSON.stringify({ label: "caregiver-web" }),
      });
      const json = (await res.json()) as any;
      if (!res.ok) throw new Error(json?.error ?? "Failed");
      const data = json as CreatePairingResponse;
      setCode(data.code);
      setExpiresAt(data.expiresAt);
    } catch (e: any) {
      setErr(e?.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboardが使えない環境のフォールバック
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  }

  const expiresText = expiresAt
    ? new Date(expiresAt).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
    : null;

  return (
    <main style={{ padding: 18, maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>ペアリング</h1>
      <p style={{ marginTop: 6, color: "#555" }}>
        本人アプリに入力するコードを発行します（期限あり）
      </p>

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
          background: "white",
          border: "1px solid #eee",
          borderRadius: 14,
          padding: 14,
        }}
      >
        <button
          onClick={createCode}
          disabled={loading || !headers}
          style={{
            border: "1px solid #ddd",
            background: "#111",
            color: "white",
            padding: "10px 12px",
            borderRadius: 10,
            fontWeight: 900,
            width: "100%",
          }}
        >
          {loading ? "発行中…" : "ペアリングコードを発行"}
        </button>

        {code && (
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>発行されたコード</div>

            <div
              style={{
                fontSize: 28,
                letterSpacing: 2,
                fontWeight: 900,
                padding: 14,
                borderRadius: 12,
                border: "1px solid #eee",
                background: "#fafafa",
                textAlign: "center",
              }}
            >
              {code}
            </div>

            <div style={{ marginTop: 8, color: "#666", fontSize: 13 }}>
              期限: {expiresText ?? "-"}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button
                onClick={() => copyToClipboard(code)}
                style={{
                  flex: 1,
                  border: "1px solid #ddd",
                  background: "white",
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontWeight: 900,
                }}
              >
                コピー
              </button>

              <button
                onClick={() => {
                  setCode(null);
                  setExpiresAt(null);
                }}
                style={{
                  flex: 1,
                  border: "1px solid #ddd",
                  background: "white",
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontWeight: 900,
                }}
              >
                クリア
              </button>
            </div>
          </div>
        )}
      </section>

      <section
        style={{
          marginTop: 14,
          background: "white",
          border: "1px solid #eee",
          borderRadius: 14,
          padding: 14,
          color: "#555",
          fontSize: 13,
        }}
      >
        <div style={{ fontWeight: 900, marginBottom: 8 }}>使い方</div>
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          <li>「ペアリングコードを発行」</li>
          <li>本人にコードを伝える（口頭/LINEなど）</li>
          <li>本人アプリで入力して「ペアリング」</li>
        </ol>
      </section>
    </main>
  );
}
