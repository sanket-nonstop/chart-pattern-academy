export interface GlossaryTerm {
  term: string;
  category: "technical" | "fundamental" | "risk" | "general";
  definition: string;
  example?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Support",
    category: "technical",
    definition: "A price level where buying pressure is strong enough to prevent the price from falling further. Think of it as a 'floor' that holds the price up.",
    example: "If a stock repeatedly bounces at $50, that's a support level.",
  },
  {
    term: "Resistance",
    category: "technical",
    definition: "A price level where selling pressure is strong enough to prevent the price from rising further. Think of it as a 'ceiling' that caps the price.",
    example: "If a stock repeatedly fails to break above $100, that's resistance.",
  },
  {
    term: "Volume",
    category: "technical",
    definition: "The number of shares traded during a specific period. High volume confirms price movements, while low volume suggests weak conviction.",
    example: "A breakout with high volume is more reliable than one with low volume.",
  },
  {
    term: "Breakout",
    category: "technical",
    definition: "When price moves above resistance or below support with conviction, often accompanied by increased volume.",
    example: "A stock breaking above $100 resistance on high volume is a bullish breakout.",
  },
  {
    term: "Trend",
    category: "technical",
    definition: "The general direction of price movement. Uptrend = higher highs and higher lows. Downtrend = lower highs and lower lows.",
    example: "A stock making new highs consistently is in an uptrend.",
  },
  {
    term: "Stop-Loss",
    category: "risk",
    definition: "A predetermined price level where you exit a losing trade to limit losses. Essential for risk management.",
    example: "If you buy at $50, you might set a stop-loss at $48 (4% risk).",
  },
  {
    term: "Risk/Reward Ratio",
    category: "risk",
    definition: "The ratio of potential loss to potential gain. A 1:3 ratio means risking $1 to potentially make $3.",
    example: "Risk $100 to make $300 = 1:3 risk/reward ratio.",
  },
  {
    term: "Position Size",
    category: "risk",
    definition: "The number of shares or contracts to trade based on your risk tolerance and account size.",
    example: "With a $10,000 account and 2% risk, you risk $200 per trade.",
  },
  {
    term: "Consolidation",
    category: "technical",
    definition: "A period where price moves sideways in a tight range, often before a significant move.",
    example: "A stock trading between $48-$52 for weeks is consolidating.",
  },
  {
    term: "Neckline",
    category: "technical",
    definition: "A support or resistance line connecting key points in a pattern (like Head & Shoulders).",
    example: "In Head & Shoulders, the neckline connects the two troughs.",
  },
  {
    term: "Confirmation",
    category: "technical",
    definition: "Additional evidence that validates a pattern or signal, such as volume increase or indicator agreement.",
    example: "A breakout confirmed by high volume and RSI above 50.",
  },
  {
    term: "Retest",
    category: "technical",
    definition: "When price returns to test a broken support (now resistance) or broken resistance (now support).",
    example: "After breaking $100, price pulls back to test $100 as new support.",
  },
  {
    term: "Momentum",
    category: "technical",
    definition: "The rate of price change. Strong momentum means rapid price movement in one direction.",
    example: "A stock jumping 10% in one day shows strong bullish momentum.",
  },
  {
    term: "Pullback",
    category: "technical",
    definition: "A temporary reversal in the direction of the prevailing trend. A healthy pause before continuation.",
    example: "In an uptrend, a 5% dip before resuming higher is a pullback.",
  },
  {
    term: "Reversal",
    category: "technical",
    definition: "A change in the prevailing trend direction. Uptrend becomes downtrend or vice versa.",
    example: "Head & Shoulders pattern signals a bearish reversal.",
  },
  {
    term: "Entry Point",
    category: "general",
    definition: "The specific price level where you open a trade position.",
    example: "Entering a long position when price breaks above $50.",
  },
  {
    term: "Exit Point",
    category: "general",
    definition: "The price level where you close a trade, either for profit (target) or loss (stop-loss).",
    example: "Exiting at $60 for profit or $48 for loss management.",
  },
  {
    term: "Timeframe",
    category: "technical",
    definition: "The period each candlestick or bar represents (1-minute, daily, weekly, etc.).",
    example: "Day traders use 5-minute charts, swing traders use daily charts.",
  },
  {
    term: "False Breakout",
    category: "technical",
    definition: "When price briefly breaks a level but quickly reverses back. Also called a 'fakeout'.",
    example: "Price breaks $100 but closes back below it the same day.",
  },
  {
    term: "Volatility",
    category: "general",
    definition: "The degree of price fluctuation. High volatility = large price swings. Low volatility = stable prices.",
    example: "A stock moving 5% daily is more volatile than one moving 0.5% daily.",
  },
];
