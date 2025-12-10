import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="pill">Svensk projektledning • Snabb leverans • Prisvärt</div>

          <h1 className="h1">
            Digital marknadsföring som ger leads. Webb & design som konverterar.
          </h1>

          <p className="lead">
            Du får en svensk kontakt som tar ansvar för strategi, kommunikation och leverans — med ett effektivt team
            som producerar SEO, annonser, design och webbsidor.
          </p>

          <div className="row gap">
            <Link className="btn primary" href="/contact">
              Boka gratis 15 min
            </Link>
            <Link className="btn" href="/services">
              Se tjänster
            </Link>
            <Link className="btn" href="/case-studies">
              Se resultat
            </Link>
          </div>

          <div className="chips">
            {["SEO", "Google Ads", "Meta Ads", "Design", "Webb"].map((x) => (
              <span className="chip" key={x}>
                {x}
              </span>
            ))}
          </div>

          <div className="card mt">
            <div className="cardTitle">Snabb offert</div>
            <p className="muted">
              Svara på 3 frågor så återkommer vi med förslag samma/kommande arbetsdag.
            </p>

            <form className="grid3 mt">
              <input className="input" placeholder="Vad vill du ha hjälp med?" />
              <input className="input" placeholder="Din hemsida / bransch?" />
              <input className="input" placeholder="Mål: leads / sales / trafik?" />

              <div className="gridSpan">
                <Link className="btn primary" href="/contact">
                  Få en gratis mini-audit
                </Link>
                <span className="hint">(Vi kopplar detta till riktiga formuläret strax.)</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="sectionSm">
        <div className="container">
          <div className="grid4">
            {[
              { k: "Snabb leverans", v: "1–2 veckor för många projekt" },
              { k: "Tydlig rapport", v: "du ser resultat svart på vitt" },
              { k: "Svensk kontakt", v: "kommunikation & ansvar" },
              { k: "Skalbart", v: "från 1 tjänst → full growth" },
            ].map((x) => (
              <div className="card" key={x.k}>
                <div className="cardTitle">{x.k}</div>
                <div className="muted">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="between">
            <div>
              <h2 className="h2">Allt du behöver för att växa online</h2>
              <p className="muted">
                Vi kombinerar strategi, produktion och optimering. Du får en tydlig leverans med en svensk kontakt.
              </p>
            </div>
            <Link className="link" href="/services">
              Se alla tjänster
            </Link>
          </div>

          <div className="grid3 mt">
            {[
              { title: "SEO", href: "/seo", items: ["Teknisk SEO", "Content & topical authority", "Local SEO"] },
              { title: "Google Ads", href: "/google-ads", items: ["Search & Performance", "Landing pages", "Konverteringsspårning"] },
              { title: "Meta Ads", href: "/meta-ads", items: ["Creatives & hooks", "Retargeting", "Lead generation"] },
              { title: "Design", href: "/design", items: ["Logo & brand", "Social media mallar", "Ad creatives"] },
              { title: "Webb", href: "/web", items: ["Landing pages", "Portfolio", "E-commerce"] },
              { title: "Kontakt", href: "/contact", items: ["Gratis mini-audit", "Tydlig offert", "Snabb start"] },
            ].map((s) => (
              <Link className="card hover" href={s.href} key={s.title}>
                <div className="between">
                  <div className="cardTitle">{s.title}</div>
                  <span aria-hidden>→</span>
                </div>
                <ul className="list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="between">
            <div>
              <h2 className="h2">Så jobbar vi (enkelt & proffsigt)</h2>
              <p className="muted">Du har en svensk kontakt hela vägen — vi tar ansvar för leverans och kvalitet.</p>
            </div>
            <Link className="link" href="/process">
              Läs mer
            </Link>
          </div>

          <div className="grid2 mt">
            {[
              ["01", "Gratis mini-audit", "Vi kollar din webb/annonsering snabbt och ser största förbättringen först."],
              ["02", "Plan + tydlig offert", "Du får en enkel plan, scope och fast pris/månadsupplägg."],
              ["03", "Produktion & lansering", "Vi producerar creatives, texter och setup — och lanserar snabbt."],
              ["04", "Optimering & rapport", "Vi förbättrar veckovis och rapporterar så du ser resultat tydligt."],
            ].map(([n, t, d]) => (
              <div className="card" key={n}>
                <div className="muted small">{n}</div>
                <div className="cardTitle mt2">{t}</div>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <div className="between">
            <div>
              <h2 className="h2">Priser</h2>
              <p className="muted">Enkla paket som går att uppgradera när du växer. Inga krångliga upplägg.</p>
            </div>
            <Link className="link" href="/pricing">
              Se alla priser
            </Link>
          </div>

          <div className="grid3 mt">
            {[
              {
                name: "Starter",
                price: "fr. 4 900 kr/mån",
                bestFor: "Små företag som vill komma igång snabbt",
                features: ["1 kanal (SEO eller Ads)", "Grundsetup + optimering", "Månadsrapport"],
                primary: false,
              },
              {
                name: "Growth",
                price: "fr. 9 900 kr/mån",
                bestFor: "Företag som vill växa stabilt",
                features: ["2 kanaler (t.ex. SEO + Ads)", "Veckovis optimering", "Copy + creatives"],
                primary: true,
              },
              {
                name: "Scale",
                price: "fr. 19 900 kr/mån",
                bestFor: "Bolag som vill dominera sin nisch",
                features: ["Multi-channel growth", "Landing pages + CRO", "Prioriterad support"],
                primary: false,
              },
            ].map((p) => (
              <div className={`card ${p.primary ? "cardPrimary" : ""}`} key={p.name}>
                <div className="between">
                  <div className="cardTitle">{p.name}</div>
                  {p.primary && <span className="badge">Mest populär</span>}
                </div>
                <div className="price">{p.price}</div>
                <div className="muted">{p.bestFor}</div>
                <ul className="list mt2">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <Link className={`btn ${p.primary ? "primary" : ""} mt`} href="/contact">
                  {p.primary ? "Få offert" : "Boka call"}
                </Link>

                <div className="hint">*Vi anpassar efter bransch, mål och budget.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="h2">FAQ</h2>
            <p className="muted">Snabba svar på vanliga frågor innan du bokar.</p>

            <div className="grid2 mt">
              {[
                ["Har ni bindningstid?", "Nej. Vi kör månadsvis. För vissa projekt (t.ex. webb) kör vi fast pris per leverans."],
                ["Äger jag annonskontot och datan?", "Ja. Vi jobbar i dina konton (Google/Meta) eller hjälper dig skapa dem — du äger allt."],
                ["Hur snabbt kan ni starta?", "Ofta inom 2–5 arbetsdagar efter att vi fått material och access. Webbprojekt kan starta direkt."],
                ["Vad behöver ni från mig?", "Mål, budget (om ads), nuvarande webb/kanaler och kort info om erbjudande + målgrupp."],
                ["Kan ni göra både marknadsföring och hemsida?", "Ja. Vi gör gärna landing pages + annonser + SEO så allt hänger ihop och konverterar bättre."],
                ["Hur börjar vi?", "Boka en gratis 15 min call så tar vi fram ett enkelt förslag och nästa steg."],
              ].map(([q, a]) => (
                <div className="card" key={q}>
                  <div className="cardTitle">{q}</div>
                  <p className="muted">{a}</p>
                </div>
              ))}
            </div>

            <div className="row gap mt">
              <Link className="btn primary" href="/contact">
                Boka gratis 15 min
              </Link>
              <Link className="btn" href="/pricing">
                Se priser
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
