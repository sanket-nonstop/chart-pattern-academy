import { Link } from "react-router-dom";
import { patterns } from "@/data/patterns";
import { useBookmarks } from "@/hooks/use-bookmarks";
import PatternCard from "@/components/PatternCard";
import SEO from "@/components/SEO";
import { Bookmark } from "lucide-react";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedPatterns = patterns.filter((p) => bookmarks.includes(p.slug));

  return (
    <>
      <SEO title="Bookmarks" description="Your bookmarked chart patterns" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Bookmark className="h-6 w-6 text-primary" />
            </div>
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Bookmarks</h1>
            <p className="text-muted-foreground">Your saved patterns for quick reference</p>
          </div>

          {bookmarkedPatterns.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bookmarkedPatterns.map((pattern, i) => (
                <PatternCard key={pattern.slug} pattern={pattern} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <Bookmark className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h2 className="mb-2 font-display text-xl font-bold text-foreground">No bookmarks yet</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Bookmark patterns to save them for quick access
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Browse Patterns →
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
