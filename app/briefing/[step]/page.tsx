import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import BriefingPlayer from "@/components/daily-brief/BriefingPlayer";
import { getLegalUpdates, buildBriefing } from "@/lib/database";

type PageProps = {
  params: Promise<{
    step: string;
  }>;
};

export default async function BriefingStepPage({ params }: PageProps) {
  const { step } = await params;
  const stepNumber = Number(step);

  const legalUpdates = await getLegalUpdates();
  const briefing = buildBriefing(legalUpdates);

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to Daily Brief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <BriefingPlayer briefing={briefing} stepNumber={stepNumber} />
      </section>

      <Navigation />
    </main>
  );
}