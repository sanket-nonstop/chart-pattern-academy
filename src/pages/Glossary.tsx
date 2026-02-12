import { useState, useMemo } from "react";
import { glossaryTerms } from "@/data/glossary";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { BookOpen, Search } from "lucide-react";

const Glossary = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | "technical" | "fundamental" | "risk" | "general">("all");

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch = term.term.toLowerCase().includes(search.toLowerCase()) ||
        term.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || term.category === category;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, category]);

  const categoryColors = {
    technical: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    fundamental: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    risk: "bg-red-500/10 text-red-600 dark:text-red-400",
    general: "bg-green-500/10 text-green-600 dark:text-green-400",
  };

  return (
    <>
      <SEO title="Trading Glossary" description="Learn essential trading terms and concepts" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Trading Glossary</h1>
            <p className="text-muted-foreground">Essential terms every trader should know</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search terms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={category === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory("all")}
              >
                All
              </Button>
              <Button
                variant={category === "technical" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory("technical")}
              >
                Technical
              </Button>
              <Button
                variant={category === "risk" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory("risk")}
              >
                Risk Management
              </Button>
              <Button
                variant={category === "general" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory("general")}
              >
                General
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTerms.map((term) => (
              <div key={term.term} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl font-bold text-foreground">{term.term}</h2>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[term.category]}`}>
                    {term.category}
                  </span>
                </div>
                <p className="mb-3 text-muted-foreground">{term.definition}</p>
                {term.example && (
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Example:</span> {term.example}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Glossary;
