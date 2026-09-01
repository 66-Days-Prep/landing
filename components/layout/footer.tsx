import {
  Box,
  BoxProps,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'

import {
  APP_STORE_LINKS,
  ASSETS,
  INTERNAL_ROUTES,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from '#constants'

import { Logo } from './logo'

export interface FooterProps extends BoxProps {}
const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#benefits' },
      { label: 'How it works', href: '/#features' },
      { label: 'Reviews', href: '/#testimonials' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { label: 'AI practice', href: '/#ai-practice' },
      { label: 'Questions & answers', href: '/#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: `mailto:${SUPPORT_EMAIL}` },
      { label: 'Terms of Service', href: INTERNAL_ROUTES.terms },
      { label: 'Privacy Policy', href: INTERNAL_ROUTES.privacy },
    ],
  },
]

export function Footer(props: FooterProps) {
  return (
    <Box
      as="footer"
      bg="#08080A"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      {...props}
    >
      <Container
        maxW="1320px"
        px={{ base: 6, md: 8 }}
        py={{ base: 10, md: 14 }}
      >
        <Grid
          templateColumns={{ base: '1fr', lg: '0.9fr 1.1fr' }}
          gap={{ base: 10, lg: 20 }}
        >
          <Stack align="start" spacing="5" maxW="380px">
            <Logo />
            <Text fontSize="md" lineHeight="1.7" color="app.text.muted">
              A daily prep system for ambitious banking and consulting
              candidates. Build your skills, keep your momentum, and show up
              ready.
            </Text>
            <Link
              href={APP_STORE_LINKS.ios}
              aria-label="Download 66 Days Prep on the App Store"
              _hover={{ opacity: 0.8 }}
            >
              <Image
                src={ASSETS.images.appStoreBadge}
                alt="Download on the App Store"
                h="40px"
                w="120px"
                objectFit="contain"
                loading="lazy"
              />
            </Link>
          </Stack>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing="8">
            {columns.map((column) => (
              <Stack key={column.title} align="start" spacing="3.5">
                <Text fontSize="sm" fontWeight="700" mb="1">
                  {column.title}
                </Text>
                {column.links.map((link) => (
                  <Link
                    as={NextLink}
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    lineHeight="1.5"
                    color="app.text.muted"
                    _hover={{ color: 'white', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </Grid>
        <Flex
          mt="12"
          pt="6"
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'start', md: 'center' }}
          gap="5"
        >
          <Text fontSize="xs" color="app.text.faint">
            © {new Date().getFullYear()} Uru Technologies LLC. All rights
            reserved.
          </Text>
          <HStack spacing="5">
            {[
              {
                label: 'LinkedIn',
                href: SOCIAL_LINKS.linkedin,
                icon: FaLinkedinIn,
              },
              { label: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: FaTiktok },
              {
                label: 'Instagram',
                href: SOCIAL_LINKS.instagram,
                icon: FaInstagram,
              },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                isExternal
                aria-label={link.label}
                color="app.text.muted"
                _hover={{ color: 'white' }}
              >
                <Icon as={link.icon} boxSize="18px" />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
