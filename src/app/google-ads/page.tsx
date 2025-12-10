export default function GoogleAdsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Google Ads</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Sökannonser som ger leads. Tydlig struktur, spårning och kontinuerlig optimering.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Setup & struktur", "Kampanjer per tjänst och sökintention. Rätt match types + negativa sökord."],
          ["Konverteringsspårning", "Form submit/calls/e-commerce – så vi optimerar på rätt data."],
          ["Annonstexter", "Copy som matchar sökord och bygger förtroende – testas och förbättras."],
          ["Landing pages", "Vi kan bygga enkla sidor som ökar konvertering och sänker CPA."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <div className="font-semibold">Vill du få billigare leads?</div>
        <p className="mt-2 text-sm text-slate-600">
          Boka en gratis mini-audit så säger vi vad som kan förbättras direkt.
        </p>
        <a className="mt-4 inline-flex rounded-xl bg-black text-white px-5 py-3 text-sm font-medium" href="/contact">
          Boka 15 min
        </a>
      </div>
    </main>
  );
}
