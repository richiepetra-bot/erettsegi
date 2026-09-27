const COOKIE_NAME = "erettsegi_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 nap

export type SessionRole = "student" | "parent";

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET nincs beallitva a kornyezeti valtozok kozott.");
  }
  return secret;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(
  role: SessionRole
): Promise<{ value: string; maxAge: number }> {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${expiresAt}.${role}`;
  const signature = await hmacHex(getSecret(), payload);
  return { value: `${payload}.${signature}`, maxAge: SESSION_TTL_SECONDS };
}

export type SessionInfo = { role: SessionRole };

/** Verifies the token's signature and expiry, and returns its role. Returns null if invalid/expired/malformed. */
export async function getSessionInfo(token: string | undefined): Promise<SessionInfo | null> {
  if (!token) return null;
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return null;
  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  if (!payload || !signature) return null;

  const expected = await hmacHex(getSecret(), payload);
  if (expected.length !== signature.length) return null;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  if (mismatch !== 0) return null;

  const separatorIndex = payload.indexOf(".");
  if (separatorIndex === -1) return null;
  const expiresAt = Number(payload.slice(0, separatorIndex));
  const role = payload.slice(separatorIndex + 1);
  if (!Number.isFinite(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) return null;
  if (role !== "student" && role !== "parent") return null;

  return { role };
}

export { COOKIE_NAME };
