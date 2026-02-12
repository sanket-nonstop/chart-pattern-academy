import { patterns } from "@/data/patterns";
import PatternCard from "@/components/PatternCard";
import { BookOpen, Target, TrendingUp, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Learn Technical Analysis
              </span>
            </div>
            <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-foreground text-glow-green md:text-5xl lg:text-6xl">
              Master Chart Patterns
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground">
              The beginner-friendly guide to reading stock charts. Learn the patterns that professional traders use — with clear explanations and real examples.
            </p>
            <a
              href="#patterns"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow-green"
            >
              Explore Patterns <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-card/50 py-14">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Clear Definitions", desc: "Each pattern explained in plain language with no jargon." },
            { icon: Target, title: "Entry & Exit Rules", desc: "Know exactly where to enter, set stop-loss, and take profit." },
            { icon: TrendingUp, title: "Market Psychology", desc: "Understand why patterns form and what they reveal about sentiment." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 glow-green-sm">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pattern Grid */}
      <section id="patterns" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground">Chart Patterns</h2>
            <p className="text-muted-foreground">Select a pattern to learn how to identify and trade it.</p>
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
