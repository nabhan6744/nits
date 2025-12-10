export default function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "fr. 4 900 kr/mån",
      bestFor: "Små företag som vill komma igång snabbt",
      features: ["1 kanal (SEO eller Ads)", "Grundsetup + optimering", "Månadsrapport"],
      cta: "Boka call",
      href: "/contact",
    },
    {
      name: "Growth",
      price: "fr. 9 900 kr/mån",
      bestFor: "Företag som vill växa stabilt",
      features: ["2 kanaler (t.ex. SEO + Ads)", "Veckovis optimering", "Copy + creatives"],
      highlight: true,
      cta: "Få offert",
      href: "/contact",
    },
    {
      name: "Scale",
      price: "fr. 19 900 kr/mån",
      bestFor: "Bolag som vill dominera sin nisch",
      features: ["Multi-channel growth", "Landing pages + CRO", "Prioriterad support"],
      cta: "Prata med oss",
      href: "/contact",
    },
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Priser</h2>
            <p className="muted">
              Enkla paket som går att uppgradera när du växer. Inga krångliga upplägg.
            </p>
          </div>

          <a className="link" href="/pricing">
            Se alla priser
          </a>
        </div>

        <div className="pricingGrid">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`planCard ${p.highlight ? "planCard--highlight" : ""}`}
            >
              <div className="planTop">
                <div className="planName">{p.name}</div>
                {p.highlight && <div className="pill">Mest populär</div>}
              </div>

              <div className="planPrice">{p.price}</div>
              <div className="planFor">{p.bestFor}</div>

              <ul className="planList">
                {p.features.map((f) => (
                  <li key={f} className="planItem">
                    <span className="dot" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a className={`btn ${p.highlight ? "btnPrimary" : "btnGhost"} w100`} href={p.href}>
                {p.cta}
              </a>

              <p className="fineprint">*Vi anpassar efter bransch, mål och budget.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
