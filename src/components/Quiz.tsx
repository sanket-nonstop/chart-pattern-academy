import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";
import { QuizQuestion } from "@/data/quiz";
import { useProgress } from "@/hooks/use-progress";

interface QuizProps {
  patternSlug: string;
  questions: QuizQuestion[];
}

const Quiz = ({ patternSlug, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { saveQuizScore, markPatternComplete } = useProgress();

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = Math.round((score / questions.length) * 100);
      saveQuizScore(patternSlug, finalScore);
      if (finalScore >= 70) {
        markPatternComplete(patternSlug);
      }
      setCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const finalScore = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <Trophy className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Quiz Complete!</h3>
        <p className="mb-6 text-lg text-muted-foreground">
          Your score: <span className="font-bold text-primary">{finalScore}%</span>
        </p>
        {finalScore >= 70 ? (
          <p className="mb-6 text-sm text-primary">🎉 Pattern marked as completed!</p>
        ) : (
          <p className="mb-6 text-sm text-muted-foreground">Score 70% or higher to mark as completed.</p>
        )}
        <Button onClick={handleReset}>Retake Quiz</Button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-primary">Score: {score}</span>
      </div>

      <h3 className="mb-6 text-lg font-semibold text-foreground">{question.question}</h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswer;
          const showCorrect = showExplanation && isCorrectAnswer;
          const showIncorrect = showExplanation && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full rounded-lg border p-4 text-left transition-all ${
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
                <span className="text-sm text-foreground">{option}</span>
                {showCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
                {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 rounded-lg bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <Button onClick={handleNext} className="mt-6 w-full">
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </Button>
      )}
    </div>
  );
};

export default Quiz;
