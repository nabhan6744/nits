export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="pill">Svensk projektledning • Snabb leverans • Prisvärt</div>

        <h1 className="heroTitle">
          Digital marknadsföring som ger leads. Webb &amp; design som konverterar.
        </h1>

        <p className="heroDesc">
          Du får en svensk kontakt som tar ansvar för strategi, kommunikation och leverans — med ett effektivt team som
          producerar SEO, annonser, design och webbsidor.
        </p>

        <div className="heroCtas">
          <a className="btn btnPrimary" href="/contact">
            Boka gratis 15 min
          </a>
          <a className="btn btnGhost" href="/services">
            Se tjänster
          </a>
          <a className="btn btnGhost" href="/case-studies">
            Se resultat
          </a>
        </div>

        <div className="heroTags">
          {["SEO", "Google Ads", "Meta Ads", "Design", "Webb"].map((x) => (
            <span key={x} className="tag">
              {x}
            </span>
          ))}
        </div>

        <div className="quickBox">
          <div className="quickTitle">Snabb offert</div>
          <p className="quickDesc">Svara på 3 frågor så återkommer vi med förslag samma/kommande arbetsdag.</p>

          <form action="/contact" className="quickForm">
            <input className="input" placeholder="Vad vill du ha hjälp med?" />
            <input className="input" placeholder="Din hemsida / bransch?" />
            <input className="input" placeholder="Mål: leads / sales / trafik?" />
            <div className="quickFooter">
              <a className="btn btnPrimary" href="/contact">
                Få en gratis mini-audit
              </a>
              <span className="hint">(Vi kopplar detta till riktiga formuläret strax.)</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
