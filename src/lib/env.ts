export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  SITE_URL: process.env.SITE_URL ?? "http://localhost:3000",

  AUTH_SECRET: process.env.AUTH_SECRET ?? "dev-secret-change-me",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? "",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ?? "",

  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_PORT: Number(process.env.SMTP_PORT ?? "587"),
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PASS: process.env.SMTP_PASS ?? "",
  CONTACT_TO: process.env.CONTACT_TO ?? "",
};
