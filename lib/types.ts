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
  created_at: string;
};

export type TrustedSource = {
  id: string;
  name: string;
  source_type: string;
  jurisdiction: string;
  official_url: string;
  status: string;
  last_checked: string | null;
  notes: string | null;
};