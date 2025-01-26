'use client';

import React from 'react';
import styled from 'styled-components';
import { PricingProps } from './pricing.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Button } from '../../elements/button/button';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  $isPopular?: boolean;
}

const Card = styled.div<CardProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme, $isPopular }) => ($isPopular ? theme.colors.accent : theme.colors.gray[200])};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;

  ${({ $isPopular }) =>
    $isPopular &&
    `
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);

    @media (max-width: 640px) {
      transform: none;
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.accent};
  color: black;
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radius.full};
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  height: 100%;
`;

const TierName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[2]};
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const CtaButton = styled(Button)`
  margin-top: auto;
`;

export const Pricing: React.FC<PricingProps> = ({ title, subtitle, tiers, background = 'white' }) => {
  return (
    <Section background={background} padding="large">
      <Container>
        <Header>
          <StyledTitle level="h2">{title}</StyledTitle>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Grid>
          {tiers.map((tier, index) => (
            <Card key={index} $isPopular={tier.isPopular}>
              {tier.isPopular && <PopularBadge>Most Popular</PopularBadge>}
              <CardContent>
                <TierName>{tier.name}</TierName>
                <PriceContainer>
                  <Price>{tier.price}</Price>
                  {tier.price !== 'Custom' && <Period>/month</Period>}
                </PriceContainer>
                <Text>{tier.description}</Text>
                <FeaturesList>
                  {tier.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
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
                </FeaturesList>
                <CtaButton href={tier.ctaHref} variant={tier.isPopular ? 'primary' : 'secondary'}>
                  {tier.ctaText}
                </CtaButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
