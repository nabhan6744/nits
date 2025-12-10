import crypto from "crypto";
import { cookies } from "next/headers";
import { env } from "@/src/lib/env";

const COOKIE_NAME = "nits_admin";

function sign(value: string) {
  return crypto.createHmac("sha256", env.AUTH_SECRET).update(value).digest("hex");
}

export function createSessionCookie(email: string) {
  const payload = `${email}.${Date.now()}`;
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

export function verifySessionCookie(value: string) {
  const parts = value.split(".");
  if (parts.length < 3) return null;

  const sig = parts.pop()!;
  const payload = parts.join(".");
  if (sign(payload) !== sig) return null;

  const email = parts[0];
  if (!email) return null;

  return { email };
}

export function setAdminSession(email: string) {
  const cookie = createSessionCookie(email);

  cookies().set(COOKIE_NAME, cookie, {
    httpOnly: true,
    sameSite: "lax",
    secure: env.NODE_ENV === "production",
    path: "/",
  });
}

export function clearAdminSession() {
  cookies().set(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
}

export function getAdminSession() {
  const value = cookies().get(COOKIE_NAME)?.value;
  if (!value) return null;
  return verifySessionCookie(value);
}

export function requireAdmin() {
  const session = getAdminSession();
  if (!session) return null;
  if (!env.ADMIN_EMAIL) return null;
  if (session.email !== env.ADMIN_EMAIL) return null;
  return session;
}

export function checkAdminCredentials(email: string, password: string) {
  return Boolean(
    env.ADMIN_EMAIL &&
      env.ADMIN_PASSWORD &&
      email === env.ADMIN_EMAIL &&
      password === env.ADMIN_PASSWORD
  );
}
