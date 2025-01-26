import React from 'react';
import Link from 'next/link';
import styles from './logo.module.css';
import { LogoProps } from './logo.types';

export const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md', className, ...props }) => (
  <Link
    href="/"
    className={[styles.logo, className].filter(Boolean).join(' ')}
    data-variant={variant}
    data-size={size}
    {...props}
  >
    <span className={styles.logo_text}>Brand</span>
  </Link>
);
