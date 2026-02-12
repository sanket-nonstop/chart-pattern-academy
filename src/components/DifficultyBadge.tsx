import { DifficultyLevel } from "@/data/patterns";
import { Zap, TrendingUp, Flame } from "lucide-react";

interface DifficultyBadgeProps {
  level: DifficultyLevel;
  showIcon?: boolean;
}

const difficultyConfig = {
  beginner: {
    label: "Beginner",
    icon: Zap,
    className: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  intermediate: {
    label: "Intermediate",
    icon: TrendingUp,
    className: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  },
  advanced: {
    label: "Advanced",
    icon: Flame,
    className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
};

const DifficultyBadge = ({ level, showIcon = true }: DifficultyBadgeProps) => {
  const config = difficultyConfig[level];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${config.className}`}>
      {showIcon && <Icon className="h-3 w-3" />}
      {config.label}
    </span>
  );
};

export default DifficultyBadge;
