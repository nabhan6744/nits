"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Post } from "@/models/Post";

export default function AdminPostsPage() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      setErr(null);

      // auth check
      const authed = await fetch("/api/auth/me").then((r) => r.ok).catch(() => false);
      if (!authed) {
        window.location.href = "/admin/login";
        return;
      }

      // fetch posts
      const res = await fetch("/api/posts").catch(() => null);
      if (!res || !res.ok) {
        setErr("Kunde inte hämta inlägg.");
        setPosts([]);
        setLoading(false);
        return;
      }

      const json = await res.json().catch(() => ({}));
      setPosts((json?.posts ?? []) as Post[]);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">Inlägg</div>
          <div className="text-sm text-black/70">Skapa och uppdatera blogginlägg.</div>
        </div>

        <Link href="/admin/posts/new">
          <Button>Ny post</Button>
        </Link>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="text-sm text-black/70">Laddar...</div>
        ) : err ? (
          <div className="text-sm text-red-600">{err}</div>
        ) : posts.length === 0 ? (
          <div className="text-sm text-black/70">Inga inlägg ännu.</div>
        ) : (
          <div className="divide-y divide-black/10">
            {posts.map((p) => {
              const date =
                typeof (p as any).publishedAt === "string" ? (p as any).publishedAt.slice(0, 10) : "—";
              const status = (p as any).status ?? "draft";
              const slug = (p as any).slug ?? "";
              const title = (p as any).title ?? "(utan titel)";

              return (
                <div key={(p as any).id} className="flex items-center justify-between py-3 gap-4">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{title}</div>
                    <div className="text-xs text-black/60 truncate">
                      {status} • {date} • /blog/{slug}
                    </div>
                  </div>

                  <Link href={`/admin/posts/${(p as any).id}`} className="text-sm font-medium underline">
                    Edit →
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
