export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  background?: 'white' | 'gray' | 'gradient';
} 