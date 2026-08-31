import { HStack, Icon, StackProps, Text } from '@chakra-ui/react'

interface SectionEyebrowProps extends Omit<StackProps, 'children'> {
  children: React.ReactNode
  icon?: React.ElementType
  leading?: React.ReactNode
  surface: 'light' | 'dark'
}

export function SectionEyebrow({
  children,
  icon,
  leading,
  surface,
  ...props
}: SectionEyebrowProps) {
  const isLightSurface = surface === 'light'

  return (
    <HStack
      display="inline-flex"
      w="fit-content"
      px="2"
      py="1.5"
      spacing="1.5"
      color={isLightSurface ? '#F4F4F0' : 'whiteAlpha.900'}
      bg={isLightSurface ? '#171719' : 'transparent'}
      border="1px solid"
      borderColor={isLightSurface ? 'transparent' : 'rgba(255, 255, 255, 0.36)'}
      borderRadius="6px"
      {...props}
    >
      {icon ? <Icon as={icon} boxSize="16px" flexShrink={0} /> : null}
      {leading ? (
        <Text as="span" fontSize="sm" fontWeight="800" lineHeight="1.2">
          {leading}
        </Text>
      ) : null}
      <Text fontSize="sm" fontWeight="800" lineHeight="1.2" letterSpacing="0">
        {children}
      </Text>
    </HStack>
  )
}
