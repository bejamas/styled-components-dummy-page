import React from 'react';
import Image from 'next/image';
import styles from './text-image.module.css';
import { TextImageProps } from './text-image.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Button } from '../../elements/button/button';

export const TextImage: React.FC<TextImageProps> = ({
  title,
  description,
  image,
  reverse,
  ctaText,
  ctaHref,
  background = 'white',
}) => {
  return (
    <Section padding="large" background={background}>
      <div className={styles.text_image} data-reverse={reverse}>
        <div className={styles.text_image_content}>
          <Heading level="h2" className={styles.text_image_title}>
            {title}
          </Heading>
          <Text variant="large" className={styles.text_image_description}>
            {description}
          </Text>
          {ctaText && (
            <Button href={ctaHref} variant="primary" size="lg" className={styles.text_image_cta}>
              {ctaText}
            </Button>
          )}
        </div>
        <div className={styles.text_image_media}>
          <Image
            src={image.src}
            alt={image.alt}
            className={styles.text_image_image}
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </Section>
  );
};
