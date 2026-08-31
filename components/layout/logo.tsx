import { Box, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import { ASSETS } from '#constants'

export interface LogoProps {
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export function Logo({ href = '/', onClick }: LogoProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      onClick={onClick}
      aria-label="66 Days Prep home"
      display="inline-flex"
      alignItems="center"
      gap="2.5"
      flexShrink={0}
      borderRadius="8px"
      _hover={{ textDecoration: 'none' }}
    >
      <Image
        src={ASSETS.images.logo}
        alt=""
        w="34px"
        h="34px"
        borderRadius="9px"
      />
      <Text
        as="span"
        fontSize={{ base: '17px', md: '20px' }}
        fontWeight="700"
        color="white"
        letterSpacing="-0.5px"
      >
        66 Days Prep
      </Text>
    </Link>
  )
}
