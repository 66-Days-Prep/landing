'use client'

import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { ASSETS, INTERNAL_ROUTES } from '#constants'

export function AppStoreBanner() {
  const [visible, setVisible] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      if (Math.abs(scrollPos - currentScrollPos) > 10) {
        const isVisible = scrollPos > currentScrollPos || currentScrollPos < 10
        setScrollPos(currentScrollPos)
        setVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPos])

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0, 0, 0, 0.86)"
      backdropFilter="blur(10px)"
      py="3"
      px="4"
      display={{ base: 'flex', md: 'none' }}
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid rgba(196, 176, 136, 0.18)"
      zIndex="1000"
      boxShadow="0 -4px 10px rgba(0, 0, 0, 0.1)"
      transform={visible ? 'translateY(0)' : 'translateY(100%)'}
      transition="transform 0.3s ease-in-out"
    >
      <Stack direction="row" spacing="3" align="center" flex="1">
        <Image
          src={ASSETS.images.logo}
          width={40}
          height={40}
          alt="66 Days Prep App Icon"
          style={{ borderRadius: '8px' }}
        />
        <VStack align="flex-start" spacing="0">
          <HStack spacing="2" align="center">
            <Text color="white" fontWeight="bold" fontSize="sm">
              66 Days Prep
            </Text>
            <Text color="primary.300" fontSize="xs" fontWeight="medium">
              4.9 / 5 ★
            </Text>
          </HStack>
          <Text color="gray.300" fontSize="xs">
            Download on the App Store
          </Text>
        </VStack>
      </Stack>

      <ButtonLink
        href={INTERNAL_ROUTES.downloadMobile}
        colorScheme="primary"
        size="sm"
        color="brand.ink"
        fontWeight="bold"
        leftIcon={
          <Image
            src={ASSETS.images.appleAppStore}
            width={14}
            height={14}
            alt="Apple"
          />
        }
      >
        Try It Now
      </ButtonLink>
    </Box>
  )
}
