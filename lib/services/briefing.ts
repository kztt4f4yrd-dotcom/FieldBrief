import type { LegalUpdate } from "@/lib/types";

export type BriefingItem = LegalUpdate & {
  briefingIndex: number;
  totalBriefs: number;
};

export type Briefing = {
  items: BriefingItem[];
  totalBriefs: number;
  hasBriefs: boolean;
};

export function buildBriefing(updates: LegalUpdate[]): Briefing {
  const sortedUpdates = [
    ...updates.filter((update) => update.priority === "action_required"),
    ...updates.filter((update) => update.priority === "know_before_shift"),
    ...updates.filter((update) => update.priority === "reference"),
  ];

  const items = sortedUpdates.map((update, index) => ({
    ...update,
    briefingIndex: index + 1,
    totalBriefs: sortedUpdates.length,
  }));

  return {
    items,
    totalBriefs: items.length,
    hasBriefs: items.length > 0,
  };
}