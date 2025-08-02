"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    title: "One-Time Use",
    price: "$2",
    crypto: true,
    description: "Generate 1 invoice, watermark-free.",
  },
  {
    title: "Monthly",
    price: "$15",
    crypto: true,
    description: "Unlimited invoicing for 30 days.",
  },
  {
    title: "Yearly",
    price: "$50",
    crypto: true,
    description: "Full access for 12 months. Save 70%.",
  },
  {
    title: "Lifetime Access",
    price: "$150",
    crypto: true,
    description: "Pay once, use forever. No watermark.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-16 text-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-primary mb-6 text-center"
      >
        Choose Your Plan
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-400 mb-12 text-center max-w-2xl"
      >
        Upgrade to remove watermark and unlock full AI invoice features. All plans support card payments (auto-converted to crypto).
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white text-black p-8 rounded-3xl shadow-xl border-4 border-primary/20 hover:scale-105 transition-transform flex flex-col items-start"
          >
            <h3 className="text-xl font-bold text-primary mb-3">{plan.title}</h3>
            <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
            <p className="text-gray-700 mb-8">{plan.description}</p>
            <Link
              href={`/pay?plan=${encodeURIComponent(plan.title.toLowerCase())}`}
              className="mt-auto w-full text-center px-5 py-3 bg-primary text-black rounded-xl font-bold hover:bg-opacity-80 transition"
            >
              Choose Plan
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
