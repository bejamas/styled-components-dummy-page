export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
  rating?: number;
}

export interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  background?: 'white' | 'gray';
  variant?: 'grid' | 'carousel' | 'masonry';
} 