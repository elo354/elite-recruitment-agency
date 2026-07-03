"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitApplication(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const experienceYears = Number(formData.get("experience_years") ?? 0) || null;
  const certifications = String(formData.get("certifications") ?? "").trim() || null;
  const availability = String(formData.get("availability") ?? "").trim() || null;
  const rateExpectation = String(formData.get("rate_expectation") ?? "").trim() || null;
  const bio = String(formData.get("bio") ?? "").trim() || null;
  const referenceOneName = String(formData.get("reference_one_name") ?? "").trim();
  const referenceOneContact = String(formData.get("reference_one_contact") ?? "").trim();
  const referenceTwoName = String(formData.get("reference_two_name") ?? "").trim();
  const referenceTwoContact = String(formData.get("reference_two_contact") ?? "").trim();

  const photo = formData.get("photo") as File | null;
  const dbsDocument = formData.get("dbs_document") as File | null;

  let photoUrl: string | null = null;
  if (photo && photo.size > 0) {
    const path = `${user!.id}/${Date.now()}-${photo.name}`;
    const { error } = await supabase.storage.from("nanny-photos").upload(path, photo);
    if (!error) {
      photoUrl = supabase.storage.from("nanny-photos").getPublicUrl(path).data.publicUrl;
    }
  }

  const { data: application, error: applicationError } = await supabase
    .from("nanny_applications")
    .insert({
      profile_id: user!.id,
      experience_years: experienceYears,
      certifications,
      availability,
      rate_expectation: rateExpectation,
      bio,
      photo_url: photoUrl,
      dbs_status: dbsDocument && dbsDocument.size > 0 ? "submitted" : "pending",
      status: "submitted",
    })
    .select()
    .single();

  if (applicationError || !application) {
    redirect("/nanny/apply?error=1");
  }

  let dbsDocumentUrl: string | null = null;
  if (dbsDocument && dbsDocument.size > 0) {
    const path = `${user!.id}/${Date.now()}-${dbsDocument.name}`;
    const { error } = await supabase.storage.from("nanny-documents").upload(path, dbsDocument);
    if (!error) {
      dbsDocumentUrl = path;
    }
  }

  await supabase.from("nanny_private_documents").insert({
    nanny_application_id: application!.id,
    dbs_document_url: dbsDocumentUrl,
    references_detail: [
      { name: referenceOneName, contact: referenceOneContact },
      { name: referenceTwoName, contact: referenceTwoContact },
    ],
  });

  revalidatePath("/nanny/dashboard");
  redirect("/nanny/dashboard");
}
