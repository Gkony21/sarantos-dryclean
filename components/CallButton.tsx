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
      className={`flex items-center justify-center gap-2 rounded-md bg-brand-green font-bold text-white ${buttonSizes[size]}`}
    >
      <Phone className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
