# Adding New Chart Patterns

This guide explains how to add new chart patterns to the Chart Pattern Academy.

## Steps to Add a New Pattern

### 1. Add Pattern Image
Place the pattern image in `src/assets/patterns/` directory.
Example: `src/assets/patterns/triple-top.jpg`

### 2. Update patterns.ts
Add the pattern data to `src/data/patterns.ts`:

```typescript
import tripleTopImg from "@/assets/patterns/triple-top.jpg";

// Add to the patterns array:
{
  slug: "triple-top",
  name: "Triple Top",
  shortDescription: "A bearish reversal pattern with three peaks at similar levels.",
  category: "reversal",
  image: tripleTopImg,
  definition: "Your definition here...",
  psychology: "Market psychology explanation...",
  entry: "Entry rules...",
  stopLoss: "Stop-loss placement...",
  target: "Target calculation...",
  exampleImages: [tripleTopImg],
  mistakes: [
    "Common mistake 1",
    "Common mistake 2",
  ],
  falseSignals: [
    "False signal 1",
    "False signal 2",
  ],
}
```

### 3. Add Quiz Questions (Optional)
Add quiz questions to `src/data/quiz.ts`:

```typescript
"triple-top": [
  {
    question: "What does a Triple Top pattern signal?",
    options: ["Bullish", "Bearish", "Neutral", "Continuation"],
    correctAnswer: 1,
    explanation: "Triple Top signals a bearish reversal."
  },
  // Add more questions...
]
```

### 4. Test the Pattern
- Navigate to the homepage
- Find your new pattern in the grid
- Click to view the detail page
- Test the quiz functionality
- Verify progress tracking works

## Pattern Categories
- `reversal`: Patterns that signal trend reversals
- `continuation`: Patterns that signal trend continuation

## Best Practices
- Use high-quality, clear images
- Write beginner-friendly explanations
- Include 2-3 quiz questions minimum
- Add specific entry/exit rules
- List common mistakes traders make
- Explain false signals to watch for

## Image Optimization
- Recommended size: 1200x750px (16:10 aspect ratio)
- Format: JPG or PNG
- Optimize images before adding (use tools like TinyPNG)
- Keep file size under 200KB for best performance
