"use client";

export default function SearchBar() {
  return (
    <form action="/search" method="GET" className="mt-8">
      <input
        type="search"
        name="q"
        placeholder="Search traffic stops, Miranda, K9, DUI..."
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-600"
      />
    </form>
  );
}