import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'
import components from './components'
import { fontSizes } from './foundations/typography'

const colors = {
  brand: {
    ink: '#1C241F',
    cream: '#F5EEDD',
    champagne: '#C4B088',
    taupe: '#8A7557',
    dark: '#0E0E10',
    darkRaised: '#1C1C1F',
  },
  primary: {
    50: '#FEFDFC',
    100: '#F5EEDD',
    200: '#E8DFC9',
    300: '#D8C79D',
    400: '#C4B088',
    500: '#B89D74',
    600: '#9C845F',
    700: '#8A7557',
    800: '#6B5744',
    900: '#2A2119',
  },
  secondary: {
    50: '#FFF9F0',
    100: '#F3E4CF',
    200: '#E6C896',
    300: '#D4AF7A',
    400: '#C5B291',
    500: '#8B7355',
    600: '#6A4E3A',
    700: '#4A392B',
    800: '#2A2119',
    900: '#18130F',
  },
  app: {
    bg: '#0E0E10',
    surface: {
      header: 'rgba(24, 19, 15, 0.88)',
      panel: '#15130F',
      card: 'rgba(245, 238, 221, 0.055)',
      cardHover: 'rgba(245, 238, 221, 0.085)',
      subtle: 'rgba(245, 238, 221, 0.03)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(245, 238, 221, 0.86)',
      muted: 'rgba(245, 238, 221, 0.68)',
      faint: 'rgba(245, 238, 221, 0.48)',
    },
    border: {
      subtle: 'rgba(196, 176, 136, 0.14)',
      strong: 'rgba(196, 176, 136, 0.24)',
    },
  },
}

const customComponents = {
  ...components,
  Button: {
    variants: {
      primary: {
        bg: 'primary.100',
        color: 'brand.ink',
        border: '1px solid',
        borderColor: 'primary.700',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 3px 0 #C5B291',
        _hover: {
          bg: 'primary.200',
          color: 'brand.ink',
          transform: 'translateY(-1px)',
        },
        _active: {
          bg: 'primary.300',
          color: 'brand.ink',
          transform: 'translateY(1px)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 1px 0 #C5B291',
        },
      },
    },
  },
}

export const theme = extendTheme(
  {
    colors,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          overflowX: 'hidden',
          _dark: {
            color: 'white',
            bg: '#0E0E10',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components: customComponents, // Use the extended components
  },
  baseTheme,
)
