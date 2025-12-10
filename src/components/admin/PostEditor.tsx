"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { Post } from "@/models/Post";

type Props = {
  initial?: Partial<Post>;
  onSave: (post: Partial<Post>) => void | Promise<void>;
  saving?: boolean;
};

export function PostEditor({ initial, onSave, saving }: Props) {
  const [title, setTitle] = React.useState(initial?.title ?? "");
  const [slug, setSlug] = React.useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = React.useState(initial?.excerpt ?? "");
  const [category, setCategory] = React.useState(initial?.category ?? "Google Ads");
  const [content, setContent] = React.useState(initial?.content ?? "");
  const [status, setStatus] = React.useState<Post["status"]>(initial?.status ?? "draft");

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <div className="mb-1 text-xs font-medium text-black/70">Titel</div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Google Ads: Så får du billigare leads"
          />
        </div>
        <div>
          <div className="mb-1 text-xs font-medium text-black/70">Slug</div>
          <Input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="google-ads-billigare-leads"
          />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <div className="mb-1 text-xs font-medium text-black/70">Kategori</div>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="SEO / Google Ads / Meta Ads"
          />
        </div>
        <div>
          <div className="mb-1 text-xs font-medium text-black/70">Status</div>
          <select
            className="h-10 w-full rounded-xl border border-black/15 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
            value={status}
            onChange={(e) => setStatus(e.target.value as Post["status"])}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div>
        <div className="mb-1 text-xs font-medium text-black/70">Excerpt</div>
        <Textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Kort sammanfattning..."
        />
      </div>

      <div>
        <div className="mb-1 text-xs font-medium text-black/70">Content (Markdown)</div>
        <Textarea
          className="min-h-[240px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="# Rubrik..."
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onSave({ title, slug, excerpt, category, content, status })} disabled={saving}>
          {saving ? "Sparar..." : "Spara"}
        </Button>
      </div>
    </div>
  );
}
