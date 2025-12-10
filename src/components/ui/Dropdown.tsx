"use client";
import * as React from "react";

export function Dropdown({
  label,
  items,
}: {
  label: React.ReactNode;
  items: { label: string; onClick: () => void }[];
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="rounded-xl border border-black/15 bg-white px-3 py-2 text-sm hover:bg-black/5"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg">
          {items.map((it) => (
            <button
              key={it.label}
              className="block w-full px-3 py-2 text-left text-sm hover:bg-black/5"
              onClick={() => {
                setOpen(false);
                it.onClick();
              }}
              type="button"
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
