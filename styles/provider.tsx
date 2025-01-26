'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import { theme } from './theme';
import { GlobalStyle } from './globals';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
