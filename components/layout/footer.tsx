import {
  Box,
  BoxProps,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { APP_STORE_LINKS, ASSETS } from '#constants'
import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props
  
  return (
    <Box
      bg="rgba(14, 14, 16, 0.96)"
      borderTop="1px solid"
      borderColor="rgba(196, 176, 136, 0.18)"
      position="relative"
      zIndex={1}
      width="100%"
      {...rest}
    >
      <Container maxW="container.2xl" px="8" py="8" width="100%">
        {/* Change columns to be responsive - 1 on mobile, 2 on larger screens */}
        <SimpleGrid columns={{ base: 1, md: columns }} spacing={{ base: 8, md: 0 }}>
          <Stack spacing="8">
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
              </Flex>
              <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text>
            </Stack>
            <Stack spacing="4" alignItems="flex-start">
              <Link
                href={APP_STORE_LINKS.ios}
                isExternal
                _hover={{ opacity: 0.8 }}
                transition="opacity 0.2s"
              >
                <Image
                  src={ASSETS.images.appStoreBadge}
                  alt="Download on the App Store"
                  height="40px"
                />
              </Link>
              <Copyright>{siteConfig.footer.copyright}</Copyright>
            </Stack>
          </Stack>
          
          {/* Use Wrap for better mobile layout of links */}
          <Stack spacing="4" alignSelf={{ base: "flex-start", md: "flex-end" }}>
            <Wrap justify={{ base: "flex-start", md: "flex-end" }} spacing="4">
              {siteConfig.footer?.links?.map(({ href, label }) => (
                <WrapItem key={href}>
                  <FooterLink href={href}>
                    {label}
                  </FooterLink>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
