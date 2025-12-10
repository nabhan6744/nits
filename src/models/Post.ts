export type PostTag = { label: string; slug: string };

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown
  category: string; // ex "SEO" / "Google Ads"
  tags: PostTag[];
  publishedAt: string; // ISO
  updatedAt?: string; // ISO
  status: "draft" | "published";
};
