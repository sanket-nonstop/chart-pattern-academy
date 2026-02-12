import { useState } from "react";
import { indicators } from "@/data/indicators";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import DifficultyBadge from "@/components/DifficultyBadge";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";

const Indicators = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "trend" | "momentum" | "volatility" | "volume">("all");
  const [selectedIndicator, setSelectedIndicator] = useState(indicators[0]);

  const filteredIndicators = selectedCategory === "all" 
    ? indicators 
    : indicators.filter(i => i.category === selectedCategory);

  const categoryIcons = {
    trend: TrendingUp,
    momentum: Activity,
    volatility: BarChart3,
    volume: BarChart3,
  };

  return (
    <>
      <SEO title="Technical Indicators" description="Learn how to use technical indicators for trading" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Activity className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Technical Indicators</h1>
            <p className="text-muted-foreground">Master the tools professional traders use</p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Indicators
            </Button>
            <Button
              variant={selectedCategory === "trend" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("trend")}
            >
              Trend
            </Button>
            <Button
              variant={selectedCategory === "momentum" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("momentum")}
            >
              Momentum
            </Button>
            <Button
              variant={selectedCategory === "volatility" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("volatility")}
            >
              Volatility
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Indicator List */}
            <div className="space-y-2">
              {filteredIndicators.map((indicator) => {
                const Icon = categoryIcons[indicator.category];
                return (
                  <button
                    key={indicator.id}
                    onClick={() => setSelectedIndicator(indicator)}
                    className={`w-full rounded-lg border p-4 text-left transition-all ${
                      selectedIndicator.id === indicator.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{indicator.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground capitalize">{indicator.category}</span>
                      <DifficultyBadge level={indicator.difficulty} showIcon={false} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Indicator Details */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-foreground">{selectedIndicator.name}</h2>
                    <DifficultyBadge level={selectedIndicator.difficulty} />
                  </div>
                  <p className="text-muted-foreground">{selectedIndicator.description}</p>
                </div>

                <div className="space-y-6">
                  <Section title="What It Does">
                    <p className="text-muted-foreground">{selectedIndicator.whatItDoes}</p>
                  </Section>

                  <Section title="How To Use">
                    <p className="text-muted-foreground">{selectedIndicator.howToUse}</p>
                  </Section>

                  <Section title="Bullish Signals">
                    <div className="space-y-2">
                      {selectedIndicator.signals.bullish.map((signal, i) => (
                        <div key={i} className="flex gap-2 rounded-lg bg-green-500/10 p-3">
                          <TrendingUp className="h-5 w-5 shrink-0 text-green-600" />
                          <span className="text-sm text-foreground">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section title="Bearish Signals">
                    <div className="space-y-2">
                      {selectedIndicator.signals.bearish.map((signal, i) => (
                        <div key={i} className="flex gap-2 rounded-lg bg-red-500/10 p-3">
                          <TrendingDown className="h-5 w-5 shrink-0 text-red-600" />
                          <span className="text-sm text-foreground">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section title="Works Best With">
                    <div className="flex flex-wrap gap-2">
                      {selectedIndicator.bestWith.map((tool, i) => (
                        <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </Section>

                  <Section title="Common Mistakes">
                    <ul className="space-y-2">
                      {selectedIndicator.commonMistakes.map((mistake, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-destructive">✗</span>
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Example">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-sm text-foreground">{selectedIndicator.example}</p>
                    </div>
                  </Section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="mb-3 font-display text-lg font-bold text-foreground">{title}</h3>
    {children}
  </div>
);

export default Indicators;
