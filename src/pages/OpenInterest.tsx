import SEO from "@/components/SEO";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const OpenInterest = () => {
  return (
    <>
      <SEO title="Open Interest (OI)" description="Learn how to use Open Interest for trading" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <Activity className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Open Interest (OI)</h1>
            <p className="text-muted-foreground">Understanding market participation in futures & options</p>
          </div>

          {/* What is OI */}
          <Section title="What is Open Interest?">
            <p className="mb-4 text-muted-foreground">
              Open Interest is the total number of outstanding derivative contracts (futures or options) that have not been settled. It shows the flow of money into the market.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-blue-500/10 p-4">
                <h3 className="mb-2 font-semibold text-blue-600">OI Increases</h3>
                <p className="text-sm text-muted-foreground">New contracts created = Fresh money entering = Trend likely to continue</p>
              </div>
              <div className="rounded-lg bg-red-500/10 p-4">
                <h3 className="mb-2 font-semibold text-red-600">OI Decreases</h3>
                <p className="text-sm text-muted-foreground">Contracts closed = Money leaving = Trend likely to reverse or weaken</p>
              </div>
            </div>
          </Section>

          {/* OI vs Volume */}
          <Section title="OI vs Volume: What's the Difference?">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 text-left font-semibold text-foreground">Aspect</th>
                    <th className="p-3 text-left font-semibold text-foreground">Volume</th>
                    <th className="p-3 text-left font-semibold text-foreground">Open Interest</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">What it measures</td>
                    <td className="p-3">Contracts traded today</td>
                    <td className="p-3">Total open contracts</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Resets</td>
                    <td className="p-3">Daily (starts at 0)</td>
                    <td className="p-3">Cumulative (carries forward)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Shows</td>
                    <td className="p-3">Activity level</td>
                    <td className="p-3">Market participation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Best for</td>
                    <td className="p-3">Confirming moves</td>
                    <td className="p-3">Trend strength</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* OI Interpretation */}
          <Section title="How to Interpret OI">
            <div className="space-y-4">
              <ScenarioCard
                price="Rising"
                oi="Rising"
                volume="High"
                signal="bullish"
                interpretation="Strong uptrend - Fresh buying, new longs entering"
                action="Buy/Hold longs"
              />
              <ScenarioCard
                price="Rising"
                oi="Falling"
                volume="High"
                signal="bearish"
                interpretation="Short covering - Weak rally, shorts exiting"
                action="Avoid buying, consider selling"
              />
              <ScenarioCard
                price="Falling"
                oi="Rising"
                volume="High"
                signal="bearish"
                interpretation="Strong downtrend - Fresh selling, new shorts entering"
                action="Sell/Hold shorts"
              />
              <ScenarioCard
                price="Falling"
                oi="Falling"
                volume="High"
                signal="bullish"
                interpretation="Long liquidation - Weak decline, longs exiting"
                action="Avoid selling, consider buying"
              />
            </div>
          </Section>

          {/* PCR Ratio */}
          <Section title="PCR (Put-Call Ratio)">
            <p className="mb-4 text-muted-foreground">
              PCR = Put Open Interest / Call Open Interest. Shows market sentiment.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-2 font-semibold text-green-600">PCR &gt; 1.0</h3>
                <p className="text-sm text-muted-foreground">More puts than calls = Bearish sentiment (but can be contrarian bullish)</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-2 font-semibold text-yellow-600">PCR = 0.7-1.0</h3>
                <p className="text-sm text-muted-foreground">Balanced = Neutral market</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-2 font-semibold text-red-600">PCR &lt; 0.7</h3>
                <p className="text-sm text-muted-foreground">More calls than puts = Bullish sentiment (but can be contrarian bearish)</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">
                💡 Extreme PCR values often signal reversals (contrarian indicator)
              </p>
            </div>
          </Section>

          {/* Max Pain Theory */}
          <Section title="Max Pain Theory">
            <p className="mb-4 text-muted-foreground">
              Max Pain is the strike price where option buyers lose the most money (and sellers make the most). Price tends to gravitate toward max pain at expiry.
            </p>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-3 font-semibold text-foreground">How to Use Max Pain</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Check max pain level for current expiry</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>If price is far from max pain, it may move toward it</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Most useful in the last week before expiry</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Don't use as sole indicator - combine with technicals</span>
                </li>
              </ul>
            </div>
          </Section>

          {/* Trading Strategies */}
          <Section title="OI Trading Strategies">
            <div className="space-y-4">
              <StrategyCard
                title="OI Buildup Strategy"
                description="Look for increasing OI at key strike prices"
                steps={[
                  "Identify strikes with highest OI buildup",
                  "These act as support (call OI) or resistance (put OI)",
                  "Trade toward these levels or bounce from them"
                ]}
              />
              <StrategyCard
                title="OI Unwinding Strategy"
                description="Decreasing OI signals trend exhaustion"
                steps={[
                  "Watch for falling OI during price move",
                  "Indicates participants closing positions",
                  "Prepare for reversal or consolidation"
                ]}
              />
              <StrategyCard
                title="PCR Extremes Strategy"
                description="Use extreme PCR as contrarian indicator"
                steps={[
                  "PCR > 1.5 = Too bearish, potential bounce",
                  "PCR < 0.5 = Too bullish, potential correction",
                  "Wait for price confirmation before entry"
                ]}
              />
            </div>
          </Section>

          {/* Common Mistakes */}
          <Section title="Common Mistakes">
            <div className="space-y-3">
              <MistakeCard
                mistake="Using OI alone without price action"
                fix="Always combine OI with technical analysis and price confirmation"
              />
              <MistakeCard
                mistake="Ignoring volume when analyzing OI"
                fix="High volume + rising OI = strong signal. Low volume = weak signal"
              />
              <MistakeCard
                mistake="Expecting immediate results from OI analysis"
                fix="OI shows positioning, not timing. Use for bias, not exact entries"
              />
              <MistakeCard
                mistake="Trading against strong OI buildup"
                fix="Respect high OI levels - they act as magnets for price"
              />
            </div>
          </Section>

          {/* Quick Reference */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Quick Reference</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-foreground">Bullish: Price ↑ + OI ↑ + Volume ↑</p>
                  <p className="text-muted-foreground">Fresh buying, strong uptrend</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-foreground">Bearish: Price ↓ + OI ↑ + Volume ↑</p>
                  <p className="text-muted-foreground">Fresh selling, strong downtrend</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Activity className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                <div>
                  <p className="font-semibold text-foreground">Weak: Price moves + OI ↓</p>
                  <p className="text-muted-foreground">Covering/liquidation, trend may reverse</p>
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
  <div className="mb-8">
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    {children}
  </div>
);

const ScenarioCard = ({ price, oi, volume, signal, interpretation, action }: any) => (
  <div className={`rounded-lg border-2 p-4 ${
    signal === "bullish" ? "border-green-500/50 bg-green-500/5" : "border-red-500/50 bg-red-500/5"
  }`}>
    <div className="mb-3 flex items-center justify-between">
      <div className="flex gap-4 text-sm">
        <span className="font-semibold text-foreground">Price: {price}</span>
        <span className="font-semibold text-foreground">OI: {oi}</span>
        <span className="font-semibold text-foreground">Volume: {volume}</span>
      </div>
      <span className={`text-xs font-bold uppercase ${
        signal === "bullish" ? "text-green-600" : "text-red-600"
      }`}>
        {signal}
      </span>
    </div>
    <p className="mb-2 text-sm text-muted-foreground">{interpretation}</p>
    <p className="text-sm font-semibold text-primary">Action: {action}</p>
  </div>
);

const StrategyCard = ({ title, description, steps }: any) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
    <p className="mb-3 text-sm text-muted-foreground">{description}</p>
    <ul className="space-y-1">
      {steps.map((step: string, i: number) => (
        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
          <span className="text-primary">{i + 1}.</span>
          <span>{step}</span>
        </li>
      ))}
    </ul>
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

export default OpenInterest;
