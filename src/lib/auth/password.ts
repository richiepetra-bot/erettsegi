const ITERATIONS = 100_000;
const KEY_LENGTH_BITS = 256;

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

async function deriveHash(password: string, salt: Uint8Array, iterations: number): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: salt.slice().buffer, iterations, hash: "SHA-256" },
    key,
    KEY_LENGTH_BITS
  );
  return bytesToHex(new Uint8Array(bits));
}

/** Returns a self-contained "pbkdf2$iterations$saltHex$hashHex" string for storage. */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hashHex = await deriveHash(password, salt, ITERATIONS);
  return `pbkdf2$${ITERATIONS}$${bytesToHex(salt)}$${hashHex}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;
  const [, iterationsStr, saltHex, expectedHex] = parts;
  const iterations = Number(iterationsStr);
  if (!Number.isFinite(iterations)) return false;

  const computedHex = await deriveHash(password, hexToBytes(saltHex), iterations);
  if (computedHex.length !== expectedHex.length) return false;

  let mismatch = 0;
  for (let i = 0; i < computedHex.length; i++) {
    mismatch |= computedHex.charCodeAt(i) ^ expectedHex.charCodeAt(i);
  }
  return mismatch === 0;
}
