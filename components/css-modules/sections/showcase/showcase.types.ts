export type ShowcaseVariant = 
  | 'default' 
  | 'gradient' 
  | 'outlined' 
  | 'minimal';

export type ShowcaseSize = 
  | 'sm' 
  | 'md' 
  | 'lg';

export interface ShowcaseItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  variant?: ShowcaseVariant;
  size?: ShowcaseSize;
  badge?: string;
  accentColor?: string;
  href?: string;
}

export interface ShowcaseGridProps {
  title: string;
  subtitle?: string;
  items: ShowcaseItem[];
  columns?: 2 | 3 | 4;
  background?: 'white' | 'gray' | 'dark';
} 