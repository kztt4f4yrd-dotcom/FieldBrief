import Link from "next/link";

type DailyBriefActionCardProps = {
  totalUpdates: number;
  readingMinutes: number;
};

export default function DailyBriefActionCard({
  totalUpdates,
  readingMinutes,
}: DailyBriefActionCardProps) {
  const hasUpdates = totalUpdates > 0;

  return (
    <Link
      href={hasUpdates ? "/briefing" : "/search"}
      className="mt-5 block rounded-3xl border border-zinc-800 bg-zinc-100 p-5 text-zinc-950 transition hover:bg-zinc-200"
    >
      <p className="text-sm font-semibold text-zinc-600">
        {hasUpdates ? "Ready When You Are" : "No Briefs Pending"}
      </p>

      <h2 className="mt-2 text-2xl font-black tracking-tight">
        {hasUpdates ? "Begin Daily Brief" : "Explore Briefs"}
      </h2>

      <p className="mt-2 text-sm font-semibold text-zinc-700">
        {hasUpdates
          ? `${totalUpdates} update${totalUpdates === 1 ? "" : "s"} • ${
              readingMinutes === 0 ? "0 min" : `${readingMinutes} min`
            }`
          : "You are currently up to date."}
      </p>
    </Link>
  );
}