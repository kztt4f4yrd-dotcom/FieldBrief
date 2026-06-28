export default function ReadingTimeCard({
  totalUpdates,
}: {
  totalUpdates: number;
}) {
  const estimatedMinutes = Math.max(1, Math.ceil(totalUpdates * 0.75));

  return (
    <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">Estimated Reading Time</p>

      <p className="mt-2 text-3xl font-black">
        {totalUpdates === 0 ? "0 min" : `${estimatedMinutes} min`}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        Based on {totalUpdates} brief{totalUpdates === 1 ? "" : "s"} available.
      </p>
    </section>
  );
}