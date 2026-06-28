export default function ShiftSummaryCard({
  actionRequiredCount,
  totalUpdates,
}: {
  actionRequiredCount: number;
  totalUpdates: number;
}) {
  return (
    <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">Since Your Last Shift</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-zinc-950 p-3">
          <p className="text-2xl font-bold">{actionRequiredCount}</p>
          <p className="text-xs text-zinc-500">Critical changes</p>
        </div>

        <div className="rounded-xl bg-zinc-950 p-3">
          <p className="text-2xl font-bold">{totalUpdates}</p>
          <p className="text-xs text-zinc-500">New updates</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-400">
        {totalUpdates > 0
          ? "Review the updates below before your next shift."
          : "Nothing new since your last recorded shift."}
      </p>
    </section>
  );
}