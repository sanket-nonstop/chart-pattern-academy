import { useState } from "react";
import { patterns } from "@/data/patterns";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { RotateCw, ChevronLeft, ChevronRight, Layers } from "lucide-react";

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const pattern = patterns[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((currentIndex + 1) % patterns.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((currentIndex - 1 + patterns.length) % patterns.length);
  };

  return (
    <>
      <SEO title="Pattern Flashcards" description="Review chart patterns with flashcards" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <Layers className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Pattern Flashcards</h1>
            <p className="text-muted-foreground">Quick review mode for 17 chart patterns</p>
          </div>

          <div className="mb-4 text-center text-sm text-muted-foreground">
            Card {currentIndex + 1} of {patterns.length}
          </div>

          <div
            className="group relative mb-8 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className="relative h-96 transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-border bg-card p-8"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img src={pattern.image} alt="Pattern" className="mb-4 max-h-48 rounded-lg" />
                <p className="text-sm text-muted-foreground">Click to reveal</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-primary bg-card p-8"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">{pattern.name}</h2>
                <p className="mb-4 text-center text-sm text-muted-foreground">{pattern.shortDescription}</p>
                <span className={`rounded px-3 py-1 text-xs font-semibold uppercase ${
                  pattern.category === "continuation" ? "bg-primary/10 text-primary" : "bg-bearish/10 text-bearish"
                }`}>
                  {pattern.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" onClick={handlePrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => setFlipped(!flipped)}>
              <RotateCw className="mr-2 h-4 w-4" />
              Flip
            </Button>
            <Button variant="outline" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashcards;
