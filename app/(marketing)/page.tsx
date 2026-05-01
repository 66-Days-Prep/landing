'use client'

import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Background from '#components/background/background'
import { InteractiveGridOverlay } from '#components/background/interactive-grid-overlay'
import {
  AppStoreBanner,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HighlightsSection,
  PricingSection,
  TestimonialsSection,
} from '#components/sections'

const Home: NextPage = () => {
  return (
    <Box overflowX="hidden">
      <Background />
      <InteractiveGridOverlay />

      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      <AppStoreBanner />

      <Box pb={{ base: '16', md: '0' }} />
    </Box>
  )
}

export default Home
