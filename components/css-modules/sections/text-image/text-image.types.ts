export interface TextImageProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
  ctaText?: string;
  ctaHref?: string;
  background?: 'white' | 'gray' | 'dark' | 'transparent';
} 