import * as React from "react";
import { AdminNav } from "./AdminNav";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">NITS Admin</div>
          <AdminNav />
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
