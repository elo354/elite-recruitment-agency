import { redirect } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import { getCurrentProfile } from "@/lib/auth";

export default async function NannyLayout({ children }: { children: React.ReactNode }) {
  const profile = await getCurrentProfile();

  if (!profile) redirect("/login");
  if (profile.role !== "nanny") redirect(profile.role === "family" ? "/family/dashboard" : "/admin");

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <DashboardHeader label="Nanny Account" />
      <main className="flex-1 px-[7%] py-12">{children}</main>
    </div>
  );
}
