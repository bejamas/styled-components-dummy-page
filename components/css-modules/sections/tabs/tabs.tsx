'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './tabs.module.css';
import { TabsProps } from './tabs.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

export const Tabs: React.FC<TabsProps> = ({
  title,
  subtitle,
  tabs,
  background = 'white',
  defaultTab,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <Section background={background} padding="large">
      <div className={styles.tabs_section}>
        {(title || subtitle) && (
          <div className={styles.tabs_header}>
            {title && (
              <Heading level="h2" className={styles.tabs_title}>
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text variant="large" className={styles.tabs_subtitle}>
                {subtitle}
              </Text>
            )}
          </div>
        )}
        
        <div className={styles.tabs_container}>
          <div 
            className={styles.tabs_list}
            role="tablist"
            aria-label="Product features"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={styles.tab_button}
                onClick={() => setActiveTab(tab.id)}
                data-active={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              className={styles.tab_panel}
              data-active={activeTab === tab.id}
              hidden={activeTab !== tab.id}
            >
              <div className={styles.panel_content}>
                <div className={styles.panel_text}>
                  <Heading level="h3" className={styles.panel_title}>
                    {tab.content.title}
                  </Heading>
                  <Text className={styles.panel_description}>
                    {tab.content.description}
                  </Text>
                  {tab.content.features && (
                    <ul className={styles.feature_list}>
                      {tab.content.features.map((feature, index) => (
                        <li key={index} className={styles.feature_item}>
                          <svg
                            className={styles.feature_icon}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
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
                  )}
                </div>
                {tab.content.image && (
                  <div className={styles.panel_media}>
                    <Image
                      src={tab.content.image.src}
                      alt={tab.content.image.alt}
                      width={500}
                      height={400}
                      className={styles.panel_image}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}; 