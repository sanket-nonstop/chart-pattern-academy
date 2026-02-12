export interface Indicator {
  id: string;
  name: string;
  category: "trend" | "momentum" | "volatility" | "volume";
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  whatItDoes: string;
  howToUse: string;
  signals: {
    bullish: string[];
    bearish: string[];
  };
  bestWith: string[];
  commonMistakes: string[];
  example: string;
}

export const indicators: Indicator[] = [
  {
    id: "rsi",
    name: "RSI (Relative Strength Index)",
    category: "momentum",
    difficulty: "beginner",
    description: "Measures the speed and magnitude of price changes on a scale of 0-100.",
    whatItDoes: "Shows if a stock is overbought (too expensive) or oversold (too cheap) based on recent price action.",
    howToUse: "Look for RSI above 70 (overbought) or below 30 (oversold). Best used with trend confirmation.",
    signals: {
      bullish: [
        "RSI crosses above 30 from oversold territory",
        "Bullish divergence: price makes lower low, RSI makes higher low",
        "RSI breaks above 50 in uptrend"
      ],
      bearish: [
        "RSI crosses below 70 from overbought territory",
        "Bearish divergence: price makes higher high, RSI makes lower high",
        "RSI breaks below 50 in downtrend"
      ]
    },
    bestWith: ["Trend lines", "Support/Resistance", "Moving Averages"],
    commonMistakes: [
      "Trading RSI alone without price confirmation",
      "Shorting just because RSI is overbought in strong uptrend",
      "Ignoring divergences (most powerful RSI signal)"
    ],
    example: "Stock at $50 with RSI at 25 (oversold) + bouncing off support = potential buy signal"
  },
  {
    id: "macd",
    name: "MACD (Moving Average Convergence Divergence)",
    category: "momentum",
    difficulty: "intermediate",
    description: "Shows the relationship between two moving averages to identify trend changes and momentum.",
    whatItDoes: "Combines trend-following and momentum in one indicator. Shows when momentum is shifting.",
    howToUse: "Watch for MACD line crossing signal line, and histogram changing from negative to positive (or vice versa).",
    signals: {
      bullish: [
        "MACD line crosses above signal line",
        "Histogram turns positive (green bars)",
        "Bullish divergence with price"
      ],
      bearish: [
        "MACD line crosses below signal line",
        "Histogram turns negative (red bars)",
        "Bearish divergence with price"
      ]
    },
    bestWith: ["Price action", "Volume", "Trend identification"],
    commonMistakes: [
      "Taking every crossover signal (many are false)",
      "Using in choppy, sideways markets",
      "Ignoring the histogram (shows momentum strength)"
    ],
    example: "MACD crosses above signal line + volume increase + price breaks resistance = strong buy"
  },
  {
    id: "moving-averages",
    name: "Moving Averages (MA)",
    category: "trend",
    difficulty: "beginner",
    description: "Smooths price data to identify the direction of the trend over a specific period.",
    whatItDoes: "Shows the average price over time. Price above MA = uptrend, below = downtrend.",
    howToUse: "Use 20-day for short-term, 50-day for medium-term, 200-day for long-term trends. Watch for crossovers.",
    signals: {
      bullish: [
        "Price crosses above moving average",
        "Short MA crosses above long MA (Golden Cross)",
        "Price bounces off MA as support"
      ],
      bearish: [
        "Price crosses below moving average",
        "Short MA crosses below long MA (Death Cross)",
        "Price rejected at MA as resistance"
      ]
    },
    bestWith: ["Volume", "RSI", "Price patterns"],
    commonMistakes: [
      "Using wrong timeframe MA for your trading style",
      "Expecting MA to predict future (it's lagging)",
      "Trading every MA touch without confirmation"
    ],
    example: "Stock bounces off 50-day MA three times = strong support level"
  },
  {
    id: "bollinger-bands",
    name: "Bollinger Bands",
    category: "volatility",
    difficulty: "intermediate",
    description: "Shows price volatility using bands above and below a moving average.",
    whatItDoes: "Expands when volatility increases, contracts when volatility decreases. Shows overbought/oversold conditions.",
    howToUse: "Price touching upper band = overbought, lower band = oversold. Band squeeze = breakout coming.",
    signals: {
      bullish: [
        "Price bounces off lower band",
        "Band squeeze followed by upside breakout",
        "Walking the band (riding upper band in strong trend)"
      ],
      bearish: [
        "Price rejected at upper band",
        "Band squeeze followed by downside breakdown",
        "Walking the lower band in downtrend"
      ]
    },
    bestWith: ["RSI", "Volume", "Price patterns"],
    commonMistakes: [
      "Shorting just because price touched upper band",
      "Ignoring the squeeze (best setup)",
      "Not waiting for confirmation after band touch"
    ],
    example: "Bands squeeze tight for 2 weeks, then price breaks above with volume = strong breakout"
  },
  {
    id: "stochastic",
    name: "Stochastic Oscillator",
    category: "momentum",
    difficulty: "intermediate",
    description: "Compares closing price to price range over time, showing momentum on 0-100 scale.",
    whatItDoes: "Similar to RSI but more sensitive. Shows overbought (>80) and oversold (<20) conditions.",
    howToUse: "Look for %K line crossing %D line in overbought/oversold zones. Best in ranging markets.",
    signals: {
      bullish: [
        "%K crosses above %D below 20 (oversold)",
        "Bullish divergence with price",
        "Moves from oversold to above 50"
      ],
      bearish: [
        "%K crosses below %D above 80 (overbought)",
        "Bearish divergence with price",
        "Moves from overbought to below 50"
      ]
    },
    bestWith: ["Support/Resistance", "Price patterns", "RSI"],
    commonMistakes: [
      "Using in strong trending markets (stays overbought/oversold)",
      "Taking every crossover signal",
      "Not confirming with price action"
    ],
    example: "Stochastic oversold + price at support + bullish candle = high probability buy"
  },
  {
    id: "atr",
    name: "ATR (Average True Range)",
    category: "volatility",
    difficulty: "beginner",
    description: "Measures market volatility by showing the average price range over a period.",
    whatItDoes: "Shows how much a stock typically moves. High ATR = volatile, Low ATR = calm.",
    howToUse: "Use for stop-loss placement (2x ATR) and position sizing. Not directional.",
    signals: {
      bullish: [
        "Increasing ATR confirms breakout strength",
        "Low ATR before breakout = potential big move",
        "ATR expansion in uptrend = strong momentum"
      ],
      bearish: [
        "Increasing ATR confirms breakdown",
        "ATR spike often marks trend exhaustion",
        "Decreasing ATR = consolidation/reversal coming"
      ]
    },
    bestWith: ["Stop-loss placement", "Position sizing", "Breakout trading"],
    commonMistakes: [
      "Using ATR for direction (it's not directional)",
      "Ignoring ATR for stop-loss (leads to tight stops)",
      "Not adjusting position size based on ATR"
    ],
    example: "Stock with ATR of $2, set stop-loss $4 below entry (2x ATR) for proper risk"
  }
];
