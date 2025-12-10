"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dropdown } from "@/components/ui/Dropdown";

export function AdminNav() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <Link href="/admin/posts" className="text-sm font-medium hover:underline">
        Inlägg
      </Link>

      <Dropdown
        label="Konto"
        items={[
          {
            label: "Logga ut",
            onClick: async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              router.push("/admin/login");
              router.refresh();
            },
          },
        ]}
      />
    </div>
  );
}
