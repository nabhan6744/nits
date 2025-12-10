"use client";

import * as React from "react";

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Kontakt</h1>
          <p className="lead">Skriv kort vad du behöver så återkommer vi snabbt.</p>

          <div className="grid2 mt">
            <div className="card">
              <div className="cardTitle">Kontaktformulär</div>
              <p className="muted mt2">Vi svarar oftast samma eller nästa arbetsdag.</p>

              <form onSubmit={onSubmit} className="mt">
                <div className="grid2">
                  <input name="name" required className="input" placeholder="Namn" />
                  <input name="email" type="email" required className="input" placeholder="E-post" />
                </div>

                <div className="mt2">
                  <input name="company" className="input" placeholder="Företag (valfritt)" />
                </div>

                <div className="mt2">
                  <textarea name="message" required className="input" style={{ minHeight: 140 }} placeholder="Meddelande" />
                </div>

                <button className="btn primary mt" disabled={loading} type="submit">
                  {loading ? "Skickar..." : "Skicka"}
                </button>

                {status === "ok" && <p className="muted mt2">Tack! Vi återkommer snart.</p>}
                {status === "err" && <p className="muted mt2">Något gick fel. Testa igen.</p>}

                <div className="hint">Vi spammar aldrig. Din info används bara för att kontakta dig.</div>
              </form>
            </div>

            <div className="card">
              <div className="cardTitle">Snabb kontakt</div>
              <p className="muted mt2">
                Skriv vad du vill uppnå (leads, sales, trafik) och vilken tjänst du behöver.
              </p>

              <div className="card mt">
                <div className="cardTitle">Tips för snabbare svar</div>
                <ul className="list mt2">
                  <li>Länk till din webb</li>
                  <li>Budget (om Ads)</li>
                  <li>Bransch + målgrupp</li>
                </ul>
              </div>

              <div className="row gap mt">
                <a className="btn" href="/pricing">Se priser</a>
                <a className="btn primary" href="/services">Se tjänster</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
