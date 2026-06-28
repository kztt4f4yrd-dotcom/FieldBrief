import type { TrustedSource } from "@/lib/types";

export default function TrustedSourceCard({ source }: { source: TrustedSource }) {
  return (
    <a
      href={source.official_url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:bg-zinc-800"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">{source.name}</h2>
          <p className="mt-1 text-sm text-zinc-400">
            {source.jurisdiction} • {source.source_type}
          </p>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {source.status}
        </span>
      </div>

      {source.notes && (
        <p className="mt-3 text-sm text-zinc-300">{source.notes}</p>
      )}

      <p className="mt-3 text-xs text-zinc-500">
        Last checked: {source.last_checked ?? "Not checked yet"}
      </p>
    </a>
  );
}