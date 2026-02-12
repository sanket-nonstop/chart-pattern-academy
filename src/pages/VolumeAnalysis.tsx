import SEO from "@/components/SEO";
import { BarChart3, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const VolumeAnalysis = () => {
  return (
    <>
      <SEO title="Volume Analysis" description="Learn how to use volume to confirm price movements" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <BarChart3 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Volume Analysis</h1>
            <p className="text-muted-foreground">The fuel behind price movements</p>
          </div>

          {/* What is Volume */}
          <Section title="What is Volume?">
            <p className="mb-4 text-muted-foreground">
              Volume is the number of shares traded during a specific period. It shows the level of interest and conviction behind price movements.
            </p>
            <div className="rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">
                💡 Key Concept: Price shows WHAT is happening, Volume shows HOW STRONG it is
              </p>
            </div>
          </Section>

          {/* Volume Principles */}
          <Section title="Core Principles">
            <div className="grid gap-4 sm:grid-cols-2">
              <PrincipleCard
                icon={<TrendingUp className="h-6 w-6 text-green-600" />}
                title="High Volume = Strong Move"
                description="Large volume confirms the price movement is real and has conviction behind it"
                color="bg-green-500/10"
              />
              <PrincipleCard
                icon={<TrendingDown className="h-6 w-6 text-red-600" />}
                title="Low Volume = Weak Move"
                description="Small volume suggests lack of interest and the move may not sustain"
                color="bg-red-500/10"
              />
              <PrincipleCard
                icon={<AlertCircle className="h-6 w-6 text-yellow-600" />}
                title="Volume Precedes Price"
                description="Volume often increases before major price moves, giving early warning"
                color="bg-yellow-500/10"
              />
              <PrincipleCard
                icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
                title="Compare to Average"
                description="Always compare current volume to average volume (50-day average)"
                color="bg-blue-500/10"
              />
            </div>
          </Section>

          {/* Volume Patterns */}
          <Section title="Volume Patterns">
            <div className="space-y-4">
              <VolumePattern
                title="Breakout with Volume"
                signal="bullish"
                description="Price breaks resistance + volume 2x average = Valid breakout"
                example="Stock breaks $50 resistance on 5M shares (avg 2M) = Strong buy signal"
              />
              <VolumePattern
                title="Breakout without Volume"
                signal="bearish"
                description="Price breaks resistance + low volume = Likely false breakout"
                example="Stock breaks $50 on 1M shares (avg 2M) = Weak, may fail"
              />
              <VolumePattern
                title="Volume Climax"
                signal="neutral"
                description="Extreme volume spike often marks trend exhaustion"
                example="Stock rallies to $60 on 10M shares (10x average) = Possible top"
              />
              <VolumePattern
                title="Volume Dry-Up"
                signal="neutral"
                description="Decreasing volume during consolidation = Breakout coming"
                example="Stock consolidates 3 weeks, volume drops 50% = Coiling for move"
              />
            </div>
          </Section>

          {/* Volume with Patterns */}
          <Section title="Volume + Chart Patterns">
            <div className="space-y-3">
              <VolumeRule
                pattern="Double Bottom"
                rule="Second bottom should have LOWER volume than first (sellers exhausted)"
                confirmation="Breakout above resistance needs HIGH volume"
              />
              <VolumeRule
                pattern="Head & Shoulders"
                rule="Right shoulder should have LOWER volume than head (buyers weakening)"
                confirmation="Neckline break needs HIGH volume"
              />
              <VolumeRule
                pattern="Cup & Handle"
                rule="Handle should form on LOW volume (healthy consolidation)"
                confirmation="Breakout from handle needs HIGH volume"
              />
              <VolumeRule
                pattern="Triangles"
                rule="Volume should DECREASE as triangle forms (consolidation)"
                confirmation="Breakout needs volume 50%+ above average"
              />
            </div>
          </Section>

          {/* Volume Indicators */}
          <Section title="Volume Indicators">
            <div className="grid gap-4 sm:grid-cols-2">
              <IndicatorCard
                name="Volume Bars"
                description="Basic volume display. Green = up day, Red = down day"
                usage="Compare to 50-day average line"
              />
              <IndicatorCard
                name="OBV (On-Balance Volume)"
                description="Cumulative volume indicator showing buying/selling pressure"
                usage="Look for divergences with price"
              />
              <IndicatorCard
                name="Volume Profile"
                description="Shows volume at each price level (horizontal histogram)"
                usage="Identify high-volume support/resistance zones"
              />
              <IndicatorCard
                name="VWAP"
                description="Volume Weighted Average Price - institutional benchmark"
                usage="Price above VWAP = bullish, below = bearish"
              />
            </div>
          </Section>

          {/* Common Mistakes */}
          <Section title="Common Mistakes">
            <div className="space-y-3">
              <MistakeCard
                mistake="Ignoring volume completely"
                fix="Always check volume before entering trades"
              />
              <MistakeCard
                mistake="Trading breakouts on low volume"
                fix="Wait for volume confirmation (2x average minimum)"
              />
              <MistakeCard
                mistake="Not comparing to average volume"
                fix="Use 50-day average volume as baseline"
              />
              <MistakeCard
                mistake="Expecting high volume every day"
                fix="Volume naturally varies; look for spikes at key moments"
              />
            </div>
          </Section>

          {/* Quick Reference */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Quick Reference</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Breakout Volume:</span>
                <span className="font-semibold text-foreground">2x average or higher</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Low Volume:</span>
                <span className="font-semibold text-foreground">Below 50% of average</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Volume Spike:</span>
                <span className="font-semibold text-foreground">3x+ average (climax)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ideal Pattern Volume:</span>
                <span className="font-semibold text-foreground">Decreasing during formation, spike on breakout</span>
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

const PrincipleCard = ({ icon, title, description, color }: any) => (
  <div className={`rounded-lg ${color} p-4`}>
    <div className="mb-2 flex items-center gap-2">
      {icon}
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const VolumePattern = ({ title, signal, description, example }: any) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <div className="mb-2 flex items-center justify-between">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <span className={`text-xs font-medium ${
        signal === "bullish" ? "text-green-600" : signal === "bearish" ? "text-red-600" : "text-yellow-600"
      }`}>
        {signal.toUpperCase()}
      </span>
    </div>
    <p className="mb-2 text-sm text-muted-foreground">{description}</p>
    <div className="rounded bg-muted/50 p-2">
      <p className="text-xs text-foreground"><strong>Example:</strong> {example}</p>
    </div>
  </div>
);

const VolumeRule = ({ pattern, rule, confirmation }: any) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <h3 className="mb-2 font-semibold text-primary">{pattern}</h3>
    <p className="mb-1 text-sm text-muted-foreground">📋 {rule}</p>
    <p className="text-sm text-green-600">✓ {confirmation}</p>
  </div>
);

const IndicatorCard = ({ name, description, usage }: any) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <h3 className="mb-2 font-semibold text-foreground">{name}</h3>
    <p className="mb-2 text-sm text-muted-foreground">{description}</p>
    <p className="text-xs text-primary"><strong>Usage:</strong> {usage}</p>
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

export default VolumeAnalysis;
