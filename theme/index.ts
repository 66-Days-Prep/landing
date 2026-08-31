import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

const colors = {
  primary: {
    50: '#fffbe5',
    100: '#fff4b8',
    200: '#ffed80',
    300: '#ffe833',
    400: '#FFE500', // Main yellow
    500: '#e6ce00',
    600: '#b8a500',
    700: '#8a7c00',
    800: '#5c5200',
    900: '#2e2900',
  },
  app: {
    bg: '#0E0E10',
    surface: {
      header: 'rgba(18, 19, 22, 0.92)',
      panel: '#111215',
      panelHover: 'rgba(255, 255, 255, 0.10)',
      card: 'rgba(255, 255, 255, 0.05)',
      cardHover: 'rgba(255, 255, 255, 0.08)',
      subtle: 'rgba(255, 255, 255, 0.03)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.86)',
      muted: 'rgba(255, 255, 255, 0.70)',
      faint: 'rgba(255, 255, 255, 0.48)',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.10)',
      strong: 'rgba(255, 255, 255, 0.14)',
    },
    overlay: {
      nav: 'rgba(0, 0, 0, 0.45)',
    },
  },
}

export const theme = extendTheme(baseTheme, {
  colors,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        bg: 'app.bg',
        color: 'app.text.primary',
        colorScheme: 'dark',
        scrollBehavior: 'smooth',
      },
      body: {
        color: 'app.text.primary',
        bg: 'app.bg',
        fontSize: 'lg',
        colorScheme: 'dark',
      },
      '::selection': { bg: 'primary.400', color: 'black' },
      ':focus-visible': { outline: '2px solid #FFE500', outlineOffset: '4px' },
      '@media (prefers-reduced-motion: reduce)': {
        html: { scrollBehavior: 'auto' },
        '*, *::before, *::after': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
        },
      },
    },
  },
  fonts: {
    heading: 'Inter Variable, Inter, sans-serif',
    body: 'Inter Variable, Inter, sans-serif',
  },
  shadows: { outline: '0 0 0 3px rgba(255, 229, 0, 0.6)' },
  fontSizes,
  components,
})
