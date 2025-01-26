'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ProcessProps } from './process.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

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

const StyledSubtitle = styled(Text)`
  margin-top: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[20]};
`;

interface StepProps {
  $isEven: boolean;
}

const Step = styled.div<StepProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[16]};
  align-items: center;
  direction: ${({ $isEven }) => ($isEven ? 'rtl' : 'ltr')};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
    direction: ltr;
  }
`;

const StepContent = styled.div<StepProps>`
  display: flex;
  gap: ${({ theme }) => theme.space[6]};
  direction: ltr;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StepNumber = styled.span`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.accentDark};
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StepText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const StepTitle = styled(Heading)`
  font-size: 1.875rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StepDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 1.125rem;
  line-height: 1.6;
`;

const MediaContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.15);
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${MediaContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const Process: React.FC<ProcessProps> = ({ title, subtitle, steps, background = 'white' }) => {
  return (
    <Section background={background} padding="large">
      <Container>
        <Header>
          <Heading level="h2">{title}</Heading>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Steps>
          {steps.map((step, index) => (
            <Step key={index} $isEven={index % 2 === 1}>
              <StepContent $isEven={index % 2 === 1}>
                <StepNumber>{step.number}</StepNumber>
                <StepText>
                  <StepTitle level="h3">{step.title}</StepTitle>
                  <StepDescription variant="body">{step.description}</StepDescription>
                </StepText>
              </StepContent>
              <MediaContainer>
                <StyledImage
                  src={step.image.src}
                  alt={step.image.alt}
                  width={400}
                  height={300}
                  priority={index === 0}
                />
              </MediaContainer>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  );
};
