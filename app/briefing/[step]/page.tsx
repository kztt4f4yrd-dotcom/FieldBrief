import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
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

  if (!briefing.hasBriefs || Number.isNaN(stepNumber)) {
    return (
      <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
        <section className="mx-auto max-w-md pb-28">
          <Link href="/" className="text-sm text-zinc-400">
            ← Back to Daily Brief
          </Link>

          <h1 className="mt-6 text-3xl font-black tracking-tight">
            Briefing not found
          </h1>

          <Link
            href="/"
            className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-4 text-center font-black text-zinc-950"
          >
            Return Home
          </Link>
        </section>

        <Navigation />
      </main>
    );
  }

  const currentItem = briefing.items[stepNumber - 1];

  if (!currentItem) {
    return (
      <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
        <section className="mx-auto max-w-md pb-28">
          <Link href="/" className="text-sm text-zinc-400">
            ← Back to Daily Brief
          </Link>

          <section className="mt-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5">
            <p className="text-sm text-emerald-300">Briefing Complete</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-emerald-300">
              Up To Date
            </h1>
            <p className="mt-3 text-zinc-100">
              You reviewed all currently available FieldBrief updates.
            </p>
          </section>

          <Link
            href="/"
            className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-4 text-center font-black text-zinc-950"
          >
            Return to Daily Brief
          </Link>
        </section>

        <Navigation />
      </main>
    );
  }

  const isFirst = stepNumber === 1;
  const isLast = stepNumber === briefing.totalBriefs;

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to Daily Brief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <h1 className="mt-4 text-3xl font-black tracking-tight">
          Guided Briefing
        </h1>

        <p className="mt-3 text-sm font-semibold text-zinc-500">
          {currentItem.briefingIndex} / {currentItem.totalBriefs}
        </p>

        <article className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-400">
            {currentItem.category ?? "General"} • {currentItem.jurisdiction}
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight">
            {currentItem.title}
          </h2>

          <section className="mt-5 rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-500">What Changed</p>
            <p className="mt-2 text-sm text-zinc-200">{currentItem.summary}</p>
          </section>

          <section className="mt-3 rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-500">Officer Takeaway</p>
            <p className="mt-2 text-sm font-semibold text-zinc-100">
              {currentItem.officer_takeaway ?? "No officer takeaway provided."}
            </p>
          </section>

          <Link
            href={`/updates/${currentItem.id}`}
            className="mt-4 block rounded-2xl border border-zinc-800 px-4 py-3 text-center text-sm font-bold text-zinc-300"
          >
            View Full Brief →
          </Link>
        </article>

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
            href={isLast ? `/briefing/${stepNumber + 1}` : `/briefing/${stepNumber + 1}`}
            className="rounded-2xl bg-zinc-100 px-4 py-3 text-center text-sm font-black text-zinc-950"
          >
            {isLast ? "Finish →" : "Next →"}
          </Link>
        </div>
      </section>

      <Navigation />
    </main>
  );
}