"use client";

import { useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";

const cryptoAddress = "YOUR_CRYPTO_WALLET_ADDRESS"; // Replace with your actual address

const plans = {
  "one-time use": { label: "One-Time Use", amount: 2 },
  monthly: { label: "Monthly", amount: 15 },
  yearly: { label: "Yearly", amount: 50 },
  lifetime: { label: "Lifetime", amount: 150 },
};

type PlanKey = keyof typeof plans;

function isValidPlanKey(key: string): key is PlanKey {
  return key in plans;
}

export default function PayPage() {
  const query = useSearchParams();
  const rawKey = query.get("plan")?.toLowerCase() || "monthly";
  const planKey = isValidPlanKey(rawKey) ? rawKey : "monthly";
  const plan = plans[planKey];
  const usdtAmount = plan.amount.toFixed(2);
  const paymentMemo = `nova-invoice:${plan.label.toLowerCase()}`;

  return (
    <main className="min-h-screen bg-background text-white flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-3xl font-bold mb-4 text-primary">Pay with Card or Crypto</h1>

      <p className="mb-2 text-gray-300">
        Plan: <span className="font-bold text-white">{plan.label}</span>
      </p>
      <p className="mb-6 text-gray-300">
        Amount: <span className="font-bold text-white">${usdtAmount} USD (in crypto)</span>
      </p>

      <div className="bg-white p-4 rounded-xl shadow-xl mb-4">
        <QRCode
          value={`USDT:${cryptoAddress}?amount=${usdtAmount}&memo=${paymentMemo}`}
          size={160}
        />
      </div>

      <p className="text-sm text-gray-400 mb-6 max-w-md text-center">
        Scan the QR with your crypto wallet (TRC20, ERC20, or BTC depending on address type).
        Card payments are converted automatically via 3rd-party gateways like <strong>NOWPayments</strong> or <strong>Paychant</strong>.
      </p>

      <div className="bg-black border border-white/10 rounded-xl p-4 w-full max-w-xl">
        <p className="mb-2">
          <strong>Crypto Address:</strong> {cryptoAddress}
        </p>
        <p className="text-xs text-gray-500">
          Send exact amount. After confirmation, you’ll get access automatically.
        </p>
      </div>
    </main>
  );
}
