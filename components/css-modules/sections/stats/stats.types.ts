export interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  background?: 'white' | 'gray' | 'gradient';
  columns?: 2 | 3 | 4;
} 