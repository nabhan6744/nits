export async function POST(req: Request) {
  const body = await req.json();

  // Fake-lead: skriv i terminalen istället för att skicka mail
  console.log("NEW LEAD (fake mode):", body);

  return Response.json({ ok: true });
}
