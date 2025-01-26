'use client';

import React from 'react';
import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const buttonStyles = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  line-height: 1;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background: ${theme.colors.accent};
      color: ${theme.colors.foreground};

      &:hover {
        background: ${theme.colors.accentHover};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background: ${theme.colors.gray[100]};
      color: ${theme.colors.foreground};
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' &&
    css`
      background: transparent;
      color: ${theme.colors.foreground};
    `}

  ${({ $size }) =>
    $size === 'sm' &&
    css`
      padding: 8px 16px;
      font-size: 14px;
    `}

  ${({ $size }) =>
    $size === 'md' &&
    css`
      padding: 12px 20px;
      font-size: 16px;
    `}

  ${({ $size }) =>
    $size === 'lg' &&
    css`
      padding: 16px 28px;
      font-size: 18px;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
  ${buttonStyles}
`;

const LoaderSpinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  isLoading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const content = isLoading ? <LoaderSpinner aria-hidden="true" /> : children;

  if (href) {
    return (
      <StyledLink
        href={href}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        aria-disabled={disabled}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </StyledButton>
  );
}
