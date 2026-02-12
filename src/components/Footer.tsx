import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">ChartSchool</span>
        </Link>
        <p className="max-w-md text-sm text-muted-foreground">
          Educational content only — not financial advice. Always do your own research before making trading decisions.
        </p>
        <p className="text-xs text-muted-foreground">© 2026 ChartSchool. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
