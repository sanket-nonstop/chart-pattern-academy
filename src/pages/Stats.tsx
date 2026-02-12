import { patterns } from "@/data/patterns";
import { patternStats } from "@/data/pattern-stats";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import DifficultyBadge from "@/components/DifficultyBadge";
import { BarChart3, TrendingUp, Clock, Target } from "lucide-react";

const Stats = () => {
  const sortedPatterns = patterns.map((pattern) => {
    const stats = patternStats.find((s) => s.slug === pattern.slug);
    return { ...pattern, stats };
  }).sort((a, b) => (b.stats?.successRate || 0) - (a.stats?.successRate || 0));

  return (
    <>
      <SEO title="Pattern Statistics" description="Historical success rates and performance data" />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <BarChart3 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Pattern Statistics</h1>
            <p className="text-muted-foreground">Historical success rates based on market data</p>
          </div>

          <div className="mb-8 rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-lg font-bold text-foreground">Understanding the Data</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Success Rate:</strong> Percentage of times the pattern reached its target</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Avg Gain:</strong> Average profit when the pattern succeeds</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Avg Loss:</strong> Average loss when the pattern fails</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Duration:</strong> Typical time from pattern formation to target</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {sortedPatterns.map((pattern) => {
              if (!pattern.stats) return null;
              const { stats } = pattern;

              return (
                <Link
                  key={pattern.slug}
                  to={`/pattern/${pattern.slug}`}
                  className="block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <h2 className="font-display text-xl font-bold text-foreground">{pattern.name}</h2>
                        <DifficultyBadge level={pattern.difficulty} showIcon={false} />
                      </div>
                      <p className="text-sm text-muted-foreground">{pattern.shortDescription}</p>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 font-display text-3xl font-bold text-primary">{stats.successRate}%</div>
                      <div className={`text-xs font-medium ${
                        stats.reliability === "high" ? "text-green-600" : 
                        stats.reliability === "medium" ? "text-yellow-600" : "text-red-600"
                      }`}>
                        {stats.reliability.toUpperCase()} RELIABILITY
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatItem
                      icon={<TrendingUp className="h-4 w-4 text-green-600" />}
                      label="Avg Gain"
                      value={`+${stats.avgGain}%`}
                      color="text-green-600"
                    />
                    <StatItem
                      icon={<TrendingUp className="h-4 w-4 rotate-180 text-red-600" />}
                      label="Avg Loss"
                      value={`-${stats.avgLoss}%`}
                      color="text-red-600"
                    />
                    <StatItem
                      icon={<Clock className="h-4 w-4 text-blue-600" />}
                      label="Duration"
                      value={stats.avgDuration}
                      color="text-blue-600"
                    />
                    <StatItem
                      icon={<Target className="h-4 w-4 text-purple-600" />}
                      label="Best In"
                      value={stats.bestMarket}
                      color="text-purple-600"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Past performance does not guarantee future results</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Success rates vary based on market conditions and timeframe</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Always use proper risk management regardless of success rates</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Combine patterns with other technical analysis tools for best results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const StatItem = ({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) => (
  <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
    {icon}
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`font-semibold ${color}`}>{value}</p>
    </div>
  </div>
);

export default Stats;
