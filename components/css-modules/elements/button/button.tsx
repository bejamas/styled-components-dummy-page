'use client';

import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  isLoading,
  className,
  disabled,
  ...props
}) => {
  const classes = `${styles.button} ${className || ''}`;

  const content = isLoading ? <span className={styles.loader} aria-hidden="true" /> : children;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        data-variant={variant}
        data-size={size}
        data-full-width={fullWidth}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
