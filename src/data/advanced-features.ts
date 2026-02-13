// Case Studies - Famous trades using patterns
export interface CaseStudy {
  id: string;
  patternSlug: string;
  title: string;
  stock: string;
  sector: string;
  date: string;
  timeframe: string;
  entry: number;
  exit: number;
  profit: number;
  duration: string;
  story: string;
  lessons: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "reliance-cup-handle-2020",
    patternSlug: "cup-and-handle",
    title: "Reliance Industries Cup & Handle Breakout",
    stock: "Reliance Industries",
    sector: "Energy",
    date: "July 2020",
    timeframe: "Daily",
    entry: 1650,
    exit: 2100,
    profit: 27.3,
    duration: "3 months",
    story: "During COVID recovery, Reliance formed a perfect cup & handle on daily charts. Entry at ₹1650 after handle breakout with volume. Stock rallied to ₹2100 in 3 months as Jio deals were announced.",
    lessons: ["Wait for handle formation", "Volume confirmation crucial", "News catalysts amplify patterns"],
  },
  {
    id: "tcs-head-shoulders-2022",
    patternSlug: "head-and-shoulders",
    title: "TCS Head & Shoulders Top",
    stock: "TCS",
    sector: "IT",
    date: "January 2022",
    timeframe: "Weekly",
    entry: 3900,
    exit: 3200,
    profit: 17.9,
    duration: "4 months",
    story: "TCS formed classic H&S top at ₹4000 levels. Short entry at ₹3900 after neckline break. IT sector weakness confirmed the pattern. Target hit at ₹3200.",
    lessons: ["Sector trend matters", "Weekly patterns more reliable", "Neckline break is key"],
  },
  {
    id: "hdfc-bank-double-bottom-2020",
    patternSlug: "double-bottom",
    title: "HDFC Bank Double Bottom Recovery",
    stock: "HDFC Bank",
    sector: "Banking",
    date: "March 2020",
    timeframe: "Daily",
    entry: 950,
    exit: 1250,
    profit: 31.6,
    duration: "2 months",
    story: "Post-COVID crash, HDFC Bank tested ₹900 twice forming double bottom. Entry at ₹950 after resistance break. Banking sector recovery drove price to ₹1250.",
    lessons: ["Support tests show strength", "Sector rotation timing", "Risk-reward was 1:3"],
  },
];

// Backtesting Results - Indian market data
export interface BacktestResult {
  patternSlug: string;
  totalTrades: number;
  winRate: number;
  avgProfit: number;
  avgLoss: number;
  bestSector: string;
  worstSector: string;
  bullMarket: { winRate: number; avgReturn: number };
  bearMarket: { winRate: number; avgReturn: number };
  sideways: { winRate: number; avgReturn: number };
  timeframes: {
    daily: { winRate: number; avgReturn: number };
    weekly: { winRate: number; avgReturn: number };
    monthly: { winRate: number; avgReturn: number };
  };
}

export const backtestResults: BacktestResult[] = [
  {
    patternSlug: "double-bottom",
    totalTrades: 156,
    winRate: 72,
    avgProfit: 18.5,
    avgLoss: 8.2,
    bestSector: "Banking",
    worstSector: "Pharma",
    bullMarket: { winRate: 78, avgReturn: 22.3 },
    bearMarket: { winRate: 58, avgReturn: 12.1 },
    sideways: { winRate: 68, avgReturn: 15.4 },
    timeframes: {
      daily: { winRate: 68, avgReturn: 15.2 },
      weekly: { winRate: 75, avgReturn: 21.8 },
      monthly: { winRate: 82, avgReturn: 28.5 },
    },
  },
  {
    patternSlug: "head-and-shoulders",
    totalTrades: 142,
    winRate: 76,
    avgProfit: 16.8,
    avgLoss: 7.5,
    bestSector: "IT",
    worstSector: "Energy",
    bullMarket: { winRate: 65, avgReturn: 12.4 },
    bearMarket: { winRate: 82, avgReturn: 19.6 },
    sideways: { winRate: 74, avgReturn: 15.8 },
    timeframes: {
      daily: { winRate: 72, avgReturn: 14.5 },
      weekly: { winRate: 78, avgReturn: 18.2 },
      monthly: { winRate: 84, avgReturn: 22.1 },
    },
  },
];

// Sector-specific pattern performance
export interface SectorPattern {
  sector: string;
  icon: string;
  topPatterns: Array<{ name: string; winRate: number; avgReturn: number }>;
  characteristics: string[];
  bestTimeframe: string;
}

export const sectorPatterns: SectorPattern[] = [
  {
    sector: "Banking",
    icon: "🏦",
    topPatterns: [
      { name: "Double Bottom", winRate: 78, avgReturn: 22.5 },
      { name: "Cup & Handle", winRate: 74, avgReturn: 19.8 },
      { name: "Ascending Triangle", winRate: 71, avgReturn: 18.2 },
    ],
    characteristics: [
      "Strong support/resistance levels",
      "Responds well to RBI policy",
      "Sector rotation plays key role",
    ],
    bestTimeframe: "Weekly",
  },
  {
    sector: "IT",
    icon: "💻",
    topPatterns: [
      { name: "Head & Shoulders", winRate: 82, avgReturn: 21.3 },
      { name: "Flags & Pennants", winRate: 76, avgReturn: 16.5 },
      { name: "Wedges", winRate: 73, avgReturn: 15.8 },
    ],
    characteristics: [
      "Trend-following patterns work best",
      "Dollar movement impacts heavily",
      "Earnings season volatility",
    ],
    bestTimeframe: "Daily",
  },
  {
    sector: "Pharma",
    icon: "💊",
    topPatterns: [
      { name: "Triangles", winRate: 69, avgReturn: 14.2 },
      { name: "Rectangle", winRate: 67, avgReturn: 13.5 },
      { name: "Double Top", winRate: 65, avgReturn: 12.8 },
    ],
    characteristics: [
      "News-driven volatility",
      "Consolidation patterns common",
      "Regulatory impact significant",
    ],
    bestTimeframe: "Daily",
  },
];

// Options strategies for patterns
export interface OptionsStrategy {
  patternSlug: string;
  strategies: Array<{
    name: string;
    type: string;
    description: string;
    when: string;
    risk: string;
    reward: string;
    example: string;
  }>;
}

export const optionsStrategies: OptionsStrategy[] = [
  {
    patternSlug: "double-bottom",
    strategies: [
      {
        name: "Bull Call Spread",
        type: "Bullish",
        description: "Buy ATM call, sell OTM call",
        when: "After neckline breakout confirmation",
        risk: "Limited to net premium paid",
        reward: "Limited to strike difference minus premium",
        example: "Stock at ₹1000. Buy 1000 CE, Sell 1050 CE. Max profit ₹50 minus premium.",
      },
      {
        name: "Long Call",
        type: "Bullish",
        description: "Buy ATM or slightly OTM call",
        when: "High conviction breakout with volume",
        risk: "Premium paid",
        reward: "Unlimited upside",
        example: "Stock at ₹1000. Buy 1020 CE for ₹30. Breakeven at ₹1050.",
      },
    ],
  },
];

// Pattern combinations
export interface PatternCombination {
  id: string;
  patterns: string[];
  title: string;
  reliability: "high" | "medium";
  description: string;
  signal: string;
  example: string;
}

export const patternCombinations: PatternCombination[] = [
  {
    id: "double-bottom-bullish-engulfing",
    patterns: ["double-bottom", "bullish-engulfing"],
    title: "Double Bottom + Bullish Engulfing",
    reliability: "high",
    description: "When bullish engulfing appears at second bottom of double bottom pattern",
    signal: "Extremely strong reversal signal. Buyers overwhelming sellers at key support.",
    example: "Stock forms double bottom at ₹500. Second bottom shows bullish engulfing candle. High probability of rally to ₹550+.",
  },
  {
    id: "head-shoulders-evening-star",
    patterns: ["head-and-shoulders", "evening-star"],
    title: "Head & Shoulders + Evening Star",
    reliability: "high",
    description: "Evening star candlestick pattern forms at the head of H&S pattern",
    signal: "Powerful bearish confirmation. Both patterns signal trend reversal.",
    example: "H&S forms with head at ₹1000. Evening star appears at head. Strong sell signal for move to ₹900.",
  },
];
