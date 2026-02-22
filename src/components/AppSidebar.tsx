import { Link, useLocation } from "react-router-dom";
import { Brain, Crosshair, Clock, Eye, LayoutDashboard } from "lucide-react";
import FounderBrainLogo from "./FounderBrainLogo";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/stress-test", label: "Stress Tester", icon: Crosshair },
  { to: "/failure-machine", label: "Failure Machine", icon: Clock },
  { to: "/bias-scanner", label: "Bias Scanner", icon: Eye },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <FounderBrainLogo size={36} />
        <div>
          <h1 className="text-base font-bold text-foreground tracking-tight">FounderBrain</h1>
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Venture Intelligence</p>
        </div>
      </div>

      {/* Status */}
      <div className="mx-4 mb-6 px-3 py-2 rounded-lg glass">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fb-success animate-pulse-glow" />
          <span className="text-xs text-muted-foreground">Local Intelligence Ready</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-primary/10 text-primary glow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon size={18} strokeWidth={active ? 2 : 1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Brain size={14} />
          <span>100% Offline · Zero Cloud</span>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
