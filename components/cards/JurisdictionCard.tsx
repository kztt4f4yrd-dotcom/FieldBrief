import { DEFAULT_CIRCUIT, DEFAULT_JURISDICTION } from "@/lib/constants";

export default function JurisdictionCard() {
  return (
    <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">Your Jurisdiction</p>
      <h2 className="mt-1 text-lg font-semibold">
        {DEFAULT_JURISDICTION} • {DEFAULT_CIRCUIT}
      </h2>
    </section>
  );
}