import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Navigation } from '../components/css-modules/sections/navigation/navigation';
import { Footer } from '../components/css-modules/sections/footer/footer';

export const metadata: Metadata = {
  title: 'CSS Modules Marketing',
  description: 'Performance testing with CSS Modules',
};

const navigationLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation links={navigationLinks} ctaText="Get Started" ctaHref="/signup" />
        <main>{children}</main>
        <Footer columns={footerColumns} bottomLinks={bottomLinks} />
      </body>
    </html>
  );
}
