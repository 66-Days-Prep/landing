const SectionTitle = {
  parts: ['wrapper', 'title', 'description'],
  baseStyle: {
    wrapper: {
      spacing: 4,
      mb: '14',
      textAlign: 'center',
    },
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
      lineHeight: '0.96',
      letterSpacing: '-0.045em',
      fontWeight: 'semibold',
      color: 'app.text.primary',
    },
    description: {
      fontWeight: 'normal',
      fontSize: { base: 'lg', md: 'xl' },
      lineHeight: '1.6',
      color: 'app.text.muted',
      maxW: '720px',
    },
  },
  variants: {
    default: {},
    dark: {
      title: {
        color: 'gray.800',
      },
      description: {
        color: 'gray.700',
      },
    },
    light: (props: any) => ({
      title: {
        color: 'white',
      },
      description: {
        color: 'gray.200',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
    size: 'xl',
  },
  sizes: {
    lg: {
      title: {
        size: '2xl',
      },
      description: {
        fontSize: 'xl',
      },
    },
    xl: {
      wrapper: {
        mb: 14,
        spacing: 4,
      },
      title: {
        fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
      },
      description: {
        fontSize: { base: 'lg', md: 'xl' },
      },
    },
  },
}

export default SectionTitle
