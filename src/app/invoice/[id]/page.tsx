"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Invoice = {
  id: string;
  companyName: string;
  clientName: string;
  amount: string;
  upgraded: boolean;
};

export default function InvoiceDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    if (!id) return;

    // Fetch invoice by ID from storage or API here (mock example)
    const storedInvoices = localStorage.getItem("nova_invoices");
    if (storedInvoices) {
      const invoices: Invoice[] = JSON.parse(storedInvoices);
      const inv = invoices.find((i) => i.id === id);
      if (inv) setInvoice(inv);
    }
  }, [id]);

  if (!invoice) return <p>Loading invoice...</p>;

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-white flex justify-center">
      <div
        id={`invoice-${invoice.id}`}
        className="bg-white text-black p-8 rounded-xl max-w-3xl w-full shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6">Invoice #{invoice.id}</h1>
        <p className="mb-2">
          <strong>Company:</strong> {invoice.companyName}
        </p>
        <p className="mb-2">
          <strong>Client:</strong> {invoice.clientName}
        </p>
        <p className="mb-2">
          <strong>Amount:</strong> {invoice.amount}
        </p>

        {invoice.upgraded ? (
          <p className="mt-4 text-green-600 font-semibold">Upgraded - No Watermark</p>
        ) : (
          <p className="mt-4 text-red-600 font-semibold">
            Watermarked - Upgrade to remove
          </p>
        )}
      </div>
    </main>
  );
}
