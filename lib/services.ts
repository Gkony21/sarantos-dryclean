import {
  BedDouble,
  Blinds,
  Car,
  Layers,
  Scissors,
  Shirt,
  Sofa,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Shown highlighted, as the shop's main line of work. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Χαλιά & μοκέτες",
    description: "Καθαρισμός και συντήρηση χαλιών και μοκετών κάθε τύπου.",
    icon: Layers,
    featured: true,
  },
  {
    title: "Επισκευή & φύλαξη χαλιών",
    description: "Επισκευή φθορών και φύλαξη των χαλιών σας σε κατάλληλο χώρο.",
    icon: Scissors,
  },
  {
    title: "Ρούχα",
    description: "Στεγνό καθάρισμα και πλύσιμο ρούχων.",
    icon: Shirt,
  },
  {
    title: "Παπλώματα, κουβέρτες & στρώματα",
    description: "Καθαρισμός για παπλώματα, κουβέρτες και στρώματα ύπνου.",
    icon: BedDouble,
  },
  {
    title: "Σιδέρωμα",
    description:
      "Επαγγελματικό σιδέρωμα για πουκάμισα, παντελόνια και λευκά είδη.",
    icon: Wind,
  },
  {
    title: "Νυφικά",
    description: "Προσεκτικός καθαρισμός και φρεσκάρισμα νυφικών.",
    icon: Sparkles,
  },
  {
    title: "Κουρτίνες",
    description: "Πλύσιμο και φρεσκάρισμα κουρτινών.",
    icon: Blinds,
  },
  {
    title: "Σαλόνια",
    description: "Καθαρισμός καναπέδων σαλονιών και επίπλων, στον χώρο σας.",
    icon: Sofa,
  },
  {
    title: "Σαλόνια αυτοκινήτου",
    description: "Καθαρισμός καθισμάτων αυτοκινήτου.",
    icon: Car,
  },
];
