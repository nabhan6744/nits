"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { PostEditor } from "@/components/admin/PostEditor";
import { useToast } from "@/components/ui/Toast";

export default function NewPostPage() {
  const router = useRouter();
  const toast = useToast();
  const [saving, setSaving] = React.useState(false);

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <div className="text-lg font-semibold">Ny post</div>

      <div className="mt-4">
        <PostEditor
          saving={saving}
          onSave={async (payload) => {
            setSaving(true);

            const res = await fetch("/api/posts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }).catch(() => null);

            setSaving(false);

            if (!res || !res.ok) {
              toast.push("Kunde inte spara");
              return;
            }

            const json = await res.json().catch(() => ({}));
            const id = json?.post?.id as string | undefined;

            toast.push("Sparad!");
            router.push(id ? `/admin/posts/${id}` : "/admin/posts");
            router.refresh();
          }}
        />
      </div>
    </div>
  );
}
