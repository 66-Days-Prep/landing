'use client'

import { Box, BoxProps, Container, Flex, useDisclosure } from '@chakra-ui/react'

import { useEffect, useRef, useState } from 'react'

import { Logo } from './logo'
import Navigation from './navigation'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export function Header(props: HeaderProps) {
  const sentinel = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const menu = useDisclosure()
  useEffect(() => {
    if (!sentinel.current) return
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    )
    observer.observe(sentinel.current)
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <Box
        ref={sentinel}
        aria-hidden="true"
        position="absolute"
        top="72px"
        boxSize="1px"
        pointerEvents="none"
      />
      <Box
        as="header"
        position="fixed"
        top="0"
        insetX="0"
        zIndex="sticky"
        pointerEvents="none"
        {...props}
      >
        <Container
          maxW="1440px"
          px={{ base: 4, md: 6, lg: 12 }}
          pt={{ base: 'calc(env(safe-area-inset-top) + 8px)', md: 3 }}
        >
          <Flex
            align="center"
            gap="4"
            justify="space-between"
            position="relative"
            py={scrolled ? 2.5 : 3}
            px={scrolled ? { base: 3, md: 5 } : { base: 1, md: 0 }}
            border="1px solid"
            borderColor={
              scrolled || menu.isOpen ? 'app.border.strong' : 'transparent'
            }
            borderRadius="full"
            bg={scrolled || menu.isOpen ? 'app.surface.header' : 'transparent'}
            backdropFilter={scrolled || menu.isOpen ? 'blur(22px)' : 'none'}
            boxShadow={scrolled ? '0 16px 48px rgba(0,0,0,0.3)' : 'none'}
            transition="padding 200ms ease, background-color 200ms ease, border-color 200ms ease"
            pointerEvents="auto"
          >
            <Logo />
            <Navigation
              mobileNavIsOpen={menu.isOpen}
              onMobileNavToggle={menu.onToggle}
              onMobileNavClose={menu.onClose}
            />
          </Flex>
        </Container>
      </Box>
    </>
  )
}
