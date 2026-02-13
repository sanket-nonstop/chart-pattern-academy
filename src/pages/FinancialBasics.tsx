import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { financialModules } from "@/data/financial-basics";
import SEO from "@/components/SEO";

const FinancialBasics = () => {
  const completedModules = JSON.parse(localStorage.getItem("financial-basics-progress") || "[]");
  const progress = (completedModules.length / financialModules.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Financial Basics - Start Your Investment Journey"
        description="Learn financial literacy, compounding, stock market basics, SIP, and mutual funds before diving into chart patterns"
      />

      <div className="mb-8 text-center">
        <h1 className="mb-3 font-display text-4xl font-bold">Start Your Investment Journey</h1>
        <p className="text-lg text-muted-foreground">Master the basics before diving into chart patterns</p>
        
        <div className="mx-auto mt-6 max-w-md">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Your Progress</span>
            <span className="font-semibold">{completedModules.length}/{financialModules.length} modules</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
      </div>

      <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="mb-2 text-2xl font-bold">Why Start Here?</h2>
        <p className="mb-4 opacity-90">
          Chart patterns are powerful, but they're just one tool. Understanding financial basics, compounding, and investment vehicles will make you a complete investor.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
            <div className="text-2xl font-bold">💰</div>
            <div className="text-sm">Build Strong Foundation</div>
          </div>
          <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
            <div className="text-2xl font-bold">📈</div>
            <div className="text-sm">Understand Markets</div>
          </div>
          <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
            <div className="text-2xl font-bold">🎯</div>
            <div className="text-sm">Make Smart Decisions</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {financialModules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id);
          const isLocked = index > 0 && !completedModules.includes(financialModules[index - 1].id);

          return (
            <Card key={module.id} className={`relative overflow-hidden transition-all hover:shadow-lg ${isLocked ? "opacity-60" : ""}`}>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {module.icon}
                  </div>
                  {isCompleted && <CheckCircle2 className="h-6 w-6 text-green-500" />}
                  {isLocked && <Lock className="h-6 w-6 text-muted-foreground" />}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Module {module.order}</Badge>
                  {isCompleted && <Badge className="bg-green-500">Completed</Badge>}
                </div>
                <CardTitle className="mt-2">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                  <div>📚 {module.topics.length} topics</div>
                  <div>❓ {module.quiz.length} quiz questions</div>
                </div>
                <Link to={`/basics/${module.id}`}>
                  <Button className="w-full" disabled={isLocked}>
                    {isLocked ? "Complete Previous Module" : isCompleted ? "Review Module" : "Start Learning"}
                    {!isLocked && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {progress === 100 && (
        <div className="mt-8 rounded-lg border-2 border-green-500 bg-green-50 p-6 text-center dark:bg-green-950">
          <div className="mb-3 text-4xl">🎉</div>
          <h3 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-300">Congratulations!</h3>
          <p className="mb-4 text-green-600 dark:text-green-400">
            You've completed all financial basics modules. You're ready to learn chart patterns!
          </p>
          <Link to="/learn">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Learning Chart Patterns <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FinancialBasics;
