import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

import { ButtonLink } from '#components/button-link'
import { Section, SectionTitle } from '#components/section'
import { APP_STORE_LINKS } from '#constants'
import pricing from '#data/pricing'
import { rectangularCtaShadow } from '#theme/styles/rectangular-cta-styles'

export function Pricing() {
  return (
    <Section id="pricing" innerWidth="1160px">
      <SectionTitle
        title={pricing.title}
        description={pricing.description}
        mb="10"
      />
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="5">
        {pricing.plans.map((plan) => (
          <VStack
            key={plan.id}
            align="stretch"
            spacing="0"
            p="3"
            borderRadius="14px"
            bg="#0C0C0E"
            border="1px solid rgba(255,255,255,0.13)"
            boxShadow="inset 0 1px 0 rgba(255,255,255,0.07)"
            transition="border-color 150ms ease"
            _hover={{ borderColor: 'whiteAlpha.300' }}
          >
            <Box
              position="relative"
              overflow="hidden"
              p="5"
              borderRadius="10px"
              border="1px solid"
              borderColor={
                plan.recommended ? 'whiteAlpha.400' : 'whiteAlpha.100'
              }
              bg={
                plan.recommended
                  ? 'radial-gradient(ellipse at 0% 0%, #666970 0%, transparent 55%), radial-gradient(ellipse at 110% 120%, #0d99cc 0%, #076a96 24%, transparent 65%), linear-gradient(145deg, #22252A, #010204 64%)'
                  : 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))'
              }
              _after={
                plan.recommended
                  ? {
                      content: '\"\"',
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.45,
                      mixBlendMode: 'overlay',
                      backgroundImage: 'url(/static/images/pricing-grain.svg)',
                      pointerEvents: 'none',
                    }
                  : undefined
              }
            >
              <Box position="relative" zIndex="1">
                <HStack justify="space-between" align="center" minH="30px">
                  <Heading as="h3" fontSize="25px" fontWeight="600">
                    {plan.title}
                  </Heading>
                  {plan.badge && (
                    <Text
                      bg="white"
                      color="black"
                      fontWeight="600"
                      fontSize="10px"
                      borderRadius="5px"
                      px="2"
                      py="1"
                    >
                      {plan.badge}
                    </Text>
                  )}
                </HStack>
                <HStack align="baseline" spacing="2" py="6" flexWrap="wrap">
                  <Text
                    fontSize="44px"
                    fontWeight="600"
                    letterSpacing="-0.055em"
                    lineHeight="1"
                  >
                    {plan.price}
                  </Text>
                  <Text fontSize="sm" color="app.text.secondary">
                    {plan.period}
                  </Text>
                </HStack>
                <ButtonLink
                  href={APP_STORE_LINKS.ios}
                  w="full"
                  h="48px"
                  borderRadius="12px"
                  fontSize="15px"
                  color={plan.recommended ? 'black' : 'white'}
                  bg={plan.recommended ? 'white' : 'transparent'}
                  border="1px solid"
                  borderColor="whiteAlpha.700"
                  boxShadow={
                    plan.recommended
                      ? rectangularCtaShadow.light
                      : rectangularCtaShadow.darkOutline
                  }
                  _hover={{ bg: 'white', color: 'black' }}
                  rightIcon={<FiArrowRight />}
                >
                  {plan.action}
                </ButtonLink>
              </Box>
            </Box>
            <Box px="3" pt="5" pb="3">
              <Text
                fontSize="sm"
                color="app.text.secondary"
                lineHeight="1.6"
                minH={{ base: 'auto', lg: '66px' }}
                mb="5"
              >
                {plan.description}
              </Text>
              <VStack
                as="ul"
                listStyleType="none"
                align="stretch"
                spacing="3"
                m="0"
              >
                {plan.features.map((feature) => (
                  <HStack as="li" key={feature} align="start" spacing="2.5">
                    <Icon
                      as={FiCheck}
                      mt="3px"
                      boxSize="16px"
                      color="primary.400"
                      flexShrink={0}
                    />
                    <Text
                      fontSize="sm"
                      lineHeight="1.5"
                      color="app.text.secondary"
                    >
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}
