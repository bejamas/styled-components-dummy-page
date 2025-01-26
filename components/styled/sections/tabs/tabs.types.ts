export interface Tab {
    id: string;
    label: string;
    content: {
      title: string;
      description: string;
      image?: {
        src: string;
        alt: string;
      };
      features?: string[];
    };
  }
  
  export interface TabsProps {
    title?: string;
    subtitle?: string;
    tabs: Tab[];
    background?: 'white' | 'gray' | 'gradient';
    defaultTab?: string;
  } 