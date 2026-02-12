import { useState, useEffect } from "react";

export interface Trade {
  id: string;
  date: string;
  symbol: string;
  pattern: string;
  direction: "long" | "short";
  entry: number;
  exit: number;
  stopLoss: number;
  shares: number;
  result: "win" | "loss";
  profitLoss: number;
  notes: string;
}

const STORAGE_KEY = "chart-academy-journal";

export const useTradeJournal = () => {
  const [trades, setTrades] = useState<Trade[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trades));
  }, [trades]);

  const addTrade = (trade: Omit<Trade, "id">) => {
    const newTrade = { ...trade, id: Date.now().toString() };
    setTrades([newTrade, ...trades]);
  };

  const deleteTrade = (id: string) => {
    setTrades(trades.filter((t) => t.id !== id));
  };

  const stats = {
    totalTrades: trades.length,
    wins: trades.filter((t) => t.result === "win").length,
    losses: trades.filter((t) => t.result === "loss").length,
    winRate: trades.length > 0 ? ((trades.filter((t) => t.result === "win").length / trades.length) * 100).toFixed(1) : "0",
    totalPL: trades.reduce((sum, t) => sum + t.profitLoss, 0).toFixed(2),
  };

  return { trades, addTrade, deleteTrade, stats };
};
