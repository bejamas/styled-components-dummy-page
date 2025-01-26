'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { TextImageProps } from './text-image.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Button } from '../../elements/button/button';

const TextImageGrid = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[16]};
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
  direction: ${({ $reverse }) => ($reverse ? 'rtl' : 'ltr')};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
    direction: ltr;
  }
`;

const Content = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  max-width: 480px;
  direction: ltr;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const StyledHeading = styled(Heading)``;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const MediaContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  aspect-ratio: 3/2;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.space[4]};

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const TextImage: React.FC<TextImageProps> = ({
  title,
  description,
  image,
  reverse,
  ctaText,
  ctaHref,
  background = 'white',
}) => {
  return (
    <Section padding="large" background={background}>
      <TextImageGrid $reverse={reverse}>
        <Content>
          <StyledHeading level="h2">{title}</StyledHeading>
          <StyledText variant="large">{description}</StyledText>
          {ctaText && (
            <StyledButton href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </StyledButton>
          )}
        </Content>
        <MediaContainer>
          <StyledImage src={image.src} alt={image.alt} width={600} height={400} priority />
        </MediaContainer>
      </TextImageGrid>
    </Section>
  );
};
