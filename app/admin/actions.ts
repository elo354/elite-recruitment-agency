"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { NannyApplicationStatus, DbsStatus } from "@/lib/types";

export async function setApplicationStatus(applicationId: string, status: NannyApplicationStatus) {
  const supabase = await createClient();
  await supabase.from("nanny_applications").update({ status }).eq("id", applicationId);
  revalidatePath("/admin/applications");
}

export async function setDbsStatus(applicationId: string, dbsStatus: DbsStatus) {
  const supabase = await createClient();
  await supabase.from("nanny_applications").update({ dbs_status: dbsStatus }).eq("id", applicationId);
  revalidatePath("/admin/applications");
}

export async function createIntroduction(formData: FormData) {
  const supabase = await createClient();

  const familyBriefId = String(formData.get("family_brief_id") ?? "");
  const nannyApplicationId = String(formData.get("nanny_application_id") ?? "");
  if (!familyBriefId || !nannyApplicationId) return;

  const { data: brief } = await supabase.from("family_briefs").select("profile_id").eq("id", familyBriefId).single();
  const { data: application } = await supabase
    .from("nanny_applications")
    .select("profile_id")
    .eq("id", nannyApplicationId)
    .single();

  if (!brief || !application) return;

  await supabase.from("introductions").insert({
    family_brief_id: familyBriefId,
    nanny_application_id: nannyApplicationId,
    family_profile_id: brief.profile_id,
    nanny_profile_id: application.profile_id,
    status: "proposed",
    fee_paid: false,
  });

  await supabase.from("family_briefs").update({ status: "introduced" }).eq("id", familyBriefId);

  revalidatePath("/admin/introductions");
  revalidatePath("/admin/briefs");
}

export async function toggleFeePaid(introductionId: string, feePaid: boolean) {
  const supabase = await createClient();
  await supabase.from("introductions").update({ fee_paid: feePaid }).eq("id", introductionId);
  revalidatePath("/admin/introductions");
}

export async function getSignedDocumentUrl(path: string): Promise<string | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.storage.from("nanny-documents").createSignedUrl(path, 60 * 10);
  if (error) return null;
  return data.signedUrl;
}
