import { patternCombinations } from "@/data/advanced-features";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { Layers, Zap, AlertCircle } from "lucide-react";

const PatternCombinations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Pattern Combinations - Powerful Trading Signals"
        description="Learn when chart patterns and candlestick patterns combine for high-probability trades"
      />

      <div className="mb-8 text-center">
        <Layers className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h1 className="mb-3 font-display text-4xl font-bold">Pattern Combinations</h1>
        <p className="text-lg text-muted-foreground">When patterns align, probability increases</p>
      </div>

      <div className="mb-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6">
        <div className="flex items-start gap-4">
          <Zap className="h-8 w-8 text-purple-500" />
          <div>
            <h2 className="mb-2 text-xl font-bold">The Power of Confluence</h2>
            <p className="text-muted-foreground">
              When multiple patterns confirm the same direction, your edge increases significantly. Professional traders look for 2-3 confirming signals before entering trades. Pattern combinations provide that confirmation.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {patternCombinations.map((combo) => (
          <Card key={combo.id} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{combo.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {combo.patterns.map((p, idx) => (
                      <span key={p}>
                        <span className="capitalize">{p.replace(/-/g, " ")}</span>
                        {idx < combo.patterns.length - 1 && " + "}
                      </span>
                    ))}
                  </CardDescription>
                </div>
                <Badge className={combo.reliability === "high" ? "bg-green-500" : "bg-yellow-500"}>
                  {combo.reliability.toUpperCase()} RELIABILITY
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-primary">What It Means</h3>
                    <p className="text-muted-foreground">{combo.description}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-green-600 dark:text-green-400">Trading Signal</h3>
                    <p className="text-muted-foreground">{combo.signal}</p>
                  </div>
                </div>
                <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
                  <h3 className="mb-2 font-semibold text-blue-700 dark:text-blue-300">Real Example</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{combo.example}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How to Spot Combinations</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                <div>
                  <p className="font-semibold">Identify Primary Pattern</p>
                  <p className="text-sm text-muted-foreground">Start with chart pattern (H&S, Double Bottom, etc.)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                <div>
                  <p className="font-semibold">Look for Candlestick Confirmation</p>
                  <p className="text-sm text-muted-foreground">Check if candlestick pattern appears at key points</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                <div>
                  <p className="font-semibold">Verify with Volume</p>
                  <p className="text-sm text-muted-foreground">Volume should confirm the direction</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                <div>
                  <p className="font-semibold">Check Support/Resistance</p>
                  <p className="text-sm text-muted-foreground">Combination at key levels is strongest</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Important Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-red-500">⚠️</span>
                <span className="text-sm text-muted-foreground">
                  Don't force combinations - they should appear naturally
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">⚠️</span>
                <span className="text-sm text-muted-foreground">
                  More patterns doesn't always mean better - focus on quality
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">⚠️</span>
                <span className="text-sm text-muted-foreground">
                  Always use stop losses even with high-probability setups
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">⚠️</span>
                <span className="text-sm text-muted-foreground">
                  Market context (trend, sector, news) still matters
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">⚠️</span>
                <span className="text-sm text-muted-foreground">
                  Practice identifying combinations before trading real money
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h3 className="mb-4 text-xl font-bold">Success Rate by Combination Type</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="text-sm text-muted-foreground">Chart + Candlestick</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">82%</p>
            <p className="text-xs text-muted-foreground">Most reliable combination</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-muted-foreground">Chart + Volume</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">78%</p>
            <p className="text-xs text-muted-foreground">Strong confirmation</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
            <p className="text-sm text-muted-foreground">All Three Combined</p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">88%</p>
            <p className="text-xs text-muted-foreground">Highest probability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternCombinations;
