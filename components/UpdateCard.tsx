import Link from "next/link";
import type { LegalUpdate } from "@/lib/types";

export default function UpdateCard({ update }: { update: LegalUpdate }) {
  return (
    <Link
      href={`/updates/${update.id}`}
      className="block rounded-xl bg-zinc-950 px-3 py-3 transition hover:bg-zinc-800"
    >
      <p className="text-sm font-semibold text-zinc-100">{update.title}</p>

      <p className="mt-1 text-xs text-zinc-500">
        {update.category ?? "General"} • {update.jurisdiction}
      </p>

      <p className="mt-2 text-sm text-zinc-300">{update.summary}</p>

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
  );
}