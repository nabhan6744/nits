export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { env } from "@/src/lib/env";

export async function sendMail(params: { subject: string; text: string; html?: string }) {
  const missingSmtp =
    !env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS || !env.CONTACT_TO;

  // Demo-läge om SMTP saknas
  if (missingSmtp) {
    console.log("[EMAIL:DEMO]", {
      to: env.CONTACT_TO || "(missing CONTACT_TO)",
      from: env.SMTP_USER || "(missing SMTP_USER)",
      ...params,
    });
    return { ok: true, demo: true };
  }

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: env.SMTP_USER,
    to: env.CONTACT_TO,
    subject: params.subject,
    text: params.text,
    html: params.html,
  });

  return { ok: true };
}
