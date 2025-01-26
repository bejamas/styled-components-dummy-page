'use client';

import React, { useState } from 'react';
import styles from './faq.module.css';
import { Heading, Text } from '../../elements/typography/typography';
import { Section } from '../../elements/section/section';
import { FAQItem, FAQSectionProps } from './faq.types';

const FAQAccordionItem: React.FC<FAQItem & { isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className={styles.faq_item} data-open={isOpen}>
    <button className={styles.faq_trigger} onClick={onClick}>
      <Text weight="medium">{question}</Text>
      <span className={styles.faq_icon} />
    </button>
    <div className={styles.faq_content}>
      <Text variant="body">{answer}</Text>
    </div>
  </div>
);

export const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, items, background = 'white' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background={background} padding="large" data-full-bleed>
      <div className={styles.faq_container}>
        <div className={styles.faq_header}>
          <Heading level="h2" className={styles.faq_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="body" className={styles.faq_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.faq_list}>
          {items.map((item, index) => (
            <FAQAccordionItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
