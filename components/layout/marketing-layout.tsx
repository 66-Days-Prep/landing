'use client'

import { Box, SkipNavContent, SkipNavLink } from '@chakra-ui/react'

import { ReactNode } from 'react'

import { Footer } from './footer'
import { Header } from './header'

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <SkipNavLink zIndex="skipLink">Skip to content</SkipNavLink>
      <Header />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
