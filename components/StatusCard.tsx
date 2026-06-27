export default function StatusCard({
  hasActionRequired,
  actionRequiredCount,
}: {
  hasActionRequired: boolean;
  actionRequiredCount: number;
}) {
  return (
    <section
      className={`mt-6 rounded-3xl border p-5 ${
        hasActionRequired
          ? "border-red-500/30 bg-red-500/10"
          : "border-emerald-500/30 bg-emerald-500/10"
      }`}
    >
      <p
        className={`text-sm ${
          hasActionRequired ? "text-red-300" : "text-emerald-300"
        }`}
      >
        Operational Status
      </p>

      <h1
        className={`mt-2 text-4xl font-black tracking-tight ${
          hasActionRequired ? "text-red-300" : "text-emerald-300"
        }`}
      >
        {hasActionRequired ? "ACTION REQUIRED" : "CLEAR"}
      </h1>

      <p className="mt-3 text-lg font-semibold">
        {hasActionRequired
          ? `${actionRequiredCount} legal update${
              actionRequiredCount === 1 ? "" : "s"
            } require review before patrol.`
          : "No legal changes require action today."}
      </p>

      <p className="mt-3 text-sm text-zinc-400">
        Last verified: Today at 6:02 AM
      </p>
    </section>
  );
}