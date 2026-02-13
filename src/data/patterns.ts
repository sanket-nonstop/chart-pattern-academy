import headAndShouldersImg from "@/assets/patterns/head-and-shoulders.jpg";
import doubleTopImg from "@/assets/patterns/double-top.jpg";
import doubleBottomImg from "@/assets/patterns/double-bottom.jpg";
import cupAndHandleImg from "@/assets/patterns/cup-and-handle.jpg";
import flagsPennantsImg from "@/assets/patterns/flags-pennants.jpg";
import trianglesImg from "@/assets/patterns/triangles.jpg";
import wedgesImg from "@/assets/patterns/wedges.jpg";

// Using existing images for new patterns
const placeholderImg = doubleTopImg;

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface ChartPattern {
  slug: string;
  name: string;
  shortDescription: string;
  category: "reversal" | "continuation";
  difficulty: DifficultyLevel;
  learningOrder: number;
  image: string;
  definition: string;
  psychology: string;
  entry: string;
  stopLoss: string;
  target: string;
  exampleImages: string[];
  mistakes: string[];
  falseSignals: string[];
}

export const patterns: ChartPattern[] = [
  {
    slug: "double-top",
    name: "Double Top",
    shortDescription: "A bearish reversal where price tests a resistance level twice and fails.",
    category: "reversal",
    difficulty: "beginner",
    learningOrder: 1,
    image: doubleTopImg,
    definition:
      "A Double Top is an 'M'-shaped pattern where price reaches a resistance level twice, fails to break through, and then reverses downward. The pattern is confirmed when price breaks below the support level (the trough between the two peaks).",
    psychology:
      "The first top shows strong resistance. Bulls try again, pushing price back up, but meet the same resistance. This double rejection signals exhaustion among buyers. When the support breaks, it triggers a wave of selling.",
    entry: "Enter short when price breaks below the support level between the two peaks. A retest of this broken support (now resistance) can offer a safer entry.",
    stopLoss: "Place your stop-loss slightly above the two peaks. This ensures you're only stopped out if the pattern is truly invalidated.",
    target: "Measure the height from the peaks to the support level, then project downward from the breakout point.",
    exampleImages: [doubleTopImg],
    mistakes: [
      "Assuming any two peaks at similar levels form a Double Top — the pattern needs proper spacing.",
      "Not waiting for the support break and entering too early.",
      "Ignoring the broader trend context — Double Tops are more reliable at the end of uptrends.",
    ],
    falseSignals: [
      "Tight consolidation near resistance that looks like a Double Top but is actually a continuation pause.",
      "Strong bullish momentum that pushes through after the second touch.",
    ],
  },
  {
    slug: "double-bottom",
    name: "Double Bottom",
    shortDescription: "A bullish reversal forming a 'W' shape at a support level.",
    category: "reversal",
    difficulty: "beginner",
    learningOrder: 2,
    image: doubleBottomImg,
    definition:
      "A Double Bottom is a 'W'-shaped pattern where price tests a support level twice, bounces both times, and then breaks above the resistance level (the peak between the two troughs). It signals a reversal from bearish to bullish.",
    psychology:
      "The first bottom shows strong buying interest at a key support. Price rallies but faces selling. The second test of support holds — confirming buyer conviction. When the resistance level breaks, confidence surges and a new uptrend begins.",
    entry: "Enter long when price breaks above the resistance level (the middle peak). Wait for a close above this level for stronger confirmation.",
    stopLoss: "Place your stop-loss slightly below the two bottoms. If price drops below the double support, the pattern has failed.",
    target: "Measure the height from the bottoms to the resistance peak, then project upward from the breakout point.",
    exampleImages: [doubleBottomImg],
    mistakes: [
      "Buying at the second bottom before confirmation — the support could break.",
      "Not checking volume — valid breakouts above resistance should show increased buying volume.",
      "Forcing the pattern on charts where the two bottoms are at very different levels.",
    ],
    falseSignals: [
      "A brief push above resistance that immediately reverses — a 'fakeout' breakout.",
      "Patterns in strong downtrends where selling pressure overwhelms the reversal.",
    ],
  },
  {
    slug: "head-and-shoulders",
    name: "Head & Shoulders",
    shortDescription: "A bearish reversal pattern with three peaks — the middle one being the tallest.",
    category: "reversal",
    difficulty: "intermediate",
    learningOrder: 3,
    image: headAndShouldersImg,
    definition:
      "The Head & Shoulders pattern consists of three peaks: a higher peak (head) flanked by two lower peaks (shoulders). It signals a trend reversal from bullish to bearish when the price breaks below the neckline connecting the two troughs.",
    psychology:
      "The left shoulder forms as bulls push price up, then profit-taking causes a pullback. The head forms as bulls try again with more force, but selling pressure increases. The right shoulder forms as bulls make a weaker attempt — confidence is fading. When the neckline breaks, it confirms that sellers have taken control.",
    entry: "Enter a short position when the price breaks below the neckline with increased volume. Some traders wait for a retest of the neckline from below for confirmation.",
    stopLoss: "Place the stop-loss above the right shoulder. This protects against a false breakdown and limits your risk if the pattern fails.",
    target: "Measure the distance from the head to the neckline, then project that distance downward from the breakout point. This is your minimum price target.",
    exampleImages: [headAndShouldersImg],
    mistakes: [
      "Trading the pattern before the neckline is broken — jumping in early often leads to losses.",
      "Ignoring volume — a valid breakout should come with increasing volume.",
      "Confusing normal price fluctuations with an actual Head & Shoulders formation.",
    ],
    falseSignals: [
      "Low volume breakdowns that quickly reverse back above the neckline.",
      "Patterns forming in strong uptrends where momentum can overpower the reversal signal.",
    ],
  },
  {
    slug: "cup-and-handle",
    name: "Cup & Handle",
    shortDescription: "A bullish continuation pattern shaped like a tea cup with a small handle.",
    category: "continuation",
    difficulty: "intermediate",
    learningOrder: 4,
    image: cupAndHandleImg,
    definition:
      "The Cup & Handle pattern features a rounded bottom (the cup) followed by a small downward drift or consolidation (the handle). It's a bullish continuation pattern indicating the uptrend will resume after a period of consolidation.",
    psychology:
      "The cup forms as sellers drive price down, but buying interest gradually increases, creating a rounded bottom. The handle represents final profit-taking and shakeout of weak hands. When price breaks above the cup's rim (resistance), it confirms renewed bullish momentum.",
    entry: "Enter long when price breaks above the resistance level at the top of the cup (the rim) with strong volume. The handle's high point is your trigger.",
    stopLoss: "Place your stop-loss below the lowest point of the handle, or for a wider stop, below the cup's midpoint.",
    target: "Measure the depth of the cup and project it upward from the breakout point for your minimum target.",
    exampleImages: [cupAndHandleImg],
    mistakes: [
      "Confusing a V-shaped bottom with a cup — the cup should be rounded and gradual.",
      "Trading cups with handles that retrace more than 50% of the cup's height.",
      "Not waiting for the breakout above the rim — entering during the handle is premature.",
    ],
    falseSignals: [
      "Handles that break down below the cup, turning it into a different pattern entirely.",
      "Cups forming in strong downtrends (the pattern works best in existing uptrends).",
    ],
  },
  {
    slug: "triangles",
    name: "Triangles",
    shortDescription: "Ascending, descending, and symmetrical patterns showing price compression.",
    category: "continuation",
    difficulty: "intermediate",
    learningOrder: 5,
    image: trianglesImg,
    definition:
      "Triangle patterns form when price action narrows between converging trendlines. Ascending triangles have a flat top and rising bottom (bullish bias). Descending triangles have a flat bottom and falling top (bearish bias). Symmetrical triangles have both lines converging equally (neutral, breaks in direction of the prior trend).",
    psychology:
      "Triangles represent a battle between buyers and sellers with decreasing volatility. In ascending triangles, buyers are getting more aggressive (higher lows) against a fixed resistance. In descending triangles, sellers press lower highs against a fixed support. The breakout represents one side winning decisively.",
    entry: "Enter on a clear breakout beyond the triangle boundary with volume confirmation. For ascending, buy on an upside break. For descending, sell on a downside break. For symmetrical, trade in the direction of the prior trend.",
    stopLoss: "Place your stop inside the triangle — typically at the opposite boundary or at the last significant swing point within the triangle.",
    target: "Measure the widest part of the triangle (the base) and project that distance from the breakout point.",
    exampleImages: [trianglesImg],
    mistakes: [
      "Trading before the breakout — price can oscillate within the triangle multiple times.",
      "Not checking which type of triangle it is — each has a different directional bias.",
      "Ignoring the time factor — patterns that take too long to resolve often produce weaker breakouts.",
    ],
    falseSignals: [
      "False breakouts where price briefly exits the triangle then reverses back inside.",
      "Breakouts in the final 25% of the triangle's apex tend to be less reliable.",
    ],
  },
  {
    slug: "flags-and-pennants",
    name: "Flags & Pennants",
    shortDescription: "Short-term continuation patterns that form after sharp price moves.",
    category: "continuation",
    difficulty: "advanced",
    learningOrder: 6,
    image: flagsPennantsImg,
    definition:
      "Flags are rectangular consolidation patterns that slope against the prevailing trend. Pennants are small symmetrical triangles. Both form after a sharp price move (the 'flagpole') and signal that the trend will continue after the brief pause.",
    psychology:
      "After a sharp move, traders take profits causing a brief pullback or consolidation. However, the underlying momentum remains strong. The tight consolidation shows that sellers can't push price far — buyers are waiting. The breakout continues the original trend direction.",
    entry: "Enter when price breaks out of the flag/pennant in the direction of the prior trend (the flagpole). Volume should increase on the breakout.",
    stopLoss: "Place your stop-loss on the opposite side of the flag/pennant. For a bull flag, stop below the flag's low; for a bear flag, stop above the flag's high.",
    target: "Measure the length of the flagpole and project it from the breakout point. This gives you the expected continuation distance.",
    exampleImages: [flagsPennantsImg],
    mistakes: [
      "Confusing flags with trend channels — flags should be short-lived (1–3 weeks typically).",
      "Trading flags that form without a clear prior impulsive move (no flagpole).",
      "Ignoring the overall market trend — flags work best when they align with the broader trend.",
    ],
    falseSignals: [
      "Flags that last too long lose their power — they may evolve into reversal patterns.",
      "Low-volume breakouts from the flag that quickly reverse.",
    ],
  },
  {
    slug: "wedges",
    name: "Wedges",
    shortDescription: "Converging trendlines that slope in the same direction, signaling reversals.",
    category: "reversal",
    difficulty: "advanced",
    learningOrder: 7,
    image: wedgesImg,
    definition:
      "Wedge patterns form when both support and resistance trendlines slope in the same direction but converge. A Rising Wedge slopes upward and is bearish — price is expected to break downward. A Falling Wedge slopes downward and is bullish — price is expected to break upward.",
    psychology:
      "In a Rising Wedge, buyers push price higher but with diminishing momentum — each new high gains less ground. Eventually, exhaustion leads to a breakdown. In a Falling Wedge, sellers push price lower but lose strength — the narrowing range shows selling pressure fading, setting up a bullish reversal.",
    entry: "For a Rising Wedge, enter short when price breaks below the lower trendline. For a Falling Wedge, enter long when price breaks above the upper trendline. Volume confirmation strengthens the signal.",
    stopLoss: "Place your stop beyond the most recent swing high (Rising Wedge) or swing low (Falling Wedge) inside the pattern.",
    target: "Measure the height of the wedge at its widest point and project that distance from the breakout point.",
    exampleImages: [wedgesImg],
    mistakes: [
      "Confusing wedges with triangles — wedges have both trendlines sloping in the same direction.",
      "Trading wedge breakouts without volume confirmation.",
      "Not considering the context — Rising Wedges in strong uptrends may just be brief pauses, not reversals.",
    ],
    falseSignals: [
      "Breakouts that occur on very low volume and quickly retrace back into the wedge.",
      "Wedges that form over very short timeframes tend to be less reliable.",
    ],
  },
  {
    slug: "triple-top",
    name: "Triple Top",
    shortDescription: "A bearish reversal with three peaks at similar resistance levels.",
    category: "reversal",
    difficulty: "intermediate",
    learningOrder: 8,
    image: placeholderImg,
    definition: "A Triple Top forms when price tests a resistance level three times and fails to break through. After the third rejection, price breaks below the support level, confirming a bearish reversal.",
    psychology: "Three failed attempts to break resistance show extreme buyer exhaustion. Each rejection weakens bullish confidence. When support breaks, it triggers panic selling.",
    entry: "Enter short when price breaks below the support level connecting the three troughs with increased volume.",
    stopLoss: "Place stop-loss above the three peaks to protect against pattern failure.",
    target: "Measure height from peaks to support, project downward from breakout.",
    exampleImages: [placeholderImg],
    mistakes: ["Entering before support breaks", "Ignoring volume on breakout", "Trading in strong uptrends"],
    falseSignals: ["Low volume breakdowns", "Fourth peak forming instead of breakdown"],
  },
  {
    slug: "triple-bottom",
    name: "Triple Bottom",
    shortDescription: "A bullish reversal with three troughs at similar support levels.",
    category: "reversal",
    difficulty: "intermediate",
    learningOrder: 9,
    image: placeholderImg,
    definition: "A Triple Bottom occurs when price tests support three times, holds each time, then breaks above resistance. It signals strong buying interest and trend reversal.",
    psychology: "Three successful support tests prove buyer strength. Sellers exhaust their pressure. Breakout above resistance confirms bulls have taken control.",
    entry: "Enter long when price breaks above resistance level with strong volume.",
    stopLoss: "Place stop-loss below the three bottoms.",
    target: "Measure height from bottoms to resistance, project upward from breakout.",
    exampleImages: [placeholderImg],
    mistakes: ["Buying at third bottom without confirmation", "Missing volume analysis", "Trading against major downtrend"],
    falseSignals: ["False breakouts that quickly reverse", "Support breaking on fourth test"],
  },
  {
    slug: "rounding-bottom",
    name: "Rounding Bottom",
    shortDescription: "A gradual U-shaped reversal showing slow momentum shift.",
    category: "reversal",
    difficulty: "beginner",
    learningOrder: 10,
    image: placeholderImg,
    definition: "A Rounding Bottom (or Saucer Bottom) is a long-term reversal pattern forming a smooth U-shape. It shows gradual shift from bearish to bullish sentiment over weeks or months.",
    psychology: "Selling pressure slowly diminishes. Buyers gradually gain confidence. The smooth curve shows orderly transition without panic or euphoria.",
    entry: "Enter when price breaks above the pattern's rim (resistance) or when upward momentum accelerates.",
    stopLoss: "Place stop below the bottom of the saucer or use a trailing stop.",
    target: "Measure depth of the saucer, project upward from breakout.",
    exampleImages: [placeholderImg],
    mistakes: ["Expecting quick moves (pattern is slow)", "Trading V-shaped bottoms as rounding", "Entering too early in formation"],
    falseSignals: ["Incomplete patterns that break down mid-formation", "Low volume throughout pattern"],
  },
  {
    slug: "rounding-top",
    name: "Rounding Top",
    shortDescription: "An inverted U-shape signaling gradual bearish reversal.",
    category: "reversal",
    difficulty: "beginner",
    learningOrder: 11,
    image: placeholderImg,
    definition: "A Rounding Top (or Inverted Saucer) forms a smooth inverted U-shape, indicating gradual shift from bullish to bearish sentiment. It's a long-term reversal pattern.",
    psychology: "Buying enthusiasm slowly fades. Sellers gradually take control. The smooth arc shows orderly distribution without sudden panic.",
    entry: "Enter short when price breaks below the pattern's support level.",
    stopLoss: "Place stop above the top of the dome or recent swing high.",
    target: "Measure height of the dome, project downward from breakdown.",
    exampleImages: [placeholderImg],
    mistakes: ["Rushing the pattern (takes time to form)", "Confusing with normal consolidation", "Ignoring volume decline"],
    falseSignals: ["Pattern breaking upward instead", "Incomplete formations"],
  },
  {
    slug: "rectangle",
    name: "Rectangle",
    shortDescription: "A consolidation pattern with horizontal support and resistance.",
    category: "continuation",
    difficulty: "beginner",
    learningOrder: 12,
    image: placeholderImg,
    definition: "A Rectangle forms when price oscillates between parallel horizontal support and resistance levels. It's a continuation pattern where price consolidates before resuming the prior trend.",
    psychology: "Bulls and bears are evenly matched, creating a trading range. Price bounces between levels as neither side dominates. Breakout shows which side won the battle.",
    entry: "Enter in direction of prior trend when price breaks support or resistance with volume.",
    stopLoss: "Place stop on opposite side of rectangle.",
    target: "Measure rectangle height, project from breakout point.",
    exampleImages: [placeholderImg],
    mistakes: ["Trading inside the rectangle (wait for breakout)", "Ignoring prior trend direction", "Missing volume confirmation"],
    falseSignals: ["False breakouts that reverse back into range", "Breakouts on low volume"],
  },
  {
    slug: "diamond-top",
    name: "Diamond Top",
    shortDescription: "A rare reversal pattern shaped like a diamond at market tops.",
    category: "reversal",
    difficulty: "advanced",
    learningOrder: 13,
    image: placeholderImg,
    definition: "A Diamond Top forms when price expands then contracts, creating a diamond shape. It appears at tops and signals bearish reversal. The pattern combines elements of head & shoulders and triangles.",
    psychology: "Initial volatility expansion shows confusion and indecision. Contraction phase shows weakening momentum. Breakdown confirms bears have won.",
    entry: "Enter short when price breaks below the lower diamond boundary.",
    stopLoss: "Place stop above the diamond's highest point.",
    target: "Measure diamond height, project downward from breakdown.",
    exampleImages: [placeholderImg],
    mistakes: ["Forcing the pattern (it's rare)", "Trading before clear breakdown", "Confusing with other patterns"],
    falseSignals: ["Incomplete diamond formations", "Low volume breakdowns"],
  },
  {
    slug: "diamond-bottom",
    name: "Diamond Bottom",
    shortDescription: "A rare bullish reversal forming a diamond at market bottoms.",
    category: "reversal",
    difficulty: "advanced",
    learningOrder: 14,
    image: placeholderImg,
    definition: "A Diamond Bottom is the bullish counterpart to Diamond Top. Price expands then contracts in a diamond shape at bottoms, signaling bullish reversal.",
    psychology: "Volatility expansion shows panic and uncertainty. Contraction shows stabilization. Breakout upward confirms bulls regaining control.",
    entry: "Enter long when price breaks above the upper diamond boundary with volume.",
    stopLoss: "Place stop below the diamond's lowest point.",
    target: "Measure diamond height, project upward from breakout.",
    exampleImages: [placeholderImg],
    mistakes: ["Seeing diamonds everywhere (they're rare)", "Entering before breakout", "Missing volume signals"],
    falseSignals: ["Pattern breaking downward", "Incomplete formations"],
  },
  {
    slug: "broadening-formation",
    name: "Broadening Formation",
    shortDescription: "An expanding pattern showing increasing volatility and uncertainty.",
    category: "reversal",
    difficulty: "advanced",
    learningOrder: 15,
    image: placeholderImg,
    definition: "A Broadening Formation (Megaphone) forms when price makes higher highs and lower lows with expanding trendlines. It signals increasing volatility and often precedes reversals.",
    psychology: "Growing volatility shows market panic and emotional trading. Each swing is more extreme. Pattern indicates loss of control and impending reversal.",
    entry: "Enter when price breaks the pattern boundary in the reversal direction. Very risky pattern.",
    stopLoss: "Use tight stops due to high volatility. Place beyond recent swing points.",
    target: "Difficult to measure. Use conservative targets or trailing stops.",
    exampleImages: [placeholderImg],
    mistakes: ["Trading inside the formation (too volatile)", "Using wide stops (losses can be large)", "Ignoring the danger signals"],
    falseSignals: ["Multiple false breakouts common", "Pattern can continue expanding"],
  },
  {
    slug: "inverse-head-and-shoulders",
    name: "Inverse Head & Shoulders",
    shortDescription: "A bullish reversal with three troughs, middle one being deepest.",
    category: "reversal",
    difficulty: "intermediate",
    learningOrder: 16,
    image: placeholderImg,
    definition: "The Inverse Head & Shoulders is the bullish version of the classic pattern. Three troughs form with the middle (head) being the lowest. Breakout above neckline confirms bullish reversal.",
    psychology: "Left shoulder shows selling pressure. Head shows panic selling to new lows. Right shoulder shows sellers losing power. Neckline break confirms bulls have taken control.",
    entry: "Enter long when price breaks above the neckline with strong volume.",
    stopLoss: "Place stop below the right shoulder or head.",
    target: "Measure head to neckline distance, project upward from breakout.",
    exampleImages: [placeholderImg],
    mistakes: ["Entering before neckline break", "Ignoring volume patterns", "Trading in strong downtrends"],
    falseSignals: ["Low volume breakouts", "Neckline break that quickly fails"],
  },
  {
    slug: "measured-move",
    name: "Measured Move",
    shortDescription: "A continuation pattern predicting the next leg's distance.",
    category: "continuation",
    difficulty: "intermediate",
    learningOrder: 17,
    image: placeholderImg,
    definition: "A Measured Move occurs when price makes an initial strong move, consolidates, then continues in the same direction for approximately the same distance. It's also called an AB=CD pattern.",
    psychology: "Initial move shows strong momentum. Consolidation allows profit-taking without reversing trend. Second leg shows renewed commitment to the trend direction.",
    entry: "Enter when price breaks out of the consolidation phase in the trend direction.",
    stopLoss: "Place stop at the opposite end of the consolidation zone.",
    target: "Measure the first leg (A to B), project that distance from consolidation breakout (C to D).",
    exampleImages: [placeholderImg],
    mistakes: ["Assuming exact equality (it's approximate)", "Ignoring consolidation pattern type", "Trading against major trend"],
    falseSignals: ["Consolidation that becomes reversal", "Second leg much shorter than first"],
  },
];

export function getPatternBySlug(slug: string): ChartPattern | undefined {
  return patterns.find((p) => p.slug === slug);
}
