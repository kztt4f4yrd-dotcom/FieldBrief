import { supabase } from "@/lib/supabase";
import type { LegalUpdate } from "@/lib/types";

export async function getLegalUpdates() {
  const { data, error } = await supabase
    .from("legal_updates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []) as LegalUpdate[];
}

export async function getLegalUpdateById(id: string) {
  const { data, error } = await supabase
    .from("legal_updates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data as LegalUpdate;
}