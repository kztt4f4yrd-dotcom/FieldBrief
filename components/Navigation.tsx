import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-zinc-950/95 px-6 py-4">
      <div className="mx-auto flex max-w-md justify-between text-sm text-zinc-400">
        <Link href="/" className="hover:text-zinc-100">
          Home
        </Link>

        <Link href="/sources" className="hover:text-zinc-100">
          Sources
        </Link>

        <Link href="/admin" className="hover:text-zinc-100">
          Admin
        </Link>

        <Link href="/updates/test" className="hover:text-zinc-100">
          Updates
        </Link>
      </div>
    </nav>
  );
}