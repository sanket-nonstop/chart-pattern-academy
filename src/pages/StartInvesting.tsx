import { useState } from "react";
import { investmentConcepts, fundCategories, startingSteps, commonMistakes, taxBasics, quickChecklist } from "@/data/start-investing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import SEO from "@/components/SEO";
import { TrendingUp, Wallet, Target, AlertTriangle, CheckCircle2, Calculator, PiggyBank, Shield, ArrowRight, Info, Zap, Trophy, Rocket, Heart, Sparkles, TrendingDown, DollarSign } from "lucide-react";

const StartInvesting = () => {
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(10);
  const [sipReturn, setSipReturn] = useState(12);
  const [age, setAge] = useState(30);
  const [riskScore, setRiskScore] = useState(0);
  const [showRiskResult, setShowRiskResult] = useState(false);
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [goalYears, setGoalYears] = useState(10);
  const [currentTab, setCurrentTab] = useState<'sip' | 'goal' | 'risk'>('sip');

  const riskQuestions = [
    { q: "Your age?", options: ["18-25 (5pts)", "26-35 (4pts)", "36-45 (3pts)", "46-55 (2pts)", "55+ (1pt)"], points: [5, 4, 3, 2, 1] },
    { q: "Investment horizon?", options: ["10+ years (5pts)", "7-10 years (4pts)", "5-7 years (3pts)", "3-5 years (2pts)", "<3 years (1pt)"], points: [5, 4, 3, 2, 1] },
    { q: "If portfolio drops 30%, you:", options: ["Buy more (5pts)", "Hold (4pts)", "Worry (3pts)", "Sell some (2pts)", "Sell all (1pt)"], points: [5, 4, 3, 2, 1] },
    { q: "Income stability?", options: ["Very stable (5pts)", "Stable (4pts)", "Moderate (3pts)", "Unstable (2pts)", "Very unstable (1pt)"], points: [5, 4, 3, 2, 1] },
  ];

  const [riskAnswers, setRiskAnswers] = useState<number[]>(Array(riskQuestions.length).fill(-1));

  const calculateRiskProfile = () => {
    const total = riskAnswers.reduce((sum, ans, i) => sum + (ans >= 0 ? riskQuestions[i].points[ans] : 0), 0);
    setRiskScore(total);
    setShowRiskResult(true);
  };

  const getRiskProfile = () => {
    if (riskScore >= 17) return { type: "Aggressive", color: "text-red-600 dark:text-red-400", allocation: "80% Equity, 15% Debt, 5% Gold", desc: "High risk, high return. Can handle 30-40% volatility." };
    if (riskScore >= 12) return { type: "Moderate", color: "text-orange-600 dark:text-orange-400", allocation: "60% Equity, 30% Debt, 10% Gold", desc: "Balanced approach. Can handle 20-30% volatility." };
    return { type: "Conservative", color: "text-green-600 dark:text-green-400", allocation: "40% Equity, 50% Debt, 10% Gold", desc: "Low risk, stable returns. Avoid big drops." };
  };

  const calculateGoalSIP = () => {
    const monthlyRate = 12 / 12 / 100;
    const months = goalYears * 12;
    const requiredSIP = (goalAmount * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(requiredSIP);
  };

  const calculateSIP = () => {
    const monthlyRate = sipReturn / 12 / 100;
    const months = sipYears * 12;
    const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = sipAmount * months;
    const returns = futureValue - invested;
    return { futureValue: Math.round(futureValue), invested, returns: Math.round(returns) };
  };

  const sipResults = calculateSIP();

  return (
    <>
      <SEO
        title="Start Investing - SIP, Mutual Funds & ETFs Guide"
        description="Complete beginner's guide to start investing in India. Learn SIP, mutual funds, ETFs, index funds with calculators and step-by-step process."
        keywords="start investing, SIP, mutual funds, ETFs, index funds, investment guide India, beginner investing"
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-background via-green-500/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 animate-pulse">
              <Sparkles className="h-4 w-4 text-green-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-500">Complete Beginner's Guide</span>
            </div>
            <h1 className="mb-3 font-display text-4xl font-bold md:text-5xl">Start Investing Today</h1>
            <p className="mb-4 text-lg text-muted-foreground">
              No complicated jargon. No confusing terms. Just simple, practical steps to start building wealth from your first salary.
            </p>
            <div className="mx-auto max-w-2xl rounded-lg bg-primary/10 p-4 text-left">
              <p className="text-sm">
                <strong className="text-primary">You'll learn:</strong> How to save money smartly • Where to invest your first ₹1,000 • 
                How SIP works • Emergency fund basics • Avoid beginner mistakes • Real examples from people like you
              </p>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-sm text-green-600 dark:text-green-400 hover:scale-105 transition-transform cursor-pointer">
                <CheckCircle2 className="h-4 w-4" />
                Start with ₹500/month
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform cursor-pointer">
                <CheckCircle2 className="h-4 w-4" />
                No stock knowledge needed
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-purple-500/10 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:scale-105 transition-transform cursor-pointer">
                <CheckCircle2 className="h-4 w-4" />
                Takes 10 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Card className="p-6">
              <div className="mb-4 text-center">
                <Rocket className="mx-auto mb-2 h-12 w-12 text-primary" />
                <h2 className="mb-2 text-3xl font-bold">Why You MUST Start Investing (Not Just Saving)</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4 hover:shadow-lg transition-all">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="rounded-full bg-red-500/20 p-2">
                      <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="font-semibold text-red-600 dark:text-red-400">❌ Only Saving in Bank</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bank FD: 6-7% return per year</li>
                    <li>• Inflation: 6-7% per year</li>
                    <li>• Your money stays SAME (no real growth)</li>
                    <li>• ₹1 lakh today = ₹1 lakh after 10 years</li>
                    <li>• But can buy LESS things (prices increase!)</li>
                  </ul> 
                </div>
                <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-4 hover:shadow-lg transition-all">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="rounded-full bg-green-500/20 p-2">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-green-600 dark:text-green-400">✓ Saving + Investing</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mutual Funds: 12-15% return per year</li>
                    <li>• Beats inflation by 5-8%</li>
                    <li>• Your money GROWS (real wealth building)</li>
                    <li>• ₹1 lakh today = ₹3.1 lakh after 10 years</li>
                    <li>• Can buy MORE things (wealth increases!)</li>
                  </ul> 
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-primary/10 p-4 text-center hover:bg-primary/20 transition-colors">
                <p className="text-sm font-semibold">
                  💡 Real Example: ₹5,000/month for 20 years in Bank FD = ₹23L. Same in Mutual Fund = ₹49L. That's 2X more money!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Concepts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-3xl font-bold">Step-by-Step Beginner's Roadmap</h2>
              <p className="text-muted-foreground">Follow this exact order - don't skip steps!</p>
            </div>

            <div className="space-y-4">
              {investmentConcepts.map((concept, idx) => (
                <Card key={concept.id} className="p-5 hover:shadow-lg transition-all hover:scale-[1.01] group">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold">{concept.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{concept.description}</p>

                  <div className="mb-3 rounded-lg bg-muted/50 p-3">
                    <ul className="space-y-1">
                      {concept.keyPoints.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                    <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                      <Info className="h-3 w-3" />
                      EXAMPLE
                    </div>
                    <p className="text-sm">{concept.example}</p>
                  </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <Wallet className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">Types of Funds</h2>
              <p className="text-muted-foreground">Choose based on your risk profile and goals</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {fundCategories.map((fund, i) => (
                <Card key={i} className="p-4 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    {fund.risk.includes('Low') ? <Shield className="h-20 w-20 text-green-500" /> :
                     fund.risk.includes('High') ? <Zap className="h-20 w-20 text-red-500" /> :
                     <TrendingUp className="h-20 w-20 text-orange-500" />}
                  </div>
                  <div className="mb-3 relative z-10">
                    <h3 className="mb-1 font-bold">{fund.name}</h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`rounded-full px-2 py-0.5 ${fund.risk.includes('Low') ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                          fund.risk.includes('High') ? 'bg-red-500/20 text-red-600 dark:text-red-400' :
                            'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                        }`}>
                        {fund.risk} Risk
                      </span>
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 font-semibold text-primary">
                        {fund.returns}
                      </span>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-muted-foreground relative z-10">{fund.description}</p>
                  <div className="text-xs relative z-10">
                    <span className="font-semibold">Horizon:</span> {fund.horizon}
                  </div>
                  <div className="mt-2 text-xs relative z-10">
                    <span className="font-semibold">Best for:</span> {fund.suitableFor}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Starting Steps */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <Target className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">How to Start Today</h2>
              <p className="text-muted-foreground">Follow these 5 simple steps</p>
            </div>

            <div className="space-y-4">
              {startingSteps.map((step) => (
                <Card key={step.step} className="p-5 hover:shadow-lg transition-all group">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground group-hover:scale-125 transition-transform">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs">⏱️ {step.time}</span>
                        {step.platforms.map((platform, i) => (
                          <span key={i} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold">Common Beginner Mistakes</h2>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {commonMistakes.map((mistake, i) => (
                  <div key={i} className="flex gap-2 rounded-lg border border-orange-500/20 bg-orange-500/5 p-3">
                    <span className="text-orange-500">✗</span>
                    <span className="text-sm">{mistake}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Basics */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <Shield className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">Tax Basics (2024)</h2>
              <p className="text-muted-foreground">Understand taxation on your investments</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {taxBasics.map((tax, i) => (
                <Card key={i} className="p-4">
                  <h3 className="mb-3 font-bold text-primary">{tax.type}</h3>
                  <div className="mb-2 space-y-2 text-sm">
                    <div>
                      <div className="font-semibold">Short Term:</div>
                      <div className="text-muted-foreground">{tax.shortTerm}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Long Term:</div>
                      <div className="text-muted-foreground">{tax.longTerm}</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-2 text-xs text-muted-foreground">
                    💡 {tax.note}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculators with Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-center">
              <Calculator className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">Interactive Planning Tools</h2>
              <p className="text-muted-foreground">Calculate, plan, and discover your investment strategy</p>
            </div>

            {/* Tabs */}
            <div className="mb-6 flex gap-2 overflow-x-auto">
              <Button 
                variant={currentTab === 'sip' ? 'default' : 'outline'}
                onClick={() => setCurrentTab('sip')}
                className="flex-1 min-w-[120px]"
              >
                <Calculator className="mr-2 h-4 w-4" />
                SIP Calculator
              </Button>
              <Button 
                variant={currentTab === 'goal' ? 'default' : 'outline'}
                onClick={() => setCurrentTab('goal')}
                className="flex-1 min-w-[120px]"
              >
                <Target className="mr-2 h-4 w-4" />
                Goal Planner
              </Button>
              <Button 
                variant={currentTab === 'risk' ? 'default' : 'outline'}
                onClick={() => setCurrentTab('risk')}
                className="flex-1 min-w-[120px]"
              >
                <Zap className="mr-2 h-4 w-4" />
                Risk Profile
              </Button>
            </div>

            {/* SIP Calculator Tab */}
            {currentTab === 'sip' && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">SIP Return Calculator</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-semibold">Monthly Investment</label>
                        <span className="text-sm font-bold text-primary">₹{sipAmount.toLocaleString()}</span>
                      </div>
                      <Slider value={[sipAmount]} onValueChange={(v) => setSipAmount(v[0])} min={1000} max={50000} step={1000} />
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>₹1,000</span>
                        <span>₹50,000</span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-semibold">Time Period</label>
                        <span className="text-sm font-bold text-primary">{sipYears} years</span>
                      </div>
                      <Slider value={[sipYears]} onValueChange={(v) => setSipYears(v[0])} min={1} max={30} step={1} />
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-semibold">Expected Return</label>
                        <span className="text-sm font-bold text-primary">{sipReturn}% p.a.</span>
                      </div>
                      <Slider value={[sipReturn]} onValueChange={(v) => setSipReturn(v[0])} min={6} max={18} step={1} />
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>6%</span>
                        <span>18%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6">
                    <div className="mb-4 text-center">
                      <div className="text-sm text-muted-foreground">Future Value</div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                        ₹{(sipResults.futureValue / 100000).toFixed(2)}L
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between rounded-lg bg-background/50 p-3">
                        <span className="text-sm">Invested Amount</span>
                        <span className="font-semibold">₹{(sipResults.invested / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="flex justify-between rounded-lg bg-background/50 p-3">
                        <span className="text-sm">Estimated Returns</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">₹{(sipResults.returns / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="flex justify-between rounded-lg bg-background/50 p-3">
                        <span className="text-sm">Wealth Gain</span>
                        <span className="font-semibold text-primary">{Math.round((sipResults.returns / sipResults.invested) * 100)}%</span>
                      </div>
                    </div>
                    
                    {/* Visual Progress Bar */}
                    <div className="mt-4">
                      <div className="mb-2 text-xs text-muted-foreground">Investment vs Returns</div>
                      <div className="space-y-2">
                        <div>
                          <div className="mb-1 flex justify-between text-xs">
                            <span>Your Investment</span>
                            <span>{Math.round((sipResults.invested / sipResults.futureValue) * 100)}%</span>
                          </div>
                          <Progress value={(sipResults.invested / sipResults.futureValue) * 100} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-xs">
                            <span className="text-green-600 dark:text-green-400">Compounding Magic</span>
                            <span className="text-green-600 dark:text-green-400">{Math.round((sipResults.returns / sipResults.futureValue) * 100)}%</span>
                          </div>
                          <Progress value={(sipResults.returns / sipResults.futureValue) * 100} className="h-2 bg-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Goal Planner Tab */}
            {currentTab === 'goal' && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">Goal-Based Investment Planner</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-semibold">Target Amount</label>
                        <span className="text-sm font-bold text-primary">₹{(goalAmount / 100000).toFixed(1)}L</span>
                      </div>
                      <Slider value={[goalAmount]} onValueChange={(v) => setGoalAmount(v[0])} min={500000} max={10000000} step={100000} />
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>₹5L</span>
                        <span>₹1Cr</span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between">
                        <label className="text-sm font-semibold">Time to Achieve</label>
                        <span className="text-sm font-bold text-primary">{goalYears} years</span>
                      </div>
                      <Slider value={[goalYears]} onValueChange={(v) => setGoalYears(v[0])} min={1} max={30} step={1} />
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-blue-500/10 p-4">
                      <h4 className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">Popular Goals</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" onClick={() => { setGoalAmount(2000000); setGoalYears(5); }} className="w-full justify-start">
                          <Heart className="mr-2 h-4 w-4" /> Marriage: ₹20L in 5 years
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => { setGoalAmount(5000000); setGoalYears(10); }} className="w-full justify-start">
                          <Trophy className="mr-2 h-4 w-4" /> Child Education: ₹50L in 10 years
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => { setGoalAmount(10000000); setGoalYears(20); }} className="w-full justify-start">
                          <Rocket className="mr-2 h-4 w-4" /> Retirement: ₹1Cr in 20 years
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
                    <div className="mb-4 text-center">
                      <div className="text-sm text-muted-foreground">Required Monthly SIP</div>
                      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        ₹{calculateGoalSIP().toLocaleString()}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">@ 12% annual return</div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-lg bg-background/50 p-3">
                        <div className="text-xs text-muted-foreground">Total Investment</div>
                        <div className="font-semibold">₹{((calculateGoalSIP() * goalYears * 12) / 100000).toFixed(2)}L</div>
                      </div>
                      <div className="rounded-lg bg-background/50 p-3">
                        <div className="text-xs text-muted-foreground">Expected Returns</div>
                        <div className="font-semibold text-green-600 dark:text-green-400">
                          ₹{((goalAmount - (calculateGoalSIP() * goalYears * 12)) / 100000).toFixed(2)}L
                        </div>
                      </div>
                      <div className="rounded-lg bg-background/50 p-3">
                        <div className="text-xs text-muted-foreground">Goal Achievement</div>
                        <div className="font-semibold text-primary">₹{(goalAmount / 100000).toFixed(1)}L</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                      <p className="text-xs text-green-600 dark:text-green-400">
                        💡 Start with ₹{Math.round(calculateGoalSIP() / 2).toLocaleString()} and increase by 10% yearly to reach your goal!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Risk Profile Tab */}
            {currentTab === 'risk' && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">Discover Your Risk Profile</h3>
                {!showRiskResult ? (
                  <div className="space-y-6">
                    {riskQuestions.map((q, qIndex) => (
                      <div key={qIndex} className="rounded-lg border border-border p-4">
                        <h4 className="mb-3 font-semibold">{qIndex + 1}. {q.q}</h4>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => {
                                const newAnswers = [...riskAnswers];
                                newAnswers[qIndex] = oIndex;
                                setRiskAnswers(newAnswers);
                              }}
                              className={`w-full rounded-lg border p-3 text-left text-sm transition-all ${
                                riskAnswers[qIndex] === oIndex
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Button 
                      size="lg" 
                      onClick={calculateRiskProfile}
                      disabled={riskAnswers.some(a => a === -1)}
                      className="w-full"
                    >
                      {riskAnswers.some(a => a === -1) 
                        ? `Answer all questions (${riskAnswers.filter(a => a !== -1).length}/${riskQuestions.length})`
                        : 'Get My Risk Profile'}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="mb-2 text-sm text-muted-foreground">Your Score: {riskScore}/20</div>
                      <div className={`mb-2 text-4xl font-bold ${getRiskProfile().color}`}>
                        {getRiskProfile().type} Investor
                      </div>
                      <p className="text-muted-foreground">{getRiskProfile().desc}</p>
                    </div>

                    <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                      <h4 className="mb-3 font-semibold">Recommended Portfolio Allocation</h4>
                      <div className="mb-4 text-2xl font-bold text-primary">{getRiskProfile().allocation}</div>
                      
                      {/* Visual Portfolio */}
                      <div className="space-y-3">
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>Equity Funds</span>
                            <span className="font-semibold">{getRiskProfile().allocation.split(',')[0]}</span>
                          </div>
                          <Progress value={parseInt(getRiskProfile().allocation)} className="h-3" />
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>Debt Funds</span>
                            <span className="font-semibold">{getRiskProfile().allocation.split(',')[1]}</span>
                          </div>
                          <Progress value={parseInt(getRiskProfile().allocation.split(',')[1])} className="h-3" />
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-sm">
                            <span>Gold</span>
                            <span className="font-semibold">{getRiskProfile().allocation.split(',')[2]}</span>
                          </div>
                          <Progress value={parseInt(getRiskProfile().allocation.split(',')[2])} className="h-3" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                        <h5 className="mb-2 text-sm font-semibold text-green-600 dark:text-green-400">✓ Best For You</h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          {getRiskProfile().type === 'Aggressive' && (
                            <>
                              <li>• Small & Mid Cap Funds</li>
                              <li>• Sectoral Funds</li>
                              <li>• International Equity</li>
                            </>
                          )}
                          {getRiskProfile().type === 'Moderate' && (
                            <>
                              <li>• Large Cap Index Funds</li>
                              <li>• Balanced Advantage Funds</li>
                              <li>• Corporate Bond Funds</li>
                            </>
                          )}
                          {getRiskProfile().type === 'Conservative' && (
                            <>
                              <li>• Debt Funds</li>
                              <li>• Liquid Funds</li>
                              <li>• Conservative Hybrid Funds</li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                        <h5 className="mb-2 text-sm font-semibold text-orange-600 dark:text-orange-400">✗ Avoid</h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          {getRiskProfile().type === 'Aggressive' && (
                            <>
                              <li>• Fixed Deposits</li>
                              <li>• Debt-heavy portfolios</li>
                              <li>• Low-return safe options</li>
                            </>
                          )}
                          {getRiskProfile().type === 'Moderate' && (
                            <>
                              <li>• High-risk small caps</li>
                              <li>• Sectoral concentration</li>
                              <li>• Crypto/speculative assets</li>
                            </>
                          )}
                          {getRiskProfile().type === 'Conservative' && (
                            <>
                              <li>• Small Cap Funds</li>
                              <li>• High volatility stocks</li>
                              <li>• Aggressive equity funds</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>

                    <Button variant="outline" onClick={() => { setShowRiskResult(false); setRiskAnswers(Array(riskQuestions.length).fill(-1)); }} className="w-full">
                      Retake Assessment
                    </Button>
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="border-t bg-gradient-to-br from-green-500/10 to-emerald-500/10 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <Trophy className="mx-auto mb-2 h-12 w-12 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">You're Ready! Final Checklist</h2>
              <p className="text-muted-foreground">Make sure you've covered these basics before starting</p>
            </div>

            <Card className="p-6">
              <div className="grid gap-2 md:grid-cols-2">
                {quickChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-background/50 p-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-green-500 to-emerald-600">
                  <TrendingUp className="h-5 w-5" />
                  Start Your First SIP Today
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Popular platforms: Zerodha Coin • Groww • Paytm Money • ET Money
                </p>
              </div>
            </Card>

            {/* Motivational Section */}
            <Card className="mt-6 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <div className="text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 animate-bounce">
                  💪 You Can Do This!
                </div>
                <h3 className="mb-3 text-2xl font-bold">Your Future Self Will Thank You!</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Remember:</strong> Every big investor started with their first ₹500. 
                    Warren Buffett started at age 11. You're already ahead if you start today!
                  </p>
                  <p>
                    <strong className="text-foreground">The best time to start was 10 years ago.</strong> 
                    The second best time is TODAY. Don't wait for the "perfect moment" - it never comes.
                  </p>
                  <p>
                    <strong className="text-foreground">Small steps, big results:</strong> 
                    ₹2,000/month from age 25 to 60 = ₹2.5 Crores! That's the power of starting early and staying consistent.
                  </p>
                  <div className="mt-4 rounded-lg bg-primary/20 p-4">
                    <p className="font-semibold text-primary">
                      🌟 "The journey of a thousand miles begins with a single step. Your first SIP is that step. Take it today!"
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-background/50 p-4 hover:scale-110 transition-transform cursor-pointer">
                    <PiggyBank className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">₹500</div>
                    <p className="text-xs text-muted-foreground">Minimum to start</p>
                  </div>
                  <div className="rounded-lg bg-background/50 p-4 hover:scale-110 transition-transform cursor-pointer">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">10 min</div>
                    <p className="text-xs text-muted-foreground">Time to get started</p>
                  </div>
                  <div className="rounded-lg bg-background/50 p-4 hover:scale-110 transition-transform cursor-pointer">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">₹1 Cr+</div>
                    <p className="text-xs text-muted-foreground">Potential in 25 years</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartInvesting;
