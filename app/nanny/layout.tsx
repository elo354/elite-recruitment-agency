import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NannyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Nav />
      <main className="flex-1 bg-cream px-[7%] py-12">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
