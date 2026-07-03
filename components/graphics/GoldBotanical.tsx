// Abstract line-art botanical motif — a nod to the "nursery/nurture" theme
// without depicting people. Single continuous gold stroke, kept thin so it
// reads as a refined linework detail rather than clipart.
export default function GoldBotanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <path
        d="M130 10C130 10 128 90 130 160C132 230 130 390 130 390"
        stroke="#f5c518"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[60, 110, 160, 210, 260, 310].map((y, i) => (
        <path
          key={y}
          d={
            i % 2 === 0
              ? `M130 ${y} C 110 ${y - 20}, 70 ${y - 10}, 55 ${y + 15} C 70 ${y + 35}, 110 ${y + 30}, 130 ${y + 10}`
              : `M130 ${y} C 150 ${y - 20}, 190 ${y - 10}, 205 ${y + 15} C 190 ${y + 35}, 150 ${y + 30}, 130 ${y + 10}`
          }
          stroke="#f5c518"
          strokeWidth="1.25"
          opacity="0.7"
        />
      ))}
      <circle cx="130" cy="10" r="4" fill="#f5c518" />
    </svg>
  );
}
