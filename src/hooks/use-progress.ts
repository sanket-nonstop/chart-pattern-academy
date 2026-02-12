import { useState, useEffect } from "react";

interface Progress {
  completedPatterns: string[];
  quizScores: Record<string, number>;
}

const STORAGE_KEY = "chart-academy-progress";

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { completedPatterns: [], quizScores: {} };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markPatternComplete = (slug: string) => {
    setProgress((prev) => ({
      ...prev,
      completedPatterns: prev.completedPatterns.includes(slug)
        ? prev.completedPatterns
        : [...prev.completedPatterns, slug],
    }));
  };

  const saveQuizScore = (slug: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [slug]: score },
    }));
  };

  const isPatternComplete = (slug: string) => progress.completedPatterns.includes(slug);

  const getQuizScore = (slug: string) => progress.quizScores[slug] || 0;

  const resetProgress = () => {
    setProgress({ completedPatterns: [], quizScores: {} });
  };

  return {
    progress,
    markPatternComplete,
    saveQuizScore,
    isPatternComplete,
    getQuizScore,
    resetProgress,
  };
};
