import {
  BedDouble,
  Car,
  Layers,
  Scissors,
  Shirt,
  Sofa,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Χαλιά & μοκέτες",
    description: "Καθαρισμός και συντήρηση χαλιών και μοκετών κάθε τύπου.",
    icon: Layers,
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
