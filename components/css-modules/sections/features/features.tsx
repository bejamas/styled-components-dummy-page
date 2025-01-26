import React from 'react';
import styles from './features.module.css';
import { FeatureCardProps, FeaturesGridProps } from './features.types';
import { Heading, Text } from '../../elements/typography/typography';
import { Section } from '../../elements/section/section';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className={styles.feature_card}>
    <div className={styles.feature_icon}>
      <img src={icon} alt="" aria-hidden="true" />
    </div>
    <div className={styles.feature_content}>
      <h3 className={styles.feature_title}>{title}</h3>
      <p className={styles.feature_description}>{description}</p>
    </div>
  </div>
);

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ title, subtitle, features, ...props }) => {
  return (
    <Section background="gray" padding="large" dataFullBleed {...props}>
      <div className={styles.features}>
        <div className={styles.features_container}>
          <div className={styles.features_header}>
            <Heading level="h2" className={styles.features_title}>
              {title}
            </Heading>
            <Text variant="body" className={styles.features_subtitle}>
              {subtitle}
            </Text>
          </div>
          <div className={styles.features_grid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
