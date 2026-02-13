import { useState } from "react";
import { investmentConcepts, fundCategories, startingSteps, commonMistakes, taxBasics, quickChecklist } from "@/data/start-investing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import SEO from "@/components/SEO";
import { TrendingUp, Wallet, Target, AlertTriangle, CheckCircle2, Calculator, PiggyBank, Shield, ArrowRight, Info } from "lucide-react";

const StartInvesting = () => {
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(10);
  const [sipReturn, setSipReturn] = useState(12);

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
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
              <PiggyBank className="h-4 w-4 text-green-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-500">Build Wealth</span>
            </div>
            <h1 className="mb-3 font-display text-4xl font-bold md:text-5xl">Start Your Investment Journey</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step guide to start SIP, Mutual Funds & ETFs. Build long-term wealth the smart way.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Concepts */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-3xl font-bold">Investment Basics</h2>
              <p className="text-muted-foreground">Understand key concepts before you start</p>
            </div>

            <div className="space-y-4">
              {investmentConcepts.map((concept) => (
                <Card key={concept.id} className="p-5">
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
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center">
              <Wallet className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">Types of Funds</h2>
              <p className="text-muted-foreground">Choose based on your risk profile and goals</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {fundCategories.map((fund, i) => (
                <Card key={i} className="p-4">
                  <div className="mb-3">
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
                  <p className="mb-2 text-xs text-muted-foreground">{fund.description}</p>
                  <div className="text-xs">
                    <span className="font-semibold">Horizon:</span> {fund.horizon}
                  </div>
                  <div className="mt-2 text-xs">
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
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <Target className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">How to Start Today</h2>
              <p className="text-muted-foreground">Follow these 5 simple steps</p>
            </div>

            <div className="space-y-4">
              {startingSteps.map((step) => (
                <Card key={step.step} className="p-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs">⏱️ {step.time}</span>
                        {step.platforms.map((platform, i) => (
                          <span key={i} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
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
          <div className="mx-auto max-w-4xl">
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
          <div className="mx-auto max-w-4xl">
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

      {/* SIP Calculator */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <Calculator className="mx-auto mb-2 h-10 w-10 text-primary" />
              <h2 className="mb-2 text-3xl font-bold">SIP Calculator</h2>
              <p className="text-muted-foreground">See how your monthly investment grows over time</p>
            </div>

            <Card className="p-6">
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
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="border-t bg-gradient-to-br from-green-500/10 to-emerald-500/10 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-3xl font-bold">Ready to Start? Quick Checklist</h2>
              <p className="text-muted-foreground">Make sure you've covered these basics</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default StartInvesting;
