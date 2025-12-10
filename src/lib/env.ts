export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  // Admin auth (enkelt demo-upplägg)
  ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? "",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ?? "",
  AUTH_SECRET: process.env.AUTH_SECRET ?? "dev-secret-change-me",

  // Mail (valfritt – funkar även utan)
  SMTP_HOST: process.env.SMTP_HOST ?? "",
  SMTP_PORT: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  SMTP_USER: process.env.SMTP_USER ?? "",
  SMTP_PASS: process.env.SMTP_PASS ?? "",
  MAIL_FROM: process.env.MAIL_FROM ?? "no-reply@nits.local",
  MAIL_TO: process.env.MAIL_TO ?? "",

  // Site
  SITE_URL: process.env.SITE_URL ?? "http://localhost:3000",
};
