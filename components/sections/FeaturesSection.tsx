'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import { FiBook, FiTarget, FiTrendingUp } from 'react-icons/fi'

import { Features } from '#components/features'
import { sectionContentStyles } from '#theme/styles/section-styles'

const STEP_FEATURES = [
  {
    title: (
      <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>
        Learn
      </Text>
    ),
    icon: FiBook,
    description: (
      <>
        <Br />
        Master fundamental concepts, frameworks, and technical skills through
        expert-curated content and video lessons.
      </>
    ),
    variant: 'inline' as const,
  },
  {
    title: (
      <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>
        Practice
      </Text>
    ),
    icon: FiTarget,
    description: (
      <>
        <Br />
        Apply your knowledge with real case studies, mock interviews, and
        personalized feedback from industry professionals.
      </>
    ),
    variant: 'inline' as const,
  },
  {
    title: (
      <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold" mb={3}>
        Succeed
      </Text>
    ),
    icon: FiTrendingUp,
    description: (
      <>
        <Br />
        Land your dream job with confidence. Track your progress and get ready
        for interviews at top-tier firms.
      </>
    ),
    variant: 'inline' as const,
  },
]

export function FeaturesSection() {
  return (
    <Box sx={sectionContentStyles}>
      <Features
        id="features"
        title={
          <Heading
            lineHeight="short"
            textAlign="center"
            as="p"
            sx={{
              fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
            }}
          >
            Your 66-Day Journey
            <Br />
          </Heading>
        }
        description={
          <Box textAlign="center">
            Build elite career habits in 66 days
            <Br />
          </Box>
        }
        align="center"
        columns={[1, 2, 3]}
        iconSize={4}
        spacing={4}
        sx={{
          '.chakra-simple-grid': {
            rowGap: '1rem',
          },
          '.feature-item, .saas-feature, & > div, & svg, & .chakra-icon, & [role="img"]': {
            position: 'relative',
            zIndex: 1,
          },
        }}
        features={STEP_FEATURES}
      />
    </Box>
  )
}
