'use client';

import styled, { css } from 'styled-components';
import React from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'body' | 'small' | 'large' | 'caption' | 'overline' | 'code';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  weight?: TextWeight;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  weight?: TextWeight;
}

const StyledHeading = styled.h1<{ $level: HeadingLevel; $weight?: TextWeight }>`
  margin: 0;
  line-height: 1.2;
  font-weight: ${({ $weight }) => {
    switch ($weight) {
      case 'normal':
        return 400;
      case 'medium':
        return 500;
      case 'semibold':
        return 600;
      case 'bold':
      default:
        return 700;
    }
  }};

  ${({ $level }) =>
    $level === 'h1' &&
    css`
      font-size: 3rem;
      line-height: 1.2;
      letter-spacing: -0.02em;
    `}

  ${({ $level }) =>
    $level === 'h2' &&
    css`
      font-size: 2.25rem;
      line-height: 1.3;
      letter-spacing: -0.02em;
    `}

  ${({ $level }) =>
    $level === 'h3' &&
    css`
      font-size: 1.5rem;
      line-height: 1.4;
      letter-spacing: -0.01em;
    `}

  ${({ $level }) =>
    $level === 'h4' &&
    css`
      font-size: 1.5rem;
    `}

  ${({ $level }) =>
    $level === 'h5' &&
    css`
      font-size: 1.25rem;
    `}

  ${({ $level }) =>
    $level === 'h6' &&
    css`
      font-size: 1rem;
    `}
`;

const StyledText = styled.p<{ $variant: TextVariant; $weight: TextWeight }>`
  margin: 0;

  font-weight: ${({ $weight }) => {
    switch ($weight) {
      case 'normal':
        return 400;
      case 'medium':
        return 500;
      case 'semibold':
        return 600;
      case 'bold':
        return 700;
    }
  }};

  ${({ $variant }) =>
    $variant === 'body' &&
    css`
      font-size: 1rem;
      line-height: 1.5;
    `}

  ${({ $variant }) =>
    $variant === 'small' &&
    css`
      font-size: 0.875rem;
      line-height: 1.5;
    `}

  ${({ $variant }) =>
    $variant === 'large' &&
    css`
      font-size: 1.125rem;
      line-height: 1.6;
    `}

  ${({ $variant }) =>
    $variant === 'caption' &&
    css`
      font-size: 0.875rem;
      color: #666;
    `}

  ${({ $variant }) =>
    $variant === 'overline' &&
    css`
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

  ${({ $variant }) =>
    $variant === 'code' &&
    css`
      font-family: monospace;
      background: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 4px;
    `}
`;

export function Heading({ level, weight = 'bold', children, className, ...props }: HeadingProps) {
  return (
    <StyledHeading as={level} $level={level} $weight={weight} className={className} {...props}>
      {children}
    </StyledHeading>
  );
}

export function Text({ variant = 'body', weight = 'normal', children, className, ...props }: TextProps) {
  return (
    <StyledText $variant={variant} $weight={weight} className={className} {...props}>
      {children}
    </StyledText>
  );
}
