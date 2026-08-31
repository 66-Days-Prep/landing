'use client'

import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import { useInView, useReducedMotion } from 'framer-motion'

import { useRef } from 'react'

const firms = [
  { name: 'Goldman Sachs', file: 'goldman' },
  { name: 'McKinsey', file: 'mckinsey' },
  { name: 'BCG', file: 'bcg' },
  { name: 'Bain', file: 'bain' },
  { name: 'J.P. Morgan', file: 'jpmorgan' },
  { name: 'Morgan Stanley', file: 'morganstanley' },
  { name: 'HSBC', file: 'hsbc' },
]

export function CompanyLogosCarouselSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { margin: '100px' })
  const reducedMotion = useReducedMotion()
  return (
    <Container ref={ref} maxW="1200px" py={{ base: 8, md: 10 }}>
      <Text
        textAlign="center"
        fontSize={{ base: 'lg', md: '2xl' }}
        fontWeight="600"
        mb="6"
      >
        Big ambitions. Focused preparation.
      </Text>
      <Box
        overflow="hidden"
        position="relative"
        sx={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <Flex
          width={reducedMotion ? '100%' : 'max-content'}
          sx={{
            '@keyframes firm-scroll': { to: { transform: 'translateX(-50%)' } },
            animation: reducedMotion
              ? 'none'
              : 'firm-scroll 48s linear infinite',
            animationPlayState: visible ? 'running' : 'paused',
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {(reducedMotion ? [0] : [0, 1]).map((copy) => (
            <Flex
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              align="center"
              justify="center"
              flexWrap={reducedMotion ? 'wrap' : 'nowrap'}
              flexShrink={0}
              gap={{ base: 6, md: 8 }}
              pr={reducedMotion ? 0 : 8}
            >
              {firms.map((firm) => (
                <Box
                  key={firm.file}
                  w={{ base: '124px', md: '140px' }}
                  h="56px"
                  display="grid"
                  placeItems="center"
                >
                  <Image
                    src={`/static/company-logos-carousel/logo_${firm.file}.svg`}
                    alt={copy === 1 ? '' : firm.name}
                    w="116px"
                    h="35px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </Box>
              ))}
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex justify="center" align="center" gap="3" mt="4">
        <Text fontSize="xs" color="app.text.faint" textAlign="center">
          Prepare for roles at leading firms. No affiliation or endorsement
          implied.
        </Text>
      </Flex>
    </Container>
  )
}
