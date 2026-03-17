import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Beras Hotel
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Shopee
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            Instagram
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Email
          </Link>
        </div>
      </div>
    </nav>
  );
}