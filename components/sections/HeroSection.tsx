'use client'

import {
  Box,
  Container,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiTarget,
} from 'react-icons/fi'

import { ButtonLink } from '#components/button-link/button-link'
import { Features } from '#components/features'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'
import { ASSETS, INTERNAL_ROUTES } from '#constants'
import { heroPulseAnimation, sectionContentStyles } from '#theme/styles/section-styles'

const socialProofAvatars = [
  {
    src: '/static/social-proof/job-seeker-1.jpg',
    alt: '66 Days Prep user profile',
  },
  {
    src: '/static/social-proof/job-seeker-2.jpg',
    alt: '66 Days Prep user profile',
  },
  {
    src: '/static/social-proof/job-seeker-3.jpg',
    alt: '66 Days Prep user profile',
  },
  {
    src: '/static/social-proof/job-seeker-4.jpg',
    alt: '66 Days Prep user profile',
  },
]

export function HeroSection() {
  const handleDownloadClick = () => {
    window.location.href = INTERNAL_ROUTES.downloadHero
  }

  return (
    <Box overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 32, lg: 40 }} pb="0">
        <Box display="flex" justifyContent="center" mb={{ base: 5, md: 6 }}>
          <Box
            display="inline-flex"
            alignItems="center"
            gap="3"
            px="4"
            py="2"
            borderRadius="full"
            bg="rgba(245, 238, 221, 0.10)"
            border="1px solid"
            borderColor="rgba(196, 176, 136, 0.22)"
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="medium"
            lineHeight="1"
            fontFamily="mono"
            textTransform="uppercase"
            letterSpacing="-0.7px"
            color="whiteAlpha.800"
            position="relative"
            zIndex={1}
            textAlign="center"
          >
            <Icon as={FiCheckCircle} boxSize="13px" color="primary.300" />
            <Text as="span" display={{ base: 'none', md: 'inline' }}>
              Join over 30,000+ users to secure your career
            </Text>
            <Text as="span" display={{ base: 'inline', md: 'none' }}>
              Join over 30,000+ users
            </Text>
            <Icon as={FiArrowRight} boxSize="13px" color="whiteAlpha.700" />
          </Box>
        </Box>

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          spacing={{ base: 2, md: 4, lg: 0 }}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px={{ base: '4', md: '12', xl: '16' }}
            py={{ base: 8, md: 10, lg: 20 }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: 0, lg: 0 }}
            width={{ base: '100%', lg: '62%' }}
            title={
              <FallInPlace>
                <Box
                  fontSize={{ base: '50px', sm: '49px', md: '56px', lg: '66px' }}
                  fontWeight="bold"
                  lineHeight="1.1"
                  position="relative"
                  zIndex={1}
                  color="white"
                  textAlign={{ base: 'center', md: 'left' }}
                  width={{ base: 'calc(100vw - 32px)', md: 'auto' }}
                  maxW="100%"
                  mx={{ base: 'auto', md: 0 }}
                >
                  <Box
                    as="span"
                    display="inline-flex"
                    alignItems="center"
                    gap="6"
                    position="relative"
                    pl={{ base: '4', md: '0' }}
                  >
                    <Box as="span">Your AI</Box>
                    <Box
                      position="relative"
                      display="inline-block"
                      w={4}
                      h={4}
                      borderRadius="full"
                      bg="primary.400"
                      zIndex={0}
                      animation="heroPulseRing 1.9s ease-in-out infinite"
                      sx={heroPulseAnimation}
                    />
                  </Box>
                  <Br />
                  Career
                  <Box as="span" display="inline">
                    {' '}Tracker
                  </Box>
                </Box>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  position="relative"
                  zIndex={1}
                  textAlign={{ base: 'center', md: 'left' }}
                  maxW="720px"
                  width={{ base: 'calc(100vw - 32px)', md: 'auto' }}
                  color="whiteAlpha.760"
                  fontWeight="medium"
                  px={{ base: 2, md: 0 }}
                  mx={{ base: 'auto', md: 0 }}
                >
                  Master <Em color="primary.400">case studies</Em>, ace{' '}
                  <Em color="primary.400">technical interviews</Em>, and build
                  the skills for top-tier banking and consulting careers in{' '}
                  <Em color="primary.400">66 days</Em>.
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack
                pt="8"
                pb="12"
                spacing="8"
                position="relative"
                zIndex={1}
                justifyContent={{ base: 'center', md: 'flex-start' }}
                width="100%"
              >
                <Image
                  src={ASSETS.images.openAiLogo}
                  width={140}
                  height={22}
                  alt="OpenAI Logo"
                />
                <Image
                  src={ASSETS.images.whisperLogo}
                  width={156}
                  height={22}
                  alt="Whisper Logo"
                />
              </HStack>

              <VStack
                spacing={5}
                alignItems={{ base: 'center', md: 'flex-start' }}
                position="relative"
                zIndex={1}
                width="100%"
              >
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  alignItems={{ base: 'stretch', sm: 'flex-start' }}
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                  width={{ base: '100%', sm: 'auto' }}
                >
                  <ButtonLink
                    colorScheme="primary"
                    color="black"
                    href={INTERNAL_ROUTES.downloadHero}
                    onClick={handleDownloadClick}
                    borderRadius="full"
                    px="1"
                    minW="176px"
                    h="50px"
                    position="relative"
                    textAlign="left"
                    width={{ base: '100%', sm: 'auto' }}
                  >
                    <Box
                      position="absolute"
                      left="4px"
                      top="50%"
                      transform="translateY(-50%)"
                      w="42px"
                      h="42px"
                      borderRadius="full"
                      bg="black"
                      color="white"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FiArrowRight} boxSize="18px" />
                    </Box>
                    <Box
                      position="absolute"
                      left={{ base: '0', sm: '50px' }}
                      right={{ base: '0', sm: '8px' }}
                      top="50%"
                      transform="translateY(-50%)"
                      textAlign="center"
                      lineHeight="1"
                    >
                      <Text as="span" fontWeight="bold" fontSize="xl">
                        Download
                      </Text>
                    </Box>
                  </ButtonLink>
                  <ButtonLink
                    href="#features"
                    variant="outline"
                    borderRadius="full"
                    h="50px"
                    minW="176px"
                    px="7"
                    fontSize="xl"
                    width={{ base: '100%', sm: 'auto' }}
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: 'common',
                          transitionDuration: 'normal',
                          '.chakra-button:hover &': {
                            transform: 'translate(5px)',
                          },
                        }}
                      />
                    }
                  >
                    Learn More
                  </ButtonLink>
                </Stack>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={{ base: 3, sm: 4 }}
                  alignItems="center"
                  color="white"
                  fontSize={{ base: 'sm', md: 'md' }}
                  lineHeight="1"
                  py="2"
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={{ base: 2, sm: 3 }}
                    alignItems="center"
                  >
                    <HStack spacing="0">
                      {socialProofAvatars.map((avatar, index) => (
                        <Box
                          key={avatar.src}
                          position="relative"
                          ml={index === 0 ? 0 : { base: '-1', md: '-1.5' }}
                          w={{ base: '29px', md: '33px' }}
                          h={{ base: '29px', md: '33px' }}
                          borderRadius="full"
                          overflow="hidden"
                          border="2px solid"
                          borderColor="rgba(14, 14, 16, 0.95)"
                          boxShadow="0 0 0 1px rgba(255,255,255,0.18)"
                          zIndex={socialProofAvatars.length - index}
                        >
                          <Image
                            src={avatar.src}
                            alt={avatar.alt}
                            fill
                            sizes="34px"
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      ))}
                    </HStack>
                    <Text
                      as="span"
                      fontWeight="medium"
                      color="whiteAlpha.900"
                      whiteSpace="nowrap"
                    >
                      Trusted by{' '}
                      <Box as="span" color="white" fontWeight="bold">
                        40,000+
                      </Box>{' '}
                      job seekers
                    </Text>
                  </Stack>

                  <Box
                    display={{ base: 'none', sm: 'block' }}
                    w="1px"
                    h="18px"
                    bg="whiteAlpha.300"
                  />

                  <HStack spacing="2" color="yellow.400">
                    <HStack spacing="2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icon
                          key={index}
                          as={FaStar}
                          boxSize={{ base: '13px', md: '14px' }}
                        />
                      ))}
                    </HStack>
                    <Text as="span" color="whiteAlpha.800" fontWeight="medium">
                      <Box as="span" color="white" fontWeight="bold">
                        4.9
                      </Box>{' '}
                      stars
                    </Text>
                  </HStack>
                </Stack>
              </VStack>
            </FallInPlace>
          </Hero>

          <Box
            width={{ base: '100%', lg: '38%' }}
            height={{ base: 'clamp(400px, 114vw, 600px)', md: '600px' }}
            position="relative"
            display="block"
            overflow="visible"
            order={{ base: 1, lg: 2 }}
            mb={0}
          >
            <Box height="100%" width="100%">
              <Box
                height="100%"
                width="100%"
                display="flex"
                justifyContent={{ base: 'center', lg: 'flex-start' }}
                alignItems="center"
                position="relative"
                zIndex={1}
              >
                <Box
                  width={{ base: 'clamp(196px, 56vw, 295px)', md: '295px' }}
                  maxW="295px"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transform={{
                    base: 'none',
                    lg: 'translateX(-20px)',
                  }}
                >
                  <Image
                    src={ASSETS.screenshots.dailyPractice}
                    width={520}
                    height={1060}
                    alt="66 Days Prep daily practice screen"
                    priority
                    style={{
                      width: 'auto',
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={4}
        innerWidth="container.lg"
        pt={{ base: '12', lg: '36' }}
        sx={{
          '.chakra-heading': { fontSize: '2xl' },
          '.chakra-text': { fontSize: 'lg' },
          ...sectionContentStyles,
        }}
        features={[
          {
            title: 'Expert-Led Content',
            icon: FiAward,
            description:
              'Learn from professionals who landed offers at Goldman Sachs, McKinsey, BCG, and Bain.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Real Case Studies',
            icon: FiBriefcase,
            description:
              'Practice with actual case studies from top-tier banking and consulting interviews.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Structured 66-Day Plan',
            icon: FiTarget,
            description:
              'Follow our proven methodology that gets results - from basics to advanced interview skills.',
            iconPosition: 'left',
            delay: 1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}
