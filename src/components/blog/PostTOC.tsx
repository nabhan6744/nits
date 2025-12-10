"use client";
import * as React from "react";

export function PostTOC({ headings }: { headings: { id: string; text: string }[] }) {
  if (!headings?.length) return null;

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-semibold">Innehåll</div>
      <ul className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a className="text-black/70 hover:text-black" href={`#${h.id}`}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
