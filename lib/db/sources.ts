import { supabase } from "@/lib/supabase";
import type { TrustedSource } from "@/lib/types";

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