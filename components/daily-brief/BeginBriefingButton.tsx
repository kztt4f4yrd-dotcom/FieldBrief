import Link from "next/link";

export default function BeginBriefingButton({
  totalUpdates,
}: {
  totalUpdates: number;
}) {
  return (
    <Link
      href={totalUpdates > 0 ? "/briefing" : "/search"}
      className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-4 text-center font-black text-zinc-950"
    >
      {totalUpdates > 0 ? "Begin Briefing →" : "Explore Briefs →"}
    </Link>
  );
}