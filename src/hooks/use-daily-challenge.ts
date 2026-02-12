import { useState, useEffect } from "react";
import { practiceQuestions } from "@/data/practice";

const STORAGE_KEY = "chart-academy-daily";

interface DailyData {
  date: string;
  questionId: string;
  completed: boolean;
  correct: boolean;
  streak: number;
}

export const useDailyChallenge = () => {
  const [dailyData, setDailyData] = useState<DailyData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toDateString();
    
    if (stored) {
      const data = JSON.parse(stored);
      if (data.date === today) return data;
    }
    
    // New day - get random question
    const questionId = practiceQuestions[Math.floor(Math.random() * practiceQuestions.length)].id;
    return { date: today, questionId, completed: false, correct: false, streak: 0 };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyData));
  }, [dailyData]);

  const completeChallenge = (correct: boolean) => {
    setDailyData((prev) => ({
      ...prev,
      completed: true,
      correct,
      streak: correct ? prev.streak + 1 : 0,
    }));
  };

  return { dailyData, completeChallenge };
};
