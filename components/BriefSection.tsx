import UpdateCard from "@/components/UpdateCard";
import type { LegalUpdate } from "@/lib/types";

export default function BriefSection({
  icon,
  title,
  description,
  updates,
}: {
  icon: string;
  title: string;
  description: string;
  updates: LegalUpdate[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon}</span>

        <div className="w-full">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>

          {updates.length === 0 ? (
            <p className="mt-4 rounded-xl bg-zinc-950 px-3 py-3 text-sm text-zinc-500">
              No updates yet.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {updates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}