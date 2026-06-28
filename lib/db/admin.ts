import { supabase } from "@/lib/supabase";
import { DEFAULT_CIRCUIT, DEFAULT_JURISDICTION } from "@/lib/constants";

export type CreateLegalUpdateInput = {
  title: string;
  summary: string;
  officerTakeaway: string;
  priority: string;
  category: string;
  sourceUrl: string;
  sourceType: string;
  effectiveDate: string;
};

export async function createLegalUpdate(input: CreateLegalUpdateInput) {
  const { error } = await supabase.from("legal_updates").insert({
    title: input.title,
    summary: input.summary,
    officer_takeaway: input.officerTakeaway,
    priority: input.priority,
    category: input.category,
    source_url: input.sourceUrl || null,
    source_type: input.sourceType || null,
    effective_date: input.effectiveDate || null,
    jurisdiction: DEFAULT_JURISDICTION,
    circuit: DEFAULT_CIRCUIT,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Operational brief issued." };
}