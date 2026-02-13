import { useState, useMemo } from "react";
import { practiceQuestions } from "@/data/practice";
import { patterns } from "@/data/patterns";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Target, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Practice = () => {
  const [shuffledQuestions] = useState(() => shuffleArray(practiceQuestions));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = shuffledQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (slug: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(slug);
    const correct = slug === question.correctAnswer;
    if (correct) setScore(score + 1);
    setAnswers([...answers, correct]);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    window.location.reload(); // Reload to get new shuffle
  };

  const accuracy = completed ? Math.round((score / shuffledQuestions.length) * 100) : 0;

  if (completed) {
    return (
      <>
        <SEO title="Practice Results" description="Your pattern recognition practice results" />
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <Target className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Practice Complete!</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              You scored <span className="font-bold text-primary">{score}/{shuffledQuestions.length}</span> ({accuracy}%)
            </p>
            <div className="mb-8 grid gap-2">
              {answers.map((correct, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
                  <span className="text-sm text-foreground">Question {i + 1}</span>
                  {correct ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              ))}
            </div>
            <Button onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Practice Again
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Pattern Recognition Practice" description="Practice identifying chart patterns" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold text-foreground">Pattern Recognition</h1>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </span>
          </div>

          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <div className="mb-8 overflow-hidden rounded-lg border border-border">
            <img src={question.image} alt="Chart pattern" className="w-full" />
          </div>

          <h2 className="mb-6 text-center text-xl font-semibold text-foreground">
            What pattern is this?
          </h2>

          <div className="mb-6 grid gap-3 sm:grid-cols-2">
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

          {selectedAnswer && (
            <div className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                {isCorrect ? "✓ Correct!" : `✗ Incorrect. The correct answer is ${patterns.find(p => p.slug === question.correctAnswer)?.name}`}
              </p>
              <Button onClick={handleNext}>
                {currentQuestion < shuffledQuestions.length - 1 ? "Next Question" : "Finish"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Practice;
