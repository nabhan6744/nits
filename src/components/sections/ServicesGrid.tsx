const services = [
  { title: "SEO", href: "/seo", items: ["Teknisk SEO", "Content & topical authority", "Local SEO"] },
  { title: "Google Ads", href: "/google-ads", items: ["Search & Performance", "Landing pages", "Konverteringsspårning"] },
  { title: "Meta Ads", href: "/meta-ads", items: ["Creatives & hooks", "Retargeting", "Lead generation"] },
  { title: "Design", href: "/design", items: ["Logo & brand", "Social media mallar", "Ad creatives"] },
  { title: "Webb", href: "/web", items: ["Landing pages", "Portfolio", "E-commerce"] },
];

export default function ServicesGrid() {
  return (
    <section className="services">
      <div className="container">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Allt du behöver för att växa online</h2>
            <p className="lead">
              Vi kombinerar strategi, produktion och optimering. Du får en tydlig leverans med en svensk kontakt.
            </p>
          </div>
          <a className="textLink" href="/services">
            Se alla tjänster
          </a>
        </div>

        <div className="cardsGrid">
          {services.map((s) => (
            <a key={s.title} href={s.href} className="cardLink">
              <div className="cardTop">
                <h3 className="cardTitle">{s.title}</h3>
                <span aria-hidden className="arrow">
                  →
                </span>
              </div>

              <ul className="cardList">
                {s.items.map((x) => (
                  <li key={x} className="cardLi">
                    <span className="dot" aria-hidden />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
