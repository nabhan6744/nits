export default function WebPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Webb</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Snabba, moderna sidor som laddar fort och konverterar: landing pages, portfolio och e-commerce.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Landing pages", "Bygg för ett mål: leads, bokningar eller köp. Copy + struktur + CTA."],
          ["Portfolio / företagshemsida", "Enkel men proffsig närvaro online med tydlig tjänstepresentation."],
          ["E-commerce", "Produkt- och kategoriupplägg som gör det lätt att köpa."],
          ["CRO (konvertering)", "Små ändringar som kan ge stor effekt på leads/sales."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <div className="font-semibold">Vill du ha en sida som säljer?</div>
        <p className="mt-2 text-sm text-slate-600">
          Säg vad du säljer och målgrupp — så föreslår vi upplägg och pris.
        </p>
        <a className="mt-4 inline-flex rounded-xl bg-black text-white px-5 py-3 text-sm font-medium" href="/contact">
          Kontakta oss
        </a>
      </div>
    </main>
  );
}
