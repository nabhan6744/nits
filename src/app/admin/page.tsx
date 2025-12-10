import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <div className="text-lg font-semibold">Admin</div>
      <p className="mt-2 text-sm text-black/70">Hantera blogginlägg och innehåll.</p>
      <div className="mt-4">
        <Link className="text-sm font-medium underline" href="/admin/posts">
          Gå till inlägg →
        </Link>
      </div>
    </div>
  );
}
