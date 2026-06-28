import Link from "next/link";
import type { Briefing } from "@/lib/database";
import BriefProgress from "@/components/daily-brief/BriefProgress";
import BriefCard from "@/components/daily-brief/BriefCard";
import CompletionCard from "@/components/daily-brief/CompletionCard";

type BriefingPlayerProps = {
  briefing: Briefing;
  stepNumber: number;
};

export default function BriefingPlayer({
  briefing,
  stepNumber,
}: BriefingPlayerProps) {
  if (!briefing.hasBriefs || Number.isNaN(stepNumber)) {
    return (
      <>
        <h1 className="mt-6 text-3xl font-black tracking-tight">
          Briefing not found
        </h1>

        <Link
          href="/"
          className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-4 text-center font-black text-zinc-950"
        >
          Return Home
        </Link>
      </>
    );
  }

  const currentItem = briefing.items[stepNumber - 1];

  if (!currentItem) {
    return <CompletionCard />;
  }

  const isFirst = stepNumber === 1;
  const isLast = stepNumber === briefing.totalBriefs;

  return (
    <>
      <h1 className="mt-4 text-3xl font-black tracking-tight">
        Guided Briefing
      </h1>

      <BriefProgress current={stepNumber} total={briefing.totalBriefs} />

      <BriefCard item={currentItem} />

      <div className="mt-5 grid grid-cols-2 gap-3">
        {isFirst ? (
          <Link
            href="/"
            className="rounded-2xl border border-zinc-800 px-4 py-3 text-center text-sm font-bold text-zinc-400"
          >
            Exit
          </Link>
        ) : (
          <Link
            href={`/briefing/${stepNumber - 1}`}
            className="rounded-2xl border border-zinc-800 px-4 py-3 text-center text-sm font-bold text-zinc-300"
          >
            ← Previous
          </Link>
        )}

        <Link
          href={`/briefing/${stepNumber + 1}`}
          className="rounded-2xl bg-zinc-100 px-4 py-3 text-center text-sm font-black text-zinc-950"
        >
          {isLast ? "Finish →" : "Next →"}
        </Link>
      </div>
    </>
  );
}