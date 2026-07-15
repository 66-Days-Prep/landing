const Section = {
  baseStyle: {
    pt: { base: 14, md: 20 },
    pb: { base: 14, md: 20 },
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'primary.400',
    },
    alternate: ({ colorMode }: any) => ({
      bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
