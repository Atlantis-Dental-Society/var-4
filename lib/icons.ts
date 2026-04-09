import {
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  FileCheck,
  Handshake,
  Users,
  BookOpen,
  Lightbulb,
  MessageSquare,
  ClipboardList,
  FileText,
  CheckSquare,
  Sparkles,
  Stethoscope,
  FlaskConical,
  Award,
  Link2,
  FolderOpen,
  UserCheck,
  Target,
  Globe,
  Building2,
  Megaphone,
  PresentationIcon,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  FileCheck,
  Handshake,
  Users,
  BookOpen,
  Lightbulb,
  MessageSquare,
  ClipboardList,
  FileText,
  CheckSquare,
  Sparkles,
  Stethoscope,
  FlaskConical,
  Award,
  Link2,
  FolderOpen,
  UserCheck,
  Target,
  Globe,
  Building2,
  Megaphone,
  PresentationIcon,
};

export const iconNames = Object.keys(iconMap);

export function getIcon(name?: string | null): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
