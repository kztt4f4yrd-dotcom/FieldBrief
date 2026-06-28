type BriefProgressProps = {
  current: number;
  total: number;
};

export default function BriefProgress({
  current,
  total,
}: BriefProgressProps) {
  const percentage = total === 0 ? 0 : (current / total) * 100;

  return (
    <section className="mt-5">
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>Daily Brief Progress</span>
        <span>
          {current} / {total}
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </section>
  );
}