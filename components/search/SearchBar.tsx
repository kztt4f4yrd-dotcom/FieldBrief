export default function SearchBar() {
  return (
    <div className="mt-8">
      <input
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 outline-none placeholder:text-zinc-500"
        placeholder="Search traffic stops, Miranda, K9, DUI..."
      />
    </div>
  );
}