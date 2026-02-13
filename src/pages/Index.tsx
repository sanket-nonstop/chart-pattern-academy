import { useState, useMemo, useEffect } from "react";
import { patterns } from "@/data/patterns";
import { DifficultyLevel } from "@/data/patterns";
import PatternCard from "@/components/PatternCard";
import SearchFilter from "@/components/SearchFilter";
import SEO from "@/components/SEO";
import { TrendingUp, TrendingDown, Activity, Zap, Target, BarChart3, Sparkles, Calculator, GraduationCap, ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "reversal" | "continuation">("all");
  const [difficulty, setDifficulty] = useState<"all" | DifficultyLevel>("all");
  const [marketIndex, setMarketIndex] = useState(75432);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 200;
      setMarketIndex(prev => Math.max(70000, Math.min(80000, prev + change)));
      setPriceChange(change);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredPatterns = useMemo(() => {
    return patterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(search.toLowerCase()) ||
        pattern.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || pattern.category === category;
      const matchesDifficulty = difficulty === "all" || pattern.difficulty === difficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    }).sort((a, b) => a.learningOrder - b.learningOrder);
  }, [search, category, difficulty]);

  return (
    <>
      <SEO
        title="Master Chart Patterns"
        description="Learn stock chart patterns with clear explanations and real examples. Master technical analysis patterns including Head & Shoulders, Double Top, Cup & Handle, and more."
        keywords="chart patterns, technical analysis, stock trading, candlestick patterns, trading education, head and shoulders, double top, cup and handle"
        canonical="https://chart-pattern-academy.com"
      />
      {/* Hero - Trading Terminal Style */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-primary/5 to-background">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5">
              <Zap className="h-4 w-4 text-green-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-500">
                Professional Trading Education
              </span>
            </div>

            <h1 className="mb-4 font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Master the <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Market</span>
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-muted-foreground md:text-3xl">
              Learn Chart Patterns Like a Pro Trader
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              From financial basics to advanced technical analysis. Interactive tools, real-time practice, and proven strategies used by professional traders.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/basics">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:text-white">
                  <Sparkles className="h-5 w-5" />
                  Start Learning Free
                </Button>
              </Link>
              <a href="#patterns">
                <Button size="lg" variant="outline" className="gap-2 border-green-500/50 hover:bg-green-500/10 hover:text-green-400">
                  <BarChart3 className="h-5 w-5" />
                  Explore Patterns
                </Button>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Chart Patterns", value: "17", icon: BarChart3 },
                { label: "Candlestick Patterns", value: "30", icon: Activity },
                { label: "Interactive Tools", value: "10+", icon: Calculator },
                { label: "Success Stories", value: "1000+", icon: TrendingUp },
              ].map((stat) => (
                <Card key={stat.label} className="border-primary/20 bg-card/50 p-4 backdrop-blur">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="font-mono text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Terminal Dashboard */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-display text-3xl font-bold">Your Trading Education Hub</h2>
            <p className="text-muted-foreground">Everything you need to become a confident trader</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Beginner Path */}
            <Card className="group relative overflow-hidden border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 transition-all hover:border-blue-500 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-blue-500 p-2">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-bold text-blue-600 dark:text-blue-400">START HERE</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Financial Basics</h3>
                <p className="mb-4 text-sm text-muted-foreground">Master investing fundamentals, compounding, SIP, and market basics in 5 interactive modules</p>
                <Link to="/basics">
                  <Button className="w-full gap-2 bg-blue-500 hover:bg-blue-600">
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Chart Patterns */}
            <Card className="group relative overflow-hidden border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 transition-all hover:border-green-500 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-green-500/20 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-green-500 p-2">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-600 dark:text-green-400">POPULAR</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Chart Patterns</h3>
                <p className="mb-4 text-sm text-muted-foreground">Learn 17 chart patterns + 30 candlestick patterns with practice quizzes, flashcards, and real trading examples</p>
                <Link to="/learn">
                  <Button className="w-full gap-2 bg-green-500 hover:bg-green-600">
                    View Patterns <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Trading Tools */}
            <Card className="group relative overflow-hidden border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 p-6 transition-all hover:border-orange-500 hover:shadow-xl">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-orange-500/20 blur-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-orange-500 p-2">
                    <Calculator className="h-5 w-5 text-white" />
                  </div>
                  <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-600 dark:text-orange-400">TOOLS</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Trading Tools</h3>
                <p className="mb-4 text-sm text-muted-foreground">Risk calculator, trade journal, pattern stats, and glossary for smart trading decisions</p>
                <Link to="/calculator">
                  <Button className="w-full gap-2 bg-orange-500 hover:bg-orange-600">
                    Use Tools <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pattern Grid */}
      <section id="patterns" className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Technical Analysis</span>
            </div>
            <h2 className="mb-2 font-display text-4xl font-bold">Master Chart Patterns</h2>
            <p className="text-lg text-muted-foreground">17 professional chart patterns used by successful traders worldwide</p>
          </div>
          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
          {filteredPatterns.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPatterns.map((pattern, i) => (
                <PatternCard key={pattern.slug} pattern={pattern} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No patterns found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Market Stats */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-lg border bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6">
              <div className="rounded-full bg-green-500 p-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">47 Total</div>
                <div className="text-sm text-muted-foreground">Chart + Candlestick Patterns</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6">
              <div className="rounded-full bg-blue-500 p-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">50+ Tests</div>
                <div className="text-sm text-muted-foreground">Practice Questions</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6">
              <div className="rounded-full bg-orange-500 p-3">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">100% Free</div>
                <div className="text-sm text-muted-foreground">No Hidden Costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
