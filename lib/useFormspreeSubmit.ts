"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function useFormspreeSubmit(action: string, redirectType: string) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        router.push(`/thank-you?type=${redirectType}`);
        return;
      }
      setError("Something went wrong submitting the form. Please try again or contact us directly.");
    } catch {
      setError("Something went wrong submitting the form. Please try again or contact us directly.");
    }
    setSubmitting(false);
  }

  return { handleSubmit, submitting, error };
}
