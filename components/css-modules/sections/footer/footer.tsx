import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import { FooterProps } from './footer.types';
import { Logo } from '../../elements/logo/logo';
import { NewsletterSignup } from './footer-client';
import { Text } from '../../elements/typography/typography';

export const Footer: React.FC<FooterProps> = ({ columns, bottomLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_brand}>
            <Logo />
            <Text variant="body" className={styles.footer_tagline}>
              Building better experiences with modern components
            </Text>
            <NewsletterSignup />
          </div>
          <div className={styles.footer_columns}>
            {columns.map((column, index) => (
              <div key={index} className={styles.footer_column}>
                <Text weight="medium" className={styles.footer_column_title}>
                  {column.title}
                </Text>
                <ul className={styles.footer_links}>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className={styles.footer_link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <Text variant="small" className={styles.footer_copyright}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
          <ul className={styles.footer_bottom_links}>
            {bottomLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.footer_bottom_link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
