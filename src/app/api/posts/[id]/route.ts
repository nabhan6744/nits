import { NextResponse } from "next/server";
import { db, nowISO } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import type { Post } from "@/models/Post";

function findPost(idOrSlug: string) {
  return db.posts.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const post = findPost(params.id);
  if (!post) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, post });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const admin = requireAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const post = findPost(params.id);
  if (!post) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const body = (await req.json().catch(() => ({}))) as Partial<Post>;
  Object.assign(post, body, { updatedAt: nowISO() });

  return NextResponse.json({ ok: true, post });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const admin = requireAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const idx = db.posts.findIndex((p) => p.id === params.id || p.slug === params.id);
  if (idx === -1) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const [removed] = db.posts.splice(idx, 1);
  return NextResponse.json({ ok: true, removed });
}
