import type { LegalUpdate } from "@/lib/types";

export function estimateReadingMinutes(updates: LegalUpdate[]) {
  const totalWords = updates.reduce((total, update) => {
    const text = [
      update.title,
      update.summary,
      update.officer_takeaway,
      update.category,
      update.source_type,
    ]
      .filter(Boolean)
      .join(" ");

    return total + text.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  if (totalWords === 0) {
    return 0;
  }

  return Math.max(1, Math.ceil(totalWords / 200));
}