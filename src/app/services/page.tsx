import Link from "next/link";

export default function ServicesPage() {
  const items = [
    { t: "SEO", d: "Teknisk SEO, content och länkar för långsiktig tillväxt.", href: "/seo" },
    { t: "Google Ads", d: "Sökannonser som ger leads snabbt och effektivt.", href: "/google-ads" },
    { t: "Meta Ads", d: "Annonser på Facebook/Instagram med kreativa som konverterar.", href: "/meta-ads" },
    { t: "Design", d: "Logo, brand och ad creatives som ser proffsigt ut.", href: "/design" },
    { t: "Webb", d: "Landing pages, företagssidor och e-handel som konverterar.", href: "/web" },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Tjänster</h1>
          <p className="lead">
            En byrå för marknadsföring + design + webb. Du har en svensk kontakt och tydlig leverans.
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
                  <span className="btn">Läs mer</span>
                  <span className="btn primary">Boka möte</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="card mt">
            <div className="cardTitle">Osäker på vad du behöver?</div>
            <p className="muted mt2">
              Boka en gratis 15 min call så föreslår vi rätt upplägg.
            </p>
            <div className="row gap mt">
              <Link className="btn primary" href="/contact">
                Boka gratis 15 min
              </Link>
              <Link className="btn" href="/pricing">
                Se priser
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
