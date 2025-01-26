'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { SectionProps } from './section.types';

const StyledSection = styled.section<{
  $padding?: 'none' | 'small' | 'medium' | 'large';
  $background?: 'white' | 'gray' | 'dark' | 'transparent' | 'gradient';
  $dataFullBleed?: boolean;
}>`
  width: 100%;
  padding: ${({ theme }) => `${theme.section.paddingY} ${theme.section.paddingX}`};

  ${({ $background, theme }) =>
    $background === 'white' &&
    css`
      background: ${theme.colors.background};
    `}

  ${({ $background, theme }) =>
    $background === 'gray' &&
    css`
      background: ${theme.colors.gray[100]};
    `}

  ${({ $background, theme }) =>
    $background === 'dark' &&
    css`
      background: ${theme.colors.gray[900]};
      color: ${theme.colors.background};
    `}

  ${({ $background }) =>
    $background === 'transparent' &&
    css`
      background: transparent;
    `}

  ${({ $background, theme }) =>
    $background === 'gradient' &&
    css`
      background: ${theme.gradients.accent};
      color: ${theme.colors.foreground};
    `}

  ${({ $padding }) =>
    $padding === 'none' &&
    css`
      padding: 0;
    `}

  ${({ $padding, theme }) =>
    $padding === 'small' &&
    css`
      padding: ${theme.space[8]} 0;
    `}

  ${({ $padding, theme }) =>
    $padding === 'medium' &&
    css`
      padding: ${theme.space[16]} 0;
    `}

  ${({ $padding, theme }) =>
    $padding === 'large' &&
    css`
      padding: ${theme.space[24]} 0;
    `}

  @media (max-width: 768px) {
    ${({ $padding, theme }) =>
      $padding === 'large' &&
      css`
        padding: ${theme.space[8]} ${theme.section.paddingX};
      `}
  }
`;

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  padding = 'large',
  background = 'white',
  dataFullBleed,
  ...props
}) => (
  <StyledSection
    className={className}
    $padding={padding}
    $background={background}
    $dataFullBleed={dataFullBleed}
    data-full-bleed={dataFullBleed}
    {...props}
  >
    {children}
  </StyledSection>
);
