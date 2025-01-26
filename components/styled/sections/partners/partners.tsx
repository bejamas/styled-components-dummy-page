'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { PartnersProps } from './partners.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
`;

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.space[16]};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

interface StyledContainerProps {
  $variant?: 'grid' | 'carousel';
}

const Container = styled.div<StyledContainerProps>`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${({ $variant, theme }) =>
    $variant === 'carousel' &&
    `
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      z-index: 1;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, ${theme.colors.background}, transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, ${theme.colors.background}, transparent);
    }
  `}
`;

interface StyledTrackProps {
  $variant?: 'grid' | 'carousel';
}

const Track = styled.div<StyledTrackProps>`
  ${({ $variant, theme }) =>
    $variant === 'grid'
      ? `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: ${theme.space[8]};
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: ${theme.space[4]};
    }
  `
      : `
    display: flex;
    width: fit-content;
    will-change: transform;
  `}
`;

const TrackInner = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => `${theme.space[4]} 0 ${theme.space[4]} ${theme.space[8]}`};
`;

const PartnerItem = styled.div<{ $variant?: 'grid' | 'carousel' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  gap: ${({ theme }) => theme.space[4]};

  ${({ $variant }) =>
    $variant === 'carousel' &&
    `
    flex-shrink: 0;
    width: 200px;
  `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.space[4]};
  }
`;

const PartnerLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
`;

const PartnerLogo = styled(Image)`
  max-width: 160px;
  height: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  filter: grayscale(1);

  ${PartnerItem}:hover & {
    opacity: 1;
    filter: none;
  }

  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

const PartnerInfo = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const PartnerName = styled(Text)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
`;

const PartnerDescription = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-top: ${({ theme }) => theme.space[1]};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Partners: React.FC<PartnersProps> = ({
  title,
  subtitle,
  partners,
  background = 'white',
  variant = 'grid',
  showNames = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'carousel' && trackRef.current) {
      const track = trackRef.current;
      let animationFrameId: number;

      const animate = () => {
        if (track) {
          const fullWidth = track.scrollWidth / 2;
          const currentScroll = Number(track.dataset.scroll || '0');

          track.style.transform = `translateX(${-currentScroll}px)`;
          const nextScroll = currentScroll + 0.5;

          track.dataset.scroll = nextScroll >= fullWidth ? '0' : nextScroll.toString();
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      track.dataset.scroll = '0';
      animate();

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [variant]);

  const renderPartnerItem = (partner: (typeof partners)[0], index: number, isDuplicate = false) => (
    <PartnerItem key={`${index}${isDuplicate ? '-duplicate' : ''}`} $variant={variant}>
      {partner.href ? (
        <PartnerLink href={partner.href}>
          <PartnerLogo src={partner.logo.src} alt={partner.logo.alt} width={160} height={80} />
          {showNames && (
            <PartnerInfo>
              <PartnerName>{partner.name}</PartnerName>
              {partner.description && <PartnerDescription variant="small">{partner.description}</PartnerDescription>}
            </PartnerInfo>
          )}
        </PartnerLink>
      ) : (
        <>
          <PartnerLogo src={partner.logo.src} alt={partner.logo.alt} width={160} height={80} />
          {showNames && (
            <PartnerInfo>
              <PartnerName>{partner.name}</PartnerName>
              {partner.description && <PartnerDescription variant="small">{partner.description}</PartnerDescription>}
            </PartnerInfo>
          )}
        </>
      )}
    </PartnerItem>
  );

  return (
    <Section background={background} padding="large">
      <PartnersContainer>
        <Header>
          <StyledHeading level="h2">{title}</StyledHeading>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Container $variant={variant} ref={scrollRef}>
          <Track $variant={variant} ref={trackRef}>
            <TrackInner>{partners.map((partner, index) => renderPartnerItem(partner, index))}</TrackInner>
            {variant === 'carousel' && (
              <TrackInner>{partners.map((partner, index) => renderPartnerItem(partner, index, true))}</TrackInner>
            )}
          </Track>
        </Container>
      </PartnersContainer>
    </Section>
  );
};
