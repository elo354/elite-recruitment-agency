import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="px-[7%] py-8">
        <Link href="/" className="font-serif text-2xl font-medium text-navy tracking-wide">
          Elite<span className="text-gold">.</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-6 pb-16">{children}</main>
    </div>
  );
}
