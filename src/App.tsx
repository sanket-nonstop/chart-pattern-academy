import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import PatternDetail from "./pages/PatternDetail";
import Progress from "./pages/Progress";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Compare from "./pages/Compare";
import Flashcards from "./pages/Flashcards";
import Bookmarks from "./pages/Bookmarks";
import Daily from "./pages/Daily";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="chart-academy-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pattern/:slug" element={<PatternDetail />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
