import { NextResponse } from "next/server";
import { db, makeId, nowISO } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { slugify } from "@/lib/seo";
import type { Post } from "@/models/Post";

export async function GET() {
  const posts = [...db.posts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
  return NextResponse.json({ ok: true, posts });
}

export async function POST(req: Request) {
  const admin = requireAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as Partial<Post>;

  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ ok: false, error: "Title required" }, { status: 400 });
  }

  const post: Post = {
    id: makeId(),
    title,
    slug: String(body.slug ?? slugify(title)),
    excerpt: String(body.excerpt ?? ""),
    content: String(body.content ?? ""),
    category: String(body.category ?? "Blogg"),
    tags: Array.isArray(body.tags) ? (body.tags as Post["tags"]) : [],
    publishedAt: body.publishedAt ? String(body.publishedAt) : nowISO(),
    updatedAt: nowISO(),
    status: body.status === "published" ? "published" : "draft",
  };

  db.posts.push(post);
  return NextResponse.json({ ok: true, post }, { status: 201 });
}
