export interface FinancialModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  topics: Topic[];
  quiz: QuizQuestion[];
}

export interface Topic {
  title: string;
  content: string;
  example?: string;
  visual?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const financialModules: FinancialModule[] = [
  {
    id: "financial-literacy",
    title: "Financial Literacy Basics",
    description: "Why saving and investing matters for your future",
    icon: "💰",
    order: 1,
    topics: [
      {
        title: "Why Financial Literacy?",
        content: "Financial literacy means understanding how money works - earning, saving, investing, and spending wisely. It's the foundation for building wealth and achieving financial freedom.",
        example: "Person A saves ₹10,000/month in bank (4% interest). Person B invests ₹10,000/month in equity (12% returns). After 20 years: A has ₹36 lakhs, B has ₹1 crore!",
      },
      {
        title: "The 50-30-20 Rule",
        content: "A simple budgeting framework: 50% for needs (rent, food), 30% for wants (entertainment), 20% for savings and investments.",
        example: "Monthly income ₹50,000 → ₹25,000 needs, ₹15,000 wants, ₹10,000 invest",
      },
      {
        title: "Emergency Fund First",
        content: "Before investing, build an emergency fund covering 6 months of expenses. Keep it in a savings account or liquid fund for easy access.",
        example: "Monthly expenses ₹30,000 → Emergency fund target: ₹1.8 lakhs",
      },
    ],
    quiz: [
      {
        question: "What percentage should you ideally save/invest according to the 50-30-20 rule?",
        options: ["10%", "20%", "30%", "50%"],
        correct: 1,
        explanation: "The 50-30-20 rule suggests 20% for savings and investments.",
      },
      {
        question: "How many months of expenses should your emergency fund cover?",
        options: ["3 months", "6 months", "12 months", "24 months"],
        correct: 1,
        explanation: "A 6-month emergency fund provides adequate protection for most situations.",
      },
    ],
  },
  {
    id: "compounding",
    title: "Magic of Compounding",
    description: "How your money grows exponentially over time",
    icon: "📈",
    order: 2,
    topics: [
      {
        title: "What is Compounding?",
        content: "Compounding is earning returns on your returns. Your money grows exponentially, not linearly. Einstein called it the '8th wonder of the world'.",
        example: "₹1 lakh at 12% for 10 years: Simple interest = ₹2.2 lakhs, Compound interest = ₹3.1 lakhs (₹90,000 extra!)",
      },
      {
        title: "Time is Your Best Friend",
        content: "Starting early is more powerful than investing more. A 25-year-old investing ₹5,000/month can beat a 35-year-old investing ₹10,000/month.",
        example: "Start at 25: ₹5k/month for 35 years = ₹2.5 crores. Start at 35: ₹10k/month for 25 years = ₹1.9 crores",
      },
      {
        title: "The Rule of 72",
        content: "Quick way to calculate doubling time: Divide 72 by annual return rate. At 12% returns, your money doubles every 6 years (72÷12=6).",
        example: "₹1 lakh at 12%: 6 years = ₹2L, 12 years = ₹4L, 18 years = ₹8L, 24 years = ₹16L",
      },
    ],
    quiz: [
      {
        question: "At 12% annual returns, how many years does it take to double your money?",
        options: ["4 years", "6 years", "8 years", "10 years"],
        correct: 1,
        explanation: "Using Rule of 72: 72 ÷ 12 = 6 years to double.",
      },
      {
        question: "What makes compounding powerful?",
        options: ["High returns only", "Long time period only", "Both time and returns", "Large initial investment"],
        correct: 2,
        explanation: "Compounding works best with both time and consistent returns.",
      },
    ],
  },
  {
    id: "stock-market",
    title: "Stock Market 101",
    description: "Understanding how the stock market works",
    icon: "📊",
    order: 3,
    topics: [
      {
        title: "What is Stock Market?",
        content: "A marketplace where companies sell ownership (shares) to raise money, and investors buy shares to own part of the company and benefit from its growth.",
        example: "You buy 10 shares of Reliance at ₹2,000 = ₹20,000 investment. If price rises to ₹2,500, your investment becomes ₹25,000 (₹5,000 profit).",
      },
      {
        title: "How Do You Make Money?",
        content: "Two ways: (1) Capital Gains - selling shares at higher price than you bought, (2) Dividends - companies sharing profits with shareholders.",
        example: "Buy TCS at ₹3,000. Sell at ₹3,500 = ₹500 capital gain. Plus ₹50 dividend = Total ₹550 profit per share.",
      },
      {
        title: "Market Indices (Sensex & Nifty)",
        content: "Sensex tracks top 30 companies, Nifty tracks top 50. They show overall market health. When Sensex rises, most stocks are doing well.",
        example: "Sensex at 60,000 → rises to 66,000 = 10% market growth. Your diversified portfolio likely grew ~10% too.",
      },
      {
        title: "Bull vs Bear Market",
        content: "Bull Market = Prices rising, optimism high. Bear Market = Prices falling, pessimism high. Both are normal market cycles.",
        example: "Bull: 2020-2021 (Sensex 30k→60k). Bear: March 2020 (Sensex 42k→26k in 1 month).",
      },
    ],
    quiz: [
      {
        question: "What are the two main ways to make money in stocks?",
        options: ["Buying and selling only", "Dividends only", "Capital gains and dividends", "Interest payments"],
        correct: 2,
        explanation: "You profit from both price appreciation (capital gains) and dividend payments.",
      },
      {
        question: "What does Nifty 50 represent?",
        options: ["50 best stocks", "Top 50 companies by market cap", "50% market growth", "50 day average"],
        correct: 1,
        explanation: "Nifty 50 is an index of the top 50 companies listed on NSE.",
      },
    ],
  },
  {
    id: "investment-vehicles",
    title: "SIP & Mutual Funds",
    description: "Smart ways to invest without picking individual stocks",
    icon: "🎯",
    order: 4,
    topics: [
      {
        title: "What is a Mutual Fund?",
        content: "A pool of money from many investors, managed by professionals who invest in stocks, bonds, etc. You own units of the fund, not individual stocks.",
        example: "You invest ₹5,000 in a mutual fund. Fund manager buys 50 different stocks with money from you and 10,000 other investors. Instant diversification!",
      },
      {
        title: "What is SIP?",
        content: "Systematic Investment Plan - investing a fixed amount regularly (monthly). It's like a recurring deposit but in mutual funds. Removes timing stress.",
        example: "₹5,000 SIP every month. Market high? You buy fewer units. Market low? You buy more units. This is called Rupee Cost Averaging.",
      },
      {
        title: "Types of Mutual Funds",
        content: "Equity Funds (stocks, high risk-return), Debt Funds (bonds, low risk-return), Hybrid Funds (mix of both). Choose based on your goals and risk appetite.",
        example: "Goal: Retirement in 25 years → Equity fund (high growth). Goal: House down payment in 3 years → Debt fund (stable).",
      },
      {
        title: "Why SIP is Powerful",
        content: "Disciplined investing, rupee cost averaging, power of compounding, no need to time the market, starts with as low as ₹500/month.",
        example: "₹5,000 SIP for 20 years at 12% = ₹50 lakhs invested, grows to ₹1.5 crores!",
      },
    ],
    quiz: [
      {
        question: "What is the main benefit of SIP?",
        options: ["Guaranteed returns", "Rupee cost averaging", "No risk", "Tax free"],
        correct: 1,
        explanation: "SIP helps average out market volatility through rupee cost averaging.",
      },
      {
        question: "Which fund type is best for long-term goals (10+ years)?",
        options: ["Debt funds", "Liquid funds", "Equity funds", "Gold funds"],
        correct: 2,
        explanation: "Equity funds offer highest growth potential for long-term goals.",
      },
    ],
  },
  {
    id: "ready-for-charts",
    title: "Ready for Technical Analysis",
    description: "Bridge to chart patterns and trading",
    icon: "📉",
    order: 5,
    topics: [
      {
        title: "Investing vs Trading",
        content: "Investing = Long-term (years), buy and hold, fundamental analysis. Trading = Short-term (days/weeks), buy-sell frequently, technical analysis (charts).",
        example: "Investor: Buys Infosys, holds 5 years. Trader: Buys Infosys at ₹1,400, sells at ₹1,450 in 2 weeks using chart patterns.",
      },
      {
        title: "What are Chart Patterns?",
        content: "Visual patterns formed by price movements that help predict future price direction. Used by traders to time entry and exit points.",
        example: "Head & Shoulders pattern signals trend reversal. Double Bottom signals uptrend beginning.",
      },
      {
        title: "Who Should Learn Charts?",
        content: "Active traders, swing traders, or investors who want to time their entries better. Not necessary for pure SIP investors.",
        example: "SIP investor: Doesn't need charts. Active trader: Charts are essential tools.",
      },
      {
        title: "Your Learning Path",
        content: "You've learned: Financial basics → Compounding → Markets → SIP/MF. Next: Chart patterns → Technical indicators → Practice trading.",
        example: "Start with beginner patterns (Double Top/Bottom), practice recognition, then move to intermediate patterns.",
      },
    ],
    quiz: [
      {
        question: "What is the main difference between investing and trading?",
        options: ["Risk level", "Time horizon", "Returns", "Capital required"],
        correct: 1,
        explanation: "The key difference is time horizon - investing is long-term, trading is short-term.",
      },
      {
        question: "Who benefits most from learning chart patterns?",
        options: ["SIP investors only", "Active traders", "Mutual fund investors", "Fixed deposit holders"],
        correct: 1,
        explanation: "Chart patterns are most useful for active traders who time their trades.",
      },
    ],
  },
];
