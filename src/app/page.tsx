"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-background px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-primary text-center mb-6"
      >
        Welcome to Nova Invoice 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10"
      >
        Generate futuristic, professional invoices using AI, blockchain, AR & voice tech. Pay once or subscribe. Simple. Powerful. Instant.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <Link
          href="/invoice"
          className="bg-primary text-black px-6 py-3 rounded-2xl text-lg font-bold hover:bg-opacity-80 transition-all"
        >
          Create Invoice
        </Link>
        <Link
          href="/pricing"
          className="border border-primary text-primary px-6 py-3 rounded-2xl text-lg font-bold hover:bg-primary hover:text-black transition-all"
        >
          View Pricing
        </Link>
      </motion.div>
    </main>
  );
}
