export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Om Nordic IT Solutions</h1>

      <p className="mt-4 text-slate-600 leading-relaxed">
        Nordic IT Solutions (NITS) är en digital byrå med svensk kommunikation och projektledning.
        Vi hjälper företag att växa med SEO, annonsering, design och webbsidor. Vårt fokus är enkelhet,
        tydlig leverans och mätbara resultat — utan krångel.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <div className="font-semibold">Vår modell</div>
        <p className="mt-2 text-sm text-slate-600">
          Du får en svensk kontakt som driver projektet från start till leverans. Produktionen görs av ett
          effektivt team, vilket gör att vi kan hålla hög kvalitet och rimliga priser.
        </p>
      </div>

      <div className="mt-8">
        <a className="rounded-xl border px-5 py-3 text-sm font-medium inline-block" href="/contact">
          Kontakta oss
        </a>
      </div>
    </main>
  );
}
