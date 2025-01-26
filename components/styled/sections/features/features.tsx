'use client';

import React from 'react';
import styled from 'styled-components';
import { FeatureCardProps, FeaturesGridProps } from './features.types';
import { Heading, Text } from '../../elements/typography/typography';
import { Section } from '../../elements/section/section';

const Features = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.space[3]};
    margin-bottom: ${({ theme }) => theme.space[8]};
  }
`;

const StyledTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.foreground};
`;

const StyledSubtitle = styled(Text)`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: ${({ theme }) => theme.radius.lg};

  img {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card>
    <IconWrapper>
      <img src={icon} alt="" aria-hidden="true" />
    </IconWrapper>
    <Content>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Content>
  </Card>
);

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ title, subtitle, features, background = 'gray' }) => {
  return (
    <Section background={background} padding="large">
      <Features>
        <Container>
          <Header>
            <StyledTitle level="h2">{title}</StyledTitle>
            <StyledSubtitle variant="body">{subtitle}</StyledSubtitle>
          </Header>
          <Grid>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </Grid>
        </Container>
      </Features>
    </Section>
  );
};
