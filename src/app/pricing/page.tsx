import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "fr. 4 900 kr/mån",
      bestFor: "Små företag som vill komma igång snabbt",
      features: ["1 kanal (SEO eller Ads)", "Grundsetup + optimering", "Månadsrapport"],
      primary: false,
    },
    {
      name: "Growth",
      price: "fr. 9 900 kr/mån",
      bestFor: "Företag som vill växa stabilt",
      features: ["2 kanaler (t.ex. SEO + Ads)", "Veckovis optimering", "Copy + creatives"],
      primary: true,
    },
    {
      name: "Scale",
      price: "fr. 19 900 kr/mån",
      bestFor: "Bolag som vill dominera sin nisch",
      features: ["Multi-channel growth", "Landing pages + CRO", "Prioriterad support"],
      primary: false,
    },
  ];

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Priser</h1>
          <p className="lead">Enkla paket som går att uppgradera när du växer. Inga krångliga upplägg.</p>

          <div className="grid3 mt">
            {plans.map((p) => (
              <div key={p.name} className={`card ${p.primary ? "cardPrimary" : ""}`}>
                <div className="between">
                  <div className="cardTitle">{p.name}</div>
                  {p.primary && <span className="badge">Mest populär</span>}
                </div>

                <div className="price">{p.price}</div>
                <div className="muted">{p.bestFor}</div>

                <ul className="list mt2">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <Link className={`btn ${p.primary ? "primary" : ""} mt`} href="/contact">
                  {p.primary ? "Få offert" : "Boka call"}
                </Link>

                <div className="hint">*Ads-budget ingår inte.</div>
              </div>
            ))}
          </div>

          <div className="card mt">
            <div className="cardTitle">Vill du ha ett exakt pris?</div>
            <p className="muted mt2">Säg mål + budget så får du ett tydligt förslag.</p>
            <div className="row gap mt">
              <Link className="btn primary" href="/contact">
                Kontakta oss
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
