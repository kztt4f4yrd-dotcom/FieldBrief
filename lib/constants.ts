export const DEFAULT_JURISDICTION = "North Dakota";
export const DEFAULT_CIRCUIT = "8th Circuit";

export const PRIORITIES = {
  action_required: {
    label: "Action Required",
    icon: "🔴",
    description: "Changes that affect what you must do before patrol.",
  },
  know_before_shift: {
    label: "Know Before Shift",
    icon: "🟡",
    description: "Important updates worth reviewing before work.",
  },
  reference: {
    label: "Reference",
    icon: "📚",
    description: "Useful legal information with no immediate action.",
  },
} as const;

export const CATEGORIES = [
  "Traffic Stops",
  "Search & Seizure",
  "DUI",
  "Arrest & Detention",
  "Warrants",
  "Use of Force",
  "Digital Evidence",
  "Juvenile Law",
  "Controlled Substances",
  "Reports & Procedure",
  "Officer Safety",
  "General",
] as const;