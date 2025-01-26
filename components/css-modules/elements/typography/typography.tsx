import React from 'react';
import styles from './typography.module.css';
import { HeadingProps, TextProps } from './typography.types';

export const Heading: React.FC<HeadingProps> = ({ level, weight = 'bold', children, className, ...props }) => {
  const Tag = level;
  return (
    <Tag
      className={[styles.heading, className].filter(Boolean).join(' ')}
      data-level={level}
      data-weight={weight}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const Text: React.FC<TextProps> = ({ variant = 'body', weight = 'normal', children, className, ...props }) => {
  return (
    <p
      className={[styles.text, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-weight={weight}
      {...props}
    >
      {children}
    </p>
  );
};
