import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Calculator, DollarSign } from "lucide-react";

const RiskCalculator = () => {
  const [accountSize, setAccountSize] = useState("10000");
  const [riskPercent, setRiskPercent] = useState("2");
  const [entryPrice, setEntryPrice] = useState("50");
  const [stopLoss, setStopLoss] = useState("48");
  const [target, setTarget] = useState("56");

  const calculate = () => {
    const account = parseFloat(accountSize) || 0;
    const risk = parseFloat(riskPercent) || 0;
    const entry = parseFloat(entryPrice) || 0;
    const stop = parseFloat(stopLoss) || 0;
    const tgt = parseFloat(target) || 0;

    const riskAmount = (account * risk) / 100;
    const riskPerShare = Math.abs(entry - stop);
    const rewardPerShare = Math.abs(tgt - entry);
    const positionSize = riskPerShare > 0 ? Math.floor(riskAmount / riskPerShare) : 0;
    const totalCost = positionSize * entry;
    const potentialProfit = positionSize * rewardPerShare;
    const riskRewardRatio = riskPerShare > 0 ? (rewardPerShare / riskPerShare).toFixed(2) : "0";

    return {
      riskAmount: riskAmount.toFixed(2),
      positionSize,
      totalCost: totalCost.toFixed(2),
      potentialProfit: potentialProfit.toFixed(2),
      riskRewardRatio,
    };
  };

  const results = calculate();

  return (
    <>
      <SEO title="Risk Calculator" description="Calculate position size and risk/reward ratio" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <Calculator className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Risk Calculator</h1>
            <p className="text-muted-foreground">Calculate position size and risk/reward ratio</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-6 rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground">Trade Parameters</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="accountSize">Account Size ($)</Label>
                  <Input
                    id="accountSize"
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(e.target.value)}
                    placeholder="10000"
                  />
                </div>

                <div>
                  <Label htmlFor="riskPercent">Risk Per Trade (%)</Label>
                  <Input
                    id="riskPercent"
                    type="number"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(e.target.value)}
                    placeholder="2"
                    step="0.1"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">Recommended: 1-2%</p>
                </div>

                <div>
                  <Label htmlFor="entryPrice">Entry Price ($)</Label>
                  <Input
                    id="entryPrice"
                    type="number"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    placeholder="50"
                    step="0.01"
                  />
                </div>

                <div>
                  <Label htmlFor="stopLoss">Stop-Loss ($)</Label>
                  <Input
                    id="stopLoss"
                    type="number"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(e.target.value)}
                    placeholder="48"
                    step="0.01"
                  />
                </div>

                <div>
                  <Label htmlFor="target">Target Price ($)</Label>
                  <Input
                    id="target"
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="56"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6 rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold text-foreground">Results</h2>

              <div className="space-y-4">
                <ResultCard
                  label="Risk Amount"
                  value={`$${results.riskAmount}`}
                  description="Amount you'll risk on this trade"
                  color="text-red-600 dark:text-red-400"
                />

                <ResultCard
                  label="Position Size"
                  value={`${results.positionSize} shares`}
                  description="Number of shares to buy"
                  color="text-blue-600 dark:text-blue-400"
                />

                <ResultCard
                  label="Total Cost"
                  value={`$${results.totalCost}`}
                  description="Total investment required"
                  color="text-purple-600 dark:text-purple-400"
                />

                <ResultCard
                  label="Potential Profit"
                  value={`$${results.potentialProfit}`}
                  description="If target is reached"
                  color="text-green-600 dark:text-green-400"
                />

                <ResultCard
                  label="Risk/Reward Ratio"
                  value={`1:${results.riskRewardRatio}`}
                  description={
                    parseFloat(results.riskRewardRatio) >= 2
                      ? "✓ Good ratio"
                      : "⚠ Consider better ratio"
                  }
                  color="text-primary"
                />
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Risk Management Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Never risk more than 1-2% of your account on a single trade</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Aim for a minimum 1:2 risk/reward ratio (risk $1 to make $2)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Always use stop-losses to protect your capital</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Position size should be based on your stop-loss distance, not arbitrary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const ResultCard = ({ label, value, description, color }: { label: string; value: string; description: string; color: string }) => (
  <div className="rounded-lg bg-muted/50 p-4">
    <p className="mb-1 text-sm text-muted-foreground">{label}</p>
    <p className={`mb-1 font-display text-2xl font-bold ${color}`}>{value}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

export default RiskCalculator;
