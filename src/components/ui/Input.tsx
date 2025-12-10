import * as React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-10 w-full rounded-xl border border-black/15 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-black/20 ${props.className ?? ""}`}
    />
  );
}
