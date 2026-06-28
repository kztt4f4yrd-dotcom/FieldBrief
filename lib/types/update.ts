export type LegalUpdate = {
  id: string;
  title: string;
  summary: string;
  priority: "action_required" | "know_before_shift" | "reference";
  jurisdiction: string;
  circuit: string | null;
  category: string | null;
  officer_takeaway: string | null;
  source_url: string | null;
  source_type: string | null;
  effective_date: string | null;
  created_at: string;
};