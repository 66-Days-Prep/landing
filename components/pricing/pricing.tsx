import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiArrowRight, FiCheck, FiCheckCircle, FiLock, FiXCircle } from 'react-icons/fi'

import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { Section, SectionProps, SectionTitle } from '#components/section'

export interface PricingPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<PricingFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode
  plans: Array<PricingPlan>
  align?: 'left' | 'center' | { base: 'center'; md: 'left' }
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, align, ...rest } = props
  return (
    <Section id="pricing" {...rest}>
      <SectionTitle
        title={title}
        description={description}
        align={align}
        mb={8}
        pos="relative"
        zIndex={1}
      />
      <SimpleGrid columns={[1, null, 3]} spacing={5}>
        {plans?.map((plan) => {
          const isFree = plan.id === 'free'

          return (
            <PricingBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              sx={
                plan.isRecommended
                  ? {
                      bgGradient:
                        'linear(to-br, rgba(245, 238, 221, 0.105), rgba(196, 176, 136, 0.055))',
                      borderColor: 'primary.400',
                      boxShadow:
                        '0 10px 36px rgba(196, 176, 136, 0.16), 0 6px 30px rgba(0, 0, 0, 0.22)',
                      _dark: {
                        bgGradient:
                          'linear(to-br, rgba(245, 238, 221, 0.105), rgba(196, 176, 136, 0.055))',
                        borderColor: 'primary.400',
                      },
                    }
                  : {}
              }
            >
              <ButtonLink
                colorScheme={isFree ? 'whiteAlpha' : 'primary'}
                color="brand.ink"
                bg={isFree ? 'primary.50' : undefined}
                borderColor={isFree ? 'primary.700' : undefined}
                borderWidth={isFree ? '1px' : undefined}
                _hover={
                  isFree
                    ? {
                        bg: 'primary.100',
                      }
                    : undefined
                }
                borderRadius="full"
                w="full"
                h="42px"
                px="1"
                mb="0"
                textAlign="left"
                fontWeight="bold"
                {...plan.action}
              >
                <HStack w="full" spacing="2.5" justify="flex-start">
                  <Box
                    w="34px"
                    h="34px"
                    borderRadius="full"
                    bg="black"
                    color="white"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={FiArrowRight} boxSize="16px" />
                  </Box>
                  <Text as="span" fontWeight="bold" fontSize="lg">
                    {plan.action.label || 'Continue'}
                  </Text>
                </HStack>
              </ButtonLink>
              <HStack
                mb="4"
                mt="-1"
                spacing="3"
                justify="center"
                color="primary.300"
                opacity={0.72}
                fontSize="2xs"
                lineHeight="1"
                textTransform="uppercase"
              >
                <HStack spacing="1">
                  <Icon as={FiLock} boxSize="12px" />
                  <Text as="span">Secure Checkout</Text>
                </HStack>
                <Text as="span">|</Text>
                <HStack spacing="1">
                  <Icon as={FiXCircle} boxSize="12px" />
                  <Text as="span">Cancel Anytime</Text>
                </HStack>
              </HStack>
              <PricingFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <PricingFeature
                      key={`${plan.id}-feature-${i}`}
                      useCircleIcon={!isFree}
                      {...feature}
                    />
                  ) : (
                    <br key={`${plan.id}-spacer-${i}`} />
                  ),
                )}
              </PricingFeatures>
            </PricingBox>
          )
        })}
      </SimpleGrid>
      {children}
    </Section>
  )
}

const PricingFeatures: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="2"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
  useCircleIcon?: boolean
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = 'primary.400', useCircleIcon = true } = props
  return (
    <HStack>
      <Icon
        as={useCircleIcon ? FiCheckCircle : FiCheck}
        color={iconColor}
        boxSize="16px"
        flexShrink={0}
      />
      <Text flex="1" fontSize="sm" lineHeight="1.45">
        {title}
      </Text>
    </HStack>
  )
}

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props
  return (
    <VStack
      bgGradient="linear(to-br, rgba(245, 238, 221, 0.075), rgba(196, 176, 136, 0.035))"
      backdropFilter="blur(10px)"
      borderRadius="24px"
      p="8"
      flex="1 0"
      alignItems="stretch"
      borderWidth="1px"
      borderColor="rgba(196, 176, 136, 0.16)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.14)"
      _hover={{
        bgGradient:
          'linear(to-br, rgba(245, 238, 221, 0.105), rgba(196, 176, 136, 0.052))',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.18)',
      }}
      transition="all 0.3s ease"
      _dark={{
        bgGradient:
          'linear(to-br, rgba(245, 238, 221, 0.075), rgba(196, 176, 136, 0.035))',
        borderColor: 'rgba(196, 176, 136, 0.16)',
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="xl" mb="2" letterSpacing="0">
        {title}
      </Heading>
      <Box color="muted">
        {description}
      </Box>
      <Box fontSize="2xl" fontWeight="bold" pt="4" pb="2">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
