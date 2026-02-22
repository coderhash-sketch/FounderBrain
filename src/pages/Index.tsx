import { motion } from "framer-motion";
import { Crosshair, Clock, Eye, ArrowRight, Shield, Wifi, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import GlassCard from "@/components/GlassCard";
import FounderBrainLogo from "@/components/FounderBrainLogo";

const features = [
  {
    to: "/stress-test",
    icon: Crosshair,
    title: "Idea Stress Tester",
    description: "Analyze feasibility, monetization viability, and detect structural flaws in your startup idea.",
    tag: "HERO FEATURE",
    tagColor: "text-primary",
  },
  {
    to: "/failure-machine",
    icon: Clock,
    title: "Failure Time Machine",
    description: "Simulate your startup's most realistic collapse scenario. See the future to change it.",
    tag: "WOW FEATURE",
    tagColor: "text-fb-danger",
  },
  {
    to: "/bias-scanner",
    icon: Eye,
    title: "Founder Bias Scanner",
    description: "Detect cognitive biases hiding in your thinking — overconfidence, TAM exaggeration, blind spots.",
    tag: "DIFFERENTIATOR",
    tagColor: "text-fb-warning",
  },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 pt-8"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FounderBrainLogo size={72} />
            </motion.div>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-black tracking-tight">
              <span className="gradient-text">FounderBrain</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Private venture intelligence that runs entirely on your device. No cloud. No APIs. No compromise.
            </p>
          </div>

          {/* Status badges */}
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-fb-success bg-fb-success/10 border border-fb-success/20 rounded-full px-3 py-1.5">
              <Shield size={12} />
              100% Private
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
              <WifiOff size={12} />
              Fully Offline
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary border border-border rounded-full px-3 py-1.5">
              Zero API Keys
            </span>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <Link key={f.to} to={f.to} className="block">
              <GlassCard delay={0.15 * (i + 1)} className="group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-base font-bold text-foreground">{f.title}</h2>
                      <span className={`text-[10px] font-bold tracking-widest ${f.tagColor}`}>{f.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-xs text-muted-foreground"
        >
          Not a chatbot. A decision engine for future billionaires.
        </motion.p>
      </div>
    </AppLayout>
  );
};

export default Index;
