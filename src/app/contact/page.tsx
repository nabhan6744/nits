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
          <div className="pill">Kontakt</div>
          <h1 className="h1">Berätta kort vad du vill uppnå</h1>
          <p className="lead">
            Skriv några rader så återkommer vi snabbt med nästa steg och ett förslag.
          </p>

          <div className="grid2 mt">
            <div className="card">
              <div className="cardTitle">Snabb offert</div>
              <p className="muted mt2">Du får svar samma eller nästa arbetsdag.</p>

              <form onSubmit={onSubmit} className="mt">
                <div className="grid2">
                  <input className="input" name="name" placeholder="Namn" required />
                  <input className="input" name="email" placeholder="E-post" type="email" required />
                </div>

                <div className="mt">
                  <input className="input" name="company" placeholder="Företag (valfritt)" />
                </div>

                <div className="mt">
                  <textarea className="input" name="message" placeholder="Vad behöver du hjälp med?" rows={6} required />
                </div>

                <div className="row gap mt">
                  <button className="btn primary" disabled={loading}>
                    {loading ? "Skickar..." : "Skicka"}
                  </button>
                  <span className="hint">Vi spammar aldrig. Vi kontaktar dig bara om detta.</span>
                </div>

                {status === "ok" && <div className="mt2 badge">Tack! Vi återkommer snart.</div>}
                {status === "err" && <div className="mt2 badge" style={{ background: "rgba(255,80,80,.14)", borderColor: "rgba(255,80,80,.35)" }}>Något gick fel. Testa igen.</div>}
              </form>
            </div>

            <div className="card">
              <div className="cardTitle">Vanliga upplägg</div>
              <p className="muted mt2">Så här brukar vi starta med nya kunder.</p>

              <div className="mt">
                <div className="card mt2">
                  <div className="cardTitle">1) Mini-audit</div>
                  <div className="muted mt2">Snabb koll på webb/annonsering och största vinsten först.</div>
                </div>
                <div className="card mt2">
                  <div className="cardTitle">2) Plan + scope</div>
                  <div className="muted mt2">Tydligt scope, tidslinje och fast pris/månad.</div>
                </div>
                <div className="card mt2">
                  <div className="cardTitle">3) Produktion</div>
                  <div className="muted mt2">Copy, creatives, setup och lansering snabbt.</div>
                </div>
              </div>

              <div className="row gap mt">
                <a className="btn" href="mailto:info@nits.se">Maila oss</a>
                <a className="btn" href="tel:+46700000000">Ring</a>
              </div>

              <div className="hint mt2">Ändra mail/tel när du vill.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
