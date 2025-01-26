export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesGridProps {
  title: string;
  subtitle: string;
  features: FeatureCardProps[];
  background?: 'white' | 'gray' | 'gradient';
} 