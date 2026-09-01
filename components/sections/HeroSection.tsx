'use client'

import { Box, Container, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FaApple, FaStar } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

import { HeroBackground } from '#components/background/hero-background'
import { ButtonLink } from '#components/button-link'
import { ASSETS, INTERNAL_ROUTES } from '#constants'
import { AUDIENCE_COUNT } from '#data/marketing'
import { rectangularCtaShadow } from '#theme/styles/rectangular-cta-styles'

import { HeroAnnouncement } from './HeroAnnouncement'

export function HeroSection() {
  return (
    <Box
      as="section"
      id="home"
      position="relative"
      isolation="isolate"
      overflow="hidden"
    >
      <HeroBackground />
      <Container
        maxW="1200px"
        position="relative"
        pt={{ base: 28, md: 32 }}
        pb={{ base: 8, md: 12 }}
        textAlign="center"
      >
        <HeroAnnouncement />
        <Heading
          as="h1"
          mt={{ base: 9, md: 14 }}
          mx="auto"
          maxW="900px"
          fontSize={{ base: '34px', sm: '40px', md: '46px', lg: '52px' }}
          fontWeight="600"
          lineHeight="1.08"
          letterSpacing="-0.045em"
        >
          Your daily edge in
          <Box as="br" />
          banking & consulting.
        </Heading>
        <Text
          mt="6"
          maxW="660px"
          mx="auto"
          fontSize={{ base: '16px', md: '18px' }}
          color="app.text.secondary"
          lineHeight="1.65"
        >
          Turn ambition into interview confidence with{' '}
          <Box as="span" color="primary.400">
            daily practice
          </Box>
          , AI feedback, and a focused{' '}
          <Box as="span" color="primary.400">
            66-day plan
          </Box>
          .
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justify="center"
          spacing="3.5"
          mt="7"
          maxW={{ base: '310px', sm: 'none' }}
          mx="auto"
        >
          <ButtonLink
            href={INTERNAL_ROUTES.downloadHero}
            variant="primary"
            h="50px"
            px="6"
            borderRadius="12px"
            boxShadow={rectangularCtaShadow.primary}
            leftIcon={<FaApple size={20} />}
            fontSize="16px"
          >
            Download free
          </ButtonLink>
          <ButtonLink
            href="/#features"
            variant="outline"
            h="50px"
            px="6"
            borderRadius="12px"
            borderColor="whiteAlpha.300"
            bg="whiteAlpha.50"
            color="white"
            fontSize="16px"
            rightIcon={<FiArrowRight />}
            _hover={{ bg: 'whiteAlpha.100' }}
          >
            See how it works
          </ButtonLink>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, md: 5 }}
          justify="center"
          align="center"
          mt="7"
        >
          <HStack spacing="3">
            <HStack spacing="0" aria-hidden="true">
              {[1, 2, 3, 4].map((item, index) => (
                <Box
                  key={item}
                  position="relative"
                  w="31px"
                  h="31px"
                  ml={index ? '-7px' : 0}
                  borderRadius="full"
                  overflow="hidden"
                  border="2px solid #0E0E10"
                >
                  <Image
                    src={`/static/social-proof/job-seeker-${item}.jpg`}
                    alt=""
                    fill
                    sizes="31px"
                  />
                </Box>
              ))}
            </HStack>
            <Text fontSize="sm" color="app.text.secondary">
              Trusted by{' '}
              <Box as="strong" color="white">
                {AUDIENCE_COUNT}
              </Box>{' '}
              job seekers
            </Text>
          </HStack>
          <Box
            display={{ base: 'none', md: 'block' }}
            w="1px"
            h="18px"
            bg="whiteAlpha.200"
          />
          <HStack spacing="2" aria-label="Rated 4.9 out of 5">
            <HStack spacing="1" color="primary.400" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => (
                <FaStar key={n} size={12} />
              ))}
            </HStack>
            <Text fontSize="sm" color="app.text.secondary">
              <Box as="strong" color="white">
                4.9
              </Box>{' '}
              / 5.0
            </Text>
          </HStack>
        </Stack>
        <Box
          as="figure"
          aria-label="66 Days Prep daily practice screen"
          mt={{ base: 10, md: 14 }}
          mb="0"
          position="relative"
        >
          <Box
            aria-hidden="true"
            position="absolute"
            bottom="2%"
            left="50%"
            transform="translateX(-50%)"
            w="min(80vw, 700px)"
            h="65%"
            bg="radial-gradient(ellipse, rgba(48,170,214,0.1), transparent 65%)"
          />
          <Box w={{ base: '218px', md: '264px' }} mx="auto" position="relative">
            <Image
              src={ASSETS.screenshots.dailyPractice}
              width={520}
              height={1060}
              alt="Daily technical, behavioral, and networking practice in 66 Days Prep"
              priority
              sizes="(max-width: 767px) 218px, 264px"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
