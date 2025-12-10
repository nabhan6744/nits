import { NextResponse } from "next/server";
import { checkAdminCredentials, setAdminSession } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  const rl = rateLimit(`login:${ip}`, { limit: 10, windowMs: 60_000 });

  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts" },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => ({} as any));
  const email = String(body.email ?? "");
  const password = String(body.password ?? "");

  if (!checkAdminCredentials(email, password)) {
    return NextResponse.json(
      { ok: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  setAdminSession(email);
  return NextResponse.json({ ok: true });
}
