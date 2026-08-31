'use client'

import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useInView, useReducedMotion } from 'framer-motion'
import { FiPause, FiPlay } from 'react-icons/fi'

import { useRef, useState } from 'react'

import { Section, SectionTitle } from '#components/section'
import testimonials from '#data/testimonials'

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { margin: '160px' })
  const reducedMotion = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const rows = [
    testimonials.items.filter((_, i) => i % 2 === 0),
    testimonials.items.filter((_, i) => i % 2 === 1),
  ]
  return (
    <Box ref={ref}>
      <Section id="testimonials" innerWidth="1200px">
        <SectionTitle
          title="Built into real prep routines."
          description={testimonials.description}
          mb="8"
        />
        <Box
          overflow="hidden"
          py="2"
          sx={{
            maskImage: reducedMotion
              ? 'none'
              : 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
            '@keyframes reviews-left': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-50%)' },
            },
            '@keyframes reviews-right': {
              from: { transform: 'translateX(-50%)' },
              to: { transform: 'translateX(0)' },
            },
          }}
        >
          {rows.map((row, index) => (
            <Flex
              key={index}
              mb={index === 0 ? 4 : 0}
              width={reducedMotion ? '100%' : 'max-content'}
              animation={
                reducedMotion
                  ? 'none'
                  : `reviews-${index === 0 ? 'left' : 'right'} ${index ? 60 : 56}s linear infinite`
              }
              sx={{
                animationPlayState: visible && !paused ? 'running' : 'paused',
                '&:hover': { animationPlayState: 'paused' },
                '&:focus-within': { animationPlayState: 'paused' },
              }}
            >
              {(reducedMotion ? [0] : [0, 1]).map((copy) => (
                <Flex
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  gap="4"
                  pr={reducedMotion ? 0 : 4}
                  flexShrink={0}
                  width={reducedMotion ? '100%' : undefined}
                  flexWrap={reducedMotion ? 'wrap' : 'nowrap'}
                >
                  {row.map((review, i) => (
                    <Box
                      as="figure"
                      key={`${review.name}-${i}`}
                      m="0"
                      p="5"
                      w={
                        reducedMotion
                          ? { base: '100%', md: 'calc((100% - 32px) / 3)' }
                          : { base: '290px', md: '360px' }
                      }
                      flexShrink={0}
                      bg="radial-gradient(circle at 82% -18%, rgba(255,229,0,0.052), transparent 50%), linear-gradient(145deg,#141416,#08080A 58%,#0F0F11)"
                      border="1px solid rgba(255,255,255,0.08)"
                      borderRadius="14px"
                      boxShadow="inset 0 1px 0 rgba(255,255,255,0.09)"
                    >
                      <Box as="figcaption" mb="3">
                        <Text fontSize="sm" fontWeight="600">
                          {review.name}
                        </Text>
                        <Text fontSize="xs" color="app.text.muted" mt="1">
                          {review.description}
                        </Text>
                      </Box>
                      <Box
                        as="blockquote"
                        m="0"
                        fontSize="sm"
                        lineHeight="1.65"
                        color="app.text.secondary"
                      >
                        {review.children}
                      </Box>
                    </Box>
                  ))}
                </Flex>
              ))}
            </Flex>
          ))}
        </Box>
        {!reducedMotion && (
          <HStack justify="center" mt="5">
            <Button
              variant="ghost"
              size="sm"
              color="app.text.muted"
              leftIcon={paused ? <FiPlay /> : <FiPause />}
              onClick={() => setPaused(!paused)}
            >
              {paused ? 'Play reviews' : 'Pause reviews'}
            </Button>
          </HStack>
        )}
      </Section>
    </Box>
  )
}
