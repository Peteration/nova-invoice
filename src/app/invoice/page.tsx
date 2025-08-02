"use client";

import { useState } from "react";
import { cn } from "@/lib/utils"; // For conditional classes

export default function InvoiceBuilder() {
  const [companyName, setCompanyName] = useState("Nova Inc.");
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");
  const [isUpgraded, setIsUpgraded] = useState(false); // Toggle upgrade

  return (
    <main className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black px-4 py-10 md:px-20 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight orbitron">
          Nova Invoice Builder
        </h1>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Create AI-enhanced invoices with crypto-ready features. Upgrade to unlock watermark-free exports and futuristic tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Invoice Form */}
        <section className="bg-black/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-white/10 space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/5 text-white border border-gray-600 focus:outline-primary"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/5 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/5 text-white border border-gray-600"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {isUpgraded ? "Upgrade active." : "Demo mode — watermark visible."}
            </span>
            <button
              onClick={() => setIsUpgraded(!isUpgraded)}
              className="bg-primary hover:bg-white text-black font-semibold px-4 py-2 rounded-md transition-all"
            >
              {isUpgraded ? "Downgrade" : "Simulate Upgrade"}
            </button>
          </div>
        </section>

        {/* Invoice Preview */}
        <section className="relative bg-white text-black rounded-2xl p-8 shadow-2xl min-h-[340px] border border-black/10">
          {!isUpgraded && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl pointer-events-none">
              <p className="text-white font-bold text-lg">🔒 Watermark – Upgrade to Remove</p>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6">🧾 INVOICE</h2>

          <div className="space-y-3 text-sm">
            <p>
              <strong>From:</strong> {companyName}
            </p>
            <p>
              <strong>To:</strong> {clientName || "[Client Name]"}
            </p>
            <p>
              <strong>Amount:</strong> {amount ? `$${amount}` : "$0.00"}
            </p>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            <p>Future tools will include:</p>
            <ul className="list-disc ml-4">
              <li>AI-generated invoice summaries</li>
              <li>AR visualizations</li>
              <li>Voice-to-invoice transcription</li>
              <li>Crypto payment stamp</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
