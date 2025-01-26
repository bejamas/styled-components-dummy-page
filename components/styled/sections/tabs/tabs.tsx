'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Tab, TabsProps } from './tabs.types';
import { Section } from '../../layout/section';
import { Heading, Text } from '../../elements/typography/typography';
import { CheckIcon } from '../../icons/check';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
`;

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.space[16]};
`;

const StyledTitle = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`;

const TabList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: ${({ theme }) => theme.space[8]};
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TabButtonProps {
  $isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[6]}`};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.foreground : theme.colors.gray[600])};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.accentDark : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

interface TabPanelProps {
  $isActive: boolean;
}

const TabPanel = styled.div<TabPanelProps>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: translateY(${({ $isActive }) => ($isActive ? '0' : '10px')});
  transition: all 0.3s ease;
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

const PanelContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[16]};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
  }
`;

const PanelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

const PanelTitle = styled(Heading)`
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const PanelDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const FeatureIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.accentDark};
  flex-shrink: 0;
`;

const MediaContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Tabs: React.FC<TabsProps> = ({ title, subtitle, tabs, background = 'white', defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <Section background={background}>
      <Container>
        {(title || subtitle) && (
          <Header>
            {title && <StyledTitle level="h2">{title}</StyledTitle>}
            {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
          </Header>
        )}

        <TabsContainer>
          <TabList role="tablist" aria-label="Product features">
            {tabs.map((tab: Tab) => (
              <TabButton
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                $isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabList>

          {tabs.map((tab: Tab) => (
            <TabPanel
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              $isActive={activeTab === tab.id}
            >
              <PanelContent>
                <PanelText>
                  <PanelTitle level="h3">{tab.content.title}</PanelTitle>
                  <PanelDescription>{tab.content.description}</PanelDescription>
                  {tab.content.features && (
                    <FeatureList>
                      {tab.content.features.map((feature: string, index: number) => (
                        <FeatureItem key={index}>
                          <FeatureIcon viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </FeatureIcon>
                          {feature}
                        </FeatureItem>
                      ))}
                    </FeatureList>
                  )}
                </PanelText>
                {tab.content.image && (
                  <MediaContainer>
                    <StyledImage src={tab.content.image.src} alt={tab.content.image.alt} width={500} height={400} />
                  </MediaContainer>
                )}
              </PanelContent>
            </TabPanel>
          ))}
        </TabsContainer>
      </Container>
    </Section>
  );
};
