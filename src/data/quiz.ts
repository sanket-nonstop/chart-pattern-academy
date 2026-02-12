export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizData: Record<string, QuizQuestion[]> = {
  "head-and-shoulders": [
    {
      question: "What does a Head & Shoulders pattern signal?",
      options: [
        "Bullish continuation",
        "Bearish reversal",
        "Sideways consolidation",
        "Bullish reversal"
      ],
      correctAnswer: 1,
      explanation: "The Head & Shoulders pattern signals a bearish reversal from an uptrend to a downtrend."
    },
    {
      question: "Where should you place your stop-loss for a Head & Shoulders pattern?",
      options: [
        "Below the neckline",
        "Above the right shoulder",
        "At the head peak",
        "Below the left shoulder"
      ],
      correctAnswer: 1,
      explanation: "The stop-loss should be placed above the right shoulder to protect against false breakdowns."
    },
    {
      question: "What confirms the Head & Shoulders pattern?",
      options: [
        "Formation of the head",
        "Formation of the right shoulder",
        "Break below the neckline",
        "Retest of the left shoulder"
      ],
      correctAnswer: 2,
      explanation: "The pattern is confirmed when price breaks below the neckline with increased volume."
    }
  ],
  "double-top": [
    {
      question: "What shape does a Double Top pattern form?",
      options: ["W-shape", "M-shape", "V-shape", "U-shape"],
      correctAnswer: 1,
      explanation: "A Double Top forms an 'M'-shaped pattern with two peaks at similar levels."
    },
    {
      question: "When is the best time to enter a short position on a Double Top?",
      options: [
        "At the first peak",
        "At the second peak",
        "When price breaks below support",
        "During the rebound between peaks"
      ],
      correctAnswer: 2,
      explanation: "Enter short when price breaks below the support level between the two peaks."
    }
  ],
  "double-bottom": [
    {
      question: "What does a Double Bottom pattern indicate?",
      options: [
        "Bearish reversal",
        "Bullish reversal",
        "Continuation of downtrend",
        "Market uncertainty"
      ],
      correctAnswer: 1,
      explanation: "A Double Bottom signals a bullish reversal from a downtrend to an uptrend."
    },
    {
      question: "What shape does a Double Bottom form?",
      options: ["M-shape", "W-shape", "V-shape", "Triangle"],
      correctAnswer: 1,
      explanation: "A Double Bottom forms a 'W'-shaped pattern with two troughs at similar levels."
    }
  ],
  "cup-and-handle": [
    {
      question: "What type of pattern is Cup & Handle?",
      options: [
        "Bearish reversal",
        "Bullish reversal",
        "Bullish continuation",
        "Bearish continuation"
      ],
      correctAnswer: 2,
      explanation: "Cup & Handle is a bullish continuation pattern indicating the uptrend will resume."
    },
    {
      question: "What should the handle retrace relative to the cup?",
      options: [
        "More than 50%",
        "Less than 50%",
        "Exactly 50%",
        "It doesn't matter"
      ],
      correctAnswer: 1,
      explanation: "The handle should retrace less than 50% of the cup's height for a valid pattern."
    }
  ],
  "flags-and-pennants": [
    {
      question: "What do Flags and Pennants represent?",
      options: [
        "Reversal patterns",
        "Continuation patterns",
        "Consolidation only",
        "Market tops"
      ],
      correctAnswer: 1,
      explanation: "Flags and Pennants are short-term continuation patterns that signal the trend will continue."
    },
    {
      question: "How long should a Flag pattern typically last?",
      options: [
        "Several months",
        "1-3 weeks",
        "One day",
        "6-12 months"
      ],
      correctAnswer: 1,
      explanation: "Flags are short-lived patterns, typically lasting 1-3 weeks."
    }
  ],
  "triangles": [
    {
      question: "Which triangle has a flat top and rising bottom?",
      options: [
        "Descending triangle",
        "Symmetrical triangle",
        "Ascending triangle",
        "Right triangle"
      ],
      correctAnswer: 2,
      explanation: "An Ascending triangle has a flat top (resistance) and rising bottom (higher lows)."
    },
    {
      question: "What does a Descending triangle typically signal?",
      options: [
        "Bullish bias",
        "Bearish bias",
        "Neutral",
        "Reversal to uptrend"
      ],
      correctAnswer: 1,
      explanation: "Descending triangles have a bearish bias with a flat bottom and falling top."
    }
  ],
  "wedges": [
    {
      question: "What is the key characteristic of a wedge pattern?",
      options: [
        "Both trendlines slope in opposite directions",
        "Both trendlines slope in the same direction",
        "One trendline is horizontal",
        "Trendlines are parallel"
      ],
      correctAnswer: 1,
      explanation: "In wedges, both support and resistance trendlines slope in the same direction but converge."
    },
    {
      question: "What does a Rising Wedge typically signal?",
      options: [
        "Bullish continuation",
        "Bearish reversal",
        "Bullish reversal",
        "Sideways movement"
      ],
      correctAnswer: 1,
      explanation: "A Rising Wedge is bearish and typically signals a downward reversal."
    }
  ]
};
