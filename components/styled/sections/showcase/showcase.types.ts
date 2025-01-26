export interface ShowcaseItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  variant?: 'default' | 'gradient' | 'outlined' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  badge?: string;
  accentColor?: string;
  href?: string;
}

export interface ShowcaseGridProps {
  title: string;
  subtitle?: string;
  items: ShowcaseItem[];
  columns?: 2 | 3 | 4;
  background?: 'white' | 'gray' | 'gradient';
} 