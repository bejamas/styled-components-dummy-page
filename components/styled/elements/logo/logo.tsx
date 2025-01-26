'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { LogoProps } from './logo.types';

const StyledLink = styled(Link)<{ $variant?: 'default' | 'light'; $size?: 'sm' | 'md' | 'lg' }>`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.space[5]};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1;
`;

export const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md', className, ...props }) => (
  <StyledLink href="/" className={className} $variant={variant} $size={size} {...props}>
    <LogoText>Brand</LogoText>
  </StyledLink>
);
