export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

export interface FeaturesGridProps {
  title: string;
  subtitle: string;
  features: FeatureCardProps[];
} 