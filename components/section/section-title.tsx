import {
  VStack,
  Heading,
  Box,
  StackProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export interface SectionTitleProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center' | { base?: 'left' | 'center'; md?: 'left' | 'center' }
  variant?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, description, align = 'center', variant, ...rest } = props
  const styles = useMultiStyleConfig('SectionTitle', { variant })

  const alignItems =
    typeof align === 'string'
      ? align === 'left'
        ? 'flex-start'
        : 'center'
      : {
          base: align.base === 'left' ? 'flex-start' : 'center',
          md: align.md === 'left' ? 'flex-start' : 'center',
        }

  const textAlign =
    typeof align === 'string'
      ? align
      : {
          base: align.base || 'center',
          md: align.md || 'center',
        }

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={alignItems}
      spacing={4}
      {...rest}
    >
      <Heading sx={styles.title} as="h2" textAlign={textAlign}>
        {title}
      </Heading>
      {description && (
        <Box sx={styles.description} textAlign={textAlign}>
          {description}
        </Box>
      )}
    </VStack>
  )
}
