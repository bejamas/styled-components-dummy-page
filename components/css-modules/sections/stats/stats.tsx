import React from 'react';
import styles from './stats.module.css';
import { StatsProps, Stat } from './stats.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

export const Stats: React.FC<StatsProps> = ({ title, subtitle, stats, background = 'white', columns = 4 }) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.stats}>
        {(title || subtitle) && (
          <div className={styles.stats_header}>
            {title && (
              <Heading level="h2" className={styles.stats_title}>
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text variant="large" className={styles.stats_subtitle}>
                {subtitle}
              </Text>
            )}
          </div>
        )}
        <div className={styles.stats_grid} data-columns={columns} data-background={background}>
          {stats.map((stat: Stat, index: number) => (
            <div key={index} className={styles.stat_item}>
              {stat.icon && (
                <div className={styles.stat_icon} data-background={background}>
                  {stat.icon}
                </div>
              )}
              <Text className={styles.stat_value} data-background={background}>
                {stat.value}
              </Text>
              <Text className={styles.stat_label} data-background={background}>
                {stat.label}
              </Text>
              {stat.description && (
                <Text variant="small" className={styles.stat_description}>
                  {stat.description}
                </Text>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
