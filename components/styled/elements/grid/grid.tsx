'use client';

import React from 'react';
import styled from 'styled-components';
import { GridProps } from './grid.types';

const StyledGrid = styled.div<{ $minItemWidth?: string; $gap?: string; $columns?: number }>`
  display: grid;
  grid-template-columns: ${({ $columns, $minItemWidth }) =>
    $columns
      ? `repeat(${$columns}, 1fr)`
      : $minItemWidth
      ? `repeat(auto-fill, minmax(${$minItemWidth}, 1fr))`
      : 'repeat(auto-fill, minmax(300px, 1fr))'};
  gap: ${({ $gap }) => $gap || '24px'};
  margin-top: 20px;
`;

export const Grid: React.FC<GridProps> = ({ children, minItemWidth, gap, columns, style, ...props }) => (
  <StyledGrid $minItemWidth={minItemWidth} $gap={gap} $columns={columns} style={style} {...props}>
    {children}
  </StyledGrid>
);
