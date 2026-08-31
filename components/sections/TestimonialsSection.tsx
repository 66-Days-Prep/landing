'use client'

import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useInView, useReducedMotion } from 'framer-motion'

import { useEffect, useRef, useState } from 'react'

import { SectionTitle } from '#components/section'
import testimonials from '#data/testimonials'

const rows = [
  testimonials.items.filter((_, i) => i % 2 === 0),
  testimonials.items.filter((_, i) => i % 2 === 1),
]

function ReviewRow({
  reviews,
  reverse,
}: {
  reviews: typeof testimonials.items
  reverse: boolean
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const visible = useInView(viewportRef, { margin: '160px' })
  const reducedMotion = useReducedMotion()
  const [geometry, setGeometry] = useState({ distance: 0, copies: 2 })

  useEffect(() => {
    const viewport = viewportRef.current
    const group = groupRef.current
    if (!viewport || !group || reducedMotion) return

    const measure = () => {
      const distance = group.getBoundingClientRect().width
      if (!distance) return
      // Cover the viewport plus one full group throughout the animation loop.
      const copies = Math.max(2, Math.ceil(viewport.clientWidth / distance) + 1)
      setGeometry((previous) =>
        previous.distance === distance && previous.copies === copies
          ? previous
          : { distance, copies },
      )
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(group)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <Box
      ref={viewportRef}
      overflow="hidden"
      py="2"
      px={reducedMotion ? { base: 4, md: 8 } : 0}
      sx={{
        maskImage: reducedMotion
          ? 'none'
          : 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
        '@keyframes reviews-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(var(--review-shift))' },
        },
      }}
    >
      <Flex
        className="testimonial-track"
        width={reducedMotion ? '100%' : 'max-content'}
        animation={
          reducedMotion || !geometry.distance
            ? 'none'
            : `reviews-scroll ${geometry.distance / 50}s linear infinite`
        }
        sx={{
          '--review-shift': `${-geometry.distance}px`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: visible ? 'running' : 'paused',
          '&:hover': { animationPlayState: 'paused' },
          '&:focus-within': { animationPlayState: 'paused' },
        }}
      >
        {Array.from(
          { length: reducedMotion ? 1 : geometry.copies },
          (_, copy) => (
            <Flex
              key={copy}
              ref={copy === 0 ? groupRef : undefined}
              aria-hidden={copy > 0 ? true : undefined}
              gap="4"
              pr={reducedMotion ? 0 : 4}
              flexShrink={0}
              width={reducedMotion ? '100%' : undefined}
              flexWrap={reducedMotion ? 'wrap' : 'nowrap'}
            >
              {reviews.map((review, i) => (
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
          ),
        )}
      </Flex>
    </Box>
  )
}

export function TestimonialsSection() {
  return (
    <Box
      as="section"
      id="testimonials"
      py="16"
      scrollMarginTop={{ base: '96px', md: '112px' }}
    >
      <Container maxW="1200px" px="8">
        <SectionTitle
          title="Built into real prep routines."
          description={testimonials.description}
          mb="8"
        />
      </Container>
      {rows.map((row, index) => (
        <ReviewRow key={index} reviews={row} reverse={index === 1} />
      ))}
    </Box>
  )
}
