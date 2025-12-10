import Link from "next/link";

const posts = [
  {
    title: "SEO för småföretag: 7 snabba vinster",
    slug: "seo-for-smaforetag-7-snabba-vinster",
    excerpt: "Praktiska SEO-grejer du kan göra direkt för att få mer trafik och leads.",
    date: "2025-12-09",
    tags: ["SEO", "Content"],
    content: [
      "Här är 7 snabba vinster du kan göra redan idag:",
      "1) Fixa titlar och metabeskrivningar på dina viktigaste sidor.",
      "2) Gör en sida per tjänst (SEO, Google Ads, Meta Ads osv).",
      "3) Lägg till FAQ på tjänstesidor (bra för både användare och sök).",
      "4) Säkra att sidan laddar snabbt (bilder + caching).",
      "5) Skriv 3–5 blogginlägg som matchar kundens frågor.",
      "6) Se över internlänkar: länka från blogg → tjänst → kontakt.",
      "7) Sätt upp Google Search Console så du ser vad som rankar.",
    ],
  },
  {
    title: "Google Ads: Så får du billigare leads",
    slug: "google-ads-sa-far-du-billigare-leads",
    excerpt: "Enkelt upplägg för sökannonser som sänker CPA och ökar kvaliteten på leads.",
    date: "2025-12-09",
    tags: ["Google Ads", "PPC"],
    content: [
      "Målet är inte fler klick — det är bättre leads.",
      "Börja med: tydliga kampanjer per tjänst + separata annonsgrupper per sökintention.",
      "Använd negativa sökord varje vecka.",
      "Ha en landningssida per erbjudande (inte startsidan).",
      "Mät konverteringar korrekt (form submit / call / purchase).",
    ],
  },
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="card">
              <div className="cardTitle">404</div>
              <p className="muted mt2">Inlägget finns inte.</p>
              <div className="row gap mt">
                <Link className="btn primary" href="/blog">
                  Tillbaka till blogg
                </Link>
                <Link className="btn" href="/">
                  Startsida
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <Link className="link" href="/blog">
            ← Tillbaka till blogg
          </Link>

          <div className="card mt">
            <div className="muted small">{post.date}</div>
            <h1 className="h1 mt2">{post.title}</h1>
            <p className="muted mt2">{post.excerpt}</p>

            <div className="row gap mt">
              {post.tags.map((t) => (
                <span className="badge" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="mt">
              {post.content.map((p, idx) => (
                <p className="muted mt2" key={idx}>
                  {p}
                </p>
              ))}
            </div>

            <div className="card mt">
              <div className="cardTitle">Vill du ha hjälp?</div>
              <p className="muted mt2">
                Vi kan göra SEO-plan + content + landing pages som driver leads.
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
        </div>
      </section>
    </main>
  );
}
