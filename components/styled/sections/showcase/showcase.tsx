'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ShowcaseGridProps, ShowcaseItem } from './showcase.types';
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

interface GridProps {
  $columns: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
  grid-template-columns: ${({ $columns }) => `repeat(${$columns}, 1fr)`};

  @media (max-width: 1024px) {
    grid-template-columns: ${({ $columns }) => ($columns === 4 ? 'repeat(3, 1fr)' : `repeat(${$columns}, 1fr)`)};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  $variant?: ShowcaseItem['variant'];
  $size?: ShowcaseItem['size'];
}

const getCardHeight = (size: ShowcaseItem['size'] = 'md') => {
  switch (size) {
    case 'sm':
      return '320px';
    case 'lg':
      return '480px';
    default:
      return '400px';
  }
};

const Card = styled.div<CardProps>`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'gradient':
        return '';
      case 'outlined':
        return `border: 1px solid ${theme.colors.gray[200]};`;
      case 'minimal':
        return '';
      default:
        return `box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);`;
    }
  }}
`;

const MediaContainer = styled.div<CardProps>`
  position: relative;
  height: ${({ $size }) => getCardHeight($size)};
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

interface OverlayProps {
  $variant?: ShowcaseItem['variant'];
}

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  inset: 0;
  background: ${({ $variant }) =>
    $variant === 'gradient' ? 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))' : 'rgba(0, 0, 0, 0.3)'};
  transition: opacity 0.3s ease;
`;

interface BadgeProps {
  $accentColor?: string;
}

const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  right: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  background: ${({ $accentColor, theme }) => $accentColor || theme.colors.accent};
  color: ${({ $accentColor }) => ($accentColor ? 'white' : 'black')};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.full};
  z-index: 1;
`;

const Content = styled.div<CardProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme, $variant }) => ($variant === 'minimal' ? theme.space[4] : theme.space[6])};
  color: white;
  z-index: 1;
`;

const CardTitle = styled(Heading)`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const CardDescription = styled(Text)`
  opacity: 0.9;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover ${Card} {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  }

  &:hover ${StyledImage} {
    transform: scale(1.05);
  }
`;

const ShowcaseCard: React.FC<ShowcaseItem> = ({
  title,
  description,
  image,
  variant = 'default',
  size = 'md',
  badge,
  accentColor,
  href,
}) => {
  const content = (
    <Card $variant={variant} $size={size}>
      <MediaContainer $size={size}>
        <ImageWrapper>
          <StyledImage
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </ImageWrapper>
        {badge && <Badge $accentColor={accentColor}>{badge}</Badge>}
        <Overlay $variant={variant} />
      </MediaContainer>
      <Content $variant={variant}>
        <CardTitle level="h3">{title}</CardTitle>
        <CardDescription variant="body">{description}</CardDescription>
      </Content>
    </Card>
  );

  if (href) {
    return <CardLink href={href}>{content}</CardLink>;
  }

  return content;
};

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({
  title,
  subtitle,
  items,
  columns = 3,
  background = 'white',
}) => {
  return (
    <Section background={background} padding="large">
      <Container>
        <Header>
          <Heading level="h2">{title}</Heading>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Grid $columns={columns}>
          {items.map((item, index) => (
            <ShowcaseCard key={index} {...item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
