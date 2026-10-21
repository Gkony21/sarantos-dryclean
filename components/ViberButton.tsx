import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { buttonSizes } from "@/lib/ui";

type Props = {
  size?: keyof typeof buttonSizes;
  label?: string;
};

export default function ViberButton({ size = "sm", label = "Viber" }: Props) {
  return (
    <a
      href={site.viber}
      aria-label="Στείλτε μήνυμα στο Viber"
      className={`flex items-center justify-center gap-2 rounded-full bg-brand-mist font-bold text-brand-ink transition-colors hover:bg-brand-mint ${buttonSizes[size]}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{label}</span>
    </a>
  );
}
