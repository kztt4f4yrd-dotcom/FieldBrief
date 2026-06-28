import { supabase } from "@/lib/supabase";
import type { LegalUpdate, TrustedSource } from "@/lib/types";

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

export async function getTrustedSources() {
  const { data, error } = await supabase
    .from("trusted_sources")
    .select("*")
    .order("jurisdiction", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []) as TrustedSource[];
}