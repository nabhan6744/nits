export default function FAQ() {
  const faqs = [
    { q: "Har ni bindningstid?", a: "Nej. Vi kör månadsvis. För vissa projekt (t.ex. webb) kör vi fast pris per leverans." },
    { q: "Äger jag annonskontot och datan?", a: "Ja. Vi jobbar i dina konton (Google/Meta) eller hjälper dig skapa dem — du äger allt." },
    { q: "Hur snabbt kan ni starta?", a: "Ofta inom 2–5 arbetsdagar efter att vi fått material och access. Webbprojekt kan starta direkt." },
    { q: "Vad behöver ni från mig?", a: "Mål, budget (om ads), nuvarande webb/kanaler och kort info om erbjudande + målgrupp." },
    { q: "Kan ni göra både marknadsföring och hemsida?", a: "Ja. Vi gör gärna landing pages + annonser + SEO så allt hänger ihop och konverterar bättre." },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faqBox">
          <div className="sectionHead">
            <div>
              <h2 className="h2">FAQ</h2>
              <p className="muted">Snabba svar på vanliga frågor innan du bokar.</p>
            </div>
          </div>

          <div className="faqGrid">
            {faqs.map((f) => (
              <details key={f.q} className="faqItem">
                <summary className="faqQ">{f.q}</summary>
                <div className="faqA">{f.a}</div>
              </details>
            ))}
          </div>

          <div className="faqCtas">
            <a className="btn btnPrimary" href="/contact">Boka gratis 15 min</a>
            <a className="btn btnGhost" href="/pricing">Se priser</a>
          </div>
        </div>
      </div>
    </section>
  );
}
