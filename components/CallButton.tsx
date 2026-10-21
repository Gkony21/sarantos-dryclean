import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { buttonSizes } from "@/lib/ui";

type Props = {
  size?: keyof typeof buttonSizes;
  label?: string;
};

export default function CallButton({
  size = "sm",
  label = site.mobile.display,
}: Props) {
  return (
    <a
      href={`tel:${site.mobile.tel}`}
      className={`flex items-center justify-center gap-2 rounded-full bg-brand-green font-bold text-white transition-colors hover:bg-brand-forest ${buttonSizes[size]}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      {/* On the narrowest phones (320px) a long label may wrap rather than widen the page. */}
      <span className="min-[360px]:whitespace-nowrap">{label}</span>
    </a>
  );
}
