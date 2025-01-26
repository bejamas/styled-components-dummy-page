export interface PartnersProps {
  title: string;
  subtitle?: string;
  partners: Array<{
    name: string;
    description?: string;
    logo: {
      src: string;
      alt: string;
    };
    href?: string;
  }>;
  background?: 'white' | 'gray' | 'gradient';
  variant?: 'grid' | 'carousel';
  showNames?: boolean;
} 