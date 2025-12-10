import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="pill">Om oss</div>

          <h1 className="h1">Om Nordic IT Solutions</h1>

          <p className="lead">
            Nordic IT Solutions (NITS) är en digital byrå med svensk kommunikation och projektledning.
            Vi hjälper företag att växa med SEO, annonsering, design och webbsidor — med fokus på enkelhet,
            tydlig leverans och mätbara resultat.
          </p>

          <div className="grid2 mt">
            <div className="card">
              <div className="cardTitle">Vår modell</div>
              <p className="muted">
                Du får en svensk kontakt som driver projektet från start till leverans. Produktionen görs av
                ett effektivt team, vilket gör att vi kan hålla hög kvalitet och rimliga priser.
              </p>
            </div>

            <div className="card">
              <div className="cardTitle">Varför oss</div>
              <ul className="list">
                <li>Tydlig plan & scope</li>
                <li>Snabb start och enkel kommunikation</li>
                <li>Fokus på leads, CRO och spårning</li>
                <li>Rapportering som går att förstå</li>
              </ul>
            </div>
          </div>

          <div className="row gap mt">
            <Link className="btn primary" href="/contact">
              Kontakta oss
            </Link>
            <Link className="btn" href="/process">
              Så jobbar vi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
