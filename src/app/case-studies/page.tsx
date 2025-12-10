import Link from "next/link";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Lead-gen med Google Ads",
      desc: "Ny kampanjstruktur + bättre sökord + landing page → fler leads till lägre kostnad.",
      bullets: ["Struktur & sökintention", "Konverteringsspårning", "CRO på landing page"],
    },
    {
      title: "SEO + Content plan",
      desc: "Tjänstesidor + bloggstrategi → mer organisk trafik och fler förfrågningar.",
      bullets: ["Teknisk SEO", "Topical authority", "Internlänkning"],
    },
    {
      title: "Meta Ads för leads",
      desc: "Creatives + retargeting → jämnare inflöde av förfrågningar.",
      bullets: ["Hook + creatives", "Retargeting", "Lead-form & landing page"],
    },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Case</h1>
          <p className="lead">
            Exempel på upplägg och resultat. Vi fyller på med fler riktiga case löpande.
          </p>

          <div className="grid2 mt">
            {cases.map((c) => (
              <div className="card" key={c.title}>
                <div className="cardTitle">{c.title}</div>
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
            <div className="cardTitle">Vill du att vi kollar din webb snabbt?</div>
            <p className="muted mt2">
              Boka en gratis 15 min call så tar vi fram ett enkelt förslag.
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
