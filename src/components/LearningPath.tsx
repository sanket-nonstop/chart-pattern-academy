import { Link } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useProgress } from "@/hooks/use-progress";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import DifficultyBadge from "@/components/DifficultyBadge";

const LearningPath = () => {
  const { isPatternComplete } = useProgress();
  const sortedPatterns = [...patterns].sort((a, b) => a.learningOrder - b.learningOrder);

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Learning Path</h2>
        <p className="text-sm text-muted-foreground">
          Follow this recommended order to build your skills from beginner to advanced
        </p>
      </div>

      <div className="relative space-y-4">
        {/* Vertical line */}
        <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-border" />

        {sortedPatterns.map((pattern, index) => {
          const completed = isPatternComplete(pattern.slug);
          const prevCompleted = index === 0 || isPatternComplete(sortedPatterns[index - 1].slug);
          const isLocked = !prevCompleted && !completed;

          return (
            <Link
              key={pattern.slug}
              to={isLocked ? "#" : `/pattern/${pattern.slug}`}
              className={`relative flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all ${
                isLocked
                  ? "cursor-not-allowed opacity-60"
                  : "hover:border-primary/30 hover:shadow-md"
              }`}
              onClick={(e) => isLocked && e.preventDefault()}
            >
              {/* Step indicator */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                {completed ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : isLocked ? (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium text-muted-foreground">
                    Step {pattern.learningOrder}
                  </span>
                  <DifficultyBadge level={pattern.difficulty} />
                  {isLocked && (
                    <span className="text-xs text-muted-foreground">
                      Complete previous pattern to unlock
                    </span>
                  )}
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{pattern.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {pattern.shortDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
