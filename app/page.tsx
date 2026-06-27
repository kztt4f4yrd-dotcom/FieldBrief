import Link from "next/link";
import Navigation from "@/components/Navigation";
import StatusCard from "@/components/StatusCard";
import BriefSection from "@/components/BriefSection";
import SearchBar from "@/components/SearchBar";
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

  const hasActionRequired = actionRequired.length > 0;

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <header className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-[0.25em] text-zinc-500">
            FIELDBRIEF
          </p>

          <Link
            href="/sources"
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400"
          >
            Sources
          </Link>
        </header>

        <StatusCard
          hasActionRequired={hasActionRequired}
          actionRequiredCount={actionRequired.length}
        />

        <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">Your Jurisdiction</p>
          <h2 className="mt-1 text-lg font-semibold">
            North Dakota • 8th Circuit
          </h2>
        </section>

        <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">Since Your Last Shift</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-zinc-950 p-3">
              <p className="text-2xl font-bold">{actionRequired.length}</p>
              <p className="text-xs text-zinc-500">Critical changes</p>
            </div>

            <div className="rounded-xl bg-zinc-950 p-3">
              <p className="text-2xl font-bold">{legalUpdates.length}</p>
              <p className="text-xs text-zinc-500">New updates</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            {legalUpdates.length > 0
              ? "Review the updates below before your next shift."
              : "Nothing new since your last recorded shift."}
          </p>
        </section>

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