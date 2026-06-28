import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { getLegalUpdates, buildBriefing } from "@/lib/database";

export default async function BriefingPage() {
  const legalUpdates = await getLegalUpdates();
  const briefing = buildBriefing(legalUpdates);

  if (!briefing.hasBriefs) {
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
            Briefing Complete
          </h1>

          <section className="mt-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5">
            <p className="text-sm text-emerald-300">Operational Status</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-emerald-300">
              CLEAR
            </h2>
            <p className="mt-3 text-zinc-100">
              No briefs require review right now.
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

        <p className="mt-3 text-sm text-zinc-400">
          Review each operational brief in priority order.
        </p>

        <section className="mt-6 space-y-4">
          {briefing.items.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="text-sm font-semibold text-zinc-500">
                {item.briefingIndex} / {item.totalBriefs}
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                {item.category ?? "General"} • {item.jurisdiction}
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight">
                {item.title}
              </h2>

              <section className="mt-5 rounded-2xl bg-zinc-950 p-4">
                <p className="text-sm text-zinc-500">What Changed</p>
                <p className="mt-2 text-sm text-zinc-200">{item.summary}</p>
              </section>

              <section className="mt-3 rounded-2xl bg-zinc-950 p-4">
                <p className="text-sm text-zinc-500">Officer Takeaway</p>
                <p className="mt-2 text-sm font-semibold text-zinc-100">
                  {item.officer_takeaway ?? "No officer takeaway provided."}
                </p>
              </section>

              <Link
                href={`/updates/${item.id}`}
                className="mt-4 block rounded-2xl border border-zinc-800 px-4 py-3 text-center text-sm font-bold text-zinc-300"
              >
                View Full Brief →
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5">
          <p className="text-sm text-emerald-300">Briefing Complete</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-emerald-300">
            Up To Date
          </h2>
          <p className="mt-3 text-sm text-zinc-300">
            You reviewed all currently available FieldBrief updates.
          </p>
        </section>
      </section>

      <Navigation />
    </main>
  );
}