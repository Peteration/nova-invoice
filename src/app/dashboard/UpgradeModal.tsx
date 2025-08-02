"use client";
import { useState } from "react";

export function UpgradeModal({ email }: { email: string }) {
  const [loading, setLoading] = useState(false);

  const startPayment = async (plan: string, amount: number) => {
    setLoading(true);
    const res = await fetch("/api/payment/create", {
      method: "POST",
      body: JSON.stringify({ amount, email, plan }),
    });
    const data = await res.json();
    window.location.href = data.invoice_url;
  };

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-bold">Upgrade Plan</h2>
      <button
        onClick={() => startPayment("monthly", 15)}
        disabled={loading}
        className="bg-primary text-black px-4 py-2 rounded w-full"
      >
        $15 / month
      </button>
      <button
        onClick={() => startPayment("yearly", 50)}
        disabled={loading}
        className="bg-secondary text-black px-4 py-2 rounded w-full"
      >
        $50 / year
      </button>
      <button
        onClick={() => startPayment("lifetime", 150)}
        disabled={loading}
        className="bg-accent text-black px-4 py-2 rounded w-full"
      >
        $150 Lifetime
      </button>
    </div>
  );
}
