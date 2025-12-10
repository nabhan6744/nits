import { Card, CardContent } from "@/components/ui/Card";

export function Testimonials({
  items,
}: {
  items: { name: string; role?: string; quote: string }[];
}) {
  if (!items?.length) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((t) => (
        <Card key={t.name}>
          <CardContent className="p-5">
            <p className="text-sm text-black/80">“{t.quote}”</p>
            <div className="mt-4 text-sm font-semibold">{t.name}</div>
            {t.role && <div className="text-xs text-black/60">{t.role}</div>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
