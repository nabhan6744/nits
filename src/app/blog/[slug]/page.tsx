import Link from "next/link";
import posts from "@/content/data/posts.json";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (posts as any[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main>
      <section className="section">
        <div className="container">
          <Link className="link" href="/blog">
            ← Tillbaka till blogg
          </Link>

          <div className="mt">
            <div className="pill">{post.date}</div>
            <h1 className="h1">{post.title}</h1>
            <p className="lead">{post.excerpt}</p>

            <div className="chips mt2">
              {(post.tags ?? []).map((t: string) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="card mt">
            <div className="cardTitle">Artikel</div>
            <div className="muted mt2">
              {(post.content ?? []).map((p: string, idx: number) => (
                <p key={idx} style={{ margin: "0 0 12px 0", lineHeight: 1.7 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="card mt">
            <div className="between">
              <div>
                <div className="cardTitle">Vill du ha hjälp?</div>
                <p className="muted mt2">
                  Vi kan göra SEO-plan + annonser + landing pages som driver leads.
                </p>
              </div>
              <Link className="btn primary" href="/contact">
                Boka gratis 15 min
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
