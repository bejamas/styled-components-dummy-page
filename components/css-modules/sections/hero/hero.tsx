import React from 'react';
import styles from './hero.module.css';
import { HeroProps } from './hero.types';
import { Button } from '../../elements/button/button';
import { Heading, Text } from '../../elements/typography/typography';

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, onCtaClick, backgroundImage, ...props }) => {
  return (
    <section
      className={styles.hero}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      {...props}
    >
      <div className={styles.hero_overlay} />
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <Heading level="h1" className={styles.hero_title}>
            {title}
          </Heading>
          <Text variant="body" className={styles.hero_subtitle}>
            {subtitle}
          </Text>
          <Button variant="primary" size="lg" onClick={onCtaClick} className={styles.hero_cta}>
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};
