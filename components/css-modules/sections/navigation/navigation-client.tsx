'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import { Button } from '../../elements/button/button';
import { NavigationProps } from './navigation';

export const NavigationClient: React.FC<NavigationProps> = ({ links, ctaText, ctaHref }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.nav_mobile}>
      <button
        className={styles.nav_toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <span className={styles.nav_toggle_icon} data-open={isOpen} />
      </button>

      <div className={styles.nav_mobile_menu} data-open={isOpen}>
        <div className={styles.nav_mobile_links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.nav_mobile_link} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          {ctaText && (
            <Button href={ctaHref} variant="primary" size="sm" className={styles.nav_mobile_cta}>
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
