"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleLogin() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await res.json().catch(() => ({}))) as any;

      if (!res.ok) {
        setError(data?.error ?? "Login failed");
        return;
      }

      router.push("/admin/posts");
      router.refresh();
    } catch {
      setError("Nätverksfel. Testa igen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-black/10 bg-white p-6">
      <div className="text-lg font-semibold">Logga in</div>
      <p className="mt-2 text-sm text-black/70">Admin panel för NITS.</p>

      <div className="mt-5 space-y-3">
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button className="w-full" onClick={handleLogin} disabled={loading}>
          {loading ? "Loggar in..." : "Logga in"}
        </Button>
      </div>
    </div>
  );
}
