export default function SeoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">SEO</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Långsiktig tillväxt med teknisk SEO, content och tydlig plan. Fokus: trafik som blir leads.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Teknisk SEO", "Indexering, hastighet, struktur, interna länkar, schema och fel som stoppar ranking."],
          ["Content & topical authority", "Vi bygger ämneskluster som matchar sökintention och skapar förtroende."],
          ["On-page optimering", "Titlar, meta, rubriker, CTA och konverteringsvänligt upplägg."],
          ["Local SEO", "Google Business Profile, lokala landningssidor och recension-strategi."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <div className="font-semibold">Starta med en gratis mini-audit</div>
        <p className="mt-2 text-sm text-slate-600">
          Vi kollar din site snabbt och säger vad som ger mest effekt först.
        </p>
        <a className="mt-4 inline-flex rounded-xl bg-black text-white px-5 py-3 text-sm font-medium" href="/contact">
          Boka 15 min
        </a>
      </div>
    </main>
  );
}
