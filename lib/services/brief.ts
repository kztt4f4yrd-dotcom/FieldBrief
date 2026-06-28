import type { LegalUpdate } from "@/lib/types";

export function buildOperationalBrief(updates: LegalUpdate[]) {
  const actionRequired = updates.filter(
    (update) => update.priority === "action_required"
  );

  const knowBeforeShift = updates.filter(
    (update) => update.priority === "know_before_shift"
  );

  const reference = updates.filter((update) => update.priority === "reference");

  return {
    updates,
    actionRequired,
    knowBeforeShift,
    reference,
    hasActionRequired: actionRequired.length > 0,
    totalUpdates: updates.length,
  };
}