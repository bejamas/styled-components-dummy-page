export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
}

export interface PricingProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  background?: 'white' | 'gray' | 'gradient';
} 