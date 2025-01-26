import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import { Logo } from '../../elements/logo/logo';
import { NavigationClient } from './navigation-client';
import { Button } from '../../elements/button/button';

interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links: NavigationLink[];
  ctaText?: string;
  ctaHref?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ links, ctaText, ctaHref }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_logo}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.nav_desktop}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.nav_link}>
              {link.label}
            </Link>
          ))}
        </div>

        {ctaText && (
          <div className={styles.nav_cta}>
            <Button href={ctaHref} variant="primary" size="sm">
              {ctaText}
            </Button>
          </div>
        )}

        {/* Mobile Navigation */}
        <NavigationClient links={links} ctaText={ctaText} ctaHref={ctaHref} />
      </nav>
    </header>
  );
};
