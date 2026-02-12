import { useState } from "react";
import { practiceQuestions } from "@/data/practice";
import { patterns } from "@/data/patterns";
import { useDailyChallenge } from "@/hooks/use-daily-challenge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Calendar, Flame, CheckCircle2, XCircle } from "lucide-react";

const Daily = () => {
  const { dailyData, completeChallenge } = useDailyChallenge();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = practiceQuestions.find((q) => q.id === dailyData.questionId);
  if (!question) return null;

  const handleAnswer = (slug: string) => {
    if (selectedAnswer || dailyData.completed) return;
    setSelectedAnswer(slug);
    const correct = slug === question.correctAnswer;
    completeChallenge(correct);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <>
      <SEO title="Daily Challenge" description="Complete today's pattern recognition challenge" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <Calendar className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Daily Challenge</h1>
            <p className="text-muted-foreground">Complete one pattern challenge every day</p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="mb-1 flex items-center justify-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-display text-2xl font-bold text-foreground">{dailyData.streak}</span>
              </div>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </div>

          {dailyData.completed ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              {dailyData.correct ? (
                <>
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Challenge Complete!</h2>
                  <p className="text-muted-foreground">Come back tomorrow for a new challenge</p>
                </>
              ) : (
                <>
                  <XCircle className="mx-auto mb-4 h-16 w-16 text-destructive" />
                  <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Better luck tomorrow!</h2>
                  <p className="text-muted-foreground">Your streak has been reset. Try again tomorrow!</p>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="mb-8 overflow-hidden rounded-lg border border-border">
                <img src={question.image} alt="Chart pattern" className="w-full" />
              </div>

              <h2 className="mb-6 text-center text-xl font-semibold text-foreground">
                What pattern is this?
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {question.options.map((slug) => {
                  const pattern = patterns.find((p) => p.slug === slug);
                  if (!pattern) return null;

                  const isSelected = selectedAnswer === slug;
                  const showCorrect = selectedAnswer && slug === question.correctAnswer;
                  const showIncorrect = selectedAnswer && isSelected && !isCorrect;

                  return (
                    <button
                      key={slug}
                      onClick={() => handleAnswer(slug)}
                      disabled={!!selectedAnswer}
                      className={`rounded-lg border p-4 text-left transition-all ${
                        showCorrect
                          ? "border-primary bg-primary/10"
                          : showIncorrect
                          ? "border-destructive bg-destructive/10"
                          : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{pattern.name}</span>
                        {showCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
                        {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Daily;
