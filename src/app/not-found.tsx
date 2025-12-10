export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="text-slate-600">Sidan finns inte.</p>
        <a className="underline" href="/">
          Gå till startsidan
        </a>
      </div>
    </main>
  );
}
