export interface InvestmentConcept {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  example: string;
}

export const investmentConcepts: InvestmentConcept[] = [
  {
    id: "sip-vs-lumpsum",
    title: "SIP vs Lump Sum - Which is Better?",
    description: "SIP (Systematic Investment Plan) means investing a fixed amount regularly (monthly). Lump sum means investing a large amount at once. For beginners, SIP is safer and builds discipline.",
    keyPoints: [
      "SIP: Invest ₹5,000 every month - reduces timing risk, builds habit",
      "Lump Sum: Invest ₹60,000 at once - requires market timing skills",
      "SIP averages out market ups and downs (Rupee Cost Averaging)",
      "Start with SIP even if you have lump sum - split it into 6-12 months",
      "SIP works best for long-term goals (5+ years)",
    ],
    example: "₹5,000 monthly SIP for 10 years at 12% returns = ₹11.6 lakhs (you invest ₹6 lakhs). Same lump sum of ₹6 lakhs = ₹18.6 lakhs. But SIP is safer for beginners!",
  },
  {
    id: "fund-types",
    title: "Equity vs Debt vs Hybrid Funds",
    description: "Equity funds invest in stocks (high risk, high return). Debt funds invest in bonds (low risk, low return). Hybrid funds mix both (balanced risk-return).",
    keyPoints: [
      "Equity Funds: 80-100% in stocks, 12-15% returns, high volatility, 5+ year horizon",
      "Debt Funds: 80-100% in bonds, 6-8% returns, low volatility, 1-3 year horizon",
      "Hybrid Funds: 50-50 mix, 9-11% returns, moderate risk, 3-5 year horizon",
      "Young investors (20-35): 80% equity, 20% debt",
      "Mid-age (35-50): 60% equity, 40% debt",
      "Near retirement (50+): 40% equity, 60% debt",
    ],
    example: "₹10,000 monthly: ₹7,000 in equity fund (Nifty 50 Index), ₹2,000 in debt fund, ₹1,000 in hybrid fund = Balanced portfolio",
  },
  {
    id: "index-funds",
    title: "Index Funds - The Smart Choice",
    description: "Index funds copy a market index like NIFTY 50 or Sensex. They're low-cost, transparent, and beat 80% of actively managed funds over 10+ years.",
    keyPoints: [
      "Tracks NIFTY 50 (top 50 companies) or Sensex (top 30 companies)",
      "Very low expense ratio: 0.1-0.5% vs 1.5-2.5% for active funds",
      "No fund manager risk - follows the index automatically",
      "Perfect for beginners - simple, transparent, proven",
      "Historical returns: 12-14% over 15+ years",
    ],
    example: "NIFTY 50 Index Fund: ₹5,000/month for 20 years at 12% = ₹49.95 lakhs (you invest ₹12 lakhs). Compounding magic!",
  },
  {
    id: "etfs",
    title: "ETFs - Trade Like Stocks, Diversify Like Funds",
    description: "ETFs (Exchange Traded Funds) are like mutual funds but trade on stock exchanges like shares. Buy/sell anytime during market hours.",
    keyPoints: [
      "Trade on NSE/BSE like stocks - real-time pricing",
      "Lower expense ratio than mutual funds (0.05-0.3%)",
      "Need Demat account to buy (same as stocks)",
      "Popular: Nifty BeES, Junior BeES, Gold BeES, Liquid BeES",
      "No entry/exit load - just brokerage charges",
    ],
    example: "Buy Nifty BeES at ₹200/unit, 25 units = ₹5,000. Sell anytime when price rises. Dividend + capital gains = total return.",
  },
  {
    id: "risk-profiling",
    title: "Know Your Risk Profile",
    description: "Risk profile determines how much volatility you can handle. It depends on age, income, goals, and emotional tolerance to losses.",
    keyPoints: [
      "Aggressive (20-35 years): 80-100% equity, can handle 30-40% drops",
      "Moderate (35-50 years): 50-70% equity, comfortable with 20-30% drops",
      "Conservative (50+ years): 20-40% equity, avoid big drops",
      "Emergency fund first: 6 months expenses in liquid fund/savings",
      "Never invest money you'll need in next 3 years in equity",
    ],
    example: "25-year-old with ₹50,000 salary: Keep ₹3 lakhs emergency fund, invest ₹10,000/month in 80% equity + 20% debt = Aggressive portfolio",
  },
  {
    id: "asset-allocation",
    title: "Asset Allocation - The Key to Success",
    description: "Don't put all eggs in one basket. Spread investments across equity, debt, gold, and real estate based on goals and risk profile.",
    keyPoints: [
      "Rule of thumb: Equity % = 100 - Your Age (30 years old = 70% equity)",
      "Rebalance yearly: If equity grows too much, move some to debt",
      "Diversify within equity: Large cap + Mid cap + Small cap",
      "Include 5-10% gold for stability (Gold ETF or Sovereign Gold Bonds)",
      "Review portfolio every 6 months, rebalance if needed",
    ],
    example: "₹20,000/month: ₹12,000 equity (60%), ₹6,000 debt (30%), ₹2,000 gold (10%) = Balanced 30-year-old portfolio",
  },
];

export const fundCategories = [
  {
    name: "Large Cap Funds",
    risk: "Low-Medium",
    returns: "10-12%",
    horizon: "5+ years",
    description: "Invest in top 100 companies (Reliance, TCS, HDFC Bank)",
    suitableFor: "Beginners, conservative investors",
  },
  {
    name: "Mid Cap Funds",
    risk: "Medium-High",
    returns: "12-15%",
    horizon: "7+ years",
    description: "Invest in companies ranked 101-250 (high growth potential)",
    suitableFor: "Moderate risk takers",
  },
  {
    name: "Small Cap Funds",
    risk: "High",
    returns: "15-18%",
    horizon: "10+ years",
    description: "Invest in companies ranked 251+ (highest risk-reward)",
    suitableFor: "Aggressive, long-term investors",
  },
  {
    name: "Index Funds",
    risk: "Medium",
    returns: "11-13%",
    horizon: "10+ years",
    description: "Tracks NIFTY 50/Sensex - low cost, transparent",
    suitableFor: "All investors, especially beginners",
  },
  {
    name: "Debt Funds",
    risk: "Low",
    returns: "6-8%",
    horizon: "1-3 years",
    description: "Invest in government/corporate bonds - stable returns",
    suitableFor: "Conservative, short-term goals",
  },
  {
    name: "Hybrid Funds",
    risk: "Medium",
    returns: "9-11%",
    horizon: "3-5 years",
    description: "Mix of equity and debt - balanced approach",
    suitableFor: "Moderate investors, first-time investors",
  },
];

export const startingSteps = [
  {
    step: 1,
    title: "Complete KYC",
    description: "One-time process with PAN, Aadhaar, bank details",
    time: "30 minutes",
    platforms: ["Zerodha Coin", "Groww", "Paytm Money", "ET Money"],
  },
  {
    step: 2,
    title: "Choose Your Funds",
    description: "Start with 2-3 index funds or hybrid funds",
    time: "1 hour research",
    platforms: ["NIFTY 50 Index", "Nifty Next 50", "Balanced Advantage Fund"],
  },
  {
    step: 3,
    title: "Start Small SIP",
    description: "Begin with ₹1,000-₹5,000 per month",
    time: "10 minutes",
    platforms: ["Set auto-debit on 1st or 5th of month"],
  },
  {
    step: 4,
    title: "Increase Gradually",
    description: "Increase SIP by 10-20% every year (Step-up SIP)",
    time: "Yearly review",
    platforms: ["Align with salary increments"],
  },
  {
    step: 5,
    title: "Stay Invested",
    description: "Don't panic during market falls - stay for 10+ years",
    time: "Long-term",
    platforms: ["Review portfolio every 6 months"],
  },
];

export const commonMistakes = [
  "Stopping SIP during market crash - biggest mistake! Market falls are buying opportunities",
  "Chasing last year's top performers - past performance doesn't guarantee future returns",
  "Investing without emergency fund - keep 6 months expenses liquid first",
  "Too many funds - 4-5 funds are enough, more creates confusion",
  "Checking portfolio daily - causes panic, check quarterly or half-yearly",
  "Timing the market - impossible to predict, SIP solves this problem",
  "Ignoring expense ratio - 1% extra fee = 25% less wealth over 30 years",
  "Not rebalancing - if equity grows to 90%, move some to debt",
  "Investing for short term in equity - minimum 5 years needed",
  "Following tips blindly - do basic research, understand what you buy",
];

export const taxBasics = [
  {
    type: "Equity Funds/ETFs",
    shortTerm: "< 1 year: 20% tax on gains",
    longTerm: "> 1 year: 12.5% tax on gains above ₹1.25 lakh/year",
    note: "Equity = 65%+ in stocks",
  },
  {
    type: "Debt Funds",
    shortTerm: "< 3 years: Added to income, taxed at slab rate",
    longTerm: "> 3 years: 20% with indexation benefit",
    note: "Debt = 65%+ in bonds",
  },
  {
    type: "Hybrid Funds",
    shortTerm: "Taxed as equity or debt based on composition",
    longTerm: "Check fund type - equity-oriented or debt-oriented",
    note: "Follow equity rules if 65%+ equity",
  },
];

export const quickChecklist = [
  "✓ Emergency fund ready (6 months expenses)",
  "✓ Health insurance active (₹5-10 lakhs minimum)",
  "✓ Term life insurance if dependents (10-15x annual income)",
  "✓ KYC completed on investment platform",
  "✓ Risk profile assessed (aggressive/moderate/conservative)",
  "✓ Investment goal defined (retirement/house/child education)",
  "✓ Time horizon clear (5/10/20 years)",
  "✓ Monthly SIP amount decided (10-20% of salary)",
  "✓ Funds selected (2-3 index/hybrid funds to start)",
  "✓ Auto-debit set up for SIP date",
];
