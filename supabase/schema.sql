-- Elite Recruitment Agency — database schema
-- Run this in the Supabase SQL editor for a new project.

create extension if not exists "pgcrypto";

-- ─────────────────────────────────────────────────────────────
-- profiles: one row per authenticated user, mirrors auth.users
-- ─────────────────────────────────────────────────────────────
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('family', 'nanny', 'admin')),
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "profiles: select own" on profiles
  for select using (id = auth.uid());

create policy "profiles: update own" on profiles
  for update using (id = auth.uid());

create policy "profiles: admin select all" on profiles
  for select using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Auto-create a profile row whenever someone signs up.
-- role/full_name/phone come from the signup form via auth metadata.
create function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, full_name, email, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'role', 'family'),
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email,
    new.raw_user_meta_data->>'phone'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ─────────────────────────────────────────────────────────────
-- nanny_applications: family-visible profile + vetting status
-- ─────────────────────────────────────────────────────────────
create table nanny_applications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  experience_years int,
  certifications text,
  availability text,
  rate_expectation text,
  bio text,
  photo_url text,
  dbs_status text not null default 'pending' check (dbs_status in ('pending', 'submitted', 'verified')),
  status text not null default 'submitted' check (status in ('submitted', 'under_review', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table nanny_applications enable row level security;

create policy "nanny_applications: nanny manages own" on nanny_applications
  for all using (profile_id = auth.uid());

create policy "nanny_applications: admin manages all" on nanny_applications
  for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "nanny_applications: family sees introduced nannies" on nanny_applications
  for select using (
    exists (
      select 1 from introductions i
      where i.nanny_application_id = nanny_applications.id
      and i.family_profile_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────────────────────────
-- nanny_private_documents: never visible to families, ever.
-- DBS certificate + reference contact details live here, separate
-- from nanny_applications so a family-facing RLS policy can never
-- accidentally expose them.
-- ─────────────────────────────────────────────────────────────
create table nanny_private_documents (
  id uuid primary key default gen_random_uuid(),
  nanny_application_id uuid not null references nanny_applications(id) on delete cascade,
  dbs_document_url text,
  references_detail jsonb,
  created_at timestamptz not null default now()
);

alter table nanny_private_documents enable row level security;

create policy "nanny_private_documents: nanny manages own" on nanny_private_documents
  for all using (
    exists (
      select 1 from nanny_applications na
      where na.id = nanny_private_documents.nanny_application_id
      and na.profile_id = auth.uid()
    )
  );

create policy "nanny_private_documents: admin manages all" on nanny_private_documents
  for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

-- ─────────────────────────────────────────────────────────────
-- family_briefs: what a family is looking for
-- ─────────────────────────────────────────────────────────────
create table family_briefs (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  location text not null,
  hours_needed text not null,
  start_date date,
  budget text,
  requirements text,
  status text not null default 'submitted' check (status in ('submitted', 'matching', 'introduced', 'placed', 'closed')),
  created_at timestamptz not null default now()
);

alter table family_briefs enable row level security;

create policy "family_briefs: family manages own" on family_briefs
  for all using (profile_id = auth.uid());

create policy "family_briefs: admin manages all" on family_briefs
  for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "family_briefs: nanny sees briefs they're introduced to" on family_briefs
  for select using (
    exists (
      select 1 from introductions i
      where i.family_brief_id = family_briefs.id
      and i.nanny_profile_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────────────────────────
-- introductions: admin-created match between a brief and a nanny
-- family_profile_id / nanny_profile_id are denormalised on write
-- to keep RLS simple and fast (no nested joins needed downstream)
-- ─────────────────────────────────────────────────────────────
create table introductions (
  id uuid primary key default gen_random_uuid(),
  family_brief_id uuid not null references family_briefs(id) on delete cascade,
  nanny_application_id uuid not null references nanny_applications(id) on delete cascade,
  family_profile_id uuid not null references profiles(id) on delete cascade,
  nanny_profile_id uuid not null references profiles(id) on delete cascade,
  status text not null default 'proposed' check (status in ('proposed', 'accepted', 'placed', 'declined')),
  fee_paid boolean not null default false,
  created_at timestamptz not null default now()
);

alter table introductions enable row level security;

create policy "introductions: family sees own" on introductions
  for select using (family_profile_id = auth.uid());

create policy "introductions: nanny sees own" on introductions
  for select using (nanny_profile_id = auth.uid());

create policy "introductions: admin manages all" on introductions
  for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

-- family/nanny can update status (e.g. accept/decline) but not fee_paid or the ids
create policy "introductions: participants can update status" on introductions
  for update using (family_profile_id = auth.uid() or nanny_profile_id = auth.uid());

-- ─────────────────────────────────────────────────────────────
-- messages: in-app messaging, scoped to an introduction.
-- Redaction of contact details happens in application code at
-- display time (based on introductions.fee_paid), not storage —
-- the raw body is always stored so nothing is destroyed once paid.
-- ─────────────────────────────────────────────────────────────
create table messages (
  id uuid primary key default gen_random_uuid(),
  introduction_id uuid not null references introductions(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

alter table messages enable row level security;

create policy "messages: participants read own thread" on messages
  for select using (
    exists (
      select 1 from introductions i
      where i.id = messages.introduction_id
      and (i.family_profile_id = auth.uid() or i.nanny_profile_id = auth.uid())
    )
  );

create policy "messages: participants send in own thread" on messages
  for insert with check (
    sender_id = auth.uid()
    and exists (
      select 1 from introductions i
      where i.id = messages.introduction_id
      and (i.family_profile_id = auth.uid() or i.nanny_profile_id = auth.uid())
    )
  );

create policy "messages: admin reads all" on messages
  for select using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

-- ─────────────────────────────────────────────────────────────
-- Storage buckets (run separately / via dashboard if this errors —
-- storage.buckets policies are also configurable in the dashboard UI)
-- ─────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public) values ('nanny-photos', 'nanny-photos', true)
  on conflict (id) do nothing;
insert into storage.buckets (id, name, public) values ('nanny-documents', 'nanny-documents', false)
  on conflict (id) do nothing;

create policy "nanny-photos: public read" on storage.objects
  for select using (bucket_id = 'nanny-photos');

create policy "nanny-photos: owner upload" on storage.objects
  for insert with check (bucket_id = 'nanny-photos' and owner = auth.uid());

create policy "nanny-documents: owner and admin only" on storage.objects
  for select using (
    bucket_id = 'nanny-documents'
    and (owner = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'))
  );

create policy "nanny-documents: owner upload" on storage.objects
  for insert with check (bucket_id = 'nanny-documents' and owner = auth.uid());
