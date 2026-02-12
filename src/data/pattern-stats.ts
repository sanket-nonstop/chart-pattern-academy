export interface PatternStats {
  slug: string;
  successRate: number;
  avgGain: number;
  avgLoss: number;
  avgDuration: string;
  bestMarket: string;
  reliability: "high" | "medium" | "low";
}

export const patternStats: PatternStats[] = [
  {
    slug: "double-top",
    successRate: 65,
    avgGain: 8.5,
    avgLoss: 4.2,
    avgDuration: "2-4 weeks",
    bestMarket: "Trending markets",
    reliability: "high",
  },
  {
    slug: "double-bottom",
    successRate: 68,
    avgGain: 9.2,
    avgLoss: 4.0,
    avgDuration: "2-4 weeks",
    bestMarket: "Oversold conditions",
    reliability: "high",
  },
  {
    slug: "head-and-shoulders",
    successRate: 72,
    avgGain: 12.5,
    avgLoss: 5.5,
    avgDuration: "4-8 weeks",
    bestMarket: "End of uptrends",
    reliability: "high",
  },
  {
    slug: "cup-and-handle",
    successRate: 70,
    avgGain: 15.0,
    avgLoss: 6.0,
    avgDuration: "6-12 weeks",
    bestMarket: "Bull markets",
    reliability: "high",
  },
  {
    slug: "triangles",
    successRate: 60,
    avgGain: 7.5,
    avgLoss: 4.5,
    avgDuration: "3-6 weeks",
    bestMarket: "Consolidation phases",
    reliability: "medium",
  },
  {
    slug: "flags-and-pennants",
    successRate: 58,
    avgGain: 6.0,
    avgLoss: 3.5,
    avgDuration: "1-3 weeks",
    bestMarket: "Strong trends",
    reliability: "medium",
  },
  {
    slug: "wedges",
    successRate: 62,
    avgGain: 10.0,
    avgLoss: 5.0,
    avgDuration: "3-5 weeks",
    bestMarket: "Trend exhaustion",
    reliability: "medium",
  },
];
