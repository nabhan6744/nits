import Link from "next/link";
import posts from "@/content/data/posts.json";

export default function BlogPage() {
  const sorted = [...posts].sort((a: any, b: any) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pill">Blogg</div>
          <h1 className="h1">Guides som gör jobbet enklare</h1>
          <p className="lead">
            Praktiska tips om SEO, annonsering, webb och konvertering — utan fluff.
          </p>

          <div className="grid2 mt">
            {sorted.map((p: any) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover">
                <div className="between">
                  <div className="cardTitle">{p.title}</div>
                  <span className="badge">{p.date}</span>
                </div>

                <p className="muted mt2">{p.excerpt}</p>

                <div className="chips mt2">
                  {(p.tags ?? []).slice(0, 4).map((t: string) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="row gap mt">
                  <span className="link">Läs mer →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="card mt">
            <div className="between">
              <div>
                <div className="cardTitle">Vill du ha hjälp istället?</div>
                <p className="muted mt2">
                  Vi kan ta fram plan + copy + landing pages som driver leads.
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
