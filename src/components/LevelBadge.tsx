interface LevelBadgeProps {
  level: "Low" | "Medium" | "High";
  label: string;
}

const LevelBadge = ({ level, label }: LevelBadgeProps) => {
  const colors = {
    Low: "bg-fb-success/15 text-fb-success border-fb-success/30",
    Medium: "bg-fb-warning/15 text-fb-warning border-fb-warning/30",
    High: "bg-fb-danger/15 text-fb-danger border-fb-danger/30",
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[level]}`}>
        {level}
      </span>
    </div>
  );
};

export default LevelBadge;
