import React from 'react';
import styles from './pricing.module.css';
import { PricingProps } from './pricing.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Button } from '../../elements/button/button';

export const Pricing: React.FC<PricingProps> = ({ title, subtitle, tiers, background = 'white' }) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.pricing}>
        <div className={styles.pricing_header}>
          <Heading level="h2" className={styles.pricing_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.pricing_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.pricing_grid}>
          {tiers.map((tier, index) => (
            <div key={index} className={styles.pricing_card} data-popular={tier.isPopular}>
              {tier.isPopular && <div className={styles.pricing_popular}>Most Popular</div>}
              <div className={styles.pricing_content}>
                <h3 className={styles.tier_name}>{tier.name}</h3>
                <div className={styles.tier_price}>
                  <span className={styles.price}>{tier.price}</span>
                  {tier.price !== 'Custom' && <span className={styles.period}>/month</span>}
                </div>
                <Text className={styles.tier_description}>{tier.description}</Text>
                <ul className={styles.tier_features}>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.feature_item}>
                      <svg className={styles.feature_icon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={tier.ctaHref}
                  variant={tier.isPopular ? 'primary' : 'secondary'}
                  className={styles.tier_cta}
                >
                  {tier.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
