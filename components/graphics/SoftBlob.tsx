// Soft, out-of-focus gradient shape used to add depth behind hero/section
// content. Purely decorative and abstract — never a photo of a person,
// since we don't have real client/nanny photography to use honestly.
export default function SoftBlob({
  color = "gold",
  className = "",
}: {
  color?: "gold" | "navy";
  className?: string;
}) {
  const fill = color === "gold" ? "#f5c518" : "#1a3db5";
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={`blur-${color}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
      </defs>
      <path
        d="M421.5 76.3c56.8 41.6 100.9 104.9 108.6 172.6 7.7 67.7-21 139.8-70.6 190.7-49.6 50.9-120.1 80.6-190.4 74.6-70.3-6-140.4-47.6-172.8-108.6-32.4-61-27.1-141.5 13.1-197.6C149.9 151.9 226 121 300.5 100.6c74.5-20.4 64.2-65.9 121-24.3Z"
        fill={fill}
        opacity="0.16"
        filter={`url(#blur-${color})`}
      />
    </svg>
  );
}
