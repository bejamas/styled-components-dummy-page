export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  category: string;
  href: string;
}

export interface BlogGridProps {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
  background?: 'white' | 'gray';
  columns?: 2 | 3;
} 