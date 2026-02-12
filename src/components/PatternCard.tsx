import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ChartPattern } from "@/data/patterns";

interface PatternCardProps {
  pattern: ChartPattern;
  index: number;
}

const PatternCard = ({ pattern, index }: PatternCardProps) => {
  return (
    <Link
      to={`/pattern/${pattern.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={pattern.image}
          alt={`${pattern.name} chart pattern`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            pattern.category === "reversal"
              ? "bg-destructive/10 text-destructive"
              : "bg-accent/10 text-accent"
          }`}>
            {pattern.category}
          </span>
        </div>
        <h3 className="mb-1 font-display text-lg font-bold text-foreground">
          {pattern.name}
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {pattern.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:gap-2">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default PatternCard;
