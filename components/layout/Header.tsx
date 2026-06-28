import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <p className="text-sm font-semibold tracking-[0.25em] text-zinc-500">
        FIELDBRIEF
      </p>

      <Link
        href="/sources"
        className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-400"
      >
        Sources
      </Link>
    </header>
  );
}