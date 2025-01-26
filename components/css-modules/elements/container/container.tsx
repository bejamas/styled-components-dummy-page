import React from 'react';
import styles from './container.module.css';
import { ContainerProps } from './container.types';

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth,
  padding,
  isFullWidth = false,
  style,
  ...props
}) => (
  <div
    className={styles.container}
    data-full-width={isFullWidth}
    style={{
      ...(maxWidth && { maxWidth }),
      ...(padding && { padding }),
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
