import Link from "next/link";
import type { BriefingItem } from "@/lib/database";

type BriefCardProps = {
  item: BriefingItem;
};

export default function BriefCard({ item }: BriefCardProps) {
  return (
    <article className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">
        {item.category ?? "General"} • {item.jurisdiction}
      </p>

      <h2 className="mt-2 text-2xl font-black tracking-tight">{item.title}</h2>

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
  );
}