'use client'

import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import { Section } from '#components/section'
import { sectionContentStyles } from '#theme/styles/section-styles'

const STEPS = [
  {
    number: '01',
    title: 'Learn',
    description:
      'Master the concepts, frameworks, and technical skills that banking and consulting interviews actually test through expert-curated lessons and focused resources.',
  },
  {
    number: '02',
    title: 'Practice',
    description:
      'Apply what you know with daily drills, realistic cases, technical questions, and personalized AI feedback that adapts as your skills improve.',
  },
  {
    number: '03',
    title: 'Succeed',
    description:
      'Track your consistency, close weak spots, and walk into interviews with the speed, structure, and confidence expected at top-tier firms.',
  },
] as const

export function FeaturesSection() {
  return (
    <Box sx={sectionContentStyles}>
      <Section id="features" innerWidth="container.xl">
        <Box position="relative" zIndex={1}>
          <Box maxW={{ base: '100%', lg: '860px' }} mb={{ base: 12, md: 16 }}>
            <Text
              mb="4"
              fontSize="sm"
              fontWeight="800"
              color="primary.300"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              The 66-day method
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              lineHeight="0.92"
              letterSpacing="-0.06em"
              fontWeight="semibold"
              color="app.text.primary"
            >
              Build the habits that win interviews.
            </Heading>
            <Text
              mt="6"
              maxW="680px"
              fontSize={{ base: 'lg', md: 'xl' }}
              color="app.text.muted"
              lineHeight="1.6"
            >
              Turn preparation into a repeatable daily system that moves from
              knowledge, to application, to confident interview performance.
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="app.border.subtle"
          >
            {STEPS.map((step, index) => (
              <Box
                key={step.number}
                py={{ base: 8, md: 10 }}
                px={{ base: 0, lg: index === 0 ? 0 : 10 }}
                pr={{ lg: index === 0 ? 10 : undefined }}
                borderTop={{ base: index === 0 ? '0' : '1px solid', lg: '0' }}
                borderLeft={{ base: '0', lg: index === 0 ? '0' : '1px solid' }}
                borderColor="app.border.subtle"
              >
                <Text
                  mb="8"
                  fontSize="sm"
                  fontWeight="700"
                  color="app.text.faint"
                  letterSpacing="0.02em"
                >
                  {step.number}
                </Text>
                <Heading
                  as="h3"
                  mb="5"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  lineHeight="1"
                  letterSpacing="-0.045em"
                  fontWeight="semibold"
                  color="app.text.primary"
                >
                  {step.title}
                </Heading>
                <Text
                  color="app.text.muted"
                  fontSize={{ base: 'md', md: 'lg' }}
                  lineHeight="1.7"
                >
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Section>
    </Box>
  )
}
