type Bucket = { count: number; resetAt: number };

declare global {
  // eslint-disable-next-line no-var
  var __NITS_RATE__: Map<string, Bucket> | undefined;
}

const store = globalThis.__NITS_RATE__ ?? new Map<string, Bucket>();
globalThis.__NITS_RATE__ = store;

export function rateLimit(key: string, opts?: { limit?: number; windowMs?: number }) {
  const limit = opts?.limit ?? 30;
  const windowMs = opts?.windowMs ?? 60_000;

  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { ok: false, remaining: 0, retryAfterMs: current.resetAt - now };
  }

  current.count += 1;
  store.set(key, current);
  return { ok: true, remaining: limit - current.count };
}
