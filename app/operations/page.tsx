import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import { getLegalUpdates, getTrustedSources } from "@/lib/database";

export default async function OperationsPage() {
  const updates = await getLegalUpdates();
  const sources = await getTrustedSources();

  const actionRequired = updates.filter(
    (update) => update.priority === "action_required"
  );

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to FieldBrief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight">
          Operations Center
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          Manage briefs, sources, review queues, and future agency operations.
        </p>

        <section className="mt-6 grid grid-cols-2 gap-3">
          <StatCard label="Briefs Published" value={updates.length} />
          <StatCard label="Action Required" value={actionRequired.length} />
          <StatCard label="Trusted Sources" value={sources.length} />
          <StatCard label="Pending Review" value={0} />
        </section>

        <section className="mt-6 space-y-3">
          <OperationCard
            href="/admin"
            title="Create Operational Brief"
            description="Manually publish a legal update into FieldBrief."
            icon="✏️"
          />

          <OperationCard
            href="/sources"
            title="Trusted Sources"
            description="View official sources FieldBrief monitors or will monitor."
            icon="🌐"
          />

          <OperationCard
            href="/search"
            title="Search Briefs"
            description="Search published legal and operational updates."
            icon="🔍"
          />

          <OperationCard
            href="/operations"
            title="Review Queue"
            description="Future home for AI-generated drafts awaiting review."
            icon="📥"
            disabled
          />
        </section>
      </section>

      <Navigation />
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}

function OperationCard({
  href,
  title,
  description,
  icon,
  disabled = false,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 opacity-60">
        <div className="flex items-start gap-3">
          <span className="text-xl">{icon}</span>
          <div>
            <h2 className="font-bold">{title}</h2>
            <p className="mt-1 text-sm text-zinc-400">{description}</p>
            <p className="mt-3 text-xs font-semibold text-zinc-500">
              Coming soon
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:bg-zinc-800"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>
          <p className="mt-3 text-xs font-semibold text-zinc-500">
            Open →
          </p>
        </div>
      </div>
    </Link>
  );
}