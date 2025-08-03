"use server";

import { supabase } from "@/lib/supabase";

interface InvoiceData {
  clientName: string;
  amount: number;
}

export async function saveInvoice(data: InvoiceData, email: string) {
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    await supabase.from("users").insert({ email });
  }

  const { error } = await supabase.from("invoices").insert({
    user_id: user?.id,
    client_name: data.clientName,
    amount: data.amount,
    upgraded: false,
  });

  return { success: !error, error };
}
