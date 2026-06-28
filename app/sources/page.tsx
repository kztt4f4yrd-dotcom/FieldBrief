import Link from "next/link";
import { getTrustedSources } from "@/lib/database";

export default async function SourcesPage() {
  const sources = await getTrustedSources();

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-12">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to FieldBrief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight">
          Trusted Sources
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          Official sources FieldBrief monitors or will monitor for legal and
          operational changes.
        </p>

        <section className="mt-6 space-y-3">
          {sources.map((source) => (
            <a
              key={source.id}
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
          ))}
        </section>
      </section>
    </main>
  );
}