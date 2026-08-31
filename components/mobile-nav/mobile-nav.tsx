import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  IconButtonProps,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiArrowUpRight, FiMenu } from 'react-icons/fi'

import { RefObject, forwardRef, useEffect } from 'react'

import { ButtonLink } from '#components/button-link'
import { INTERNAL_ROUTES } from '#constants'
import siteConfig from '#data/config'

export function MobileNavContent({
  isOpen,
  onClose,
  finalFocusRef,
}: {
  isOpen: boolean
  onClose: () => void
  finalFocusRef: RefObject<HTMLButtonElement>
}) {
  const desktop = useBreakpointValue({ base: false, lg: true })
  useEffect(() => {
    if (desktop) onClose()
  }, [desktop, onClose])
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      finalFocusRef={finalFocusRef}
      size="xs"
    >
      <DrawerOverlay bg="rgba(0,0,0,0.6)" backdropFilter="blur(6px)" />
      <DrawerContent
        bg="app.surface.panel"
        color="white"
        borderLeft="1px solid"
        borderColor="app.border.strong"
      >
        <DrawerCloseButton mt="2" aria-label="Close menu" />
        <DrawerHeader pt="7">66 Days Prep</DrawerHeader>
        <DrawerBody id="mobile-navigation">
          <Stack as="nav" aria-label="Mobile navigation" spacing="2" pt="3">
            {siteConfig.header.links
              .filter((link) => link.id)
              .map((link) => (
                <Link
                  as={NextLink}
                  href={`/#${link.id}`}
                  key={link.id}
                  onClick={onClose}
                  px="4"
                  py="3"
                  borderRadius="10px"
                  color="app.text.secondary"
                  _hover={{
                    bg: 'app.surface.cardHover',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            <Box pt="5">
              <ButtonLink
                href={INTERNAL_ROUTES.downloadMobile}
                onClick={onClose}
                variant="primary"
                w="full"
                h="48px"
                rightIcon={<FiArrowUpRight />}
              >
                Get on the App Store
              </ButtonLink>
            </Box>
            <Text fontSize="sm" color="app.text.muted" px="4" pt="3">
              Made for iPhone and iPad.
            </Text>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
export const MobileNavButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function MobileNavButton(props, ref) {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'inline-flex', lg: 'none' }}
        variant="ghost"
        color="white"
        icon={<FiMenu size={21} />}
        borderRadius="full"
        {...props}
      />
    )
  },
)
