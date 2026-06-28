import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import SearchResultCard from "@/components/cards/SearchResultCard";
import { getLegalUpdates, searchLegalUpdates } from "@/lib/database";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = searchParams ? await searchParams : {};
  const query = params.q?.trim() ?? "";

  const legalUpdates = await getLegalUpdates();
  const results = searchLegalUpdates(legalUpdates, query);

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-28">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to FieldBrief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight">Search</h1>

        <form className="mt-6">
          <input
            name="q"
            defaultValue={query}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none placeholder:text-zinc-500"
            placeholder="Search traffic stops, Miranda, K9, DUI..."
          />
        </form>

        <p className="mt-4 text-sm text-zinc-500">
          {query
            ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
            : `${results.length} total brief${results.length === 1 ? "" : "s"}`}
        </p>

        <section className="mt-5 space-y-3">
          {results.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="font-semibold">No results found.</p>
              <p className="mt-2 text-sm text-zinc-400">
                Try searching for a topic like traffic stop, vehicle search,
                Miranda, DUI, K9, or warrants.
              </p>
            </div>
          ) : (
            results.map((update) => (
              <SearchResultCard key={update.id} update={update} />
            ))
          )}
        </section>
      </section>

      <Navigation />
    </main>
  );
}