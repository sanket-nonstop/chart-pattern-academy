import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Ruler, TrendingUp, Target } from "lucide-react";

const Fibonacci = () => {
  const [selectedLevel, setSelectedLevel] = useState("382");

  const levels = [
    { value: "236", percent: "23.6%", description: "Shallow retracement, strong trend", color: "bg-green-500" },
    { value: "382", percent: "38.2%", description: "Common retracement level", color: "bg-blue-500" },
    { value: "500", percent: "50%", description: "Psychological level, not true Fib", color: "bg-yellow-500" },
    { value: "618", percent: "61.8%", description: "Golden ratio, most important", color: "bg-orange-500" },
    { value: "786", percent: "78.6%", description: "Deep retracement, weak trend", color: "bg-red-500" },
  ];

  const selectedLevelData = levels.find(l => l.value === selectedLevel);

  return (
    <>
      <SEO title="Fibonacci Retracements" description="Learn how to use Fibonacci levels for trading" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <Ruler className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Fibonacci Retracements</h1>
            <p className="text-muted-foreground">Find support and resistance using the golden ratio</p>
          </div>

          {/* What is Fibonacci */}
          <Section title="What is Fibonacci?">
            <p className="mb-4 text-muted-foreground">
              Fibonacci retracements use horizontal lines to indicate areas of support or resistance at the key Fibonacci levels before the price continues in the original direction.
            </p>
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">
                💡 The Golden Ratio (61.8%) appears throughout nature and markets. Traders use it to predict where price might reverse.
              </p>
            </div>
          </Section>

          {/* Interactive Levels */}
          <Section title="Fibonacci Levels">
            <div className="mb-6 flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level.value)}
                >
                  {level.percent}
                </Button>
              ))}
            </div>

            {selectedLevelData && (
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-lg ${selectedLevelData.color} flex items-center justify-center text-white font-bold`}>
                    {selectedLevelData.percent}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{selectedLevelData.percent} Level</h3>
                    <p className="text-sm text-muted-foreground">{selectedLevelData.description}</p>
                  </div>
                </div>

                {selectedLevel === "382" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>When to use:</strong> In strong trends, price often retraces to 38.2% before continuing.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Look for bullish reversal patterns at this level in uptrends.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies from $50 to $60, retraces to $56.18 (38.2%) = potential buy zone
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "618" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>The Golden Ratio:</strong> Most important Fibonacci level. Price often finds strong support/resistance here.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> This is your "last chance" entry before trend resumes. Use with confirmation.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies $50 to $60, retraces to $53.82 (61.8%) + bullish candle = strong buy
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "500" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Psychological level:</strong> Not a true Fibonacci number, but traders watch it because it's 50%.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Often acts as support/resistance due to psychological significance.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies $50 to $60, retraces to $55 (50%) = common reversal point
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "236" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Shallow retracement:</strong> Indicates very strong trend. Price barely pulls back.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Aggressive entry for strong trends, but higher risk of missing entry.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies $50 to $60, only retraces to $57.64 (23.6%) = very strong
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "786" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Deep retracement:</strong> Indicates weak trend. Price gives back most of the move.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Risky entry. If price breaks below this, trend may be over.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies $50 to $60, retraces to $52.14 (78.6%) = weak, may fail
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Section>

          {/* How to Draw */}
          <Section title="How to Draw Fibonacci">
            <div className="space-y-4">
              <StepCard
                number="1"
                title="Identify the Trend"
                description="Find a clear swing low to swing high (uptrend) or swing high to swing low (downtrend)"
              />
              <StepCard
                number="2"
                title="Draw from Start to End"
                description="Uptrend: Draw from low to high. Downtrend: Draw from high to low"
              />
              <StepCard
                number="3"
                title="Watch the Levels"
                description="Price will often bounce at 38.2%, 50%, or 61.8% levels"
              />
              <StepCard
                number="4"
                title="Wait for Confirmation"
                description="Don't buy just because price hit a Fib level. Wait for reversal pattern or candlestick"
              />
            </div>
          </Section>

          {/* Trading Strategies */}
          <Section title="Trading Strategies">
            <div className="grid gap-4 sm:grid-cols-2">
              <StrategyCard
                title="Fib + Support"
                description="When Fib level aligns with previous support/resistance = high probability"
                example="61.8% Fib at $55 + previous support at $55 = strong buy zone"
              />
              <StrategyCard
                title="Fib + Pattern"
                description="Pattern forming at Fib level increases probability"
                example="Double bottom at 61.8% Fib = powerful setup"
              />
              <StrategyCard
                title="Fib + Indicator"
                description="RSI oversold + 61.8% Fib = confluence"
                example="RSI at 30 + price at 61.8% Fib = high probability reversal"
              />
              <StrategyCard
                title="Fib Extensions"
                description="Use Fib to project profit targets (127.2%, 161.8%)"
                example="Entry at 61.8% retracement, target at 161.8% extension"
              />
            </div>
          </Section>

          {/* Common Mistakes */}
          <Section title="Common Mistakes">
            <div className="space-y-3">
              <MistakeCard
                mistake="Trading Fib levels blindly without confirmation"
                fix="Wait for price action confirmation (reversal candle, pattern)"
              />
              <MistakeCard
                mistake="Drawing Fib on every small move"
                fix="Use on significant swings only (at least 10-20% move)"
              />
              <MistakeCard
                mistake="Expecting exact bounces at Fib levels"
                fix="Use Fib as zones, not exact prices. Allow 1-2% buffer"
              />
              <MistakeCard
                mistake="Ignoring the trend"
                fix="Fib works best in trending markets, not sideways"
              />
            </div>
          </Section>

          {/* Quick Reference */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Quick Reference</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">23.6% - Shallow, strong trend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">38.2% - Common retracement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="text-muted-foreground">50% - Psychological level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-muted-foreground font-semibold">61.8% - Golden ratio (most important)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-muted-foreground">78.6% - Deep, weak trend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    {children}
  </div>
);

const StepCard = ({ number, title, description }: any) => (
  <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
      {number}
    </div>
    <div>
      <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const StrategyCard = ({ title, description, example }: any) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
    <p className="mb-2 text-sm text-muted-foreground">{description}</p>
    <div className="rounded bg-muted/50 p-2">
      <p className="text-xs text-foreground"><strong>Example:</strong> {example}</p>
    </div>
  </div>
);

const MistakeCard = ({ mistake, fix }: any) => (
  <div className="flex gap-3 rounded-lg border border-border bg-card p-3">
    <div className="flex-1">
      <p className="mb-1 text-sm font-medium text-destructive">✗ {mistake}</p>
      <p className="text-sm text-green-600">✓ {fix}</p>
    </div>
  </div>
);

export default Fibonacci;
