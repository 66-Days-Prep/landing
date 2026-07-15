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
              isRecommended={plan.isRecommended}
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
  isRecommended?: boolean
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const {
    title,
    description,
    price,
    children,
    isRecommended = false,
    ...rest
  } = props
  return (
    <VStack
      position="relative"
      overflow="hidden"
      bg={
        isRecommended
          ? 'linear-gradient(145deg, rgba(245, 238, 221, 0.105) 0%, rgba(196, 176, 136, 0.055) 54%, rgba(245, 238, 221, 0.05) 100%)'
          : 'linear-gradient(145deg, rgba(245, 238, 221, 0.075) 0%, rgba(196, 176, 136, 0.028) 62%, rgba(245, 238, 221, 0.045) 100%)'
      }
      backdropFilter="blur(18px) saturate(125%)"
      borderRadius="28px"
      px="6"
      pt="6"
      pb="5"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor={isRecommended ? 'primary.400' : 'app.border.subtle'}
      boxShadow={
        isRecommended
          ? 'inset 0 1px 0 rgba(245, 238, 221, 0.11), 0 18px 48px rgba(0, 0, 0, 0.2), 0 0 42px rgba(196, 176, 136, 0.08)'
          : 'inset 0 1px 0 rgba(245, 238, 221, 0.075), 0 14px 38px rgba(0, 0, 0, 0.14)'
      }
      _before={{
        content: '""',
        position: 'absolute',
        top: '-100px',
        right: '-90px',
        w: '220px',
        h: '220px',
        borderRadius: 'full',
        bg: isRecommended
          ? 'rgba(196, 176, 136, 0.12)'
          : 'rgba(196, 176, 136, 0.055)',
        filter: 'blur(42px)',
        pointerEvents: 'none',
      }}
      _hover={{
        borderColor: isRecommended ? 'primary.300' : 'app.border.strong',
        transform: 'translateY(-3px)',
        boxShadow: isRecommended
          ? 'inset 0 1px 0 rgba(245, 238, 221, 0.14), 0 22px 54px rgba(0, 0, 0, 0.24), 0 0 48px rgba(196, 176, 136, 0.1)'
          : 'inset 0 1px 0 rgba(245, 238, 221, 0.1), 0 18px 44px rgba(0, 0, 0, 0.18)',
      }}
      transition="transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease"
      {...rest}
    >
      <Heading
        as="h3"
        size="md"
        fontWeight="semibold"
        fontSize="xl"
        mb="2"
        letterSpacing="-0.02em"
        color="app.text.primary"
        position="relative"
        zIndex={1}
      >
        {title}
      </Heading>
      <Box color="app.text.muted" position="relative" zIndex={1}>
        {description}
      </Box>
      <Box fontSize="2xl" fontWeight="bold" pt="4" pb="2" position="relative" zIndex={1}>
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1" position="relative" zIndex={1}>
        {children}
      </VStack>
    </VStack>
  )
}
