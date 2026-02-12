import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CandlestickChart } from "lucide-react";

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

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/#patterns" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Patterns
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
            <Link to="/#patterns" onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground">Patterns</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
