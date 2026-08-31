'use client'

import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import { HiArrowRight, HiOutlineBolt } from 'react-icons/hi2'

import { ButtonLink } from '#components/button-link'
import { Section, SectionEyebrow } from '#components/section'
import { INTERNAL_ROUTES } from '#constants'
import { rectangularCtaShadow } from '#theme/styles/rectangular-cta-styles'
import { sectionContentStyles } from '#theme/styles/section-styles'

const textPrimary = '#171719'
const sectionBackground =
  'radial-gradient(ellipse at 2% 4%, rgba(250, 199, 157, 0.46) 0%, rgba(252, 222, 190, 0.24) 24%, transparent 48%), radial-gradient(ellipse at 96% 3%, rgba(255, 231, 119, 0.34) 0%, rgba(255, 242, 178, 0.14) 20%, transparent 42%), radial-gradient(ellipse at 98% 102%, rgba(174, 211, 234, 0.42) 0%, rgba(208, 229, 240, 0.18) 22%, transparent 44%), radial-gradient(ellipse at 4% 104%, rgba(198, 231, 216, 0.32) 0%, rgba(222, 240, 230, 0.14) 22%, transparent 44%), linear-gradient(135deg, #F4F4F0 0%, #F8F7F1 48%, #F4F4F0 100%)'

export function FinalCtaSection() {
  const downloadHref = INTERNAL_ROUTES.downloadHero

  return (
    <Box sx={sectionContentStyles}>
      <Section
        id="get-started"
        innerWidth="100%"
        px={{ base: 0, sm: 2, md: 4 }}
        pb={{ base: 4, sm: 6, md: 8 }}
      >
        <Box
          position="relative"
          zIndex={1}
          overflow="hidden"
          bg={sectionBackground}
          color={textPrimary}
          borderRadius="10px"
          px={{ base: 4, sm: 6, md: 8, lg: 12 }}
          py={{ base: 10, sm: 12, md: 14, lg: 16 }}
          textAlign="center"
          border="1px solid rgba(255, 255, 255, 0.62)"
          boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 20px 52px rgba(0, 0, 0, 0.08)"
          _before={{
            content: '\"\"',
            position: 'absolute',
            inset: '-24px',
            bg: 'radial-gradient(ellipse at 26% 8%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.56) 26%, transparent 52%), radial-gradient(ellipse at 72% 76%, rgba(255, 255, 255, 0.82) 0%, transparent 47%), linear-gradient(112deg, transparent 14%, rgba(251, 204, 173, 0.36) 29%, rgba(255, 255, 255, 1) 45%, rgba(255, 244, 184, 0.54) 53%, rgba(178, 221, 213, 0.4) 62%, transparent 80%)',
            filter: 'blur(4px)',
            opacity: 1,
            pointerEvents: 'none',
          }}
          _after={{
            content: '\"\"',
            position: 'absolute',
            inset: 0,
            opacity: 0.27,
            mixBlendMode: 'multiply',
            backgroundImage: 'url("/static/images/pricing-grain.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '96px 96px',
            filter: 'contrast(210%) brightness(104%)',
            pointerEvents: 'none',
          }}
          sx={{
            '& > *': {
              position: 'relative',
              zIndex: 1,
            },
          }}
        >
          <Box maxW="860px" mx="auto">
            <SectionEyebrow
              mb={{ base: 4, md: 5 }}
              icon={HiOutlineBolt}
              surface="light"
              bg="transparent"
              color={textPrimary}
              borderColor="rgba(23, 23, 25, 0.28)"
            >
              Your next chapter starts here
            </SectionEyebrow>

            <Heading
              as="h2"
              color={textPrimary}
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              fontWeight="semibold"
              letterSpacing="-0.045em"
              lineHeight={{ base: '0.98', md: '0.94' }}
            >
              Your ambition deserves a daily plan.
            </Heading>

            <Text
              mt={{ base: 5, md: 6 }}
              maxW="680px"
              mx="auto"
              color="rgba(23, 23, 25, 0.70)"
              fontSize={{ base: 'lg', md: 'xl' }}
              lineHeight="1.55"
            >
              Start building the knowledge, habits, and confidence for your next
              banking or consulting interview. One focused day at a time.
            </Text>

            <ButtonLink
              href={downloadHref}
              variant="solid"
              mt={{ base: 7, md: 8 }}
              h={{ base: '52px', md: '50px' }}
              px={{ base: 6, md: 7 }}
              borderRadius="12px"
              boxShadow={rectangularCtaShadow.dark}
              bg={textPrimary}
              color="white"
              fontSize={{ base: '13px', md: '15px' }}
              fontWeight="semibold"
              gap="2.5"
              _hover={{ bg: '#2A2A2D', textDecoration: 'none' }}
              _active={{ bg: '#000000' }}
            >
              Get 66 Days Prep
              <Icon as={HiArrowRight} boxSize="17px" />
            </ButtonLink>
          </Box>
        </Box>
      </Section>
    </Box>
  )
}
