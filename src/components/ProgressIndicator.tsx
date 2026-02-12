import { CheckCircle2, Circle } from "lucide-react";
import { useProgress } from "@/hooks/use-progress";

interface ProgressIndicatorProps {
  slug: string;
  className?: string;
}

const ProgressIndicator = ({ slug, className = "" }: ProgressIndicatorProps) => {
  const { isPatternComplete } = useProgress();
  const completed = isPatternComplete(slug);

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {completed ? (
        <>
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-primary">Completed</span>
        </>
      ) : (
        <>
          <Circle className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Not started</span>
        </>
      )}
    </div>
  );
};

export default ProgressIndicator;
