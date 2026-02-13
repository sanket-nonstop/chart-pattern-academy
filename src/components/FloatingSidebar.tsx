import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, TrendingUp, Sparkles, GraduationCap, Target, Calculator, BookOpen, BarChart3, Bookmark, Award, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FloatingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const sections = [
    {
      title: "🎓 Getting Started",
      color: "from-blue-500 to-purple-600",
      pages: [
        { path: "/", label: "Home", icon: "🏠" },
        { path: "/basics", label: "Financial Basics", icon: "💰", badge: "Start Here" },
        { path: "/start-investing", label: "Start Investing", icon: "🚀", badge: "New" },
      ],
    },
    {
      title: "📚 Learning",
      color: "from-green-500 to-emerald-600",
      pages: [
        { path: "/learn", label: "Learning Path", icon: "🎯" },
        { path: "/practice", label: "Practice", icon: "🎮" },
        { path: "/daily", label: "Daily Challenge", icon: "📅" },
        { path: "/flashcards", label: "Flashcards", icon: "🃏" },
        { path: "/compare", label: "Compare Patterns", icon: "⚖️" },
      ],
    },
    {
      title: "🛠️ Trading Tools",
      color: "from-orange-500 to-red-600",
      pages: [
        { path: "/glossary", label: "Glossary", icon: "📖" },
        { path: "/calculator", label: "Risk Calculator", icon: "🧮" },
        { path: "/journal", label: "Trade Journal", icon: "📝" },
        { path: "/stats", label: "Pattern Stats", icon: "📊" },
      ],
    },
    {
      title: "🚀 Advanced Topics",
      color: "from-purple-500 to-pink-600",
      pages: [
        { path: "/candlesticks", label: "Candlestick Patterns", icon: "🕯️" },
        { path: "/price-action", label: "Price Action", icon: "📉", badge: "New" },
        { path: "/indicators", label: "Technical Indicators", icon: "📈" },
        { path: "/volume", label: "Volume Analysis", icon: "📊" },
        { path: "/fibonacci", label: "Fibonacci", icon: "🔢" },
        { path: "/open-interest", label: "Open Interest", icon: "💹" },
        { path: "/case-studies", label: "Case Studies", icon: "📚" },
        { path: "/sector-analysis", label: "Sector Analysis", icon: "🏭" },
        { path: "/pattern-combinations", label: "Pattern Combinations", icon: "🧩" },
      ],
    },
    {
      title: "⭐ Your Progress",
      color: "from-yellow-500 to-amber-600",
      pages: [
        { path: "/bookmarks", label: "Bookmarks", icon: "🔖" },
        { path: "/progress", label: "Progress", icon: "🏆" },
      ],
    },
  ];

  const totalPages = sections.reduce((acc, section) => acc + section.pages.length, 0);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Open navigation"
      >
        <Menu className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
          {totalPages}
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-background shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div>
              <h2 className="text-lg font-bold">Navigation Hub</h2> 
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <div className={`mb-2 rounded-lg bg-gradient-to-r ${section.color} p-2 text-center text-sm font-bold text-white`}>
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.pages.map((page) => {
                    const isActive = location.pathname === page.path;
                    return (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 rounded-lg p-3 transition-all ${isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "hover:bg-muted"
                          }`}
                      >
                        <span className="text-xl">{page.icon}</span>
                        <span className="flex-1 text-sm font-medium">{page.label}</span>
                        {page.badge && (
                          <Badge className="bg-green-500 text-xs">{page.badge}</Badge>
                        )}
                        {isActive && <span className="text-xs">✓</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t bg-muted/50 p-4 text-center text-xs text-muted-foreground">
            <div className="mb-2 flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="font-semibold">Keep Learning!</span>
            </div>
            <p>Track your progress across all modules</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingSidebar;
