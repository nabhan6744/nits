export default function ProcessSteps() {
  const steps = [
    ["01", "Gratis mini-audit", "Vi kollar din webb/annonsering snabbt och ser största förbättringen först."],
    ["02", "Plan + tydlig offert", "Du får en enkel plan, scope och fast pris/månadsupplägg."],
    ["03", "Produktion & lansering", "Vi producerar creatives, texter och setup — och lanserar snabbt."],
    ["04", "Optimering & rapport", "Vi förbättrar veckovis och rapporterar så du ser resultat tydligt."],
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Så jobbar vi (enkelt &amp; proffsigt)</h2>
            <p className="lead">Du har en svensk kontakt hela vägen — vi tar ansvar för leverans och kvalitet.</p>
          </div>
          <a className="textLink" href="/process">
            Läs mer
          </a>
        </div>

        <div className="stepsGrid">
          {steps.map(([n, t, d]) => (
            <div key={n} className="stepCard">
              <div className="stepN">{n}</div>
              <div className="stepT">{t}</div>
              <p className="stepD">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
