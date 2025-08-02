import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, email, plan } = await req.json();

  const res = await fetch("https://api.nowpayments.io/v1/invoice", {
    method: "POST",
    headers: {
      "x-api-key": process.env.NOWPAYMENTS_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price_amount: amount,
      price_currency: "usd",
      pay_currency: "usdttrc20", // or btc, eth
      order_description: `Nova Invoice Plan: ${plan}`,
      success_url: `https://yourdomain.com/payment-success`,
      cancel_url: `https://yourdomain.com/payment-failed`,
      ipn_callback_url: `https://yourdomain.com/api/payment/webhook`,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
