'use client';

import React from 'react';
import styled from 'styled-components';
import { StatsProps } from './stats.types';
import { Section } from '../../layout/section';
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

const StyledTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Grid = styled.div<{ $columns: number; $background?: string }>`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  position: relative;
  isolation: isolate;

  ${({ $background, theme }) =>
    $background === 'gradient' &&
    `
    &::before {
      content: '';
      position: absolute;
      inset: -3rem;
      background: linear-gradient(
        135deg,
        ${theme.colors.accent} 0%,
        ${theme.colors.accentHover} 100%
      );
      opacity: 0.1;
      z-index: -1;
      border-radius: ${theme.radius.xl};
    }
  `}

  @media (max-width: 1024px) {
    grid-template-columns: ${({ $columns }) => ($columns === 4 ? 'repeat(2, 1fr)' : `repeat(${$columns}, 1fr)`)};
  }

  @media (max-width: 768px) {
    grid-template-columns: ${({ $columns }) => ($columns === 3 ? 'repeat(2, 1fr)' : `repeat(${$columns}, 1fr)`)};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const IconWrapper = styled.div<{ $background?: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ $background }) => ($background === 'gradient' ? 'black' : '#F9FAFB')};
  color: ${({ $background }) => ($background === 'gradient' ? 'white' : 'black')};
`;

const Value = styled(Text)<{ $background?: string }>`
  font-size: 3rem !important;
  line-height: 1;
  color: ${({ theme }) => theme.colors.foreground};
  font-feature-settings: 'tnum';

  ${({ $background }) =>
    $background === 'gradient' &&
    `
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const Label = styled(Text)`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 24ch;
`;

export const Stats: React.FC<StatsProps> = ({ title, subtitle, stats, background = 'white', columns = 4 }) => {
  return (
    <Section background={'white'}>
      <Container>
        {(title || subtitle) && (
          <Header>
            {title && <StyledTitle level="h2">{title}</StyledTitle>}
            {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
          </Header>
        )}
        <Grid $columns={columns} $background={background}>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              {stat.icon && <IconWrapper $background={background}>{stat.icon}</IconWrapper>}
              <Value $background={background}>{stat.value}</Value>
              <Label>{stat.label}</Label>
              {stat.description && <Description variant="small">{stat.description}</Description>}
            </StatCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
