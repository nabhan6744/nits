import Link from "next/link";

export default function ServicesPage() {
  const items = [
    { t: "SEO", d: "Teknisk SEO, content och länkar för långsiktig tillväxt.", href: "/seo" },
    { t: "Google Ads", d: "Sökannonser som ger leads snabbt och effektivt.", href: "/google-ads" },
    { t: "Meta Ads", d: "Annonser på Facebook/Instagram med kreativa som konverterar.", href: "/meta-ads" },
    { t: "Design", d: "Logos, brand och social media creatives.", href: "/design" },
    { t: "Webb", d: "Landing pages, portfolio och e-commerce.", href: "/web" },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pill">Tjänster</div>
          <h1 className="h1">Allt du behöver för att växa online</h1>
          <p className="lead">
            Välj en tjänst eller kombinera flera. Du får svensk projektledning och ett effektivt team som levererar.
          </p>

          <div className="grid3 mt">
            {items.map((s) => (
              <Link key={s.t} href={s.href} className="card hover">
                <div className="between">
                  <div className="cardTitle">{s.t}</div>
                  <span aria-hidden>→</span>
                </div>
                <p className="muted mt2">{s.d}</p>
                <div className="row gap mt">
                  <span className="badge">Läs mer</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="card mt">
            <div className="between">
              <div>
                <div className="cardTitle">Vill du ha ett förslag?</div>
                <p className="muted mt2">Boka en gratis 15 min så tar vi fram ett enkelt upplägg.</p>
              </div>
              <Link className="btn primary" href="/contact">Boka gratis 15 min</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
