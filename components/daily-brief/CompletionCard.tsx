import Link from "next/link";

export default function CompletionCard() {
  const completedAt = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <section className="mt-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5">
      <p className="text-sm text-emerald-300">Briefing Complete</p>

      <h1 className="mt-2 text-4xl font-black tracking-tight text-emerald-300">
        Up To Date
      </h1>

      <p className="mt-3 text-zinc-100">
        You reviewed all currently available FieldBrief updates.
      </p>

      <p className="mt-3 text-sm text-zinc-400">Completed at {completedAt}</p>

      <Link
        href="/"
        className="mt-5 block rounded-2xl bg-zinc-100 px-4 py-4 text-center font-black text-zinc-950"
      >
        Return to Daily Brief
      </Link>
    </section>
  );
}