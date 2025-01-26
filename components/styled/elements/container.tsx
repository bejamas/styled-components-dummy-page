'use client';

import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

interface StyledContainerProps {
  $fullWidth?: boolean;
  $maxWidth?: string;
  $padding?: string;
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isFullWidth?: boolean;
  maxWidth?: string;
  padding?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin: 0 auto;
  font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
    `}
  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `}

  ${({ $fullWidth }) =>
    !$fullWidth &&
    css`
      max-width: 1200px;
      padding: 0 ${({ theme }) => theme.section.paddingX};
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      > * {
        width: 100%;
      }

      > *:not([data-full-bleed='true']) > * {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.section.paddingX};
      }

      > [data-full-bleed='true'] {
        max-width: none;
      }
    `}
`;

export function Container({ isFullWidth = false, maxWidth, padding, children, style, ...props }: ContainerProps) {
  return (
    <StyledContainer $fullWidth={isFullWidth} $maxWidth={maxWidth} $padding={padding} style={style} {...props}>
      {children}
    </StyledContainer>
  );
}
