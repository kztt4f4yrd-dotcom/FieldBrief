export type TrustedSource = {
  id: string;
  name: string;
  jurisdiction: string;
  source_type: string;
  official_url: string;
  status: string;
  notes: string | null;
  last_checked: string | null;
  created_at: string;
};