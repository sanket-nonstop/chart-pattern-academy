import { useState } from "react";
import { patterns } from "@/data/patterns";
import SEO from "@/components/SEO";
import DifficultyBadge from "@/components/DifficultyBadge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GitCompare } from "lucide-react";

const Compare = () => {
  const [pattern1, setPattern1] = useState(patterns[0].slug);
  const [pattern2, setPattern2] = useState(patterns[1].slug);

  const p1 = patterns.find((p) => p.slug === pattern1);
  const p2 = patterns.find((p) => p.slug === pattern2);

  if (!p1 || !p2) return null;

  return (
    <>
      <SEO title="Compare Patterns" description="Compare chart patterns side by side" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <GitCompare className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Compare Patterns</h1>
            <p className="text-muted-foreground">See the differences between chart patterns side by side</p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <Select value={pattern1} onValueChange={setPattern1}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {patterns.map((p) => (
                  <SelectItem key={p.slug} value={p.slug}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={pattern2} onValueChange={setPattern2}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {patterns.map((p) => (
                  <SelectItem key={p.slug} value={p.slug}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <PatternCard pattern={p1} />
            <PatternCard pattern={p2} />
          </div>
        </div>
      </div>
    </>
  );
};

const PatternCard = ({ pattern }: { pattern: typeof patterns[0] }) => (
  <div className="rounded-lg border border-border bg-card">
    <div className="border-b border-border p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className={`rounded px-2 py-0.5 text-xs font-semibold uppercase ${
          pattern.category === "continuation" ? "bg-primary/10 text-primary" : "bg-bearish/10 text-bearish"
        }`}>
          {pattern.category}
        </span>
        <DifficultyBadge level={pattern.difficulty} showIcon={false} />
      </div>
      <h2 className="font-display text-xl font-bold text-foreground">{pattern.name}</h2>
    </div>

    <div className="p-4">
      <img src={pattern.image} alt={pattern.name} className="mb-4 w-full rounded-lg" />
      
      <div className="space-y-4 text-sm">
        <div>
          <h3 className="mb-1 font-semibold text-foreground">Description</h3>
          <p className="text-muted-foreground">{pattern.shortDescription}</p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold text-foreground">Entry</h3>
          <p className="text-muted-foreground">{pattern.entry}</p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold text-foreground">Stop-Loss</h3>
          <p className="text-muted-foreground">{pattern.stopLoss}</p>
        </div>

        <div>
          <h3 className="mb-1 font-semibold text-foreground">Target</h3>
          <p className="text-muted-foreground">{pattern.target}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Compare;
