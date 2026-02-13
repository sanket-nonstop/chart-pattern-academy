import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CandlestickChart, GraduationCap, Target, Bookmark, BookOpen, Calculator, ChevronDown, LayoutGrid, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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

        <nav className="hidden items-center gap-2 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2">
            Home
          </Link>

          {/* <Link to="/basics">
            <Button variant="default" size="sm" className="gap-1.5 bg-gradient-to-r from-blue-500 to-purple-600">
              <Sparkles className="h-4 w-4" />
              Start Here
            </Button>
          </Link> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <GraduationCap className="h-4 w-4" />
                Learn <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild><Link to="/learn">Learning Path</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/practice">Practice</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/daily">Daily Challenge</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/flashcards">Flashcards</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/compare">Compare Patterns</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Target className="h-4 w-4" />
                Tools <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild><Link to="/glossary">Glossary</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/calculator">Risk Calculator</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/journal">Trade Journal</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/stats">Pattern Stats</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <BookOpen className="h-4 w-4" />
                Advanced <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Intermediate Topics</DropdownMenuLabel>
              <DropdownMenuItem asChild><Link to="/indicators">Technical Indicators</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/volume">Volume Analysis</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/fibonacci">Fibonacci</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/open-interest">Open Interest</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/candlesticks">Candlestick Patterns</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/bookmarks" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2">
            <Bookmark className="h-4 w-4" />
          </Link>
          <Link to="/progress" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary px-2">
            Progress
          </Link>
          <ThemeToggle />

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5">
                <LayoutGrid className="h-4 w-4" />
                All Pages
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Learning</DropdownMenuLabel>
              <DropdownMenuItem asChild><Link to="/learn">Learning Path</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/practice">Practice</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/daily">Daily Challenge</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/flashcards">Flashcards</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/compare">Compare Patterns</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Tools</DropdownMenuLabel>
              <DropdownMenuItem asChild><Link to="/glossary">Glossary</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/calculator">Risk Calculator</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/journal">Trade Journal</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/stats">Pattern Stats</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Advanced Topics</DropdownMenuLabel>
              <DropdownMenuItem asChild><Link to="/indicators">Technical Indicators</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/volume">Volume Analysis</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/fibonacci">Fibonacci</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/open-interest">Open Interest</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/bookmarks">Bookmarks</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/progress">Progress</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
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
            <Link to="/basics" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 text-sm font-semibold text-white">
              <Sparkles className="h-4 w-4" /> Start with Basics
            </Link>
            <div className="border-t border-border pt-3 mt-3">
              <p className="text-xs font-semibold text-muted-foreground mb-2">LEARNING</p>
              <Link to="/learn" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Learning Path</Link>
              <Link to="/practice" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Practice</Link>
              <Link to="/daily" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Daily Challenge</Link>
              <Link to="/glossary" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Glossary</Link>
              <Link to="/calculator" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Risk Calculator</Link>
              <Link to="/journal" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Trade Journal</Link>
              <Link to="/stats" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Pattern Stats</Link>
              <div className="border-t border-border pt-3 mt-3">
                <p className="text-xs font-semibold text-muted-foreground mb-2">INTERMEDIATE TOPICS</p>
                <Link to="/indicators" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Technical Indicators</Link>
                <Link to="/volume" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Volume Analysis</Link>
                <Link to="/fibonacci" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Fibonacci</Link>
                <Link to="/open-interest" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Open Interest</Link>
                <Link to="/candlesticks" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block">Candlestick Patterns</Link>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <Link to="/compare" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Compare</Link>
                <Link to="/flashcards" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Flashcards</Link>
                <Link to="/bookmarks" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block mb-2">Bookmarks</Link>
                <Link to="/progress" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground block">Progress</Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
