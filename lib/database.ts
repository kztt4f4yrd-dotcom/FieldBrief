export { getLegalUpdates, getLegalUpdateById } from "@/lib/db/updates";
export { getTrustedSources } from "@/lib/db/sources";
export { createLegalUpdate } from "@/lib/db/admin";
export type { CreateLegalUpdateInput } from "@/lib/db/admin";

export {
  searchLegalUpdates,
  buildOperationalBrief,
  buildBriefing,
} from "@/lib/services";

export type { Briefing, BriefingItem } from "@/lib/services";