'use client';

import styled, { keyframes } from 'styled-components';
import { Container } from '../../elements/container/container';
import { Button } from '../../elements/button/button';
import { Heading, Text } from '../../elements/typography/typography';

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section<{ $backgroundImage?: string }>`
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: ${({ theme }) => theme.section.paddingY} 0;
  background-image: ${({ $backgroundImage }) => ($backgroundImage ? `url(${$backgroundImage})` : 'none')};

  @media (max-width: 768px) {
    min-height: auto;
    padding: ${({ theme }) => theme.space[8]} 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.gradients.overlay};
`;

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 2;
  padding: ${({ theme }) => `${theme.section.paddingY} ${theme.section.paddingX}`};
`;

const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.space[4]};
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.space[6]};
  opacity: 0.9;
  max-width: 540px;
`;

const StyledButton = styled(Button)`
  min-width: 200px;
`;

export function Hero({ title, subtitle, ctaText, onCtaClick, backgroundImage, ...props }: HeroProps) {
  return (
    <HeroSection $backgroundImage={backgroundImage} {...props}>
      <Overlay />
      <HeroContainer>
        <Content>
          <StyledHeading level="h1">{title}</StyledHeading>
          <StyledText variant="body">{subtitle}</StyledText>
          <StyledButton variant="primary" size="lg" onClick={onCtaClick}>
            {ctaText}
          </StyledButton>
        </Content>
      </HeroContainer>
    </HeroSection>
  );
}
