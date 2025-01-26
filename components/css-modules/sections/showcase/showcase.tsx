import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './showcase.module.css';
import { ShowcaseGridProps, ShowcaseItem } from './showcase.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

const ShowcaseCard: React.FC<ShowcaseItem> = ({
  title,
  description,
  image,
  variant = 'default',
  size = 'md',
  badge,
  accentColor,
  href,
}) => {
  const content = (
    <div className={styles.showcase_card} data-variant={variant} data-size={size} data-accent-color={accentColor}>
      <div className={styles.showcase_media}>
        <div className={styles.showcase_image_wrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            className={styles.showcase_image}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        {badge && (
          <span className={styles.showcase_badge} data-badge-color={accentColor}>
            {badge}
          </span>
        )}
        <div className={styles.showcase_overlay} />
      </div>
      <div className={styles.showcase_content}>
        <Heading level="h3" className={styles.showcase_title}>
          {title}
        </Heading>
        <Text variant="body" className={styles.showcase_description}>
          {description}
        </Text>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={styles.showcase_link}>
        {content}
      </Link>
    );
  }

  return content;
};

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({
  title,
  subtitle,
  items,
  columns = 3,
  background = 'white',
}) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.showcase}>
        <div className={styles.showcase_header}>
          <Heading level="h2" className={styles.showcase_section_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.showcase_section_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.showcase_grid} data-columns={columns}>
          {items.map((item, index) => (
            <ShowcaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
