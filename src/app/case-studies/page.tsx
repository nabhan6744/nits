import Link from "next/link";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Lead-gen med Google Ads",
      desc: "Ny kampanjstruktur + bättre sökord + landing page → fler leads till lägre kostnad.",
      bullets: ["Struktur & sökintention", "Konverteringsspårning", "CRO på landing page"],
      tag: "Ads",
    },
    {
      title: "SEO + Content plan",
      desc: "Tjänstesidor + bloggstrategi → mer organisk trafik och fler förfrågningar.",
      bullets: ["Teknisk SEO", "Topical authority", "Internlänkning"],
      tag: "SEO",
    },
    {
      title: "Landing page som konverterar",
      desc: "Ny landningssida med tydlig hook + CTA → bättre konvertering på trafiken.",
      bullets: ["Copy & struktur", "Snabb laddtid", "Tydliga CTA-block"],
      tag: "Webb",
    },
    {
      title: "Meta Ads + creatives",
      desc: "Nya creatives + hooks + retargeting → bättre kvalitet på leads.",
      bullets: ["Creatives & hooks", "Retargeting", "Testplan veckovis"],
      tag: "Meta",
    },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pill">Case</div>
          <h1 className="h1">Exempel på upplägg & resultat</h1>
          <p className="lead">
            Här är några typiska case-upplägg. Vi fyller på med fler riktiga case löpande.
          </p>

          <div className="grid2 mt">
            {cases.map((c) => (
              <div key={c.title} className="card">
                <div className="between">
                  <div className="cardTitle">{c.title}</div>
                  <span className="badge">{c.tag}</span>
                </div>

                <p className="muted mt2">{c.desc}</p>

                <ul className="list mt2">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="row gap mt">
                  <Link className="btn primary" href="/contact">
                    Vill du ha samma upplägg?
                  </Link>
                  <Link className="btn" href="/services">
                    Se tjänster
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt">
            <div className="between">
              <div>
                <div className="cardTitle">Vill du att vi tar fram ett förslag?</div>
                <p className="muted mt2">
                  Boka 15 minuter så gör vi en snabb mini-audit och föreslår bästa nästa steg.
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
