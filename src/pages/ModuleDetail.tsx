import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { financialModules } from "@/data/financial-basics";
import FinancialCalculators from "@/components/FinancialCalculators";
import { useToast } from "@/hooks/use-toast";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const module = financialModules.find((m) => m.id === moduleId);

  const [currentTopic, setCurrentTopic] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!module) return <div className="container py-8">Module not found</div>;

  const progress = ((currentTopic + 1) / module.topics.length) * 100;

  const handleNext = () => {
    if (currentTopic < module.topics.length - 1) {
      setCurrentTopic(currentTopic + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    const correct = quizAnswers.filter((ans, idx) => ans === module.quiz[idx].correct).length;
    const score = (correct / module.quiz.length) * 100;

    if (score >= 60) {
      const completed = JSON.parse(localStorage.getItem("financial-basics-progress") || "[]");
      if (!completed.includes(module.id)) {
        completed.push(module.id);
        localStorage.setItem("financial-basics-progress", JSON.stringify(completed));
      }
      toast({
        title: "Module Completed! 🎉",
        description: `You scored ${score.toFixed(0)}%. Great job!`,
      });
    } else {
      toast({
        title: "Keep Learning",
        description: `You scored ${score.toFixed(0)}%. Review the topics and try again.`,
        variant: "destructive",
      });
    }
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setQuizSubmitted(false);
    setShowQuiz(false);
    setCurrentTopic(0);
  };

  if (showQuiz) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <Button variant="ghost" onClick={() => setShowQuiz(false)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Quiz: {module.title}</CardTitle>
            <CardDescription>Test your understanding (60% to pass)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {module.quiz.map((q, idx) => (
              <div key={idx} className="space-y-3">
                <p className="font-semibold">
                  {idx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((option, optIdx) => {
                    const isSelected = quizAnswers[idx] === optIdx;
                    const isCorrect = optIdx === q.correct;
                    const showResult = quizSubmitted;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => {
                          if (!quizSubmitted) {
                            const newAnswers = [...quizAnswers];
                            newAnswers[idx] = optIdx;
                            setQuizAnswers(newAnswers);
                          }
                        }}
                        disabled={quizSubmitted}
                        className={`w-full rounded-lg border-2 p-3 text-left transition-all ${
                          showResult && isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : showResult && isSelected && !isCorrect
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {option}
                        {showResult && isCorrect && " ✓"}
                        {showResult && isSelected && !isCorrect && " ✗"}
                      </button>
                    );
                  })}
                </div>
                {quizSubmitted && (
                  <div className="rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">Explanation:</p>
                    <p className="text-blue-600 dark:text-blue-400">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-3">
              {!quizSubmitted ? (
                <Button onClick={handleQuizSubmit} disabled={quizAnswers.length !== module.quiz.length} className="w-full">
                  Submit Quiz
                </Button>
              ) : (
                <>
                  <Button onClick={resetQuiz} variant="outline" className="w-full">
                    Retake Quiz
                  </Button>
                  <Link to="/basics" className="w-full">
                    <Button className="w-full">Back to Modules</Button>
                  </Link>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const topic = module.topics[currentTopic];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Link to="/basics">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Modules
        </Button>
      </Link>

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <Badge>{module.icon} Module {module.order}</Badge>
          <span className="text-sm text-muted-foreground">
            Topic {currentTopic + 1} of {module.topics.length}
          </span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold">{module.title}</h1>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            {topic.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">{topic.content}</p>

          {topic.example && (
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <div className="mb-2 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                <Lightbulb className="h-4 w-4" />
                Real Example
              </div>
              <p className="text-green-600 dark:text-green-400">{topic.example}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {module.id === "compounding" && currentTopic === 0 && (
        <div className="mb-6">
          <FinancialCalculators />
        </div>
      )}

      <div className="flex gap-3">
        <Button onClick={() => setCurrentTopic(Math.max(0, currentTopic - 1))} disabled={currentTopic === 0} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={handleNext} className="flex-1">
          {currentTopic === module.topics.length - 1 ? "Take Quiz" : "Next Topic"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ModuleDetail;
