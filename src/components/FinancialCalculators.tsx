import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FinancialCalculators = () => {
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(20);
  const [sipRate, setSipRate] = useState(12);

  const [lumpsum, setLumpsum] = useState(100000);
  const [lsYears, setLsYears] = useState(10);
  const [lsRate, setLsRate] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = sipAmount * months;
    const returns = futureValue - invested;
    return { futureValue, invested, returns };
  };

  const calculateCompound = () => {
    const futureValue = lumpsum * Math.pow(1 + lsRate / 100, lsYears);
    const returns = futureValue - lumpsum;
    return { futureValue, invested: lumpsum, returns };
  };

  const sipResult = calculateSIP();
  const compoundResult = calculateCompound();

  const formatCurrency = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toFixed(0)}`;
  };

  return (
    <Tabs defaultValue="sip" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sip">SIP Calculator</TabsTrigger>
        <TabsTrigger value="compound">Compound Interest</TabsTrigger>
      </TabsList>

      <TabsContent value="sip">
        <Card>
          <CardHeader>
            <CardTitle>SIP Calculator</CardTitle>
            <CardDescription>Calculate your SIP returns over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Monthly Investment: ₹{sipAmount.toLocaleString()}</Label>
              <Input type="range" min="500" max="50000" step="500" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Time Period: {sipYears} years</Label>
              <Input type="range" min="1" max="30" value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Expected Return: {sipRate}% per year</Label>
              <Input type="range" min="1" max="20" value={sipRate} onChange={(e) => setSipRate(Number(e.target.value))} />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Invested</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(sipResult.invested)}</p>
              </div>
              <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Returns</p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">{formatCurrency(sipResult.returns)}</p>
              </div>
              <div className="rounded-lg bg-purple-50 dark:bg-purple-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{formatCurrency(sipResult.futureValue)}</p>
              </div>
            </div>

            <div className="relative h-8 w-full overflow-hidden rounded-full bg-muted">
              <div className="absolute h-full bg-blue-500" style={{ width: `${(sipResult.invested / sipResult.futureValue) * 100}%` }} />
              <div className="absolute h-full bg-green-500" style={{ left: `${(sipResult.invested / sipResult.futureValue) * 100}%`, width: `${(sipResult.returns / sipResult.futureValue) * 100}%` }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>💰 Your Investment</span>
              <span>📈 Growth from Returns</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="compound">
        <Card>
          <CardHeader>
            <CardTitle>Compound Interest Calculator</CardTitle>
            <CardDescription>See the magic of compounding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Initial Investment: ₹{lumpsum.toLocaleString()}</Label>
              <Input type="range" min="10000" max="1000000" step="10000" value={lumpsum} onChange={(e) => setLumpsum(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Time Period: {lsYears} years</Label>
              <Input type="range" min="1" max="30" value={lsYears} onChange={(e) => setLsYears(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <Label>Annual Return: {lsRate}%</Label>
              <Input type="range" min="1" max="20" value={lsRate} onChange={(e) => setLsRate(Number(e.target.value))} />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Principal</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(compoundResult.invested)}</p>
              </div>
              <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Interest</p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">{formatCurrency(compoundResult.returns)}</p>
              </div>
              <div className="rounded-lg bg-purple-50 dark:bg-purple-950 p-4 text-center">
                <p className="text-sm text-muted-foreground">Final Amount</p>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{formatCurrency(compoundResult.futureValue)}</p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
              <p className="text-sm opacity-90">Rule of 72</p>
              <p className="text-lg font-bold">Your money doubles in {(72 / lsRate).toFixed(1)} years at {lsRate}% return</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default FinancialCalculators;
