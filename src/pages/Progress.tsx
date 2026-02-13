import { Link } from "react-router-dom";
import { useProgress } from "@/hooks/use-progress";
import { patterns } from "@/data/patterns";
import { candlestickPatterns } from "@/data/candlestick-patterns";
import SEO from "@/components/SEO";
import { Trophy, Target, BookOpen, RotateCcw, BarChart3, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Progress = () => {
  const { progress, resetProgress } = useProgress();
  const totalPatterns = patterns.length;
  const totalCandlesticks = candlestickPatterns.length;
  const totalAll = totalPatterns + totalCandlesticks;
  const completedCount = progress.completedPatterns.length;
  const completionRate = Math.round((completedCount / totalPatterns) * 100);
  const averageScore = Object.values(progress.quizScores).length > 0
    ? Math.round(
        Object.values(progress.quizScores).reduce((a, b) => a + b, 0) /
          Object.values(progress.quizScores).length
      )
    : 0;

  return (
    <>
      <SEO
        title="Your Progress"
        description="Track your learning progress and quiz scores for chart patterns."
        canonical="https://chart-pattern-academy.com/progress"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-display text-3xl font-bold text-foreground">Your Progress</h1>
            <Button variant="outline" size="sm" onClick={resetProgress}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Progress
            </Button>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Chart Patterns</span>
              </div>
              <p className="font-display text-3xl font-bold text-foreground">
                {completedCount}/{totalPatterns}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-2 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Candlestick Patterns</span>
              </div>
              <p className="font-display text-3xl font-bold text-foreground">
                0/{totalCandlesticks}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Total Progress</span>
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{completionRate}%</p>
              <p className="text-xs text-muted-foreground mt-1">{completedCount}/{totalAll} patterns</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-2 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Average Quiz Score</span>
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{averageScore}%</p>
            </div>
          </div>

          {/* Pattern List */}
          <div className="rounded-lg border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-display text-xl font-bold text-foreground">Pattern Progress</h2>
            </div>
            <div className="divide-y divide-border">
              {patterns.map((pattern) => {
                const isCompleted = progress.completedPatterns.includes(pattern.slug);
                const quizScore = progress.quizScores[pattern.slug];

                return (
                  <Link
                    key={pattern.slug}
                    to={`/pattern/${pattern.slug}`}
                    className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-10 w-10 rounded-lg ${
                          isCompleted ? "bg-primary/10" : "bg-muted"
                        } flex items-center justify-center`}
                      >
                        {isCompleted ? (
                          <Trophy className="h-5 w-5 text-primary" />
                        ) : (
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{pattern.name}</p>
                        <p className="text-sm text-muted-foreground capitalize">{pattern.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {quizScore !== undefined ? (
                        <p className="text-sm font-medium text-primary">{quizScore}%</p>
                      ) : (
                        <p className="text-sm text-muted-foreground">Not attempted</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
