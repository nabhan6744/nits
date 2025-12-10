import * as React from "react";

export function PostContent({ html }: { html: string }) {
  return <article className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
