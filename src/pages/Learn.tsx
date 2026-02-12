import LearningPath from "@/components/LearningPath";
import SEO from "@/components/SEO";
import { GraduationCap } from "lucide-react";

const Learn = () => {
  return (
    <>
      <SEO
        title="Learning Path"
        description="Follow our structured learning path to master chart patterns from beginner to advanced level."
        canonical="https://chart-pattern-academy.com/learn"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-3 font-display text-3xl font-bold text-foreground">
              Your Learning Journey
            </h1>
            <p className="text-muted-foreground">
              Master chart patterns step-by-step. Start with beginner patterns and progress to advanced techniques.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-lg font-bold text-foreground">How it works</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">1.</span>
                <span>Start with beginner patterns (Double Top, Double Bottom)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">2.</span>
                <span>Complete the quiz with 70%+ score to unlock the next pattern</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">3.</span>
                <span>Progress through intermediate patterns as you build confidence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">4.</span>
                <span>Master advanced patterns for professional-level trading</span>
              </li>
            </ul>
          </div>

          <LearningPath />
        </div>
      </div>
    </>
  );
};

export default Learn;
