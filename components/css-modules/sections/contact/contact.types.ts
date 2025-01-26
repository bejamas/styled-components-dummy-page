export interface ContactFormProps {
  title: string;
  subtitle?: string;
  background?: 'white' | 'gray';
  onSubmit: (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    newsletter: boolean;
  }) => void;
} 