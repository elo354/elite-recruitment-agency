// Decorative dotted arc — used behind trust badges / stat rows to add a
// sense of orbit and precision without competing with the content on top.
export default function DottedArc({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <circle
        cx="400"
        cy="500"
        r="380"
        stroke="#f5c518"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle
        cx="400"
        cy="500"
        r="320"
        stroke="#1a3db5"
        strokeWidth="1"
        strokeDasharray="1 8"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}
