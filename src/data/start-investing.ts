export interface InvestmentConcept {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  example: string;
}

export const investmentConcepts: InvestmentConcept[] = [
  {
    id: "why-invest",
    title: "Why Should You Invest? (Not Just Save)",
    description: "Saving money in a bank account is safe, but inflation eats your money's value every year. If you save ₹1 lakh today, it will buy less after 10 years. Investing helps your money grow faster than inflation.",
    keyPoints: [
      "Bank FD gives 6-7% return, but inflation is 6-7% = Your money stays same",
      "Investing in equity can give 12-15% return = Your money actually grows",
      "₹10,000 saved in bank for 20 years = ₹38,000. Same invested = ₹96,000!",
      "Start early: Even ₹1,000/month from age 25 = ₹1 Crore by 55",
      "Don't wait for 'perfect time' - start small, start now",
    ],
    example: "Raj saves ₹5,000/month in bank (6% interest) for 20 years = ₹23 lakhs. Priya invests same ₹5,000/month in mutual funds (12% return) = ₹49 lakhs. Priya has 2x more money!",
  },
  {
    id: "income-distribution",
    title: "How to Distribute Your Salary (50-30-20 Rule)",
    description: "Don't invest everything! Follow this simple rule to manage your money smartly. This works whether you earn ₹20,000 or ₹2 lakhs per month.",
    keyPoints: [
      "50% for Needs: Rent, food, bills, EMIs, transport (must-have expenses)",
      "30% for Wants: Shopping, eating out, movies, hobbies (enjoy life!)",
      "20% for Savings & Investment: Emergency fund + SIP + insurance",
      "Example: ₹50,000 salary = ₹25,000 needs + ₹15,000 wants + ₹10,000 invest",
      "First month: Build emergency fund. Then start SIP from 2nd month",
    ],
    example: "Amit earns ₹40,000/month. He spends ₹20,000 on rent/food (50%), ₹12,000 on fun (30%), and invests ₹8,000 (20%). In 10 years, his ₹8,000 SIP = ₹18 lakhs!",
  },
  {
    id: "emergency-fund",
    title: "Emergency Fund - Your Safety Net (Do This First!)",
    description: "Before investing anywhere, save 6 months of expenses in a safe place. This is for job loss, medical emergency, or urgent needs. Don't touch this money for investing!",
    keyPoints: [
      "Calculate: Monthly expenses × 6 = Your emergency fund target",
      "Example: ₹30,000 monthly expenses × 6 = ₹1.8 lakh emergency fund",
      "Keep in: Savings account or liquid mutual fund (withdraw anytime)",
      "Build in 6-12 months: Save extra ₹15,000-30,000 per month",
      "Only after this is ready, start investing in equity/mutual funds",
    ],
    example: "Sneha lost her job suddenly. She had ₹2 lakh emergency fund. She survived 5 months without stress while finding new job. No loans, no panic!",
  },
  {
    id: "risk-vs-return",
    title: "Risk vs Return - Higher Return = Higher Risk",
    description: "Simple rule: If someone promises 20% guaranteed return, run away! High returns always come with high risk. Understand this before investing.",
    keyPoints: [
      "Low Risk, Low Return: Bank FD (6-7%), Debt funds (7-8%) - Safe but slow",
      "Medium Risk, Medium Return: Hybrid funds (9-11%) - Balanced",
      "High Risk, High Return: Equity funds (12-15%) - Can go up/down 30%",
      "Your age matters: Young = take more risk, Old = play safe",
      "Never invest money you'll need in next 3 years in equity",
    ],
    example: "In 2020 COVID crash, equity funds fell 30%. But by 2021, they were up 50%! If you sold in panic, you lost. If you stayed, you won big. This is risk!",
  },
  {
    id: "sip-explained",
    title: "What is SIP? (Systematic Investment Plan)",
    description: "SIP means investing a fixed amount every month automatically. Like paying a monthly bill, but you're paying yourself! It's the easiest way to invest without thinking about market ups and downs.",
    keyPoints: [
      "Auto-debit from bank: Set once, forget it. Money invests automatically",
      "Start small: Even ₹500/month is fine. Increase later when salary grows",
      "Rupee Cost Averaging: Buy more units when price low, less when high",
      "No market timing needed: Don't worry if market is up or down",
      "Can stop/pause anytime: No penalty, full flexibility",
    ],
    example: "Meera starts ₹3,000 SIP at age 25. By 45 (20 years), she has ₹37 lakhs! She invested only ₹7.2 lakhs. Rest ₹30 lakhs is profit from compounding.",
  },
  {
    id: "fund-types-simple",
    title: "Types of Mutual Funds (Which One to Choose?)",
    description: "Mutual funds pool money from many people and invest in stocks/bonds. Professional managers handle it. You just invest and relax. Three main types based on risk.",
    keyPoints: [
      "Equity Funds: Invest in stocks. High risk, high return (12-15%). For long term 5+ years",
      "Debt Funds: Invest in bonds. Low risk, low return (7-8%). For short term 1-3 years",
      "Hybrid Funds: Mix of both. Medium risk, medium return (9-11%). Good for beginners",
      "Index Funds: Copy NIFTY 50. Low cost, simple, transparent. Best for beginners",
      "Start with 1-2 funds only. Don't buy 10 different funds!",
    ],
    example: "Rahul (age 28) invests ₹5,000/month: ₹3,500 in NIFTY Index Fund (equity) + ₹1,500 in Debt Fund. Simple, balanced, perfect for beginners!",
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
  "Starting without emergency fund - Always keep 6 months expenses safe first!",
  "Investing money needed in 1-2 years - Equity needs minimum 5 years to grow",
  "Stopping SIP when market falls - This is the BEST time to buy cheap!",
  "Buying too many funds - 2-3 good funds are enough, more creates confusion",
  "Following tips from friends/TV - Do basic research yourself, understand what you buy",
  "Checking portfolio daily - Causes panic. Check once every 3-6 months only",
  "Expecting quick profits - Investing is not gambling. It takes 5-10 years",
  "Not taking health/term insurance - Invest only after insurance is done",
  "Putting all money in one fund - Diversify: equity + debt + gold",
  "Selling in panic during crash - Market always recovers. Stay invested!",
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
