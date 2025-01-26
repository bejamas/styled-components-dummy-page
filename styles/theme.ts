import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string
      accentHover: string
      accentDark: string
      background: string
      foreground: string
      error: string
      success: string
      gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
    }
    gradients: {
      accent: string
      overlay: string
    }
    shadows: {
      sm: string
      md: string
      lg: string
    }
    space: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      12: string
      14: string
      16: string
      20: string
      24: string
    }
    radius: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      full: string
    }
    section: {
      paddingY: string
      paddingX: string
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    accent: '#befc65',
    accentHover: '#c8f981',
    accentDark: '#95c951',
    background: '#ffffff',
    foreground: '#000000',
    error: '#ef4444',
    success: '#10b981',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
  },
  gradients: {
    accent: 'linear-gradient(45deg, #befc65 0%, #9dfc65 100%)',
    overlay: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  space: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  section: {
    paddingY: '96px', // space.24
    paddingX: '24px', // space.6
  },
};