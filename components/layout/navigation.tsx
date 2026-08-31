import { Box, HStack, Icon, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { useRef } from 'react'

import { ButtonLink } from '#components/button-link'
import { MobileNavButton, MobileNavContent } from '#components/mobile-nav'
import { INTERNAL_ROUTES } from '#constants'
import siteConfig from '#data/config'

interface NavigationProps {
  mobileNavIsOpen: boolean
  onMobileNavToggle: () => void
  onMobileNavClose: () => void
}

export default function Navigation({
  mobileNavIsOpen,
  onMobileNavToggle,
  onMobileNavClose,
}: NavigationProps) {
  const trigger = useRef<HTMLButtonElement>(null)
  return (
    <>
      <HStack
        as="nav"
        aria-label="Main navigation"
        spacing={{ lg: 6, xl: 8 }}
        display={{ base: 'none', lg: 'flex' }}
      >
        {siteConfig.header.links
          .filter((link) => link.id)
          .map((link) => (
            <Link
              as={NextLink}
              key={link.id}
              href={`/#${link.id}`}
              fontSize="md"
              color="app.text.muted"
              fontWeight="500"
              _hover={{ color: 'white', textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
      </HStack>
      <HStack spacing="2">
        <ButtonLink
          href={INTERNAL_ROUTES.downloadHero}
          variant="primary"
          borderRadius="full"
          h="42px"
          pl="1"
          pr="5"
          gap="3"
          fontSize="md"
          display={{ base: 'none', sm: 'inline-flex' }}
        >
          <Box
            display="grid"
            placeItems="center"
            boxSize="32px"
            bg="black"
            color="white"
            borderRadius="full"
          >
            <Icon as={FiArrowRight} boxSize="15px" />
          </Box>
          Download free
        </ButtonLink>
        <MobileNavButton
          ref={trigger}
          aria-label="Open menu"
          aria-expanded={mobileNavIsOpen}
          aria-controls="mobile-navigation"
          onClick={onMobileNavToggle}
        />
      </HStack>
      <MobileNavContent
        isOpen={mobileNavIsOpen}
        onClose={onMobileNavClose}
        finalFocusRef={trigger}
      />
    </>
  )
}
