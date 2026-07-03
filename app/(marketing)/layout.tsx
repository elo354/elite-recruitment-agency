import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCurrentProfile } from "@/lib/auth";

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const profile = await getCurrentProfile();

  return (
    <>
      <TopBar />
      <Nav role={profile?.role ?? null} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
