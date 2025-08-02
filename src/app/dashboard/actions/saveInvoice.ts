"use server";

import { supabase } from "@/lib/supabase";

export async function saveInvoice(data: any, email: string) {
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
