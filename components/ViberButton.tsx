import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { buttonSizes } from "@/lib/ui";

type Props = {
  size?: keyof typeof buttonSizes;
  label?: string;
  compact?: boolean;
};

export default function ViberButton({
  size = "sm",
  label = "Viber",
  compact = false,
}: Props) {
  return (
    <a
      href={site.viber}
      aria-label="Στείλτε μήνυμα στο Viber"
      className={`flex items-center justify-center gap-2 rounded-md border-2 border-brand-green bg-white font-bold text-brand-green ${buttonSizes[size]}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className={compact ? "hidden sm:inline" : ""}>{label}</span>
    </a>
  );
}
