"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { PostEditor } from "@/components/admin/PostEditor";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import type { Post } from "@/models/Post";

export default function EditPostPage() {
  const params = useParams();
  const idParam = (params as any)?.id as string | string[] | undefined;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const router = useRouter();
  const toast = useToast();

  const [post, setPost] = React.useState<Post | null>(null);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;

    (async () => {
      const authed = await fetch("/api/auth/me").then((r) => r.ok).catch(() => false);
      if (!authed) {
        window.location.href = "/admin/login";
        return;
      }

      const res = await fetch(`/api/posts/${id}`).catch(() => null);
      if (!res || !res.ok) {
        toast.push("Kunde inte hämta inlägget");
        return;
      }

      const json = await res.json().catch(() => ({}));
      setPost(json.post ?? null);
    })();
  }, [id, toast]);

  if (!id) return <div className="text-sm text-black/70">Saknar id…</div>;
  if (!post) return <div className="text-sm text-black/70">Laddar...</div>;

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Edit</div>
          <div className="text-sm text-black/70">/blog/{post.slug}</div>
        </div>

        <Button
          variant="secondary"
          onClick={async () => {
            const ok = confirm("Ta bort inlägget?");
            if (!ok) return;

            const res = await fetch(`/api/posts/${id}`, { method: "DELETE" }).catch(() => null);

            if (res && res.ok) {
              toast.push("Borttagen");
              router.push("/admin/posts");
              router.refresh();
            } else {
              toast.push("Kunde inte ta bort");
            }
          }}
        >
          Ta bort
        </Button>
      </div>

      <div className="mt-4">
        <PostEditor
          initial={post}
          saving={saving}
          onSave={async (payload) => {
            setSaving(true);

            const res = await fetch(`/api/posts/${id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }).catch(() => null);

            setSaving(false);

            if (!res || !res.ok) {
              toast.push("Kunde inte spara");
              return;
            }

            const json = await res.json().catch(() => ({}));
            setPost(json.post ?? post);
            toast.push("Sparad!");
            router.refresh();
          }}
        />
      </div>
    </div>
  );
}
