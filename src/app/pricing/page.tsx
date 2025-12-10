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
          <div className="pill">Priser</div>
          <h1 className="h1">Enkla paket. Tydlig leverans.</h1>
          <p className="lead">
            Välj ett paket och skala upp när du växer. Ads-budget ingår inte.
          </p>

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

                <div className="hint mt2">*Vi anpassar efter bransch, mål och budget.</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
