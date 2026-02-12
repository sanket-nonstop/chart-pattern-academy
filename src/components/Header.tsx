import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CandlestickChart, TrendingUp, GraduationCap, Target, GitCompare, Layers, Bookmark, Calendar, BookOpen, Calculator, BookText, BarChart3 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <CandlestickChart className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Chart<span className="text-primary">School</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/learn" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <GraduationCap className="h-4 w-4" />
            Learn
          </Link>
          <Link to="/practice" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Target className="h-4 w-4" />
            Practice
          </Link>
          <Link to="/glossary" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <BookOpen className="h-4 w-4" />
            Glossary
          </Link>
          <Link to="/calculator" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Calculator className="h-4 w-4" />
            Calculator
          </Link>
          <Link to="/bookmarks" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Bookmark className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
            <Link to="/learn" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Learning Path</Link>
            <Link to="/practice" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Practice</Link>
            <Link to="/daily" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Daily Challenge</Link>
            <Link to="/glossary" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Glossary</Link>
            <Link to="/calculator" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Risk Calculator</Link>
            <Link to="/journal" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Trade Journal</Link>
            <Link to="/stats" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Pattern Stats</Link>
            <Link to="/compare" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Compare</Link>
            <Link to="/flashcards" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Flashcards</Link>
            <Link to="/bookmarks" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Bookmarks</Link>
            <Link to="/progress" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Progress</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
