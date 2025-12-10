import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="inline-flex">
      <Button>{children}</Button>
    </Link>
  );
}
