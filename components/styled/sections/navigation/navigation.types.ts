export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links: NavigationLink[];
  ctaText?: string;
  ctaHref?: string;
}
