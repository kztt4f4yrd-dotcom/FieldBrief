import { redirect } from "next/navigation";
import { getLegalUpdates, buildBriefing } from "@/lib/database";

export default async function BriefingPage() {
  const updates = await getLegalUpdates();
  const briefing = buildBriefing(updates);

  if (!briefing.hasBriefs) {
    redirect("/");
  }

  redirect("/briefing/1");
}