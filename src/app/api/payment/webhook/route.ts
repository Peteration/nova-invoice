import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const headers = req.headers;

  const signature = headers.get("x-nowpayments-sig");
  const secret = process.env.NOWPAYMENTS_WEBHOOK_SECRET;

  const crypto = await import("crypto");
  const hmac = crypto.createHmac("sha512", secret!);
  hmac.update(raw);
  const expectedSig = hmac.digest("hex");

  if (signature !== expectedSig) return NextResponse.json({ ok: false });

  const body = JSON.parse(raw);

  if (body.payment_status === "confirmed") {
    // update invoice/plan access in Supabase
    const email = body.order_description.split(" - ")[1]; // or embed email in metadata
    // TODO: Mark user as upgraded
  }

  return NextResponse.json({ ok: true });
}
