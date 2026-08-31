'use client'

import { Box, HStack, Icon, IconButton, Link, Text } from '@chakra-ui/react'
import { useInView, useReducedMotion } from 'framer-motion'
import NextLink from 'next/link'
import { FiArrowRight, FiPause, FiPlay } from 'react-icons/fi'
import { PiSealCheckFill } from 'react-icons/pi'

import { useEffect, useRef, useState } from 'react'

import { LottieAnimation } from '#components/animations/lottie-animation'
import { AUDIENCE_COUNT, BACK_TO_SCHOOL_OFFER } from '#data/marketing'

export function HeroAnnouncement() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.25 })
  const reducedMotion = useReducedMotion()
  const [offerActive, setOfferActive] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [documentVisible, setDocumentVisible] = useState(true)
  const showOffer = reducedMotion || offerActive
  const pausePlayback = paused || hovered || focused

  useEffect(() => {
    const syncVisibility = () =>
      setDocumentVisible(document.visibilityState === 'visible')
    syncVisibility()
    document.addEventListener('visibilitychange', syncVisibility)
    return () =>
      document.removeEventListener('visibilitychange', syncVisibility)
  }, [])

  useEffect(() => {
    if (reducedMotion || !inView || !documentVisible || pausePlayback) return
    const timer = window.setInterval(
      () => setOfferActive((active) => !active),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [reducedMotion, inView, documentVisible, pausePlayback])

  return (
    <HStack ref={ref} justify="center" spacing="2" minH="40px">
      <Link
        as={NextLink}
        id="hero-announcement"
        href={BACK_TO_SCHOOL_OFFER.href}
        display="inline-flex"
        alignItems="center"
        minW="0"
        minH="40px"
        px="2.5"
        py="1.5"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.055)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        fontSize={
          showOffer ? { base: 'sm', md: 'md' } : { base: '11px', md: '12px' }
        }
        fontWeight={showOffer ? 'semibold' : 'medium'}
        lineHeight="1.15"
        fontFamily={showOffer ? 'body' : 'mono'}
        textTransform={showOffer ? 'none' : 'uppercase'}
        letterSpacing={showOffer ? '-0.01em' : '-0.5px'}
        color="app.text.muted"
        aria-label={
          showOffer
            ? `${BACK_TO_SCHOOL_OFFER.title}: limited time only, ${BACK_TO_SCHOOL_OFFER.discount}`
            : `Join over ${AUDIENCE_COUNT} job seekers`
        }
        transition="background-color 280ms ease, border-color 280ms ease"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        _hover={{
          color: 'white',
          borderColor: 'whiteAlpha.300',
          bg: 'whiteAlpha.100',
          textDecoration: 'none',
        }}
      >
        <HStack
          key={showOffer ? 'offer' : 'audience'}
          spacing={{ base: '2', md: '2.5' }}
          minH="20px"
          whiteSpace="nowrap"
          animation={
            reducedMotion ? 'none' : 'hero-message-enter 280ms ease both'
          }
          sx={{
            '@keyframes hero-message-enter': {
              from: { opacity: 0, transform: 'translateY(4px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {showOffer ? (
            <>
              <Box position="relative" w="18px" h="20px" flexShrink={0}>
                <LottieAnimation
                  {...BACK_TO_SCHOOL_OFFER.animation}
                  paused={pausePlayback}
                  position="absolute"
                  top="50%"
                  left="50%"
                  w="30px"
                  h="30px"
                  transform="translate(-50%, -50%)"
                />
              </Box>
              <Text as="span" color="whiteAlpha.900" fontWeight="semibold">
                {BACK_TO_SCHOOL_OFFER.title}
                <Box
                  as="span"
                  display={{ base: 'none', md: 'inline' }}
                  color="app.text.muted"
                  fontWeight="medium"
                >
                  {' '}
                  · {BACK_TO_SCHOOL_OFFER.detail}
                </Box>
              </Text>
              <Text as="span" color="primary.400" fontWeight="bold">
                {BACK_TO_SCHOOL_OFFER.discount}
              </Text>
            </>
          ) : (
            <>
              <Icon
                as={PiSealCheckFill}
                color="cyan.400"
                boxSize="18px"
                flexShrink={0}
              />
              <Text as="span">
                Join over {AUDIENCE_COUNT}
                <Box as="span" display={{ base: 'none', md: 'inline' }}>
                  {' '}
                  job seekers
                </Box>
                <Box as="span" display={{ base: 'inline', md: 'none' }}>
                  {' '}
                  users
                </Box>
              </Text>
            </>
          )}
          <Icon as={FiArrowRight} boxSize="13px" flexShrink={0} />
        </HStack>
      </Link>
      {!reducedMotion && (
        <IconButton
          aria-label={
            paused ? 'Play hero announcement' : 'Pause hero announcement'
          }
          aria-controls="hero-announcement"
          icon={paused ? <FiPlay /> : <FiPause />}
          onClick={() => setPaused((value) => !value)}
          variant="ghost"
          size="xs"
          boxSize="28px"
          minW="28px"
          borderRadius="full"
          color="app.text.muted"
          flexShrink={0}
        />
      )}
    </HStack>
  )
}
