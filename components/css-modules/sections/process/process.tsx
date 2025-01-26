import React from 'react';
import Image from 'next/image';
import styles from './process.module.css';
import { ProcessProps } from './process.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

export const Process: React.FC<ProcessProps> = ({ title, subtitle, steps, background = 'white' }) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.process}>
        <div className={styles.process_header}>
          <Heading level="h2" className={styles.process_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.process_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.process_steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.process_step}>
              <div className={styles.process_step_content}>
                <span className={styles.process_step_number}>{step.number}</span>
                <div className={styles.process_step_text}>
                  <Heading level="h3" className={styles.process_step_title}>
                    {step.title}
                  </Heading>
                  <Text variant="body" className={styles.process_step_description}>
                    {step.description}
                  </Text>
                </div>
              </div>
              <div className={styles.process_step_media}>
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={400}
                  height={300}
                  className={styles.process_step_image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
