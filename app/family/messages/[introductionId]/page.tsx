import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurrentProfile } from "@/lib/auth";
import MessageThread from "@/components/MessageThread";

export default async function FamilyMessagesPage({
  params,
}: {
  params: Promise<{ introductionId: string }>;
}) {
  const { introductionId } = await params;
  const supabase = await createClient();
  const profile = await getCurrentProfile();
  if (!profile) redirect("/");

  const { data: introduction } = await supabase
    .from("introductions")
    .select("*, nanny_applications(profile_id)")
    .eq("id", introductionId)
    .single();

  if (!introduction) notFound();

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("introduction_id", introductionId)
    .order("created_at", { ascending: true });

  return (
    <MessageThread
      introductionId={introductionId}
      messages={messages ?? []}
      currentUserId={profile!.id}
      feePaid={introduction.fee_paid}
      otherPartyLabel="your matched nanny"
    />
  );
}
