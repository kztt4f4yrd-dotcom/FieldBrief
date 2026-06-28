import Navigation from "@/components/layout/Navigation";
import StatusCard from "@/components/cards/StatusCard";
import JurisdictionCard from "@/components/cards/JurisdictionCard";
import ShiftSummaryCard from "@/components/cards/ShiftSummaryCard";
import BriefSection from "@/components/sections/BriefSection";
import SearchBar from "@/components/search/SearchBar";
import DailyBriefHeader from "@/components/daily-brief/DailyBriefHeader";
import ReadingTimeCard from "@/components/daily-brief/ReadingTimeCard";
import BeginBriefingButton from "@/components/daily-brief/BeginBriefingButton";
import { PRIORITIES } from "@/lib/constants";
import { getLegalUpdates, buildOperationalBrief } from "@/lib/database";

export default async function Home() {
  const legalUpdates = await getLegalUpdates();
  const brief = buildOperationalBrief(legalUpdates);

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <DailyBriefHeader />

        <StatusCard
          hasActionRequired={brief.hasActionRequired}
          actionRequiredCount={brief.actionRequired.length}
        />

        <JurisdictionCard />

        <ShiftSummaryCard
          actionRequiredCount={brief.actionRequired.length}
          totalUpdates={brief.totalUpdates}
        />

        <ReadingTimeCard totalUpdates={brief.totalUpdates} />

        <BeginBriefingButton totalUpdates={brief.totalUpdates} />

        <section className="mt-6 space-y-4">
          <BriefSection
            icon={PRIORITIES.action_required.icon}
            title={PRIORITIES.action_required.label}
            description={PRIORITIES.action_required.description}
            updates={brief.actionRequired}
          />

          <BriefSection
            icon={PRIORITIES.know_before_shift.icon}
            title={PRIORITIES.know_before_shift.label}
            description={PRIORITIES.know_before_shift.description}
            updates={brief.knowBeforeShift}
          />

          <BriefSection
            icon={PRIORITIES.reference.icon}
            title={PRIORITIES.reference.label}
            description={PRIORITIES.reference.description}
            updates={brief.reference}
          />
        </section>

        <SearchBar />
      </section>

      <Navigation />
    </main>
  );
}