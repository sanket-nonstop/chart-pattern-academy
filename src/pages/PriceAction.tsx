import { useState } from "react";
import { priceActionConcepts, priceActionQuiz } from "@/data/price-action";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { TrendingUp, CheckCircle2, XCircle, BarChart3, Target, Lightbulb, AlertTriangle } from "lucide-react";

const PriceAction = () => {
  const [selectedConcept, setSelectedConcept] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(Array(priceActionQuiz.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    if (showResults) return;
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers(Array(priceActionQuiz.length).fill(null));
    setShowResults(false);
  };

  const score = quizAnswers.filter((answer, i) => answer === priceActionQuiz[i].correctAnswer).length;
  const allAnswered = quizAnswers.every(a => a !== null);

  return (
    <>
      <SEO
        title="Price Action Trading for Beginners"
        description="Learn price action trading from scratch. Understand support, resistance, trends, candlesticks, and market structure with real examples."
        keywords="price action, trading, support resistance, candlesticks, market structure, technical analysis"
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-background via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Beginner Friendly</span>
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Master Price Action Trading</h1>
            <p className="text-lg text-muted-foreground">
              Learn to read the market like a professional trader. No complicated indicators - just pure price movement, support, resistance, and market psychology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 p-4">
                <h3 className="mb-4 font-semibold">Concepts</h3>
                <div className="space-y-2">
                  {priceActionConcepts.map((concept, index) => (
                    <button
                      key={concept.id}
                      onClick={() => setSelectedConcept(index)}
                      className={`w-full rounded-lg p-3 text-left text-sm transition-all ${
                        selectedConcept === index
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="font-medium">{index + 1}. {concept.title}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="mb-2 text-sm font-semibold text-primary">
                    Concept {selectedConcept + 1} of {priceActionConcepts.length}
                  </div>
                  <h2 className="mb-4 font-display text-3xl font-bold">
                    {priceActionConcepts[selectedConcept].title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {priceActionConcepts[selectedConcept].description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Key Points</h3>
                  </div>
                  <ul className="space-y-2">
                    {priceActionConcepts[selectedConcept].keyPoints.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Real Examples</h3>
                  </div>
                  <div className="space-y-3">
                    {priceActionConcepts[selectedConcept].examples.map((example, i) => (
                      <div key={i} className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                        <p className="text-sm text-muted-foreground">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <h3 className="font-semibold">Common Mistakes to Avoid</h3>
                  </div>
                  <ul className="space-y-2">
                    {priceActionConcepts[selectedConcept].commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex gap-3">
                        <XCircle className="h-5 w-5 flex-shrink-0 text-orange-500" />
                        <span className="text-sm text-muted-foreground">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation */}
                <div className="flex justify-between border-t pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedConcept(Math.max(0, selectedConcept - 1))}
                    disabled={selectedConcept === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSelectedConcept(Math.min(priceActionConcepts.length - 1, selectedConcept + 1))}
                    disabled={selectedConcept === priceActionConcepts.length - 1}
                  >
                    Next Concept
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-2 font-display text-3xl font-bold">Test Your Knowledge</h2>
              <p className="text-muted-foreground">
                {showResults
                  ? `You scored ${score}/${priceActionQuiz.length} (${Math.round((score / priceActionQuiz.length) * 100)}%)`
                  : "Answer all questions to see how well you understand price action"}
              </p>
            </div>

            <div className="space-y-6">
              {priceActionQuiz.map((q, qIndex) => (
                <Card key={q.id} className="p-6">
                  <h3 className="mb-4 font-semibold">
                    {qIndex + 1}. {q.question}
                  </h3>
                  <div className="space-y-2">
                    {q.options.map((option, oIndex) => {
                      const isSelected = quizAnswers[qIndex] === oIndex;
                      const isCorrect = oIndex === q.correctAnswer;
                      const showCorrect = showResults && isCorrect;
                      const showIncorrect = showResults && isSelected && !isCorrect;

                      return (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          disabled={showResults}
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
                            <span>{option}</span>
                            {showCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
                            {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <div className="mt-4 rounded-lg bg-muted p-4">
                      <p className="text-sm text-muted-foreground">{q.explanation}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              {!showResults ? (
                <Button size="lg" onClick={handleSubmitQuiz} disabled={!allAnswered}>
                  {allAnswered ? "Submit Quiz" : `Answer all questions (${quizAnswers.filter(a => a !== null).length}/${priceActionQuiz.length})`}
                </Button>
              ) : (
                <Button size="lg" onClick={handleResetQuiz} variant="outline">
                  Retake Quiz
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceAction;
