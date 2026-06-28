import type { LegalUpdate } from "@/lib/types";

export function searchLegalUpdates(updates: LegalUpdate[], query: string) {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    return updates;
  }

  return updates.filter((update) => {
    const searchableText = [
      update.title,
      update.summary,
      update.category,
      update.jurisdiction,
      update.circuit,
      update.officer_takeaway,
      update.source_type,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(cleanQuery);
  });
}