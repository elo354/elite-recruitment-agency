import { Suspense } from "react";
import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Sign Up | Elite Recruitment Agency",
};

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
