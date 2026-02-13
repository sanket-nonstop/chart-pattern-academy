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
  // Double Top variations
  { id: "p1", image: patterns[0].image, correctAnswer: "double-top", difficulty: "beginner", options: ["double-top", "head-and-shoulders", "triple-top", "rounding-top"] },
  { id: "p2", image: patterns[0].image, correctAnswer: "double-top", difficulty: "beginner", options: ["double-top", "double-bottom", "triangles", "wedges"] },
  { id: "p3", image: patterns[0].image, correctAnswer: "double-top", difficulty: "intermediate", options: ["double-top", "triple-top", "head-and-shoulders", "rounding-top"] },
  { id: "p4", image: patterns[0].image, correctAnswer: "double-top", difficulty: "beginner", options: ["double-top", "cup-and-handle", "flags-and-pennants", "wedges"] },
  
  // Double Bottom variations
  { id: "p5", image: patterns[1].image, correctAnswer: "double-bottom", difficulty: "beginner", options: ["double-bottom", "cup-and-handle", "double-top", "wedges"] },
  { id: "p6", image: patterns[1].image, correctAnswer: "double-bottom", difficulty: "beginner", options: ["double-bottom", "triple-bottom", "rounding-bottom", "head-and-shoulders"] },
  { id: "p7", image: patterns[1].image, correctAnswer: "double-bottom", difficulty: "intermediate", options: ["double-bottom", "inverse-head-and-shoulders", "cup-and-handle", "triangles"] },
  { id: "p8", image: patterns[1].image, correctAnswer: "double-bottom", difficulty: "beginner", options: ["double-bottom", "double-top", "flags-and-pennants", "wedges"] },
  
  // Head and Shoulders variations
  { id: "p9", image: patterns[2].image, correctAnswer: "head-and-shoulders", difficulty: "intermediate", options: ["head-and-shoulders", "double-top", "triple-top", "triangles"] },
  { id: "p10", image: patterns[2].image, correctAnswer: "head-and-shoulders", difficulty: "intermediate", options: ["head-and-shoulders", "inverse-head-and-shoulders", "double-top", "rounding-top"] },
  { id: "p11", image: patterns[2].image, correctAnswer: "head-and-shoulders", difficulty: "advanced", options: ["head-and-shoulders", "triple-top", "broadening-formation", "diamond-top"] },
  { id: "p12", image: patterns[2].image, correctAnswer: "head-and-shoulders", difficulty: "intermediate", options: ["head-and-shoulders", "double-top", "flags-and-pennants", "wedges"] },
  
  // Cup and Handle variations
  { id: "p13", image: patterns[3].image, correctAnswer: "cup-and-handle", difficulty: "intermediate", options: ["cup-and-handle", "double-bottom", "rounding-bottom", "triangles"] },
  { id: "p14", image: patterns[3].image, correctAnswer: "cup-and-handle", difficulty: "beginner", options: ["cup-and-handle", "double-bottom", "wedges", "flags-and-pennants"] },
  { id: "p15", image: patterns[3].image, correctAnswer: "cup-and-handle", difficulty: "intermediate", options: ["cup-and-handle", "rounding-bottom", "inverse-head-and-shoulders", "triple-bottom"] },
  { id: "p16", image: patterns[3].image, correctAnswer: "cup-and-handle", difficulty: "advanced", options: ["cup-and-handle", "measured-move", "rectangle", "double-bottom"] },
  
  // Triangles variations
  { id: "p17", image: patterns[4].image, correctAnswer: "triangles", difficulty: "intermediate", options: ["triangles", "wedges", "flags-and-pennants", "head-and-shoulders"] },
  { id: "p18", image: patterns[4].image, correctAnswer: "triangles", difficulty: "intermediate", options: ["triangles", "broadening-formation", "diamond-top", "wedges"] },
  { id: "p19", image: patterns[4].image, correctAnswer: "triangles", difficulty: "beginner", options: ["triangles", "flags-and-pennants", "double-top", "cup-and-handle"] },
  { id: "p20", image: patterns[4].image, correctAnswer: "triangles", difficulty: "advanced", options: ["triangles", "diamond-top", "broadening-formation", "rectangle"] },
  
  // Flags and Pennants variations
  { id: "p21", image: patterns[5].image, correctAnswer: "flags-and-pennants", difficulty: "advanced", options: ["flags-and-pennants", "triangles", "wedges", "rectangle"] },
  { id: "p22", image: patterns[5].image, correctAnswer: "flags-and-pennants", difficulty: "intermediate", options: ["flags-and-pennants", "measured-move", "triangles", "wedges"] },
  { id: "p23", image: patterns[5].image, correctAnswer: "flags-and-pennants", difficulty: "advanced", options: ["flags-and-pennants", "rectangle", "cup-and-handle", "triangles"] },
  { id: "p24", image: patterns[5].image, correctAnswer: "flags-and-pennants", difficulty: "intermediate", options: ["flags-and-pennants", "wedges", "triangles", "double-top"] },
  
  // Wedges variations
  { id: "p25", image: patterns[6].image, correctAnswer: "wedges", difficulty: "advanced", options: ["wedges", "triangles", "flags-and-pennants", "broadening-formation"] },
  { id: "p26", image: patterns[6].image, correctAnswer: "wedges", difficulty: "intermediate", options: ["wedges", "triangles", "rectangle", "flags-and-pennants"] },
  { id: "p27", image: patterns[6].image, correctAnswer: "wedges", difficulty: "advanced", options: ["wedges", "diamond-top", "triangles", "broadening-formation"] },
  { id: "p28", image: patterns[6].image, correctAnswer: "wedges", difficulty: "intermediate", options: ["wedges", "flags-and-pennants", "cup-and-handle", "triangles"] },
  
  // Triple Top variations
  { id: "p29", image: patterns[7].image, correctAnswer: "triple-top", difficulty: "advanced", options: ["triple-top", "head-and-shoulders", "double-top", "rounding-top"] },
  { id: "p30", image: patterns[7].image, correctAnswer: "triple-top", difficulty: "intermediate", options: ["triple-top", "double-top", "head-and-shoulders", "broadening-formation"] },
  { id: "p31", image: patterns[7].image, correctAnswer: "triple-top", difficulty: "advanced", options: ["triple-top", "diamond-top", "head-and-shoulders", "double-top"] },
  
  // Triple Bottom variations
  { id: "p32", image: patterns[8].image, correctAnswer: "triple-bottom", difficulty: "advanced", options: ["triple-bottom", "inverse-head-and-shoulders", "double-bottom", "rounding-bottom"] },
  { id: "p33", image: patterns[8].image, correctAnswer: "triple-bottom", difficulty: "intermediate", options: ["triple-bottom", "double-bottom", "cup-and-handle", "inverse-head-and-shoulders"] },
  { id: "p34", image: patterns[8].image, correctAnswer: "triple-bottom", difficulty: "advanced", options: ["triple-bottom", "diamond-bottom", "double-bottom", "rounding-bottom"] },
  
  // Rounding Top variations
  { id: "p35", image: patterns[9].image, correctAnswer: "rounding-top", difficulty: "intermediate", options: ["rounding-top", "double-top", "head-and-shoulders", "triple-top"] },
  { id: "p36", image: patterns[9].image, correctAnswer: "rounding-top", difficulty: "advanced", options: ["rounding-top", "broadening-formation", "diamond-top", "head-and-shoulders"] },
  { id: "p37", image: patterns[9].image, correctAnswer: "rounding-top", difficulty: "intermediate", options: ["rounding-top", "cup-and-handle", "double-top", "triangles"] },
  
  // Rounding Bottom variations
  { id: "p38", image: patterns[10].image, correctAnswer: "rounding-bottom", difficulty: "intermediate", options: ["rounding-bottom", "cup-and-handle", "double-bottom", "triple-bottom"] },
  { id: "p39", image: patterns[10].image, correctAnswer: "rounding-bottom", difficulty: "advanced", options: ["rounding-bottom", "diamond-bottom", "inverse-head-and-shoulders", "cup-and-handle"] },
  { id: "p40", image: patterns[10].image, correctAnswer: "rounding-bottom", difficulty: "beginner", options: ["rounding-bottom", "double-bottom", "cup-and-handle", "wedges"] },
  
  // Diamond Top variations
  { id: "p41", image: patterns[11].image, correctAnswer: "diamond-top", difficulty: "advanced", options: ["diamond-top", "broadening-formation", "head-and-shoulders", "triple-top"] },
  { id: "p42", image: patterns[11].image, correctAnswer: "diamond-top", difficulty: "advanced", options: ["diamond-top", "triangles", "broadening-formation", "rounding-top"] },
  { id: "p43", image: patterns[11].image, correctAnswer: "diamond-top", difficulty: "advanced", options: ["diamond-top", "head-and-shoulders", "double-top", "broadening-formation"] },
  
  // Diamond Bottom variations
  { id: "p44", image: patterns[12].image, correctAnswer: "diamond-bottom", difficulty: "advanced", options: ["diamond-bottom", "broadening-formation", "inverse-head-and-shoulders", "triple-bottom"] },
  { id: "p45", image: patterns[12].image, correctAnswer: "diamond-bottom", difficulty: "advanced", options: ["diamond-bottom", "triangles", "rounding-bottom", "cup-and-handle"] },
  { id: "p46", image: patterns[12].image, correctAnswer: "diamond-bottom", difficulty: "advanced", options: ["diamond-bottom", "inverse-head-and-shoulders", "double-bottom", "broadening-formation"] },
  
  // Broadening Formation variations
  { id: "p47", image: patterns[13].image, correctAnswer: "broadening-formation", difficulty: "advanced", options: ["broadening-formation", "diamond-top", "triangles", "head-and-shoulders"] },
  { id: "p48", image: patterns[13].image, correctAnswer: "broadening-formation", difficulty: "advanced", options: ["broadening-formation", "wedges", "diamond-top", "rounding-top"] },
  { id: "p49", image: patterns[13].image, correctAnswer: "broadening-formation", difficulty: "advanced", options: ["broadening-formation", "triangles", "rectangle", "diamond-top"] },
  
  // Inverse Head and Shoulders variations
  { id: "p50", image: patterns[14].image, correctAnswer: "inverse-head-and-shoulders", difficulty: "intermediate", options: ["inverse-head-and-shoulders", "double-bottom", "triple-bottom", "cup-and-handle"] },
  { id: "p51", image: patterns[14].image, correctAnswer: "inverse-head-and-shoulders", difficulty: "advanced", options: ["inverse-head-and-shoulders", "diamond-bottom", "rounding-bottom", "triple-bottom"] },
  { id: "p52", image: patterns[14].image, correctAnswer: "inverse-head-and-shoulders", difficulty: "intermediate", options: ["inverse-head-and-shoulders", "head-and-shoulders", "double-bottom", "cup-and-handle"] },
  
  // Rectangle variations
  { id: "p53", image: patterns[15].image, correctAnswer: "rectangle", difficulty: "intermediate", options: ["rectangle", "flags-and-pennants", "triangles", "wedges"] },
  { id: "p54", image: patterns[15].image, correctAnswer: "rectangle", difficulty: "beginner", options: ["rectangle", "measured-move", "flags-and-pennants", "triangles"] },
  { id: "p55", image: patterns[15].image, correctAnswer: "rectangle", difficulty: "intermediate", options: ["rectangle", "broadening-formation", "triangles", "wedges"] },
  
  // Measured Move variations
  { id: "p56", image: patterns[16].image, correctAnswer: "measured-move", difficulty: "advanced", options: ["measured-move", "flags-and-pennants", "rectangle", "cup-and-handle"] },
  { id: "p57", image: patterns[16].image, correctAnswer: "measured-move", difficulty: "intermediate", options: ["measured-move", "rectangle", "flags-and-pennants", "triangles"] },
  { id: "p58", image: patterns[16].image, correctAnswer: "measured-move", difficulty: "advanced", options: ["measured-move", "cup-and-handle", "double-bottom", "flags-and-pennants"] },
  
  // Mixed difficulty variations
  { id: "p59", image: patterns[0].image, correctAnswer: "double-top", difficulty: "advanced", options: ["double-top", "broadening-formation", "diamond-top", "triple-top"] },
  { id: "p60", image: patterns[1].image, correctAnswer: "double-bottom", difficulty: "advanced", options: ["double-bottom", "diamond-bottom", "rounding-bottom", "measured-move"] },
  { id: "p61", image: patterns[2].image, correctAnswer: "head-and-shoulders", difficulty: "beginner", options: ["head-and-shoulders", "double-top", "cup-and-handle", "triangles"] },
  { id: "p62", image: patterns[3].image, correctAnswer: "cup-and-handle", difficulty: "beginner", options: ["cup-and-handle", "rounding-bottom", "double-bottom", "flags-and-pennants"] },
  { id: "p63", image: patterns[4].image, correctAnswer: "triangles", difficulty: "advanced", options: ["triangles", "measured-move", "rectangle", "flags-and-pennants"] },
  { id: "p64", image: patterns[5].image, correctAnswer: "flags-and-pennants", difficulty: "beginner", options: ["flags-and-pennants", "triangles", "rectangle", "wedges"] },
  { id: "p65", image: patterns[6].image, correctAnswer: "wedges", difficulty: "beginner", options: ["wedges", "triangles", "flags-and-pennants", "double-top"] },
];
