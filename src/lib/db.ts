import type { Post } from "@/src/models/Post";

export type DB = {
  posts: Post[];
};

// Persist in dev/hot-reload without reinitializing
declare global {
  // eslint-disable-next-line no-var
  var __NITS_DB__: DB | undefined;
}

const defaultDB: DB = { posts: [] };

export const db: DB = globalThis.__NITS_DB__ ?? defaultDB;
globalThis.__NITS_DB__ = db;

export function nowISO(): string {
  return new Date().toISOString();
}

export function makeId(): string {
  // Better uniqueness than Math.random alone
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
