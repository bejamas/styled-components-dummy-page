import React from 'react';
import styles from './section.module.css';
import { SectionProps } from './section.types';

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  padding = 'large',
  background = 'white',
  dataFullBleed,
  ...props
}) => (
  <section
    className={[styles.section, className].filter(Boolean).join(' ')}
    data-padding={padding}
    data-background={background}
    data-full-bleed={dataFullBleed}
    {...props}
  >
    {children}
  </section>
);
