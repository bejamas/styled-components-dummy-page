export interface Partner {
  name: string;
  logo: {
    src: string;
    alt: string;
  };
  href?: string;
  description?: string; // Optional short description/tagline
}

export interface PartnersProps {
  title: string;
  subtitle?: string;
  partners: Partner[];
  background?: 'white' | 'gray';
  variant?: 'grid' | 'carousel';
  showNames?: boolean; // Control whether to show company names
} 