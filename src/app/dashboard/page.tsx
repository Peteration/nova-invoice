"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Eye, Lock, Unlock } from "lucide-react";
import { downloadInvoiceAsPDF } from "@/lib/downloadInvoice";

type Invoice = {
  id: string;
  clientName: string;
  amount: string;
  upgraded: boolean;
};

export default function Dashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  // Mock data or fetch from localStorage / API
  useEffect(() => {
    const stored = localStorage.getItem("nova_invoices");
    if (stored) setInvoices(JSON.parse(stored));
    else
      setInvoices([
        {
          id: "inv001",
          clientName: "Test Client",
          amount: "$299.99",
          upgraded: false,
        },
      ]);
  }, []);

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary text-center">
        Your Invoices
      </h1>

      {invoices.length === 0 ? (
        <p className="text-center text-gray-400">No invoices created yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="bg-accent p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{inv.clientName}</h2>
                <p className="text-sm text-gray-300">{inv.amount}</p>
                <div className="mt-2 flex items-center gap-2">
                  {inv.upgraded ? (
                    <Unlock className="text-green-400 w-4 h-4" />
                  ) : (
                    <Lock className="text-red-400 w-4 h-4" />
                  )}
                  <span className="text-xs">
                    {inv.upgraded ? "Upgraded" : "Watermarked"}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Link
                  href={`/invoice/${inv.id}`}
                  className="bg-primary text-black px-2 py-1 rounded hover:bg-white"
                >
                  <Eye size={16} />
                </Link>
                <button
                  onClick={() => downloadInvoiceAsPDF(`invoice-${inv.id}`, inv.id)}
                  className="bg-black border border-white/10 px-2 py-1 rounded hover:border-white"
                >
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
