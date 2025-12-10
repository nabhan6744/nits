import Link from "next/link";

export default function ProcessPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pill">Så jobbar vi</div>

          <h1 className="h1">En enkel process. Tydlig leverans.</h1>

          <p className="lead">
            Du har en svensk kontakt hela vägen — vi tar ansvar för plan, produktion och kvalitet,
            och visar resultat med tydlig rapportering.
          </p>

          <div className="grid2 mt">
            {[
              ["01", "Gratis mini-audit", "Vi tittar snabbt på din webb/annonsering och hittar största förbättringen först."],
              ["02", "Plan + tydlig offert", "Du får en enkel plan, scope och fast pris eller månadsupplägg."],
              ["03", "Produktion & lansering", "Vi producerar, kvalitetssäkrar och lanserar snabbt."],
              ["04", "Optimering & rapport", "Vi förbättrar kontinuerligt och rapporterar så du ser effekten tydligt."],
            ].map(([n, t, d]) => (
              <div className="card" key={n}>
                <div className="muted small">{n}</div>
                <div className="cardTitle mt2">{t}</div>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>

          <div className="card mt">
            <div className="between">
              <div>
                <div className="cardTitle">Redo att börja?</div>
                <p className="muted">
                  Boka en gratis 15 min call så tar vi fram ett enkelt förslag och nästa steg.
                </p>
              </div>
              <Link className="btn primary" href="/contact">
                Boka gratis 15 min
              </Link>
            </div>
          </div>

          <div className="row gap mt">
            <Link className="btn" href="/services">
              Se tjänster
            </Link>
            <Link className="btn" href="/pricing">
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
