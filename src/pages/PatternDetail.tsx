import { useParams, Link } from "react-router-dom";
import { getPatternBySlug, patterns } from "@/data/patterns";
import { ArrowLeft, TrendingDown, TrendingUp, Target, ShieldAlert, AlertTriangle, ArrowRight } from "lucide-react";

const PatternDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pattern = getPatternBySlug(slug || "");

  if (!pattern) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Pattern not found</h1>
          <Link to="/" className="text-sm text-primary hover:underline">← Back to all patterns</Link>
        </div>
      </div>
    );
  }

  const isBullish = pattern.category === "continuation";
  const otherPatterns = patterns.filter((p) => p.slug !== pattern.slug).slice(0, 3);

  return (
    <article className="pb-16">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> All Patterns
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <span className={`mb-3 inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
              isBullish
                ? "bg-primary/10 text-primary"
                : "bg-bearish/10 text-bearish"
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${isBullish ? "bg-primary" : "bg-bearish"}`} />
              {pattern.category} pattern
            </span>
            <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              {pattern.name}
            </h1>
            <p className="text-lg text-muted-foreground">{pattern.shortDescription}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Main image */}
          <div className="overflow-hidden rounded-lg border border-border glow-green-sm">
            <img
              src={pattern.image}
              alt={`${pattern.name} chart pattern example`}
              className="w-full"
            />
          </div>

          {/* Definition */}
          <Section icon={<TrendingUp className="h-5 w-5 text-primary" />} title="What is it?">
            <p className="leading-relaxed text-muted-foreground">{pattern.definition}</p>
          </Section>

          {/* Psychology */}
          <Section icon={<TrendingDown className="h-5 w-5 text-accent" />} title="Market Psychology">
            <p className="leading-relaxed text-muted-foreground">{pattern.psychology}</p>
          </Section>

          {/* Trading rules */}
          <Section icon={<Target className="h-5 w-5 text-primary" />} title="How to Trade It">
            <div className="space-y-4">
              <TradeRule label="Entry" text={pattern.entry} variant="entry" />
              <TradeRule label="Stop-Loss" text={pattern.stopLoss} variant="stop" />
              <TradeRule label="Target" text={pattern.target} variant="target" />
            </div>
          </Section>

          {/* Example charts */}
          {pattern.exampleImages.length > 0 && (
            <Section icon={<TrendingUp className="h-5 w-5 text-primary" />} title="Example Charts">
              <div className="grid gap-4">
                {pattern.exampleImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-border">
                    <img src={img} alt={`${pattern.name} example ${i + 1}`} className="w-full" loading="lazy" />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Common mistakes */}
          <Section icon={<AlertTriangle className="h-5 w-5 text-warning" />} title="Common Mistakes">
            <ul className="space-y-3">
              {pattern.mistakes.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-warning/10 text-[10px] font-bold text-warning">
                    {i + 1}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Section>

          {/* False signals */}
          <Section icon={<ShieldAlert className="h-5 w-5 text-bearish" />} title="False Signals to Watch For">
            <ul className="space-y-3">
              {pattern.falseSignals.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bearish" />
                  {f}
                </li>
              ))}
            </ul>
          </Section>

          {/* Related patterns */}
          <div className="border-t border-border pt-10">
            <h2 className="mb-5 font-display text-xl font-bold text-foreground">Explore More Patterns</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {otherPatterns.map((p) => (
                <Link
                  key={p.slug}
                  to={`/pattern/${p.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:glow-green-sm"
                >
                  <h3 className="mb-1 flex items-center justify-between text-sm font-semibold text-foreground">
                    {p.name}
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section>
    <div className="mb-4 flex items-center gap-2.5">
      {icon}
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const variantStyles = {
  entry: "border-l-primary bg-primary/5",
  stop: "border-l-bearish bg-bearish/5",
  target: "border-l-accent bg-accent/5",
};

const TradeRule = ({ label, text, variant }: { label: string; text: string; variant: "entry" | "stop" | "target" }) => (
  <div className={`rounded-lg border-l-4 p-4 ${variantStyles[variant]}`}>
    <p className="mb-1 text-sm font-semibold text-foreground">{label}</p>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

export default PatternDetail;
