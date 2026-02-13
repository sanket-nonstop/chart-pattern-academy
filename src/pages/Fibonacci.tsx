import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Ruler, TrendingUp, Target, Calculator, Info, TrendingDown, Lightbulb } from "lucide-react";

const Fibonacci = () => {
  const [selectedLevel, setSelectedLevel] = useState("618");
  const [swingLow, setSwingLow] = useState(2400);
  const [swingHigh, setSwingHigh] = useState(2600);
  const [trendType, setTrendType] = useState<"uptrend" | "downtrend">("uptrend");

  const levels = [
    { value: "0", percent: "0%", ratio: 0, description: "Swing Low/High - Start point", color: "bg-gray-500" },
    { value: "236", percent: "23.6%", ratio: 0.236, description: "Shallow retracement, strong trend", color: "bg-green-500" },
    { value: "382", percent: "38.2%", ratio: 0.382, description: "Common retracement level", color: "bg-blue-500" },
    { value: "500", percent: "50%", ratio: 0.5, description: "Psychological level, not true Fib", color: "bg-yellow-500" },
    { value: "618", percent: "61.8%", ratio: 0.618, description: "Golden ratio, most important", color: "bg-orange-500" },
    { value: "786", percent: "78.6%", ratio: 0.786, description: "Deep retracement, weak trend", color: "bg-red-500" },
    { value: "100", percent: "100%", ratio: 1, description: "Swing High/Low - End point", color: "bg-gray-500" },
  ];

  const extensionLevels = [
    { percent: "127.2%", ratio: 1.272, description: "First profit target" },
    { percent: "161.8%", ratio: 1.618, description: "Golden extension, major target" },
    { percent: "200%", ratio: 2, description: "Psychological extension" },
    { percent: "261.8%", ratio: 2.618, description: "Extreme extension" },
  ];

  const calculateFibLevels = () => {
    const range = swingHigh - swingLow;
    return levels.map(level => ({
      ...level,
      price: trendType === "uptrend" 
        ? swingHigh - (range * level.ratio)
        : swingLow + (range * level.ratio)
    }));
  };

  const calculateExtensions = () => {
    const range = swingHigh - swingLow;
    return extensionLevels.map(level => ({
      ...level,
      price: trendType === "uptrend"
        ? swingHigh + (range * (level.ratio - 1))
        : swingLow - (range * (level.ratio - 1))
    }));
  };

  const fibLevels = calculateFibLevels();
  const extensions = calculateExtensions();
  const selectedLevelData = levels.find(l => l.value === selectedLevel);

  return (
    <>
      <SEO title="Fibonacci Retracements & Extensions" description="Master Fibonacci retracements and extensions for trading. Interactive calculator with Indian market examples." />
    
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
    {/* What is Fibonacci */}
          <Section title="What is Fibonacci?">
            <Card className="p-6">
              <p className="mb-4 text-muted-foreground">
                Fibonacci retracements use horizontal lines to indicate areas of support or resistance at the key Fibonacci levels before the price continues in the original direction. These levels are derived from the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-primary/10 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-primary">
                    <Lightbulb className="h-4 w-4" />
                    The Golden Ratio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    61.8% (0.618) is called the golden ratio. It appears throughout nature (sunflowers, galaxies, human body) and markets. Traders use it to predict where price might reverse.
                  </p>
                </div>
                <div className="rounded-lg bg-green-500/10 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-green-600 dark:text-green-400">
                    <Info className="h-4 w-4" />
                    Why It Works
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Markets are driven by human psychology. Fibonacci levels work because millions of traders watch them, creating self-fulfilling prophecies at these levels.
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Interactive Levels */}
          <Section title="Understanding Each Fibonacci Level">
            <div className="mb-6 flex flex-wrap gap-2">
              {levels.filter(l => l.ratio > 0 && l.ratio < 1).map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level.value)}
                  className="gap-1"
                >
                  <div className={`h-3 w-3 rounded-full ${level.color}`} />
                  {level.percent}
                </Button>
              ))}
            </div>

            {selectedLevelData && (
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-14 w-14 rounded-lg ${selectedLevelData.color} flex items-center justify-center text-white font-bold`}>
                    {selectedLevelData.percent}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{selectedLevelData.percent} Level</h3>
                    <p className="text-sm text-muted-foreground">{selectedLevelData.description}</p>
                  </div>
                </div>

                {selectedLevel === "236" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>When to use:</strong> In very strong trends where price barely pulls back. Aggressive traders use this for early entries.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> High risk, high reward. If price retraces only to 23.6%, trend is extremely strong. But you might miss the entry if it doesn't pull back this far.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Reliance rallies from ₹2400 to ₹2600 (₹200 move). 23.6% retracement = ₹2552.8. If it bounces here with bullish candle = very strong buy signal.
                      </p>
                    </div>
                    <div className="mt-3 rounded-lg border border-orange-500/30 bg-orange-500/5 p-3">
                      <p className="text-xs">
                        <strong>⚠️ Risk:</strong> Price might not pull back this far in strong trends. You could miss the trade waiting for 23.6%.
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "382" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>When to use:</strong> In strong trends, price often retraces to 38.2% before continuing. This is a common entry point for swing traders.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Look for bullish reversal patterns (hammer, bullish engulfing) at this level in uptrends. Combine with support zones for higher probability.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> TCS rallies from ₹3400 to ₹3600 (₹200 move). 38.2% retracement = ₹3523.6. Entry: ₹3525, Stop: ₹3490, Target: ₹3650 (1:2.5 RR).
                      </p>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-lg bg-green-500/10 p-3">
                        <p className="text-xs font-semibold text-green-600 dark:text-green-400">✓ Good for: Strong trends, swing trading</p>
                      </div>
                      <div className="rounded-lg bg-blue-500/10 p-3">
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">📊 Win Rate: 60-65% with confirmation</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLevel === "500" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Psychological level:</strong> Not a true Fibonacci number (not from the sequence), but traders watch it because it's exactly 50% - halfway back.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Often acts as support/resistance due to psychological significance. Many traders place orders at round 50% level. Works well in moderate trends.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> HDFC Bank rallies from ₹1400 to ₹1600 (₹200 move). 50% retracement = ₹1500 (round number + 50% = double psychological support).
                      </p>
                    </div>
                    <div className="mt-3 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-3">
                      <p className="text-xs">
                        <strong>💡 Pro Tip:</strong> When 50% Fib aligns with a round number (₹1500, ₹2000, ₹2500), it becomes extra powerful due to double psychological significance.
                      </p>
                    </div>
                  </div>
                )}

                {selectedLevel === "618" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>The Golden Ratio:</strong> Most important Fibonacci level. Price often finds strong support/resistance here. This is the "last chance" entry before trend resumes.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Wait for strong confirmation (pin bar, engulfing, double bottom) at 61.8%. This level has highest probability of holding. If it breaks, trend is likely over.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Infosys rallies from ₹1400 to ₹1600 (₹200 move). 61.8% retracement = ₹1476.4. Bullish hammer forms here. Entry: ₹1480, Stop: ₹1460, Target: ₹1620 (1:3 RR).
                      </p>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      <div className="rounded-lg bg-orange-500/10 p-3">
                        <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">⭐ Most Important Level</p>
                      </div>
                      <div className="rounded-lg bg-green-500/10 p-3">
                        <p className="text-xs font-semibold text-green-600 dark:text-green-400">🎯 Best Risk-Reward</p>
                      </div>
                      <div className="rounded-lg bg-blue-500/10 p-3">
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">📊 70%+ Win Rate</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLevel === "786" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Deep retracement:</strong> Indicates weak trend. Price gives back most of the move (78.6%). This is a risky level - trend might be reversing completely.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trading strategy:</strong> Very risky entry. Only trade if you see extremely strong reversal signals. If price breaks below 78.6%, trend is likely over. Use tight stop loss.
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-foreground">
                        <strong>Example:</strong> Stock rallies from ₹2400 to ₹2600 (₹200 move), retraces to ₹2442.8 (78.6%). This is weak. Only enter if double bottom + high volume + bullish engulfing all align.
                      </p>
                    </div>
                    <div className="mt-3 rounded-lg border border-red-500/30 bg-red-500/5 p-3">
                      <p className="text-xs">
                        <strong>⚠️ Warning:</strong> 78.6% retracement suggests trend is weak. Many traders avoid this level. If you trade it, use very tight stop loss (2-3% max).
                      </p>
                    </div>
                  </div>
                )}
              </Card>
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

          <div className="mb-8 text-center">
            <Ruler className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-4xl font-bold text-foreground">Fibonacci Retracements & Extensions</h1>
            <p className="text-muted-foreground">Find support, resistance, and profit targets using the golden ratio</p>
          </div>

          {/* Interactive Calculator */}
          <Section title="Fibonacci Calculator">
            <Card className="p-6">
              <div className="mb-6 flex gap-2">
                <Button 
                  variant={trendType === "uptrend" ? "default" : "outline"}
                  onClick={() => setTrendType("uptrend")}
                  className="flex-1"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Uptrend
                </Button>
                <Button 
                  variant={trendType === "downtrend" ? "default" : "outline"}
                  onClick={() => setTrendType("downtrend")}
                  className="flex-1"
                >
                  <TrendingDown className="mr-2 h-4 w-4" />
                  Downtrend
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-sm font-semibold">Swing Low</label>
                      <span className="text-sm font-bold text-primary">₹{swingLow}</span>
                    </div>
                    <Slider value={[swingLow]} onValueChange={(v) => setSwingLow(v[0])} min={2000} max={3000} step={10} />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-sm font-semibold">Swing High</label>
                      <span className="text-sm font-bold text-primary">₹{swingHigh}</span>
                    </div>
                    <Slider value={[swingHigh]} onValueChange={(v) => setSwingHigh(v[0])} min={2000} max={3000} step={10} />
                  </div>

                  <div className="rounded-lg bg-muted p-3 text-sm">
                    <div className="font-semibold">Range: ₹{Math.abs(swingHigh - swingLow)}</div>
                    <div className="text-muted-foreground">Move: {((Math.abs(swingHigh - swingLow) / swingLow) * 100).toFixed(2)}%</div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                  <h3 className="mb-3 font-semibold">Retracement Levels</h3>
                  <div className="space-y-2">
                    {fibLevels.filter(l => l.ratio > 0 && l.ratio < 1).map((level) => (
                      <div key={level.value} className="flex justify-between rounded-lg bg-background/50 p-2 text-sm">
                        <span className="font-medium">{level.percent}</span>
                        <span className="font-bold text-primary">₹{level.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
                  <Target className="h-4 w-4" />
                  Extension Targets (Profit Levels)
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {extensions.map((ext, i) => (
                    <div key={i} className="flex justify-between rounded-lg bg-background/50 p-2 text-sm">
                      <span>{ext.percent}</span>
                      <span className="font-bold text-green-600 dark:text-green-400">₹{ext.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Section>

          {/* Visual Chart Representation */}
          <Section title="Visual Fibonacci Levels">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Uptrend Example */}
              <Card className="p-4">
                <h3 className="mb-3 text-center font-semibold text-green-600 dark:text-green-400">Uptrend: Bottom to Top</h3>
                <div className="relative h-96 rounded-lg bg-gradient-to-b from-muted/30 to-muted/10 border border-border">
                  {/* Price axis */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-border bg-muted/20">
                    {fibLevels.map((level, i) => (
                      <div 
                        key={i}
                        className="absolute right-2 text-xs font-mono font-semibold"
                        style={{ top: `${(1 - level.ratio) * 100}%`, transform: 'translateY(-50%)' }}
                      >
                        ₹{(swingLow + (swingHigh - swingLow) * level.ratio).toFixed(0)}
                      </div>
                    ))}
                  </div>

                  {/* Fib levels */}
                  <div className="absolute left-16 right-0 top-0 bottom-0">
                    {fibLevels.map((level, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t-2 border-dashed"
                        style={{ 
                          top: `${(1 - level.ratio) * 100}%`,
                          borderColor: level.value === '0' || level.value === '100' ? '#666' : 
                                     level.value === '236' ? '#22c55e' :
                                     level.value === '382' ? '#3b82f6' :
                                     level.value === '500' ? '#eab308' :
                                     level.value === '618' ? '#f97316' : '#ef4444',
                          opacity: 0.7
                        }}
                      >
                        <span 
                          className="ml-2 text-xs font-bold"
                          style={{ 
                            color: level.value === '0' || level.value === '100' ? '#666' :
                                   level.value === '236' ? '#22c55e' :
                                   level.value === '382' ? '#3b82f6' :
                                   level.value === '500' ? '#eab308' :
                                   level.value === '618' ? '#f97316' : '#ef4444'
                          }}
                        >
                          {level.percent}
                        </span>
                      </div>
                    ))}

                    {/* Uptrend line */}
                    <svg className="absolute inset-0 h-full w-full">
                      <defs>
                        <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#22c55e" />
                        </marker>
                      </defs>
                      <path
                        d="M 10 95 L 30 85 L 40 90 L 60 70 L 70 75 L 90 5"
                        stroke="#22c55e"
                        strokeWidth="3"
                        fill="none"
                        markerEnd="url(#arrowhead-up)"
                      />
                      <circle cx="10" cy="95" r="6" fill="#22c55e" />
                      <text x="10" y="105" fontSize="10" fill="currentColor" textAnchor="middle">Start</text>
                      <circle cx="90" cy="5" r="6" fill="#22c55e" />
                      <text x="90" y="15" fontSize="10" fill="currentColor" textAnchor="middle">End</text>
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Draw from Swing Low to Swing High. Price retraces down to Fib levels before continuing up.
                </p>
              </Card>

              {/* Downtrend Example */}
              <Card className="p-4">
                <h3 className="mb-3 text-center font-semibold text-red-600 dark:text-red-400">Downtrend: Top to Bottom</h3>
                <div className="relative h-96 rounded-lg bg-gradient-to-b from-muted/30 to-muted/10 border border-border">
                  {/* Price axis */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-border bg-muted/20">
                    {fibLevels.map((level, i) => (
                      <div 
                        key={i}
                        className="absolute right-2 text-xs font-mono font-semibold"
                        style={{ top: `${level.ratio * 100}%`, transform: 'translateY(-50%)' }}
                      >
                        ₹{(swingHigh - (swingHigh - swingLow) * level.ratio).toFixed(0)}
                      </div>
                    ))}
                  </div>

                  {/* Fib levels */}
                  <div className="absolute left-16 right-0 top-0 bottom-0">
                    {fibLevels.map((level, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t-2 border-dashed"
                        style={{ 
                          top: `${level.ratio * 100}%`,
                          borderColor: level.value === '0' || level.value === '100' ? '#666' : 
                                     level.value === '236' ? '#22c55e' :
                                     level.value === '382' ? '#3b82f6' :
                                     level.value === '500' ? '#eab308' :
                                     level.value === '618' ? '#f97316' : '#ef4444',
                          opacity: 0.7
                        }}
                      >
                        <span 
                          className="ml-2 text-xs font-bold"
                          style={{ 
                            color: level.value === '0' || level.value === '100' ? '#666' :
                                   level.value === '236' ? '#22c55e' :
                                   level.value === '382' ? '#3b82f6' :
                                   level.value === '500' ? '#eab308' :
                                   level.value === '618' ? '#f97316' : '#ef4444'
                          }}
                        >
                          {level.percent}
                        </span>
                      </div>
                    ))}

                    {/* Downtrend line */}
                    <svg className="absolute inset-0 h-full w-full">
                      <defs>
                        <marker id="arrowhead-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                        </marker>
                      </defs>
                      <path
                        d="M 10 5 L 30 15 L 40 10 L 60 30 L 70 25 L 90 95"
                        stroke="#ef4444"
                        strokeWidth="3"
                        fill="none"
                        markerEnd="url(#arrowhead-down)"
                      />
                      <circle cx="10" cy="5" r="6" fill="#ef4444" />
                      <text x="10" y="-5" fontSize="10" fill="currentColor" textAnchor="middle">Start</text>
                      <circle cx="90" cy="95" r="6" fill="#ef4444" />
                      <text x="90" y="105" fontSize="10" fill="currentColor" textAnchor="middle">End</text>
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Draw from Swing High to Swing Low. Price retraces up to Fib levels before continuing down.
                </p>
              </Card>
            </div>
          </Section>

          {/* Trading Strategies */}
          <Section title="Advanced Trading Strategies">
            <div className="grid gap-4 sm:grid-cols-2">
              <StrategyCard
                title="Fib + Support/Resistance"
                description="When Fib level aligns with previous support/resistance = confluence = high probability"
                example="61.8% Fib at ₹2500 + previous support at ₹2500 + round number = triple confluence = strong buy zone"
                winRate="75-80%"
              />
              <StrategyCard
                title="Fib + Chart Pattern"
                description="Pattern forming at Fib level dramatically increases probability"
                example="Double bottom at 61.8% Fib + bullish divergence on RSI = powerful reversal setup"
                winRate="70-75%"
              />
              <StrategyCard
                title="Fib + Indicator Confluence"
                description="Multiple indicators confirming at Fib level"
                example="RSI oversold (30) + MACD bullish crossover + price at 61.8% Fib = high probability reversal"
                winRate="65-70%"
              />
              <StrategyCard
                title="Fib Extensions for Targets"
                description="Use Fib to project profit targets after entry"
                example="Entry at 61.8% retracement (₹2476), target at 161.8% extension (₹2723) = ₹247 profit potential"
                winRate="Target hit 60-65% of time"
              />
              <StrategyCard
                title="Multiple Timeframe Fib"
                description="Align Fib levels across timeframes for strongest zones"
                example="Daily 61.8% at ₹2500 + 4H 50% at ₹2505 = ₹2500-2505 is super strong support zone"
                winRate="80-85%"
              />
              <StrategyCard
                title="Fib + Volume Analysis"
                description="High volume at Fib level confirms institutional interest"
                example="Price hits 61.8% Fib with 3x average volume + bullish candle = institutions buying, follow them"
                winRate="70-75%"
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

const StrategyCard = ({ title, description, example, winRate }: any) => (
  <Card className="p-4">
    <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
    <p className="mb-2 text-sm text-muted-foreground">{description}</p>
    <div className="mb-2 rounded bg-muted/50 p-2">
      <p className="text-xs text-foreground"><strong>Example:</strong> {example}</p>
    </div>
    {winRate && (
      <div className="rounded-lg bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
        🎯 {winRate}
      </div>
    )}
  </Card>
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
