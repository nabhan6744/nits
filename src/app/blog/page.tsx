import Link from "next/link";

const posts = [
  {
    title: "SEO för småföretag: 7 snabba vinster",
    slug: "seo-for-smaforetag-7-snabba-vinster",
    excerpt: "Praktiska SEO-grejer du kan göra direkt för att få mer trafik och leads.",
    date: "2025-12-09",
    tags: ["SEO", "Content"],
  },
  {
    title: "Google Ads: Så får du billigare leads",
    slug: "google-ads-sa-far-du-billigare-leads",
    excerpt: "Enkelt upplägg för sökannonser som sänker CPA och ökar kvaliteten på leads.",
    date: "2025-12-09",
    tags: ["Google Ads", "PPC"],
  },
];

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Blogg</h1>
          <p className="lead">Guides och tips om SEO, annonsering, webb och konvertering.</p>

          <div className="grid2 mt">
            {sorted.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover">
                <div className="muted small">{p.date}</div>
                <div className="cardTitle mt2">{p.title}</div>
                <p className="muted mt2">{p.excerpt}</p>

                <div className="row gap mt">
                  {p.tags.slice(0, 3).map((t) => (
                    <span className="badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="link mt2">Läs →</div>
              </Link>
            ))}
          </div>

          <div className="card mt">
            <div className="cardTitle">Vill du ha hjälp med SEO eller Ads?</div>
            <p className="muted mt2">
              Boka en gratis 15 min call så föreslår vi rätt upplägg.
            </p>
            <div className="row gap mt">
              <Link className="btn primary" href="/contact">
                Boka gratis 15 min
              </Link>
              <Link className="btn" href="/services">
                Se tjänster
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
