const EMAIL_PATTERN = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// UK mobile/landline, +44 international, and generic 9+ digit runs
// (with optional spaces/dashes) — deliberately broad since false
// positives (over-redacting) are far safer here than false negatives.
const PHONE_PATTERN = /(\+?\d[\d\s-]{7,}\d)/g;

/**
 * Strips emails and phone numbers from a message body. Used whenever a
 * message is displayed to participants of an introduction that hasn't
 * had its placement fee marked as paid yet — this is what stops a
 * family and nanny exchanging direct contact and cutting the agency
 * out of its fee.
 */
export function redactContactDetails(body: string): string {
  return body
    .replace(EMAIL_PATTERN, "[email hidden until fee paid]")
    .replace(PHONE_PATTERN, "[number hidden until fee paid]");
}

export function displayMessageBody(body: string, feePaid: boolean): string {
  return feePaid ? body : redactContactDetails(body);
}
