export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface ProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  background?: 'white' | 'gray' | 'gradient';
} 