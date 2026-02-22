import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Loader2, Skull, Shield } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import GlassCard from "@/components/GlassCard";
import { simulateFailure, FailureResult } from "@/lib/simulate";

const FailureMachine = () => {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FailureResult | null>(null);

  const handleSubmit = async () => {
    if (!idea) return;
    setLoading(true);
    setResult(null);
    const res = await simulateFailure(idea);
    setResult(res);
    setLoading(false);
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-fb-danger/10">
              <Clock size={20} className="text-fb-danger" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Failure Time Machine</h1>
          </div>
          <p className="text-muted-foreground text-sm">Simulate your startup's most realistic collapse scenario. See the future. Change it.</p>
        </motion.div>

        <GlassCard>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Describe Your Startup Idea</label>
              <textarea
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                rows={4}
                placeholder="Describe your startup idea in detail — what it does, who it's for, how it makes money."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading || !idea}
              className="w-full py-3 rounded-lg bg-fb-danger/80 text-primary-foreground font-semibold text-sm hover:bg-fb-danger disabled:opacity-40 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Simulating Collapse...</> : "Activate Time Machine"}
            </button>
          </div>
        </GlassCard>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Failure year */}
              <GlassCard delay={0.1} className="text-center">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Projected Failure</p>
                  <p className="text-6xl font-black gradient-text font-mono">{result.failure_year}</p>
                  <p className="text-xs text-fb-danger font-medium">Based on current trajectory analysis</p>
                </div>
              </GlassCard>

              {/* Why it failed */}
              <GlassCard delay={0.2}>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Skull size={16} className="text-fb-danger" />
                  Why It Failed
                </h3>
                <ul className="space-y-4">
                  {result.why_it_failed.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="text-fb-danger font-mono font-bold shrink-0 mt-0.5">✕</span>
                      <span className="text-muted-foreground leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Prevention */}
              <GlassCard delay={0.3}>
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield size={16} className="text-fb-success" />
                  How To Prevent This
                </h3>
                <ul className="space-y-4">
                  {result.prevent_this_by.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="text-fb-success font-mono font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{a}</span>
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

export default FailureMachine;
