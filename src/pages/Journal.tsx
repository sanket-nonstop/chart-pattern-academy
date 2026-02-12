import { useState } from "react";
import { useTradeJournal } from "@/hooks/use-trade-journal";
import { patterns } from "@/data/patterns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";
import { BookText, Plus, Trash2, TrendingUp, TrendingDown } from "lucide-react";

const Journal = () => {
  const { trades, addTrade, deleteTrade, stats } = useTradeJournal();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    symbol: "",
    pattern: "",
    direction: "long" as "long" | "short",
    entry: "",
    exit: "",
    stopLoss: "",
    shares: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = parseFloat(formData.entry);
    const exit = parseFloat(formData.exit);
    const shares = parseInt(formData.shares);
    const profitLoss = formData.direction === "long" 
      ? (exit - entry) * shares 
      : (entry - exit) * shares;
    const result = profitLoss >= 0 ? "win" : "loss";

    addTrade({
      ...formData,
      entry,
      exit,
      stopLoss: parseFloat(formData.stopLoss),
      shares,
      result,
      profitLoss,
    });

    setFormData({
      date: new Date().toISOString().split("T")[0],
      symbol: "",
      pattern: "",
      direction: "long",
      entry: "",
      exit: "",
      stopLoss: "",
      shares: "",
      notes: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <SEO title="Trade Journal" description="Track and analyze your pattern trades" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Trade Journal</h1>
              <p className="text-muted-foreground">Track your pattern trades and improve over time</p>
            </div>
            <Button onClick={() => setShowForm(!showForm)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Trade
            </Button>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-4">
            <StatCard label="Total Trades" value={stats.totalTrades.toString()} />
            <StatCard label="Win Rate" value={`${stats.winRate}%`} color="text-green-600" />
            <StatCard label="Wins" value={stats.wins.toString()} color="text-green-600" />
            <StatCard label="Total P/L" value={`$${stats.totalPL}`} color={parseFloat(stats.totalPL) >= 0 ? "text-green-600" : "text-red-600"} />
          </div>

          {/* Add Trade Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">New Trade</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="symbol">Symbol</Label>
                  <Input
                    id="symbol"
                    value={formData.symbol}
                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
                    placeholder="AAPL"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pattern">Pattern</Label>
                  <Select value={formData.pattern} onValueChange={(value) => setFormData({ ...formData, pattern: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      {patterns.map((p) => (
                        <SelectItem key={p.slug} value={p.name}>{p.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="direction">Direction</Label>
                  <Select value={formData.direction} onValueChange={(value: "long" | "short") => setFormData({ ...formData, direction: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="long">Long</SelectItem>
                      <SelectItem value="short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="entry">Entry Price</Label>
                  <Input
                    id="entry"
                    type="number"
                    step="0.01"
                    value={formData.entry}
                    onChange={(e) => setFormData({ ...formData, entry: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="exit">Exit Price</Label>
                  <Input
                    id="exit"
                    type="number"
                    step="0.01"
                    value={formData.exit}
                    onChange={(e) => setFormData({ ...formData, exit: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="stopLoss">Stop-Loss</Label>
                  <Input
                    id="stopLoss"
                    type="number"
                    step="0.01"
                    value={formData.stopLoss}
                    onChange={(e) => setFormData({ ...formData, stopLoss: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shares">Shares</Label>
                  <Input
                    id="shares"
                    type="number"
                    value={formData.shares}
                    onChange={(e) => setFormData({ ...formData, shares: e.target.value })}
                    required
                  />
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="What did you learn from this trade?"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button type="submit">Save Trade</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          )}

          {/* Trades List */}
          <div className="space-y-4">
            {trades.length === 0 ? (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <BookText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h2 className="mb-2 font-display text-xl font-bold text-foreground">No trades yet</h2>
                <p className="text-sm text-muted-foreground">Start logging your trades to track your progress</p>
              </div>
            ) : (
              trades.map((trade) => (
                <div key={trade.id} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="font-display text-lg font-bold text-foreground">{trade.symbol}</h3>
                        <span className="text-sm text-muted-foreground">{trade.date}</span>
                        <span className={`flex items-center gap-1 text-sm ${trade.direction === "long" ? "text-green-600" : "text-red-600"}`}>
                          {trade.direction === "long" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          {trade.direction.toUpperCase()}
                        </span>
                      </div>
                      <div className="mb-2 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                        <div><span className="text-muted-foreground">Pattern:</span> {trade.pattern}</div>
                        <div><span className="text-muted-foreground">Entry:</span> ${trade.entry}</div>
                        <div><span className="text-muted-foreground">Exit:</span> ${trade.exit}</div>
                        <div><span className="text-muted-foreground">Shares:</span> {trade.shares}</div>
                      </div>
                      {trade.notes && <p className="text-sm text-muted-foreground">{trade.notes}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={`font-display text-xl font-bold ${trade.profitLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {trade.profitLoss >= 0 ? "+" : ""}${trade.profitLoss.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">{trade.result === "win" ? "Win" : "Loss"}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => deleteTrade(trade.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const StatCard = ({ label, value, color = "text-foreground" }: { label: string; value: string; color?: string }) => (
  <div className="rounded-lg border border-border bg-card p-4">
    <p className="mb-1 text-sm text-muted-foreground">{label}</p>
    <p className={`font-display text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default Journal;
