'use client'

import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { FaApple } from 'react-icons/fa'

import { useEffect, useState } from 'react'

import { ButtonLink } from '#components/button-link'
import { ASSETS, INTERNAL_ROUTES } from '#constants'

export function AppStoreBanner() {
  const [heroVisible, setHeroVisible] = useState(true)
  const [footerVisible, setFooterVisible] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('home')
    const footer = document.querySelector('footer')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting)
        if (entry.target === footer) setFooterVisible(entry.isIntersecting)
      })
    })
    if (hero) observer.observe(hero)
    if (footer) observer.observe(footer)
    return () => observer.disconnect()
  }, [])
  if (heroVisible || footerVisible) return null
  return (
    <HStack
      display={{ base: 'flex', md: 'none' }}
      position="fixed"
      insetX="0"
      bottom="0"
      zIndex="banner"
      spacing="3"
      bg="rgba(18,19,22,0.96)"
      backdropFilter="blur(14px)"
      borderTop="1px solid"
      borderColor="app.border.strong"
      px="4"
      pt="3"
      pb="calc(12px + env(safe-area-inset-bottom))"
      justify="space-between"
    >
      <HStack spacing="2">
        <Image
          src={ASSETS.images.logo}
          alt=""
          boxSize="34px"
          borderRadius="8px"
        />
        <Box>
          <Text fontSize="sm" fontWeight="600">
            66 Days Prep
          </Text>
          <Text fontSize="11px" color="app.text.muted">
            Daily interview prep
          </Text>
        </Box>
      </HStack>
      <ButtonLink
        href={INTERNAL_ROUTES.downloadMobile}
        variant="primary"
        size="sm"
        borderRadius="10px"
        h="40px"
        leftIcon={<FaApple />}
      >
        Get the app
      </ButtonLink>
    </HStack>
  )
}
