import { HStack, Text, VStack } from '@chakra-ui/react'

import { APP_STORE_LINKS } from '#constants'

export default {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for all',
  plans: [
    {
      id: 'free',
      title: 'Free',
      description: 'Try full features for FREE',
      price: (
        <VStack spacing="1" align="flex-start">
          <Text
            fontSize="xl"
            fontWeight="normal"
            visibility="hidden"
            userSelect="none"
          >
            $15.99 / month
          </Text>
          <Text fontSize={{ base: '6xl', md: '7xl' }} fontWeight="semibold" lineHeight="0.95">
            Free
          </Text>
        </VStack>
      ),
      features: [
        {
          title: 'Explore all drills, tools, and the AI coach with no limits',
        },
        {
          title: 'No ads, no hidden fees',
        },
        {
          title: 'Cancel anytime before the trial ends',
        },
      ],
      action: {
        href: APP_STORE_LINKS.ios,
        label: 'Start free',
      },
    },
    {
      id: 'monthly',
      title: 'Monthly',
      description: 'Popular',
      price: (
        <VStack spacing="1" align="flex-start">
          <Text
            fontSize="xl"
            color="gray.500"
            textDecoration="line-through"
            fontWeight="normal"
          >
            $39.99 / month
          </Text>
          <HStack spacing="2" align="baseline">
            <Text fontSize={{ base: '6xl', md: '7xl' }} fontWeight="semibold" lineHeight="0.95" color="green.500">
              $15.99
            </Text>
            <Text fontSize="md" color="muted" fontWeight="normal">
              / month
            </Text>
          </HStack>
        </VStack>
      ),
      isRecommended: true,
      features: [
        {
          title: 'AI-powered coach for personalized feedback',
        },
        {
          title: 'Unlimited daily drills in math, cases, and Excel',
        },
        {
          title: '66-day streak tracker and heatmap',
        },
        {
          title: 'AI resume checker and quick practice mode',
        },
        {
          title: 'Pomodoro timer and screen blocker',
        },
        {
          title: 'Complete Excel shortcut and formula guide',
        },
        {
          title: 'Full resource hub for consulting and banking prep',
        },
        null,
        {
          title: 'Ideal for short-term prep before interviews or assessments',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: APP_STORE_LINKS.ios,
        label: 'Start monthly',
      },
    },
    {
      id: 'yearly',
      title: 'Yearly',
      description: 'Best Value',
      price: (
        <VStack spacing="1" align="flex-start">
          <Text
            fontSize="xl"
            color="gray.500"
            textDecoration="line-through"
            fontWeight="normal"
          >
            $149.99 / year
          </Text>
          <HStack spacing="2" align="baseline">
            <Text fontSize={{ base: '6xl', md: '7xl' }} fontWeight="semibold" lineHeight="0.95" color="green.500">
              $59.99
            </Text>
            <Text fontSize="md" color="muted" fontWeight="normal">
              / year
            </Text>
          </HStack>
        </VStack>
      ),
      features: [
        {
          title: 'AI-powered coach for personalized feedback',
        },
        {
          title: 'Unlimited daily drills in math, cases, and Excel',
        },
        {
          title: '66-day streak tracker and heatmap',
        },
        {
          title: 'AI resume checker and quick practice mode',
        },
        {
          title: 'Pomodoro timer and screen blocker',
        },
        {
          title: 'Complete Excel shortcut and formula guide',
        },
        {
          title: 'Full resource hub for consulting and banking prep',
        },
        null,
        {
          title: 'Perfect for long-term prep, habit tracking, and consistent progress',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: APP_STORE_LINKS.ios,
        label: 'Start yearly',
      },
    },
  ],
}
