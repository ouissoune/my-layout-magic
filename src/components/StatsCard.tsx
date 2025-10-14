import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  className?: string;
}

export default function StatsCard({ title, value, className }: StatsCardProps) {
  return (
    <div className={cn("bg-card rounded-xl p-6 border border-border shadow-sm", className)}>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-4xl font-bold text-foreground">{value}</p>
    </div>
  );
}
