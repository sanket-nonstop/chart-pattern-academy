import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { candlestickPatterns, getBearishPatterns, getBullishPatterns } from "@/data/candlestick-patterns";
import SEO from "@/components/SEO";
import { TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

const CandleVisual = ({ candle }: any) => {
  const isBullish = candle.type === "bullish";
  const isDoji = candle.bodySize === "doji";

  const bodyHeight = isDoji ? 2 : candle.bodySize === "large" ? 60 : candle.bodySize === "medium" ? 40 : 20;
  const wickTopHeight = candle.wickTop === "long" ? 30 : candle.wickTop === "short" ? 10 : 0;
  const wickBottomHeight = candle.wickBottom === "long" ? 30 : candle.wickBottom === "short" ? 10 : 0;

  return (
    <div className="flex flex-col items-center" style={{ height: "120px", justifyContent: "center" }}>
      {wickTopHeight > 0 && (
        <div className={`w-0.5 ${isBullish ? "bg-green-500" : "bg-red-500"}`} style={{ height: `${wickTopHeight}px` }} />
      )}
      <div
        className={`w-8 ${isDoji ? "h-0.5" : ""} ${isBullish ? "bg-green-500" : "bg-red-500"}`}
        style={{ height: isDoji ? "2px" : `${bodyHeight}px` }}
      />
      {wickBottomHeight > 0 && (
        <div className={`w-0.5 ${isBullish ? "bg-green-500" : "bg-red-500"}`} style={{ height: `${wickBottomHeight}px` }} />
      )}
    </div>
  );
};

const Candlesticks = () => {
  const [selectedPattern, setSelectedPattern] = useState(candlestickPatterns[0]);
  const bearishPatterns = getBearishPatterns();
  const bullishPatterns = getBullishPatterns();

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Candlestick Patterns - Bearish & Bullish Signals"
        description="Master candlestick patterns including bearish engulfing, shooting star, hammer, and more with visual examples"
      />

      <div className="mb-8 text-center">
        <h1 className="mb-3 font-display text-4xl font-bold">Candlestick Patterns</h1>
        <p className="text-lg text-muted-foreground">Learn to read price action through Japanese candlestick patterns</p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card className="border-red-500/50 bg-gradient-to-br from-red-500/10 to-red-600/10">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-red-500 p-3">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">{bearishPatterns.length}</div>
              <div className="text-sm text-muted-foreground">Bearish Patterns</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-green-500/50 bg-gradient-to-br from-green-500/10 to-green-600/10">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-green-500 p-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{bullishPatterns.length}</div>
              <div className="text-sm text-muted-foreground">Bullish Patterns</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-full bg-blue-500 p-3">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">30</div>
              <div className="text-sm text-muted-foreground">Total Patterns</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="bearish" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bullish" className="gap-2">
            <TrendingUp className="h-4 w-4" /> Bullish Patterns
          </TabsTrigger>
          <TabsTrigger value="bearish" className="gap-2">
            <TrendingDown className="h-4 w-4" /> Bearish Patterns
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bearish" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              {bearishPatterns.map((pattern) => (
                <Card
                  key={pattern.id}
                  className={`cursor-pointer transition-all hover:border-red-500 ${selectedPattern.id === pattern.id ? "border-2 border-red-500 bg-red-500/5" : ""
                    }`}
                  onClick={() => setSelectedPattern(pattern)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-red-500 text-red-500">
                          {pattern.candles} Candle{pattern.candles > 1 ? "s" : ""}
                        </Badge>
                        <Badge className={pattern.reliability === "high" ? "bg-red-500" : "bg-orange-500"}>
                          {pattern.reliability}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="sticky top-4 h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedPattern.name}</CardTitle>
                  <Badge className={selectedPattern.type === "bearish" ? "bg-red-500" : "bg-green-500"}>
                    {selectedPattern.type}
                  </Badge>
                </div>
                <CardDescription>{selectedPattern.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center gap-4 rounded-lg bg-muted p-6">
                  {selectedPattern.visual.candles.map((candle, idx) => (
                    <CandleVisual key={idx} candle={candle} />
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-red-500">📉 Signal</h4>
                    <p className="text-sm text-muted-foreground">{selectedPattern.signal}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">✅ Confirmation</h4>
                    <p className="text-sm text-muted-foreground">{selectedPattern.confirmation}</p>
                  </div>
                  {selectedPattern.timeframe && (
                    <div>
                      <h4 className="mb-2 font-semibold">⏱️ Timeframe</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.timeframe}</p>
                    </div>
                  )}
                  {selectedPattern.bestConditions && (
                    <div>
                      <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">⭐ Best Conditions</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.bestConditions}</p>
                    </div>
                  )}
                  {selectedPattern.stopLoss && (
                    <div>
                      <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">🛑 Stop Loss</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.stopLoss}</p>
                    </div>
                  )}
                  {selectedPattern.target && (
                    <div>
                      <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">🎯 Target</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.target}</p>
                    </div>
                  )}
                  {selectedPattern.avoidWhen && (
                    <div>
                      <h4 className="mb-2 font-semibold text-orange-600 dark:text-orange-400">⚠️ Avoid When</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.avoidWhen}</p>
                    </div>
                  )}
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h4 className="mb-2 font-semibold text-blue-600 dark:text-blue-400">💡 Example</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{selectedPattern.example}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bullish" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              {bullishPatterns.map((pattern) => (
                <Card
                  key={pattern.id}
                  className={`cursor-pointer transition-all hover:border-green-500 ${selectedPattern.id === pattern.id ? "border-2 border-green-500 bg-green-500/5" : ""
                    }`}
                  onClick={() => setSelectedPattern(pattern)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-green-500 text-green-500">
                          {pattern.candles} Candle{pattern.candles > 1 ? "s" : ""}
                        </Badge>
                        <Badge className={pattern.reliability === "high" ? "bg-green-500" : "bg-emerald-500"}>
                          {pattern.reliability}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="sticky top-4 h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedPattern.name}</CardTitle>
                  <Badge className={selectedPattern.type === "bearish" ? "bg-red-500" : "bg-green-500"}>
                    {selectedPattern.type}
                  </Badge>
                </div>
                <CardDescription>{selectedPattern.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center gap-4 rounded-lg bg-muted p-6">
                  {selectedPattern.visual.candles.map((candle, idx) => (
                    <CandleVisual key={idx} candle={candle} />
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-green-500">📈 Signal</h4>
                    <p className="text-sm text-muted-foreground">{selectedPattern.signal}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">✅ Confirmation</h4>
                    <p className="text-sm text-muted-foreground">{selectedPattern.confirmation}</p>
                  </div>
                  {selectedPattern.timeframe && (
                    <div>
                      <h4 className="mb-2 font-semibold">⏱️ Timeframe</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.timeframe}</p>
                    </div>
                  )}
                  {selectedPattern.bestConditions && (
                    <div>
                      <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">⭐ Best Conditions</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.bestConditions}</p>
                    </div>
                  )}
                  {selectedPattern.stopLoss && (
                    <div>
                      <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">🛑 Stop Loss</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.stopLoss}</p>
                    </div>
                  )}
                  {selectedPattern.target && (
                    <div>
                      <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">🎯 Target</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.target}</p>
                    </div>
                  )}
                  {selectedPattern.avoidWhen && (
                    <div>
                      <h4 className="mb-2 font-semibold text-orange-600 dark:text-orange-400">⚠️ Avoid When</h4>
                      <p className="text-sm text-muted-foreground">{selectedPattern.avoidWhen}</p>
                    </div>
                  )}
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                    <h4 className="mb-2 font-semibold text-blue-600 dark:text-blue-400">💡 Example</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{selectedPattern.example}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Candlesticks;
