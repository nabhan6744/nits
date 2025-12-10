export default function MetaAdsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Meta Ads</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Facebook/Instagram ads med creatives som stoppar scrollen och ger leads/sales.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Creatives & hooks", "Vi testar flera kreativa vinklar för att hitta vinnare snabbt."],
          ["Retargeting", "Få tillbaka besökare som nästan köpte – smarta målgrupper och budskap."],
          ["Lead generation", "Form-ads eller landing pages beroende på bransch och mål."],
          ["Mätning", "Pixel + events så vi optimerar på rätt resultat."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <div className="font-semibold">Vill du ha bättre creatives?</div>
        <p className="mt-2 text-sm text-slate-600">
          Vi kan göra ett snabbt creative-pack och börja testa inom några dagar.
        </p>
        <a className="mt-4 inline-flex rounded-xl bg-black text-white px-5 py-3 text-sm font-medium" href="/contact">
          Kontakta oss
        </a>
      </div>
    </main>
  );
}
