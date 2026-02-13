import { sectorPatterns } from "@/data/advanced-features";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import { Building2, TrendingUp, Clock } from "lucide-react";

const SectorAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Sector Analysis - Pattern Performance by Sector"
        description="How chart patterns perform in Banking, IT, and Pharma sectors. Sector-specific trading strategies."
      />

      <div className="mb-8 text-center">
        <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h1 className="mb-3 font-display text-4xl font-bold">Sector Analysis</h1>
        <p className="text-lg text-muted-foreground">Pattern performance across Indian market sectors</p>
      </div>

      <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6">
        <h2 className="mb-2 text-xl font-bold">Why Sector Matters</h2>
        <p className="text-muted-foreground">
          Different sectors respond differently to chart patterns. Banking stocks respect support/resistance more, IT stocks follow trends better, and Pharma is news-driven. Understanding sector behavior improves your trading edge.
        </p>
      </div>

      <Tabs defaultValue={sectorPatterns[0].sector} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {sectorPatterns.map((sector) => (
            <TabsTrigger key={sector.sector} value={sector.sector} className="gap-2">
              <span>{sector.icon}</span>
              {sector.sector}
            </TabsTrigger>
          ))}
        </TabsList>

        {sectorPatterns.map((sector) => (
          <TabsContent key={sector.sector} value={sector.sector} className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{sector.icon}</span>
                    Top Performing Patterns
                  </CardTitle>
                  <CardDescription>Best patterns for {sector.sector} sector</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sector.topPatterns.map((pattern, idx) => (
                    <div key={idx} className="rounded-lg border bg-muted/50 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">{pattern.name}</h3>
                        <Badge className="bg-green-500">{pattern.winRate}% Win Rate</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Avg Return</span>
                        <span className="font-bold text-green-600 dark:text-green-400">+{pattern.avgReturn}%</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Characteristics</CardTitle>
                  <CardDescription>What makes {sector.sector} unique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-3 font-semibold">Key Traits</h3>
                    <ul className="space-y-2">
                      {sector.characteristics.map((char, idx) => (
                        <li key={idx} className="flex gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Best Timeframe</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-primary">{sector.bestTimeframe}</p>
                  </div>

                  <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">Pro Tip</p>
                    <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">
                      {sector.sector === "Banking" && "Watch RBI policy announcements and quarterly results for best setups"}
                      {sector.sector === "IT" && "Dollar movement and US market trends heavily influence IT stocks"}
                      {sector.sector === "Pharma" && "FDA approvals and drug launch news can invalidate technical patterns"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Trading Strategy for {sector.sector}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                    <h4 className="mb-2 font-semibold text-green-700 dark:text-green-300">Entry</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      {sector.sector === "Banking" && "Wait for support/resistance confirmation with volume"}
                      {sector.sector === "IT" && "Enter on trend continuation patterns with momentum"}
                      {sector.sector === "Pharma" && "Use consolidation breakouts, avoid news-heavy periods"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
                    <h4 className="mb-2 font-semibold text-red-700 dark:text-red-300">Stop Loss</h4>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {sector.sector === "Banking" && "Below key support levels, typically 3-5% from entry"}
                      {sector.sector === "IT" && "Below recent swing low, 4-6% range common"}
                      {sector.sector === "Pharma" && "Wider stops needed, 5-8% due to volatility"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-300">Target</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {sector.sector === "Banking" && "Measured moves work well, 1:2 risk-reward typical"}
                      {sector.sector === "IT" && "Trail stops in trends, 1:3 risk-reward possible"}
                      {sector.sector === "Pharma" && "Book partial profits early, news can reverse quickly"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 rounded-lg border bg-card p-6">
        <h3 className="mb-4 text-xl font-bold">Sector Rotation Tips</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold">Bull Market</h4>
            <p className="text-sm text-muted-foreground">IT and Banking lead. Focus on continuation patterns.</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Bear Market</h4>
            <p className="text-sm text-muted-foreground">Pharma defensive. Look for reversal patterns in beaten-down sectors.</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Sideways Market</h4>
            <p className="text-sm text-muted-foreground">Trade range-bound patterns. Banking consolidations work well.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorAnalysis;
