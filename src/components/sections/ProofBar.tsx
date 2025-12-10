export default function ProofBar() {
  const items = [
    { k: "Snabb leverans", v: "1–2 veckor för många projekt" },
    { k: "Tydlig rapport", v: "du ser resultat svart på vitt" },
    { k: "Svensk kontakt", v: "kommunikation & ansvar" },
    { k: "Skalbart", v: "från 1 tjänst → full growth" },
  ];

  return (
    <section className="proofbar">
      <div className="container">
        <div className="proofGrid">
          {items.map((x) => (
            <div key={x.k} className="proofCard">
              <div className="proofK">{x.k}</div>
              <div className="proofV">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
