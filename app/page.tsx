import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import StatusCard from "@/components/cards/StatusCard";
import JurisdictionCard from "@/components/cards/JurisdictionCard";
import ShiftSummaryCard from "@/components/cards/ShiftSummaryCard";
import BriefSection from "@/components/sections/BriefSection";
import SearchBar from "@/components/search/SearchBar";
import { supabase } from "@/lib/supabase";
import type { LegalUpdate } from "@/lib/types";

export default async function Home() {
  const { data: updates, error } = await supabase
    .from("legal_updates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  const legalUpdates = (updates ?? []) as LegalUpdate[];

  const actionRequired = legalUpdates.filter(
    (update) => update.priority === "action_required"
  );

  const knowBeforeShift = legalUpdates.filter(
    (update) => update.priority === "know_before_shift"
  );

  const reference = legalUpdates.filter(
    (update) => update.priority === "reference"
  );

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <Header />

        <StatusCard
          hasActionRequired={actionRequired.length > 0}
          actionRequiredCount={actionRequired.length}
        />

        <JurisdictionCard />

        <ShiftSummaryCard
          actionRequiredCount={actionRequired.length}
          totalUpdates={legalUpdates.length}
        />

        <section className="mt-6 space-y-4">
          <BriefSection
            icon="🔴"
            title="Action Required"
            description="Changes that affect what you must do before patrol."
            updates={actionRequired}
          />

          <BriefSection
            icon="🟡"
            title="Know Before Shift"
            description="Important updates worth reviewing before work."
            updates={knowBeforeShift}
          />

          <BriefSection
            icon="📚"
            title="Reference"
            description="Useful legal information with no immediate action."
            updates={reference}
          />
        </section>

        <SearchBar />
      </section>

      <Navigation />
    </main>
  );
}