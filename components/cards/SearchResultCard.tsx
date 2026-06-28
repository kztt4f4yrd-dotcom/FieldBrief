import Link from "next/link";
import type { LegalUpdate } from "@/lib/types";

export default function SearchResultCard({ update }: { update: LegalUpdate }) {
  return (
    <Link
      href={`/updates/${update.id}`}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:bg-zinc-800"
    >
      <p className="text-sm text-zinc-500">
        {update.category ?? "General"} • {update.jurisdiction}
      </p>

      <h2 className="mt-1 text-lg font-bold">{update.title}</h2>

      <p className="mt-2 text-sm text-zinc-300">{update.summary}</p>

      {update.officer_takeaway && (
        <p className="mt-3 rounded-xl bg-zinc-950 p-3 text-sm text-zinc-300">
          <span className="font-semibold text-zinc-100">
            Officer Takeaway:
          </span>{" "}
          {update.officer_takeaway}
        </p>
      )}

      <p className="mt-3 text-xs font-semibold text-zinc-500">
        Open brief →
      </p>
    </Link>
  );
}