export default function ReadingTimeCard({
  readingMinutes,
  totalUpdates,
}: {
  readingMinutes: number;
  totalUpdates: number;
}) {
  return (
    <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">Estimated Reading Time</p>

      <p className="mt-2 text-3xl font-black">
        {readingMinutes === 0 ? "0 min" : `${readingMinutes} min`}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        Based on {totalUpdates} brief{totalUpdates === 1 ? "" : "s"} available.
      </p>
    </section>
  );
}