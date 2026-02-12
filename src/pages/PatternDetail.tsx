import { useParams, Link } from "react-router-dom";
import { getPatternBySlug, patterns } from "@/data/patterns";
import { ArrowLeft, TrendingDown, TrendingUp, Target, ShieldAlert, AlertTriangle } from "lucide-react";

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

  const otherPatterns = patterns.filter((p) => p.slug !== pattern.slug).slice(0, 3);

  return (
    <article className="pb-16">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All Patterns
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
              pattern.category === "reversal"
                ? "bg-destructive/10 text-destructive"
                : "bg-accent/10 text-accent"
            }`}>
              {pattern.category} pattern
            </span>
            <h1 className="mb-3 font-display text-3xl font-extrabold text-foreground md:text-4xl">
              {pattern.name}
            </h1>
            <p className="text-lg text-muted-foreground">{pattern.shortDescription}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Main image */}
          <div className="overflow-hidden rounded-lg border border-border bg-secondary">
            <img
              src={pattern.image}
              alt={`${pattern.name} chart pattern example`}
              className="w-full"
            />
          </div>

          {/* Definition */}
          <Section icon={<TrendingUp className="h-5 w-5 text-primary" />} title="What is it?">
            <p className="text-muted-foreground leading-relaxed">{pattern.definition}</p>
          </Section>

          {/* Psychology */}
          <Section icon={<TrendingDown className="h-5 w-5 text-primary" />} title="Market Psychology">
            <p className="text-muted-foreground leading-relaxed">{pattern.psychology}</p>
          </Section>

          {/* Trading rules */}
          <Section icon={<Target className="h-5 w-5 text-primary" />} title="How to Trade It">
            <div className="space-y-4">
              <TradeRule label="Entry" text={pattern.entry} color="primary" />
              <TradeRule label="Stop-Loss" text={pattern.stopLoss} color="destructive" />
              <TradeRule label="Target" text={pattern.target} color="accent" />
            </div>
          </Section>

          {/* Example charts */}
          {pattern.exampleImages.length > 0 && (
            <Section icon={<TrendingUp className="h-5 w-5 text-primary" />} title="Example Charts">
              <div className="grid gap-4">
                {pattern.exampleImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-border bg-secondary">
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
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warning/10 text-xs font-bold text-warning">
                    {i + 1}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Section>

          {/* False signals */}
          <Section icon={<ShieldAlert className="h-5 w-5 text-destructive" />} title="False Signals to Watch For">
            <ul className="space-y-3">
              {pattern.falseSignals.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
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
                  className="group rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary"
                >
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{p.name}</h3>
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
    <div className="mb-4 flex items-center gap-2">
      {icon}
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const colorMap: Record<string, string> = {
  primary: "border-primary bg-primary/5",
  destructive: "border-destructive bg-destructive/5",
  accent: "border-accent bg-accent/5",
};

const TradeRule = ({ label, text, color }: { label: string; text: string; color: string }) => (
  <div className={`rounded-lg border-l-4 p-4 ${colorMap[color] || ""}`}>
    <p className="mb-1 text-sm font-semibold text-foreground">{label}</p>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

export default PatternDetail;
