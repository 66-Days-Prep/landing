'use client'

import { Box, HStack, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import {
  HiBolt,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2'

import { useEffect, useRef } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'

import { Section } from '#components/section'
import { sectionContentStyles } from '#theme/styles/section-styles'

const BENEFITS = [
  {
    metric: '66',
    label: 'Days of progress',
    icon: HiBolt,
    iconColor: '#F37F5B',
    surface:
      'radial-gradient(ellipse 112% 82% at -16% -20%, rgba(132, 113, 107, 0.86) 0%, rgba(81, 63, 58, 0.74) 32%, transparent 59%), radial-gradient(ellipse 112% 96% at 118% 118%, rgba(226, 105, 67, 0.84) 0%, rgba(145, 55, 34, 0.76) 36%, transparent 68%), radial-gradient(ellipse 100% 76% at 50% 47%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.7) 44%, transparent 76%), linear-gradient(145deg, #65534e 0%, #0b0807 34%, #030202 64%, #7f3421 100%)',
    sheen:
      'radial-gradient(ellipse at 24% 3%, rgba(210, 188, 181, 0.38) 0%, rgba(146, 111, 100, 0.16) 28%, transparent 55%), radial-gradient(ellipse at 76% 24%, rgba(132, 91, 78, 0.24) 0%, transparent 58%), radial-gradient(ellipse at 86% 92%, rgba(235, 113, 76, 0.32) 0%, transparent 50%), linear-gradient(118deg, rgba(255, 255, 255, 0.1) 0%, transparent 46%, rgba(243, 127, 91, 0.14) 100%)',
    description:
      'A structured path from the fundamentals to interview-ready practice.',
  },
  {
    metric: 'AI',
    label: 'Personalized feedback',
    icon: HiOutlineChatBubbleLeftRight,
    iconColor: '#30AAD6',
    surface:
      'radial-gradient(ellipse 112% 82% at -16% -20%, rgba(112, 115, 122, 0.86) 0%, rgba(72, 75, 81, 0.74) 32%, transparent 59%), radial-gradient(ellipse 112% 96% at 118% 118%, rgba(18, 153, 201, 0.84) 0%, rgba(8, 109, 151, 0.76) 36%, transparent 68%), radial-gradient(ellipse 100% 76% at 50% 47%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.7) 44%, transparent 76%), linear-gradient(145deg, #595c62 0%, #090a0c 34%, #010204 64%, #0a7298 100%)',
    sheen:
      'radial-gradient(ellipse at 24% 3%, rgba(178, 181, 188, 0.38) 0%, rgba(117, 121, 129, 0.16) 28%, transparent 55%), radial-gradient(ellipse at 76% 24%, rgba(91, 105, 115, 0.24) 0%, transparent 58%), radial-gradient(ellipse at 86% 92%, rgba(30, 157, 199, 0.32) 0%, transparent 50%), linear-gradient(118deg, rgba(255, 255, 255, 0.1) 0%, transparent 46%, rgba(48, 170, 214, 0.14) 100%)',
    description:
      'Practice your answers and find out exactly where you can improve.',
  },
  {
    metric: 'Daily',
    label: 'Practice that adds up',
    icon: HiOutlineCalendarDays,
    iconColor: '#43CFA1',
    surface:
      'radial-gradient(ellipse 112% 82% at -16% -20%, rgba(103, 126, 118, 0.86) 0%, rgba(57, 79, 71, 0.74) 32%, transparent 59%), radial-gradient(ellipse 112% 96% at 118% 118%, rgba(35, 166, 124, 0.84) 0%, rgba(16, 106, 78, 0.76) 36%, transparent 68%), radial-gradient(ellipse 100% 76% at 50% 47%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.7) 44%, transparent 76%), linear-gradient(145deg, #50635d 0%, #070b09 34%, #010403 64%, #0d6b50 100%)',
    sheen:
      'radial-gradient(ellipse at 24% 3%, rgba(181, 207, 198, 0.38) 0%, rgba(105, 144, 131, 0.16) 28%, transparent 55%), radial-gradient(ellipse at 76% 24%, rgba(79, 130, 112, 0.24) 0%, transparent 58%), radial-gradient(ellipse at 86% 92%, rgba(54, 199, 151, 0.32) 0%, transparent 50%), linear-gradient(118deg, rgba(255, 255, 255, 0.1) 0%, transparent 46%, rgba(67, 207, 161, 0.14) 100%)',
    description:
      'Build consistency with focused drills, streaks, and visible progress.',
  },
] as const

type Benefit = (typeof BENEFITS)[number]

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const canTiltRef = useRef(false)

  useEffect(() => {
    const media = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    const updateTiltSupport = () => {
      canTiltRef.current = media.matches
    }

    updateTiltSupport()
    media.addEventListener('change', updateTiltSupport)

    return () => {
      media.removeEventListener('change', updateTiltSupport)
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!canTiltRef.current) return
    rectRef.current = event.currentTarget.getBoundingClientRect()
  }

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!canTiltRef.current || !rectRef.current) return

    pointerRef.current = { x: event.clientX, y: event.clientY }
    if (frameRef.current !== null) return

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      const card = cardRef.current
      const rect = rectRef.current
      if (!card || !rect) return

      const horizontal = (pointerRef.current.x - rect.left) / rect.width - 0.5
      const vertical = (pointerRef.current.y - rect.top) / rect.height - 0.5
      const rotateX = vertical * -7
      const rotateY = horizontal * 8

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    })
  }

  const handleMouseLeave = () => {
    rectRef.current = null
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(900px) rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <Box
      ref={cardRef}
      position="relative"
      display="flex"
      flexDirection="column"
      minH="170px"
      h="full"
      overflow="hidden"
      p="5"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.08)"
      borderRadius="22px"
      backgroundImage={benefit.surface}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.09), 0 14px 38px rgba(0, 0, 0, 0.14)"
      transform="perspective(900px) rotateX(0deg) rotateY(0deg)"
      transformOrigin="center"
      willChange="transform"
      style={{ transformStyle: 'preserve-3d' }}
      transition="transform 140ms ease-out, border-color 0.15s ease"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      _before={{
        content: '""',
        position: 'absolute',
        inset: '-14px',
        backgroundImage: benefit.sheen,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(14px)',
        opacity: 0.88,
        pointerEvents: 'none',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        inset: 0,
        opacity: 0.58,
        mixBlendMode: 'overlay',
        backgroundImage: 'url("/static/images/pricing-grain.svg")',
        backgroundRepeat: 'repeat',
        backgroundSize: '96px 96px',
        filter: 'contrast(165%) brightness(110%)',
        pointerEvents: 'none',
      }}
      _hover={{
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow:
          'inset 0 1px 0 rgba(255, 255, 255, 0.09), 0 16px 40px rgba(0, 0, 0, 0.16)',
      }}
      sx={{
        '& > [data-benefit-content]': {
          position: 'relative',
          zIndex: 1,
        },
      }}
    >
      <Box
        aria-hidden="true"
        position="absolute"
        inset="0"
        zIndex="2"
        borderRadius="inherit"
        padding="1px"
        background="linear-gradient(145deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.065) 42%, rgba(255, 255, 255, 0.025) 72%, rgba(255, 255, 255, 0.08) 100%)"
        sx={{
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        pointerEvents="none"
      />
      <HStack
        data-benefit-content
        align="flex-start"
        justify="space-between"
        spacing="4"
      >
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: '4xl', lg: '5xl' }}
            lineHeight="0.88"
            letterSpacing="-0.055em"
            fontWeight="semibold"
            color="app.text.primary"
          >
            {benefit.metric}
          </Heading>
          <Text
            mt="1.5"
            color="app.text.primary"
            fontSize={{ base: 'lg', lg: 'xl' }}
            lineHeight="1"
            letterSpacing="-0.035em"
            fontWeight="semibold"
          >
            {benefit.label}
          </Text>
        </Box>
        <Icon
          as={benefit.icon}
          boxSize={{ base: '26px', lg: '30px' }}
          color={benefit.iconColor}
          flexShrink={0}
        />
      </HStack>

      <Text
        data-benefit-content
        mt="auto"
        color="app.text.muted"
        fontSize="sm"
        lineHeight="1.4"
      >
        {benefit.description}
      </Text>
    </Box>
  )
}

export function BenefitsStatsSection() {
  return (
    <Box sx={sectionContentStyles}>
      <Section
        id="prep-system"
        aria-label="Your daily preparation system"
        innerWidth="1120px"
        pt={{ base: 8, lg: 12 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          columnGap={{ base: 4, lg: 5 }}
          rowGap={{ base: 4, lg: 8 }}
          gridAutoRows="1fr"
          alignItems="stretch"
        >
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.label} benefit={benefit} />
          ))}
        </SimpleGrid>
      </Section>
    </Box>
  )
}
