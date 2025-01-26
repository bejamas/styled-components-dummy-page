export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface PricingProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  background?: 'white' | 'gray';
} 