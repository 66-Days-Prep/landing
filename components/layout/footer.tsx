import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'

import { APP_STORE_LINKS, ASSETS } from '#constants'
import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { ...rest } = props
  const utilityLinks = siteConfig.footer.links.slice(0, 3)
  const socialLinks = siteConfig.footer.links.slice(3)

  return (
    <Box
      as="footer"
      bg="rgba(10, 9, 8, 0.97)"
      borderTop="1px solid"
      borderColor="app.border.subtle"
      position="relative"
      zIndex={1}
      width="100%"
      {...rest}
    >
      <Container maxW="container.2xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 12 }}>
        <Stack spacing={{ base: 10, md: 12 }}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 10, lg: 20 }}
            alignItems="start"
          >
            <VStack align="flex-start" spacing="6" maxW="500px">
              <Box as={siteConfig.logo} height="32px" />
              <Text color="app.text.muted" fontSize="md" lineHeight="1.7">
                {siteConfig.seo.description}
              </Text>
              <Link
                href={APP_STORE_LINKS.ios}
                isExternal
                _hover={{ opacity: 0.82 }}
                transition="opacity 0.2s ease"
              >
                <Image
                  src={ASSETS.images.appStoreBadge}
                  alt="Download 66 Days Prep on the App Store"
                  height="42px"
                />
              </Link>
            </VStack>

            <Stack
              align={{ base: 'flex-start', lg: 'flex-end' }}
              spacing="6"
              pt={{ base: 0, lg: 1 }}
            >
              <Text
                color="app.text.primary"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.04em"
                textTransform="uppercase"
              >
                Company
              </Text>
              <Flex
                gap={{ base: 4, md: 6 }}
                flexWrap="wrap"
                justify={{ base: 'flex-start', lg: 'flex-end' }}
              >
                {utilityLinks.map(({ href, label }) => (
                  <FooterLink key={href} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </Flex>
            </Stack>
          </SimpleGrid>

          <Flex
            pt="6"
            borderTop="1px solid"
            borderColor="app.border.subtle"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            gap="5"
          >
            <Copyright>{siteConfig.footer.copyright}</Copyright>
            <HStack spacing="4">
              {socialLinks.map(({ href, label }) => (
                <FooterLink key={href} href={href} isExternal>
                  {label}
                </FooterLink>
              ))}
            </HStack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({ title, children }) => {
  const content = title && !children ? `&copy; ${new Date().getFullYear()} - ${title}` : children

  return (
    <Text color="app.text.faint" fontSize="sm">
      {content}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="app.text.muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{ color: 'app.text.primary' }}
      transition="color 0.2s ease"
      {...rest}
    >
      {children}
    </Link>
  )
}
