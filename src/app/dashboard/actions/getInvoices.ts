"use server";

import { supabase } from "@/lib/supabase";

export async function getInvoices(email: string) {
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) return [];

  const { data, error } = await supabase
    .from("invoices")
    .select("*")
    .eq("user_id", user.id);

  return data || [];
}
