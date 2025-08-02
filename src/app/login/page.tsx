"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signIn("email", { email, callbackUrl: "/dashboard" });
  };

  return (
    <main className="min-h-screen bg-background flex justify-center items-center px-6">
      <form
        onSubmit={handleLogin}
        className="bg-accent p-6 rounded-xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-primary mb-4">Login</h1>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded bg-black border border-gray-700 text-white mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-black px-4 py-2 rounded font-semibold"
        >
          Get Magic Link
        </button>
      </form>
    </main>
  );
}
