import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/models/Post";

export function PostCard({ post }: { post: Post }) {
  const date = (post.publishedAt ?? "").slice(0, 10);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="text-xs text-black/60">{date}</div>
      <div className="mt-2 text-lg font-semibold">{post.title}</div>
      <p className="mt-2 text-sm text-black/70">{post.excerpt}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge>{post.category}</Badge>
        {post.tags?.slice(0, 3).map((t) => (
          <Badge key={t.slug}>{t.label}</Badge>
        ))}
      </div>
    </Link>
  );
}
