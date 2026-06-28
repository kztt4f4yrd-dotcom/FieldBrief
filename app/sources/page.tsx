import Link from "next/link";
import TrustedSourceCard from "@/components/cards/TrustedSourceCard";
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
            <TrustedSourceCard key={source.id} source={source} />
          ))}
        </section>
      </section>
    </main>
  );
}