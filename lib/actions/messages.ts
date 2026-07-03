"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function sendMessage(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const introductionId = String(formData.get("introduction_id") ?? "");
  const body = String(formData.get("body") ?? "").trim();
  if (!introductionId || !body) return;

  await supabase.from("messages").insert({
    introduction_id: introductionId,
    sender_id: user!.id,
    body,
  });

  revalidatePath(`/family/messages/${introductionId}`);
  revalidatePath(`/nanny/messages/${introductionId}`);
}
