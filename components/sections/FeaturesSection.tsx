'use client'

import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useInView, useReducedMotion } from 'framer-motion'
import {
  FiBookOpen,
  FiCheck,
  FiCheckCircle,
  FiPause,
  FiPlay,
  FiTarget,
  FiTrendingUp,
} from 'react-icons/fi'

import { useEffect, useRef, useState } from 'react'

import { Section, SectionEyebrow } from '#components/section'

const steps = [
  {
    title: 'Learn',
    icon: FiBookOpen,
    description:
      'Start with focused lessons on the frameworks, concepts, and technical skills that banking and consulting interviews test.',
  },
  {
    title: 'Practice',
    icon: FiTarget,
    description:
      'Put your knowledge to work with daily drills, realistic cases, and AI feedback that helps you improve your answers.',
  },
  {
    title: 'Build confidence',
    icon: FiTrendingUp,
    description:
      'Track your consistency, revisit weak spots, and turn steady practice into a stronger interview performance.',
  },
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { amount: 0.2 })
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [solutionOpen, setSolutionOpen] = useState(false)
  useEffect(() => {
    if (!visible || reducedMotion || paused) return
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % steps.length),
      active === 1 ? 15000 : 4500,
    )
    return () => window.clearTimeout(timer)
  }, [active, visible, reducedMotion, paused])
  return (
    <Section id="features" innerWidth="100%" px={{ base: 0, md: 4 }}>
      <Box
        ref={ref}
        bg="#F4F4F0"
        color="#171719"
        borderRadius="10px"
        px={{ base: 4, md: 8, lg: 12 }}
        py={{ base: 10, md: 14 }}
      >
        <Box maxW="1200px" mx="auto">
          <Box textAlign="center" mb="9">
            <SectionEyebrow surface="light" icon={FiTrendingUp} mb="4">
              The 66-day method
            </SectionEyebrow>
            <Heading
              as="h2"
              fontSize={{ base: '30px', md: '38px' }}
              fontWeight="600"
              letterSpacing="-0.04em"
              lineHeight="1.1"
            >
              A daily system. A stronger you.
            </Heading>
            <Text
              mt="4"
              maxW="560px"
              mx="auto"
              color="#55555A"
              fontSize="md"
              lineHeight="1.6"
            >
              Learn the fundamentals, practice with purpose, and see your
              progress add up.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="4">
            {steps.map((step, index) => (
              <Box
                key={step.title}
                p={{ base: 5, md: 6 }}
                bg="rgba(23,23,25,0.045)"
                borderRadius="14px"
                border="1px solid"
                borderColor={
                  active === index ? 'rgba(23,23,25,0.35)' : 'transparent'
                }
                transition="border-color 250ms ease"
                minW="0"
                display="flex"
                flexDirection="column"
              >
                <Heading as="h3">
                  <Button
                    variant="unstyled"
                    display="flex"
                    h="auto"
                    w="full"
                    textAlign="left"
                    color="#171719"
                    gap="2.5"
                    borderRadius="6px"
                    aria-pressed={active === index}
                    aria-label={`Preview step ${index + 1}: ${step.title}`}
                    onClick={() => {
                      setActive(index)
                      setPaused(true)
                    }}
                  >
                    <Icon as={step.icon} boxSize="20px" flexShrink={0} />
                    <Text
                      as="span"
                      fontSize={{ base: '20px', sm: '22px', xl: '24px' }}
                      whiteSpace="normal"
                      fontWeight="600"
                      letterSpacing="-0.04em"
                    >
                      {step.title}
                    </Text>
                    <Box
                      as="span"
                      ml="auto"
                      fontSize="sm"
                      color="#626269"
                      flexShrink={0}
                    >
                      0{index + 1}
                    </Box>
                  </Button>
                </Heading>
                <Box
                  aria-hidden={index === 1 ? undefined : true}
                  mt="5"
                  p="4"
                  bg="#FCFCFA"
                  border="1px solid rgba(23,23,25,0.08)"
                  borderRadius="10px"
                  minH="206px"
                  overflow="hidden"
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  {index === 0 ? (
                    <>
                      <Text
                        fontSize="11px"
                        textTransform="uppercase"
                        letterSpacing="0.08em"
                        color="#66666B"
                      >
                        Your learning path
                      </Text>
                      {[
                        'Accounting fundamentals',
                        'Valuation essentials',
                        'Case interview frameworks',
                      ].map((label, i) => (
                        <HStack key={label} spacing="3" mt="4">
                          <Box
                            boxSize="23px"
                            display="grid"
                            placeItems="center"
                            borderRadius="full"
                            bg={i === 0 ? '#171719' : '#EDEDEA'}
                            color={i === 0 ? 'white' : '#66666B'}
                            fontSize="xs"
                          >
                            {i === 0 ? <FiCheck /> : i + 1}
                          </Box>
                          <Text fontSize="12px" fontWeight="500">
                            {label}
                          </Text>
                        </HStack>
                      ))}
                      <Box h="4px" bg="#E6E6E2" mt="5" borderRadius="full">
                        <Box
                          h="full"
                          w={active === 0 ? '65%' : '32%'}
                          bg="#171719"
                          borderRadius="full"
                          transition="width 1s ease"
                        />
                      </Box>
                    </>
                  ) : index === 1 ? (
                    <>
                      <Text
                        fontSize="11px"
                        color="#66666B"
                        letterSpacing="0.06em"
                      >
                        INVESTMENT BANKING · VALUATION
                      </Text>
                      <Text
                        mt="3"
                        fontWeight="600"
                        fontSize="16px"
                        lineHeight="1.4"
                      >
                        At 9.0× normalized EBITDA, what is the implied share
                        price?
                      </Text>
                      <Text
                        mt="3"
                        fontSize="12px"
                        lineHeight="1.6"
                        color="#55555A"
                      >
                        Reported consolidated EBITDA is $100m, after a one-off
                        $10m legal expense. Normalize by adding back this
                        expense.
                      </Text>
                      <Box as="dl" mt="3" fontSize="12px" lineHeight="1.6">
                        {[
                          ['Debt', '$300m'],
                          ['Excess cash', '$60m'],
                          ['Minority interest', '$30m'],
                          ['Diluted shares', '50m'],
                        ].map(([label, value]) => (
                          <Flex key={label} justify="space-between" gap="2">
                            <Text as="dt" color="#55555A">
                              {label}
                            </Text>
                            <Text as="dd" fontWeight="600">
                              {value}
                            </Text>
                          </Flex>
                        ))}
                      </Box>
                      <SimpleGrid columns={2} gap="2" mt="3">
                        {['$12.60', '$14.40', '$15.00', '$19.80'].map(
                          (answer) => (
                            <Box
                              key={answer}
                              p="2"
                              textAlign="center"
                              borderRadius="6px"
                              fontSize="12px"
                              border="1px solid"
                              borderColor={
                                answer === '$14.40' && solutionOpen
                                  ? '#259767'
                                  : '#DDDDDA'
                              }
                              bg={
                                answer === '$14.40' && solutionOpen
                                  ? '#DEF3E7'
                                  : 'transparent'
                              }
                            >
                              {answer}
                            </Box>
                          ),
                        )}
                      </SimpleGrid>
                      <Box
                        mt="3"
                        pt="3"
                        borderTop="1px solid #DDDDDA"
                        fontSize="12px"
                        lineHeight="1.6"
                      >
                        <details
                          open={solutionOpen}
                          onToggle={(event) => {
                            setSolutionOpen(event.currentTarget.open)
                            setActive(1)
                            setPaused(true)
                          }}
                        >
                          <Box
                            as="summary"
                            cursor="pointer"
                            fontWeight="600"
                            color="#2C7755"
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                setSolutionOpen((open) => !open)
                                setActive(1)
                                setPaused(true)
                              }
                            }}
                          >
                            {solutionOpen
                              ? 'Worked answer · $14.40'
                              : 'Show worked answer'}
                          </Box>
                          <Text mt="2" color="#55555A">
                            Normalized EBITDA: $100m + $10m = $110m.
                          </Text>
                          <Text color="#55555A">
                            Enterprise value: 9.0× $110m = $990m.
                          </Text>
                          <Text color="#55555A">
                            Equity value: $990m − $300m + $60m − $30m = $720m.
                          </Text>
                          <Text color="#55555A">
                            Per share: $720m ÷ 50m = $14.40.
                          </Text>
                        </details>
                      </Box>
                    </>
                  ) : (
                    <>
                      <HStack justify="space-between">
                        <Text fontSize="11px" color="#66666B">
                          CONSISTENCY, VISUALIZED
                        </Text>
                        <Icon as={FiCheckCircle} color="#259767" />
                      </HStack>
                      <SimpleGrid columns={11} gap="4px" mt="5">
                        {Array.from({ length: 66 }, (_, i) => (
                          <Box
                            key={i}
                            aspectRatio="1"
                            borderRadius="3px"
                            bg={
                              i < (active === 2 ? 44 : 22)
                                ? ['#A7CEB5', '#60A67C', '#2E7550'][i % 3]
                                : '#E7E7E3'
                            }
                            transition="background-color 500ms ease"
                          />
                        ))}
                      </SimpleGrid>
                      <Text fontSize="12px" fontWeight="500" mt="4">
                        One day at a time. Every session counts.
                      </Text>
                    </>
                  )}
                </Box>
                <Text fontSize="sm" lineHeight="1.65" mt="5" color="#45454B">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          <Flex justify="center" align="center" flexWrap="wrap" gap="3" mt="5">
            <Text fontSize="xs" color="#626269">
              Illustrative prep flow. Actual screens may differ.
            </Text>
            {!reducedMotion && (
              <Button
                size="xs"
                variant="ghost"
                color="#45454B"
                leftIcon={paused ? <FiPlay /> : <FiPause />}
                onClick={() => setPaused(!paused)}
              >
                {paused ? 'Play preview' : 'Pause preview'}
              </Button>
            )}
          </Flex>
        </Box>
      </Box>
    </Section>
  )
}
