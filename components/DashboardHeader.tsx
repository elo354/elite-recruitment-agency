import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardHeader({ label }: { label: string }) {
  return (
    <header className="border-b border-border bg-white">
      <div className="flex items-center justify-between px-[7%] h-20">
        <Link href="/" className="font-serif text-2xl font-medium text-navy tracking-wide">
          Elite<span className="text-gold">.</span>
        </Link>
        <span className="hidden sm:inline text-xs uppercase tracking-widest text-ink/40">{label}</span>
        <LogoutButton />
      </div>
    </header>
  );
}
