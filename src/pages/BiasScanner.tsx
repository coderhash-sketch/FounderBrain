import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Loader2, AlertOctagon, Lightbulb } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import GlassCard from "@/components/GlassCard";
import LevelBadge from "@/components/LevelBadge";
import { simulateBiasScan, BiasResult } from "@/lib/simulate";

const BiasScanner = () => {
  const [inputs, setInputs] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<BiasResult[]>([]);

  const updateInput = (i: number, val: string) => {
    const next = [...inputs];
    next[i] = val;
    setInputs(next);
  };

  const handleSubmit = async () => {
    const filled = inputs.filter(Boolean);
    if (filled.length === 0) return;
    setLoading(true);
    setResults([]);
    const res = await simulateBiasScan(filled);
    setResults(res);
    setLoading(false);
  };

  const labels = [
    "Your elevator pitch or one-liner",
    "Key assumptions about your market",
    "Growth strategy or acquisition plan",
  ];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-fb-warning/10">
              <Eye size={20} className="text-fb-warning" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Founder Bias Scanner</h1>
          </div>
          <p className="text-muted-foreground text-sm">Detect cognitive biases hiding in your thinking. See what you're not seeing.</p>
        </motion.div>

        <GlassCard>
          <div className="space-y-5">
            {labels.map((label, i) => (
              <div key={i} className="space-y-2">
                <label className="text-sm font-medium text-foreground">{label}</label>
                <textarea
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  rows={2}
                  placeholder={`Input ${i + 1}...`}
                  value={inputs[i]}
                  onChange={(e) => updateInput(i, e.target.value)}
                />
              </div>
            ))}
            <button
              onClick={handleSubmit}
              disabled={loading || inputs.every((i) => !i)}
              className="w-full py-3 rounded-lg bg-fb-warning/80 text-primary-foreground font-semibold text-sm hover:bg-fb-warning disabled:opacity-40 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Scanning for Bias...</> : "Scan for Cognitive Bias"}
            </button>
          </div>
        </GlassCard>

        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {results.map((bias, i) => (
                <GlassCard key={i} delay={0.1 * (i + 1)}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <AlertOctagon size={16} className="text-fb-warning" />
                        {bias.bias_detected}
                      </h3>
                      <LevelBadge level={bias.risk_impact} label="" />
                    </div>

                    <div className="space-y-3 pl-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Evidence</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{bias.evidence}</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <Lightbulb size={14} className="text-fb-success mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Correction</p>
                          <p className="text-sm text-foreground leading-relaxed">{bias.correction}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export default BiasScanner;
