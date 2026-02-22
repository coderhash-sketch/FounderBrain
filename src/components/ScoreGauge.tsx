interface ScoreGaugeProps {
  score: number;
  label: string;
  max?: number;
}

const ScoreGauge = ({ score, label, max = 10 }: ScoreGaugeProps) => {
  const pct = (score / max) * 100;
  const color = pct >= 70 ? "bg-fb-success" : pct >= 40 ? "bg-fb-warning" : "bg-fb-danger";

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold text-foreground">{score}/{max}</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreGauge;
