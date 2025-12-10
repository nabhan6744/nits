export default function DesignPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Design</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Logo, brand och creatives för annonser/sociala medier — snyggt och konverteringsfokuserat.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Logo & brand", "Färger, typsnitt och riktlinjer som gör att du ser proffsig ut överallt."],
          ["Social media mallar", "Enhetliga templates så du kan posta snabbt och konsekvent."],
          ["Ad creatives", "Banners/video-still/UGC-stil som funkar för Meta/Google."],
          ["UI för webb", "Enkla, moderna sektioner som känns premium."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <div className="font-semibold">Behöver du en ny look?</div>
        <p className="mt-2 text-sm text-slate-600">
          Vi kan börja med ett snabbt brand-kit och creatives för dina kampanjer.
        </p>
        <a className="mt-4 inline-flex rounded-xl bg-black text-white px-5 py-3 text-sm font-medium" href="/contact">
          Boka 15 min
        </a>
      </div>
    </main>
  );
}
