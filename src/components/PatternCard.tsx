import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ChartPattern } from "@/data/patterns";
import ProgressIndicator from "@/components/ProgressIndicator";
import DifficultyBadge from "@/components/DifficultyBadge";
import BookmarkButton from "@/components/BookmarkButton";
import OptimizedImage from "@/components/OptimizedImage";

interface PatternCardProps {
  pattern: ChartPattern;
  index: number;
}

const PatternCard = ({ pattern, index }: PatternCardProps) => {
  const isBullish = pattern.category === "continuation";

  return (
    <Link
      to={`/pattern/${pattern.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:glow-green-sm"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Category indicator line */}
      <div className={`h-0.5 w-full ${isBullish ? "bg-primary" : "bg-bearish"}`} />

      <div className="aspect-[16/10] overflow-hidden">
        <OptimizedImage
          src={pattern.image}
          alt={`${pattern.name} chart pattern`}
          className="h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 ">
            <span className={`rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              isBullish
                ? "bg-primary/10 text-primary"
                : "bg-bearish/10 text-bearish"
            }`}>
              {pattern.category}
            </span>
            <DifficultyBadge level={pattern.difficulty} showIcon={false} />
          </div>
          <div className="flex items-center gap-1">
            <ProgressIndicator slug={pattern.slug} />
            <BookmarkButton slug={pattern.slug} />
          </div>
        </div>
        <h3 className="mb-1.5 font-display text-lg font-bold text-foreground">
          {pattern.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {pattern.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          Learn pattern <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
};

export default PatternCard;
