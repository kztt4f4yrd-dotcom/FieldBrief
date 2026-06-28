export default function DailyBriefHeader() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <p className="text-sm font-semibold tracking-[0.25em] text-zinc-500">
        FIELDBRIEF
      </p>

      <h1 className="mt-5 text-4xl font-black tracking-tight">
        Daily Brief
      </h1>

      <p className="mt-2 text-sm text-zinc-400">{formattedDate}</p>
    </header>
  );
}