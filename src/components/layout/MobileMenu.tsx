"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Meny
      </Button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Nordic IT Solutions</div>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                ✕
              </Button>
            </div>

            <nav className="mt-6 space-y-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full">Boka möte</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
