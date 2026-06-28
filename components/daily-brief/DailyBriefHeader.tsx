export default function DailyBriefHeader() {
  const today = new Date();
  const hour = today.getHours();

  let greeting = "Good Morning, Eli";

  if (hour >= 12 && hour < 16) {
    greeting = "Good Afternoon, Eli";
  } else if (hour >= 16) {
    greeting = "Good Evening, Eli";
  }

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

      <p className="mt-5 text-sm font-semibold text-zinc-400">
        {greeting}
      </p>

      <h1 className="mt-1 text-4xl font-black tracking-tight">
        Daily Brief
      </h1>

      <p className="mt-2 text-sm text-zinc-400">{formattedDate}</p>
    </header>
  );
}