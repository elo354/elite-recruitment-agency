export type Role = "family" | "nanny" | "admin";

export type Profile = {
  id: string;
  role: Role;
  full_name: string;
  email: string;
  phone: string | null;
  created_at: string;
};

export type NannyApplicationStatus = "submitted" | "under_review" | "approved" | "rejected";
export type DbsStatus = "pending" | "submitted" | "verified";

export type NannyApplication = {
  id: string;
  profile_id: string;
  experience_years: number | null;
  certifications: string | null;
  availability: string | null;
  rate_expectation: string | null;
  bio: string | null;
  photo_url: string | null;
  dbs_status: DbsStatus;
  status: NannyApplicationStatus;
  created_at: string;
};

export type FamilyBriefStatus = "submitted" | "matching" | "introduced" | "placed" | "closed";

export type FamilyBrief = {
  id: string;
  profile_id: string;
  location: string;
  hours_needed: string;
  start_date: string | null;
  budget: string | null;
  requirements: string | null;
  status: FamilyBriefStatus;
  created_at: string;
};

export type IntroductionStatus = "proposed" | "accepted" | "placed" | "declined";

export type Introduction = {
  id: string;
  family_brief_id: string;
  nanny_application_id: string;
  family_profile_id: string;
  nanny_profile_id: string;
  status: IntroductionStatus;
  fee_paid: boolean;
  created_at: string;
};

export type Message = {
  id: string;
  introduction_id: string;
  sender_id: string;
  body: string;
  created_at: string;
};
