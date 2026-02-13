import { useState } from "react";
import { caseStudies } from "@/data/advanced-features";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { TrendingUp, Calendar, Clock, Target, Lightbulb, BookOpen } from "lucide-react";

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Case Studies - Famous Pattern Trades"
        description="Learn from real Indian market trades using chart patterns. Reliance, TCS, HDFC Bank case studies."
      />

      <div className="mb-8 text-center">
        <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h1 className="mb-3 font-display text-4xl font-bold">Case Studies</h1>
        <p className="text-lg text-muted-foreground">Learn from famous trades in Indian markets</p>
      </div>

      <div className="mb-8 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6">
        <h2 className="mb-2 text-xl font-bold">Why Case Studies Matter</h2>
        <p className="text-muted-foreground">
          Real trades from Indian markets showing how patterns work in practice. Learn entry/exit timing, risk management, and market context from actual successful trades.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-1">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className={`cursor-pointer transition-all hover:border-primary ${
                selectedStudy.id === study.id ? "border-2 border-primary bg-primary/5" : ""
              }`}
              onClick={() => setSelectedStudy(study)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{study.stock}</CardTitle>
                    <CardDescription>{study.date}</CardDescription>
                  </div>
                  <Badge className={study.profit > 20 ? "bg-green-500" : "bg-blue-500"}>
                    +{study.profit}%
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">{selectedStudy.title}</CardTitle>
                <CardDescription className="mt-2 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {selectedStudy.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedStudy.duration}
                  </span>
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-lg">
                {selectedStudy.sector}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <p className="text-sm text-muted-foreground">Entry Price</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{selectedStudy.entry}</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm text-muted-foreground">Exit Price</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">₹{selectedStudy.exit}</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
                <p className="text-sm text-muted-foreground">Profit</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">+{selectedStudy.profit}%</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Target className="h-5 w-5 text-primary" />
                The Trade Story
              </h3>
              <p className="text-muted-foreground">{selectedStudy.story}</p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Key Lessons
              </h3>
              <ul className="space-y-2">
                {selectedStudy.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <p className="text-sm font-semibold text-primary">Pattern Used</p>
              <p className="text-lg font-bold capitalize">{selectedStudy.patternSlug.replace(/-/g, " ")}</p>
              <p className="text-sm text-muted-foreground">Timeframe: {selectedStudy.timeframe}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h3 className="mb-4 text-xl font-bold">Important Notes</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>These are historical trades for educational purposes only</span>
          </li>
          <li className="flex gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Past performance does not guarantee future results</span>
          </li>
          <li className="flex gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Always use proper risk management and position sizing</span>
          </li>
          <li className="flex gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Market conditions and sector trends play crucial roles</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseStudies;
