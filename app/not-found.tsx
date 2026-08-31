'use client'

import { Container, Heading, Text } from '@chakra-ui/react'

import { ButtonLink } from '#components/button-link'

export default function NotFound() {
  return (
    <Container
      minH="100svh"
      maxW="650px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py="20"
    >
      <Text color="primary.400" fontWeight="600" mb="4">
        404 · Page not found
      </Text>
      <Heading
        as="h1"
        fontSize={{ base: '32px', md: '42px' }}
        letterSpacing="-0.04em"
      >
        Let’s get your prep back on track.
      </Heading>
      <Text color="app.text.muted" mt="5" mb="7">
        This page may have moved, or the link may be incorrect.
      </Text>
      <ButtonLink href="/" variant="primary" h="48px" px="6">
        Back to 66 Days Prep
      </ButtonLink>
    </Container>
  )
}
