export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Så jobbar vi</h1>
      <p className="mt-3 text-slate-600">
        Enkel process, tydlig leverans. Du har alltid en svensk kontakt för kommunikation och ansvar.
      </p>

      <div className="mt-10 space-y-4">
        {[
          ["1) Behov & mål", "Vi förstår ditt erbjudande, målgrupp och vad som räknas som “resultat” för dig."],
          ["2) Plan & scope", "Vi föreslår kanal(er), leveransplan, tidslinje och upplägg (projekt eller månadsvis)."],
          ["3) Produktion", "Vi producerar creatives, texter, annonser, SEO-content eller webb — med QA innan leverans."],
          ["4) Lansering & optimering", "Vi följer data, testar och förbättrar. Du får rapport som är lätt att förstå."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a className="rounded-xl bg-black text-white px-5 py-3 text-sm font-medium inline-block" href="/contact">
          Boka gratis 15 min
        </a>
      </div>
    </main>
  );
}
