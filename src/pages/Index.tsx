import { patterns } from "@/data/patterns";
import PatternCard from "@/components/PatternCard";
import { TrendingUp, BookOpen, Target } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Learn to Read the Market
            </p>
            <h1 className="mb-5 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Master Stock Chart Patterns
            </h1>
            <p className="mx-auto max-w-lg text-lg text-primary-foreground/70">
              A beginner-friendly guide to the most important chart patterns every trader should know — with clear explanations and static examples.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-card py-14">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Clear Definitions", desc: "Each pattern is explained in plain language with no jargon." },
            { icon: Target, title: "Entry & Exit Rules", desc: "Know exactly where to enter, set stop-loss, and take profit." },
            { icon: TrendingUp, title: "Market Psychology", desc: "Understand why patterns form and what they tell you about sentiment." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pattern Grid */}
      <section id="patterns" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground">Chart Patterns</h2>
            <p className="text-muted-foreground">Select a pattern below to dive deeper.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {patterns.map((pattern, i) => (
              <PatternCard key={pattern.slug} pattern={pattern} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
