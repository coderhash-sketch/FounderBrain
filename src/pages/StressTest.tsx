import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Loader2, AlertTriangle, TrendingUp } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import GlassCard from "@/components/GlassCard";
import ScoreGauge from "@/components/ScoreGauge";
import LevelBadge from "@/components/LevelBadge";
import { simulateStressTest, StressTestResult } from "@/lib/simulate";

const StressTest = () => {
  const [problem, setProblem] = useState("");
  const [audience, setAudience] = useState("");
  const [revenueModel, setRevenueModel] = useState("");
  const [marketSize, setMarketSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StressTestResult | null>(null);

  const handleSubmit = async () => {
    if (!problem || !audience || !revenueModel) return;
    setLoading(true);
    setResult(null);
    const res = await simulateStressTest({ problem, audience, revenueModel, marketSize });
    setResult(res);
    setLoading(false);
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Crosshair size={20} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Idea Stress Tester</h1>
          </div>
          <p className="text-muted-foreground text-sm">Analyze feasibility, monetization, and structural flaws with brutal realism.</p>
        </motion.div>

        {/* Input Form */}
        <GlassCard>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Problem Statement</label>
              <textarea
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                rows={3}
                placeholder="What problem are you solving? Be specific about the pain point."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Target Audience</label>
                <input
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. B2B SaaS founders"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Revenue Model</label>
                <input
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. Subscription, Usage-based"
                  value={revenueModel}
                  onChange={(e) => setRevenueModel(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Market Size <span className="text-muted-foreground">(optional)</span></label>
              <input
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. $4.2B global market"
                value={marketSize}
                onChange={(e) => setMarketSize(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading || !problem || !audience || !revenueModel}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-40 transition-all glow-sm hover:glow-md flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Analyzing...</> : "Run Stress Test"}
            </button>
          </div>
        </GlassCard>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Scores */}
              <div className="grid grid-cols-2 gap-4">
                <GlassCard delay={0.1}>
                  <ScoreGauge score={result.innovation_score} label="Innovation Score" />
                </GlassCard>
                <GlassCard delay={0.15}>
                  <div className="space-y-3">
                    <LevelBadge level={result.monetization_viability} label="Monetization" />
                    <LevelBadge level={result.risk_level} label="Risk Level" />
                    <LevelBadge level={result.competitive_pressure} label="Competition" />
                  </div>
                </GlassCard>
              </div>

              {/* Scalability */}
              <GlassCard delay={0.2}>
                <div className="flex items-start gap-3">
                  <TrendingUp size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Scalability Insight</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{result.scalability_insight}</p>
                  </div>
                </div>
              </GlassCard>

              {/* Weaknesses */}
              <GlassCard delay={0.3}>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-fb-warning" />
                  Top 3 Weaknesses
                </h3>
                <ul className="space-y-3">
                  {result.top_3_weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-fb-warning font-mono font-bold shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{w}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Improvements */}
              <GlassCard delay={0.4}>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp size={16} className="text-fb-success" />
                  Strategic Improvements
                </h3>
                <ul className="space-y-3">
                  {result.strategic_improvements.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-fb-success font-mono font-bold shrink-0">→</span>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export default StressTest;
