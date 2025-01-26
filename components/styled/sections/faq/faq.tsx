'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading, Text } from '../../elements/typography/typography';
import { Section } from '../../elements/section/section';
import { FAQItem, FAQSectionProps } from './faq.types';

const Container = styled.div`
  max-width: 800px !important;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const StyledTitle = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

interface AccordionItemProps {
  $isOpen: boolean;
}

const Item = styled.div<AccordionItemProps>`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space[6]};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
`;

const Icon = styled.span<AccordionItemProps>`
  width: 20px;
  height: 20px;
  position: relative;
  transition: transform 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.foreground};
    border-radius: 2px;
    transition: transform 0.3s ease;
  }

  &::before {
    width: 2px;
    height: 20px;
    left: 50%;
    transform: translateX(-50%) ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'none')};
  }

  &::after {
    width: 20px;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Content = styled.div<AccordionItemProps>`
  padding: 0 ${({ theme }) => theme.space[6]};
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  padding-bottom: ${({ $isOpen, theme }) => ($isOpen ? theme.space[6] : '0')};
`;

const FAQAccordionItem: React.FC<FAQItem & { isOpen: boolean; onClick: () => void }> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <Item $isOpen={isOpen}>
    <Trigger onClick={onClick}>
      <Text weight="medium">{question}</Text>
      <Icon $isOpen={isOpen} />
    </Trigger>
    <Content $isOpen={isOpen}>
      <Text variant="body">{answer}</Text>
    </Content>
  </Item>
);

export const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, items, background = 'white' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background={background} padding="large">
      <Container>
        <Header>
          <StyledTitle level="h2">{title}</StyledTitle>
          {subtitle && <StyledSubtitle variant="body">{subtitle}</StyledSubtitle>}
        </Header>
        <List>
          {items.map((item, index) => (
            <FAQAccordionItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
};
