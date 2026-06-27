import Link from "next/link";
import { supabase } from "@/lib/supabase";

type LegalUpdate = {
  id: string;
  title: string;
  summary: string;
  priority: "action_required" | "know_before_shift" | "reference";
  jurisdiction: string;
  circuit: string | null;
  category: string | null;
  officer_takeaway: string | null;
  source_url: string | null;
  created_at: string;
};

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
      <section className="mx-auto max-w-md pb-24">
        <p className="text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <section
          className={`mt-6 rounded-3xl border p-5 ${
            hasActionRequired
              ? "border-red-500/30 bg-red-500/10"
              : "border-emerald-500/30 bg-emerald-500/10"
          }`}
        >
          <p
            className={`text-sm ${
              hasActionRequired ? "text-red-300" : "text-emerald-300"
            }`}
          >
            Operational Status
          </p>

          <h1
            className={`mt-2 text-4xl font-black tracking-tight ${
              hasActionRequired ? "text-red-300" : "text-emerald-300"
            }`}
          >
            {hasActionRequired ? "ACTION REQUIRED" : "CLEAR"}
          </h1>

          <p className="mt-3 text-lg font-semibold">
            {hasActionRequired
              ? `${actionRequired.length} legal update requires review before patrol.`
              : "No legal changes require action today."}
          </p>

          <p className="mt-3 text-sm text-zinc-400">
            Last verified: Today at 6:02 AM
          </p>
        </section>

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

        <div className="mt-8">
          <input
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none placeholder:text-zinc-500"
            placeholder="Search traffic stops, Miranda, K9, DUI..."
          />
        </div>

        <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-950/95 px-6 py-4">
          <div className="mx-auto flex max-w-md justify-between text-sm text-zinc-400">
            <span className="text-zinc-100">Home</span>
            <span>Search</span>
            <span>Saved</span>
            <span>Profile</span>
          </div>
        </nav>
      </section>
    </main>
  );
}

function BriefSection({
  icon,
  title,
  description,
  updates,
}: {
  icon: string;
  title: string;
  description: string;
  updates: LegalUpdate[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon}</span>

        <div className="w-full">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>

          {updates.length === 0 ? (
            <p className="mt-4 rounded-xl bg-zinc-950 px-3 py-3 text-sm text-zinc-500">
              No updates yet.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {updates.map((update) => (
                <Link
                  href={`/updates/${update.id}`}
                  key={update.id}
                  className="block rounded-xl bg-zinc-950 px-3 py-3 transition hover:bg-zinc-800"
                >
                  <p className="text-sm font-semibold text-zinc-100">
                    {update.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {update.category ?? "General"} • {update.jurisdiction}
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    {update.summary}
                  </p>

                  {update.officer_takeaway && (
                    <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-sm text-zinc-300">
                      <span className="font-semibold text-zinc-100">
                        Officer Takeaway:
                      </span>{" "}
                      {update.officer_takeaway}
                    </p>
                  )}

                  <p className="mt-3 text-xs font-semibold text-zinc-500">
                    Tap to view full brief →
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}