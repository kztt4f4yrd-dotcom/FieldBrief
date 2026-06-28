import Link from "next/link";
import { getLegalUpdateById } from "@/lib/database";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UpdateDetailPage({ params }: PageProps) {
  const { id } = await params;
  const update = await getLegalUpdateById(id);

  if (!update) {
    return (
      <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
        <section className="mx-auto max-w-md">
          <Link href="/" className="text-sm text-zinc-400">
            ← Back
          </Link>

          <h1 className="mt-6 text-2xl font-bold">Update not found</h1>
          <p className="mt-2 text-zinc-400">
            This legal update could not be loaded.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-12">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to brief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          FIELDBRIEF
        </p>

        <h1 className="mt-4 text-3xl font-black tracking-tight">
          {update.title}
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          {update.category ?? "General"} • {update.jurisdiction}
        </p>

        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">What Changed</p>
          <p className="mt-2 text-zinc-100">{update.summary}</p>
        </section>

        <section className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">Officer Takeaway</p>
          <p className="mt-2 text-zinc-100">
            {update.officer_takeaway ?? "No officer takeaway provided."}
          </p>
        </section>

        <section className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-sm text-zinc-400">Details</p>

          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <p>
              <span className="text-zinc-500">Priority:</span>{" "}
              {update.priority}
            </p>

            <p>
              <span className="text-zinc-500">Circuit:</span>{" "}
              {update.circuit ?? "N/A"}
            </p>

            <p>
              <span className="text-zinc-500">Effective Date:</span>{" "}
              {update.effective_date ?? "Not listed"}
            </p>

            <p>
              <span className="text-zinc-500">Source Type:</span>{" "}
              {update.source_type ?? "Not listed"}
            </p>
          </div>
        </section>

        {update.source_url && (
          <a
            href={update.source_url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-3 text-center font-semibold text-zinc-950"
          >
            Open Official Source
          </a>
        )}
      </section>
    </main>
  );
}