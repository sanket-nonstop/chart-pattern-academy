import { patterns } from "./patterns";

export interface PracticeQuestion {
  id: string;
  image: string;
  correctAnswer: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  options: string[];
}

// Using existing pattern images for practice
export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "practice-1",
    image: patterns[0].image,
    correctAnswer: patterns[0].slug,
    difficulty: "beginner",
    options: ["double-top", "head-and-shoulders", "triangles", "wedges"],
  },
  {
    id: "practice-2",
    image: patterns[1].image,
    correctAnswer: patterns[1].slug,
    difficulty: "beginner",
    options: ["double-bottom", "cup-and-handle", "double-top", "wedges"],
  },
  {
    id: "practice-3",
    image: patterns[2].image,
    correctAnswer: patterns[2].slug,
    difficulty: "intermediate",
    options: ["head-and-shoulders", "double-top", "triangles", "flags-and-pennants"],
  },
  {
    id: "practice-4",
    image: patterns[3].image,
    correctAnswer: patterns[3].slug,
    difficulty: "intermediate",
    options: ["cup-and-handle", "double-bottom", "wedges", "triangles"],
  },
  {
    id: "practice-5",
    image: patterns[4].image,
    correctAnswer: patterns[4].slug,
    difficulty: "intermediate",
    options: ["triangles", "wedges", "flags-and-pennants", "head-and-shoulders"],
  },
  {
    id: "practice-6",
    image: patterns[5].image,
    correctAnswer: patterns[5].slug,
    difficulty: "advanced",
    options: ["flags-and-pennants", "triangles", "wedges", "cup-and-handle"],
  },
  {
    id: "practice-7",
    image: patterns[6].image,
    correctAnswer: patterns[6].slug,
    difficulty: "advanced",
    options: ["wedges", "triangles", "flags-and-pennants", "head-and-shoulders"],
  },
];
