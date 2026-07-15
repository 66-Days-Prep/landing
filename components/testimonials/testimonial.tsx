import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaStar, FaTwitter } from 'react-icons/fa'

export interface TestimonialProps extends CardProps {
  name: string
  description: React.ReactNode
  avatar?: string
  href?: string
  children?: React.ReactNode
}

export const Testimonial = ({
  name,
  description,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" p={{ base: 5, md: 6 }} {...rest}>
      <HStack spacing="1" color="primary.300" fontSize="13px">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </HStack>
      <CardBody
        p="0"
        mt="4"
        color="app.text.secondary"
        fontSize="md"
        lineHeight="1.7"
      >
        {children}
      </CardBody>
      <CardHeader p="0" mt="6" pt="5" borderTop="1px solid" borderColor="app.border.subtle">
        <Stack spacing="1">
          <Heading size="sm" color="app.text.primary">{name}</Heading>
          <Text color="app.text.muted" fontSize="sm">
            {description}
          </Text>
        </Stack>
      </CardHeader>
      {href && (
        <Link href={href} position="absolute" top="5" right="5" color="app.text.faint">
          <FaTwitter />
        </Link>
      )}
    </Card>
  )
}
