export interface PriceActionConcept {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  examples: string[];
  commonMistakes: string[];
}

export const priceActionConcepts: PriceActionConcept[] = [
  {
    id: "what-is-price-action",
    title: "What is Price Action?",
    description: "Price action is the movement of a security's price over time. It's the purest form of technical analysis - reading the story that price tells without relying on indicators.",
    keyPoints: [
      "Price action shows what traders are actually doing, not what they might do",
      "Every candle represents a battle between buyers (bulls) and sellers (bears)",
      "Price movements create patterns that tend to repeat due to human psychology",
      "No lagging indicators needed - you read the market directly from price",
    ],
    examples: [
      "A long green candle shows strong buying pressure - bulls are in control",
      "A small candle after big moves shows indecision - market is taking a breath",
      "Price rejecting a level multiple times shows strong support/resistance",
    ],
    commonMistakes: [
      "Ignoring the overall trend and context",
      "Trading every small price movement without confirmation",
      "Not waiting for candle close before making decisions",
    ],
  },
  {
    id: "support-resistance",
    title: "Support & Resistance - The Foundation",
    description: "Support and resistance are price levels where buying or selling pressure is strong enough to stop or reverse price movement. They're the most important concept in price action.",
    keyPoints: [
      "Support: A floor where price tends to bounce up (buyers step in)",
      "Resistance: A ceiling where price tends to fall down (sellers step in)",
      "These levels represent psychological price points where traders make decisions",
      "The more times a level is tested, the stronger it becomes",
      "When broken, support becomes resistance and vice versa (role reversal)",
    ],
    examples: [
      "₹500 level on Reliance - price bounces 3 times = strong support",
      "₹3500 on TCS - price rejected twice = resistance zone",
      "After breaking ₹500 support, Reliance falls to ₹480, then rallies back to ₹500 which now acts as resistance",
    ],
    commonMistakes: [
      "Drawing support/resistance on every minor swing - focus on major levels",
      "Expecting exact price points - think in zones, not lines",
      "Ignoring volume - strong levels have high volume at tests",
    ],
  },
  {
    id: "trend-structure",
    title: "Understanding Trend Structure",
    description: "Trends are the direction of price movement. Understanding trend structure helps you trade with the market, not against it.",
    keyPoints: [
      "Uptrend: Higher Highs (HH) + Higher Lows (HL) - each peak and valley is higher than the last",
      "Downtrend: Lower Highs (LH) + Lower Lows (LL) - each peak and valley is lower than the last",
      "Sideways: Price moves in a range between support and resistance",
      "The trend is your friend - trade in the direction of the trend",
      "Trend breaks when structure changes (HH/HL becomes LH/LL or vice versa)",
    ],
    examples: [
      "HDFC Bank: ₹1400 → ₹1450 → ₹1420 → ₹1480 (HH/HL pattern = uptrend)",
      "Infosys: ₹1500 → ₹1450 → ₹1480 → ₹1420 (LH/LL pattern = downtrend)",
      "Range: Price bouncing between ₹2000-₹2100 for weeks = sideways market",
    ],
    commonMistakes: [
      "Fighting the trend - trying to pick tops in uptrends or bottoms in downtrends",
      "Not identifying the timeframe - 5min downtrend might be a pullback in daily uptrend",
      "Ignoring trend breaks - holding positions when structure changes",
    ],
  },
  {
    id: "candlestick-anatomy",
    title: "Reading Individual Candles",
    description: "Each candlestick tells a story about the battle between buyers and sellers during that time period.",
    keyPoints: [
      "Body: Shows opening and closing price - the main battlefield",
      "Wicks/Shadows: Show the high and low - rejected price levels",
      "Green/White candle: Close > Open (bulls won the period)",
      "Red/Black candle: Close < Open (bears won the period)",
      "Long body = strong conviction, Small body = indecision",
      "Long wicks = rejection of price levels",
    ],
    examples: [
      "Long green candle with small wicks = strong buying, no resistance",
      "Small body with long upper wick = buyers tried to push up but sellers rejected",
      "Doji (equal open/close) = perfect balance, indecision, potential reversal",
      "Hammer (long lower wick) = sellers pushed down but buyers fought back strongly",
    ],
    commonMistakes: [
      "Reading candles in isolation - context matters more than individual candles",
      "Ignoring where the candle forms - same candle means different things at support vs resistance",
      "Not waiting for confirmation - one candle is a hint, not a signal",
    ],
  },
  {
    id: "price-rejection",
    title: "Price Rejection & Wicks",
    description: "Wicks (shadows) are one of the most powerful price action signals. They show where price was rejected and tell you where NOT to be.",
    keyPoints: [
      "Long upper wick = sellers rejected higher prices (bearish)",
      "Long lower wick = buyers rejected lower prices (bullish)",
      "Wicks at support/resistance show the level is being defended",
      "Multiple wicks at same level = very strong zone",
      "Wick size matters - longer wick = stronger rejection",
    ],
    examples: [
      "TCS at ₹3500 resistance: 3 candles with long upper wicks = strong selling pressure",
      "Reliance at ₹2400 support: Long lower wick = buyers stepped in aggressively",
      "Pin bar (long wick, small body) at key level = high probability reversal setup",
    ],
    commonMistakes: [
      "Trading against obvious rejection - if price rejected ₹3500 three times, don't buy at ₹3495",
      "Ignoring wick size - small wicks are normal, long wicks are signals",
      "Not considering volume - rejection with high volume is more significant",
    ],
  },
  {
    id: "breakouts-fakeouts",
    title: "Breakouts vs Fakeouts",
    description: "When price breaks through support or resistance, it can lead to strong moves. But not all breakouts are real - some are traps.",
    keyPoints: [
      "Real Breakout: Strong candle, high volume, no immediate return to broken level",
      "Fakeout: Breaks level but quickly returns, low volume, small candle",
      "Wait for candle close beyond the level - don't trade wicks",
      "Retest: Price often comes back to test broken level before continuing",
      "Best breakouts happen after consolidation (tight range)",
    ],
    examples: [
      "Real: HDFC breaks ₹1500 resistance with big green candle + high volume, never looks back",
      "Fake: Infosys breaks ₹1400 support with small candle, immediately bounces back above",
      "Retest: TCS breaks ₹3500, rises to ₹3550, pulls back to ₹3510 (old resistance now support), then continues up",
    ],
    commonMistakes: [
      "Chasing breakouts - wait for retest or pullback for better entry",
      "Ignoring volume - low volume breakouts often fail",
      "Not using stop loss - if breakout fails, exit quickly",
      "Trading every breakout - only trade breakouts of significant levels",
    ],
  },
  {
    id: "market-structure",
    title: "Market Structure & Swing Points",
    description: "Market structure is the framework of highs and lows that define the trend. Understanding it helps you identify high-probability trade setups.",
    keyPoints: [
      "Swing High: A peak with lower highs on both sides",
      "Swing Low: A valley with higher lows on both sides",
      "Structure break: When price takes out a previous swing high (bullish) or swing low (bearish)",
      "Trade pullbacks in the direction of structure breaks",
      "Wait for structure to form - don't predict, react",
    ],
    examples: [
      "Uptrend: Price makes swing low at ₹1400, rallies to ₹1500, pulls back to ₹1450 (higher low), then breaks ₹1500 = buy signal",
      "Downtrend: Price makes swing high at ₹2000, falls to ₹1900, bounces to ₹1950 (lower high), then breaks ₹1900 = sell signal",
      "Range: Swing highs at ₹2100, swing lows at ₹2000 - trade the bounces until structure breaks",
    ],
    commonMistakes: [
      "Trading before structure confirms - wait for the break",
      "Using too small timeframe - structure on 1min chart is noise",
      "Not adapting when structure changes - be flexible",
    ],
  },
  {
    id: "volume-price",
    title: "Volume Confirms Price Action",
    description: "Volume shows the strength behind price moves. Price tells you what happened, volume tells you how important it is.",
    keyPoints: [
      "High volume + big move = strong conviction, likely to continue",
      "Low volume + big move = weak move, likely to reverse",
      "Volume should increase in direction of trend",
      "Volume spikes at support/resistance show important battles",
      "Decreasing volume in trend = trend is weakening",
    ],
    examples: [
      "Reliance breaks ₹2500 with 3x average volume = strong breakout, likely to continue",
      "TCS falls ₹100 on low volume = weak selling, likely to bounce",
      "HDFC in uptrend but volume decreasing each rally = trend losing steam, be cautious",
    ],
    commonMistakes: [
      "Ignoring volume completely - it's a crucial confirmation tool",
      "Trading low volume moves - they often reverse quickly",
      "Not comparing to average volume - one day's volume means nothing without context",
    ],
  },
  {
    id: "timeframes",
    title: "Multiple Timeframe Analysis",
    description: "The same stock can be in an uptrend on daily chart but downtrend on 5-minute chart. Understanding timeframes prevents confusion.",
    keyPoints: [
      "Higher timeframe = bigger picture, more reliable signals",
      "Lower timeframe = precise entries, but more noise",
      "Trade in direction of higher timeframe trend",
      "Use higher timeframe for bias, lower timeframe for entry",
      "Common combinations: Daily for trend, 1H for entry OR 1H for trend, 5min for entry",
    ],
    examples: [
      "Daily: HDFC in strong uptrend. 1H: Small pullback. Action: Wait for 1H to turn up, then buy",
      "Daily: TCS at resistance. 5min: Breaking out. Action: Don't buy - daily resistance more important",
      "Weekly: Reliance in range. Daily: Uptrend. Action: Trade daily uptrend but be ready for weekly resistance",
    ],
    commonMistakes: [
      "Trading only one timeframe - you miss the bigger picture",
      "Using too many timeframes - stick to 2-3 maximum",
      "Fighting higher timeframe - if daily is down, don't expect 5min longs to work well",
    ],
  },
  {
    id: "putting-it-together",
    title: "Putting It All Together - A Trading Plan",
    description: "Price action trading is about combining all these concepts into a systematic approach. Here's a simple framework to get started.",
    keyPoints: [
      "Step 1: Identify the trend on higher timeframe (daily/4H)",
      "Step 2: Mark key support/resistance levels",
      "Step 3: Wait for price to reach a key level",
      "Step 4: Look for rejection or breakout signals (candles + volume)",
      "Step 5: Enter with the trend after confirmation",
      "Step 6: Place stop loss beyond the recent swing point",
      "Step 7: Target next support/resistance level",
    ],
    examples: [
      "Setup: Daily uptrend in HDFC, price pulls back to ₹1450 support. 1H shows hammer candle with high volume. Entry: ₹1455, Stop: ₹1440, Target: ₹1500",
      "Setup: TCS in daily downtrend, bounces to ₹3500 resistance. 1H shows shooting star. Entry: ₹3490 short, Stop: ₹3510, Target: ₹3400",
      "Setup: Reliance in range ₹2400-₹2500. Price at ₹2405 with bullish engulfing. Entry: ₹2410, Stop: ₹2395, Target: ₹2490",
    ],
    commonMistakes: [
      "Overcomplicating - start simple, add complexity as you gain experience",
      "Not having a plan - every trade should have entry, stop, and target before you enter",
      "Ignoring risk management - never risk more than 1-2% per trade",
      "Expecting perfection - even good setups fail 40-50% of the time, that's normal",
    ],
  },
];

export const priceActionQuiz = [
  {
    id: "pa-q1",
    question: "What does a long lower wick on a candle indicate?",
    options: [
      "Sellers pushed price down but buyers rejected lower prices",
      "Buyers are weak and sellers are in control",
      "The stock will definitely go up",
      "Nothing, wicks don't matter",
    ],
    correctAnswer: 0,
    explanation: "A long lower wick shows that sellers tried to push price down, but buyers stepped in strongly and pushed it back up. This is a bullish rejection signal, especially at support levels.",
  },
  {
    id: "pa-q2",
    question: "In an uptrend, what pattern confirms the trend is still healthy?",
    options: [
      "Lower Highs and Lower Lows",
      "Higher Highs and Higher Lows",
      "Equal Highs and Equal Lows",
      "Random price movement",
    ],
    correctAnswer: 1,
    explanation: "An uptrend is defined by Higher Highs (HH) and Higher Lows (HL). Each peak and valley should be higher than the previous one. When this pattern breaks, the uptrend is in danger.",
  },
  {
    id: "pa-q3",
    question: "What makes a breakout more reliable?",
    options: [
      "It happens on low volume",
      "It happens with a small candle",
      "It happens with high volume and strong candle",
      "It happens during lunch time",
    ],
    correctAnswer: 2,
    explanation: "Real breakouts are characterized by strong candles (showing conviction) and high volume (showing participation). Low volume breakouts often turn out to be fakeouts.",
  },
  {
    id: "pa-q4",
    question: "When support is broken, what typically happens?",
    options: [
      "It becomes resistance (role reversal)",
      "It becomes stronger support",
      "Nothing changes",
      "The stock always crashes",
    ],
    correctAnswer: 0,
    explanation: "When support breaks, it often becomes resistance. This is called role reversal. The level that was previously holding price up now acts as a ceiling pushing price down.",
  },
  {
    id: "pa-q5",
    question: "What's the best way to use multiple timeframes?",
    options: [
      "Trade only on 1-minute chart",
      "Use higher timeframe for trend, lower for entry",
      "Ignore timeframes completely",
      "Use 10 different timeframes",
    ],
    correctAnswer: 1,
    explanation: "The most effective approach is to use a higher timeframe (like daily or 4H) to identify the overall trend and bias, then use a lower timeframe (like 1H or 15min) to find precise entry points in that direction.",
  },
  {
    id: "pa-q6",
    question: "What does decreasing volume during an uptrend indicate?",
    options: [
      "The trend is getting stronger",
      "The trend is losing momentum and may reverse",
      "Volume doesn't matter",
      "It's time to buy more",
    ],
    correctAnswer: 1,
    explanation: "Decreasing volume during a trend suggests weakening participation and conviction. In an uptrend, volume should ideally increase on up moves. Decreasing volume warns that the trend may be running out of steam.",
  },
  {
    id: "pa-q7",
    question: "What's a common mistake when trading support and resistance?",
    options: [
      "Thinking of them as zones rather than exact lines",
      "Expecting exact price points and getting stopped out by small wicks",
      "Using them with other price action signals",
      "Marking them on higher timeframes",
    ],
    correctAnswer: 1,
    explanation: "A common mistake is treating support and resistance as exact price points. In reality, they're zones. Price might wick slightly through a level before bouncing. Think in zones, not lines.",
  },
  {
    id: "pa-q8",
    question: "What should you do when you see a fakeout?",
    options: [
      "Chase the breakout immediately",
      "Wait for price to return and trade the reversal",
      "Panic and close all positions",
      "Ignore it completely",
    ],
    correctAnswer: 1,
    explanation: "Fakeouts often lead to strong moves in the opposite direction as trapped traders exit. When you identify a fakeout (price breaks a level but quickly returns), it can be a good opportunity to trade in the opposite direction.",
  },
];
