"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Role } from "@/lib/types";

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetRole = searchParams.get("role");
  const initialRole: Role = presetRole === "nanny" ? "nanny" : "family";

  const [role, setRole] = useState<Role>(initialRole);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role, full_name: fullName, phone },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    router.push(role === "family" ? "/family/brief" : "/nanny/apply");
    router.refresh();
  }

  return (
    <div className="w-full max-w-md bg-white border border-border rounded-lg p-8 sm:p-10">
      <h1 className="font-serif text-3xl text-navy mb-2 text-center">Create your account</h1>
      <p className="text-sm text-ink/60 text-center mb-8">
        Already have an account?{" "}
        <Link href="/login" className="text-navy font-semibold underline">Log in</Link>
      </p>

      <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-cream rounded-lg">
        <button
          type="button"
          onClick={() => setRole("family")}
          className={`py-2.5 rounded-md text-sm font-semibold transition-colors ${
            role === "family" ? "bg-navy text-white" : "text-ink/60"
          }`}
        >
          I need a nanny
        </button>
        <button
          type="button"
          onClick={() => setRole("nanny")}
          className={`py-2.5 rounded-md text-sm font-semibold transition-colors ${
            role === "nanny" ? "bg-navy text-white" : "text-ink/60"
          }`}
        >
          I&apos;m a nanny
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="px-4 py-3 border border-border rounded text-sm"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 border border-border rounded text-sm"
        />
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-3 border border-border rounded text-sm"
        />
        <input
          required
          type="password"
          minLength={8}
          placeholder="Password (min. 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-3 border border-border rounded text-sm"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded bg-navy text-white font-semibold hover:bg-navy-dark transition disabled:opacity-60"
        >
          {loading ? "Creating account…" : role === "family" ? "Create Family Account" : "Create Nanny Account"}
        </button>
      </form>
    </div>
  );
}
