"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitBrief(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const location = String(formData.get("location") ?? "").trim();
  const hoursNeeded = String(formData.get("hours_needed") ?? "").trim();
  const startDate = String(formData.get("start_date") ?? "").trim() || null;
  const budget = String(formData.get("budget") ?? "").trim() || null;
  const requirements = String(formData.get("requirements") ?? "").trim() || null;

  await supabase.from("family_briefs").insert({
    profile_id: user!.id,
    location,
    hours_needed: hoursNeeded,
    start_date: startDate,
    budget,
    requirements,
    status: "submitted",
  });

  revalidatePath("/family/dashboard");
  redirect("/family/dashboard");
}
