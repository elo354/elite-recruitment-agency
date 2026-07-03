import { ShieldCheck, BadgeCheck, Star } from "lucide-react";

const ICONS = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  star: Star,
} as const;

export default function TrustBadge({
  icon = "shield",
  label,
}: {
  icon?: keyof typeof ICONS;
  label: string;
}) {
  const Icon = ICONS[icon];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-soft text-navy-dark text-xs font-semibold">
      <Icon size={14} aria-hidden="true" />
      {label}
    </span>
  );
}
