'use client'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import {
  FiBriefcase,
  FiCheck,
  FiCopy,
  FiMic,
  FiTarget,
  FiZap,
} from 'react-icons/fi'

import { Section } from '#components/section'
import { Em } from '#components/typography'
import { sectionContentStyles } from '#theme/styles/section-styles'

const PREP_TAGS = [
  'Goldman Sachs',
  'McKinsey & Company',
  'Boston Consulting Group',
  'Bain & Company',
  'J.P. Morgan',
  'Morgan Stanley',
  'Bank of America',
  'Citi',
  'Barclays',
  'Evercore',
  'Lazard',
  'Blackstone',
  'KKR',
  'Deloitte',
  'Oliver Wyman',
  'Strategy&',
  'Kearney',
  'L.E.K. Consulting',
  'Accenture Strategy',
] as const

const cardStyles = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '26px',
  border: '1px solid',
  borderColor: 'app.border.subtle',
  bg: 'linear-gradient(145deg, rgba(245, 238, 221, 0.075) 0%, rgba(196, 176, 136, 0.028) 62%, rgba(245, 238, 221, 0.045) 100%)',
  backdropFilter: 'blur(18px) saturate(125%)',
  boxShadow:
    'inset 0 1px 0 rgba(245, 238, 221, 0.075), 0 16px 42px rgba(0, 0, 0, 0.16)',
  transition: 'transform 0.24s ease, border-color 0.24s ease, background 0.24s ease, box-shadow 0.24s ease',
  _before: {
    content: '""',
    position: 'absolute',
    top: '-90px',
    right: '-70px',
    w: '210px',
    h: '210px',
    borderRadius: 'full',
    bg: 'rgba(196, 176, 136, 0.08)',
    filter: 'blur(42px)',
    pointerEvents: 'none',
  },
  _hover: {
    transform: 'translateY(-3px)',
    borderColor: 'app.border.strong',
    bg: 'linear-gradient(145deg, rgba(245, 238, 221, 0.095) 0%, rgba(196, 176, 136, 0.04) 62%, rgba(245, 238, 221, 0.055) 100%)',
    boxShadow:
      'inset 0 1px 0 rgba(245, 238, 221, 0.1), 0 20px 50px rgba(0, 0, 0, 0.2)',
  },
} as const

function CardIcon({ icon }: { icon: React.ElementType }) {
  return (
    <Icon
      as={icon}
      boxSize="20px"
      color="primary.300"
      position="relative"
      zIndex={1}
    />
  )
}

export function HighlightsSection() {
  const { onCopy, hasCopied } = useClipboard('#66DaysPrep')

  return (
    <Box sx={sectionContentStyles}>
      <Section id="benefits" innerWidth="container.xl">
        <Box position="relative" zIndex={1} mb={{ base: 10, md: 14 }}>
          <Text
            mb="4"
            fontSize="sm"
            fontWeight="800"
            color="primary.300"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            Built for high-stakes recruiting
          </Text>
          <Heading
            as="h2"
            maxW="850px"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            lineHeight="0.96"
            letterSpacing="-0.05em"
            fontWeight="semibold"
            color="app.text.primary"
          >
            Everything you need to stay sharp for 66 days.
          </Heading>
          <Text
            mt="6"
            maxW="680px"
            color="app.text.muted"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="1.6"
          >
            Structured preparation for banking and consulting candidates who
            want stronger fundamentals, faster execution, and visible progress.
          </Text>
        </Box>

        <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 4, md: 5 }}>
          <GridItem
            colSpan={{ base: 12, lg: 7 }}
            minH={{ base: '360px', lg: '420px' }}
            p={{ base: 6, md: 8 }}
            sx={cardStyles}
          >
            <VStack align="stretch" h="full" spacing="6">
              <HStack justify="space-between" align="flex-start">
                <Text
                  color="primary.300"
                  fontSize="sm"
                  fontWeight="700"
                  letterSpacing="0.04em"
                  textTransform="uppercase"
                >
                  Complete preparation
                </Text>
                <CardIcon icon={FiBriefcase} />
              </HStack>
              <Heading
                as="h3"
                maxW="580px"
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight="1"
                letterSpacing="-0.045em"
                fontWeight="semibold"
                color="app.text.primary"
              >
                Master banking and consulting interviews.
              </Heading>
              <Text
                maxW="620px"
                color="app.text.muted"
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight="1.7"
              >
                Prepare for <Em>investment banking</Em>,{' '}
                <Em>management consulting</Em>, and <Em>corporate finance</Em>{' '}
                roles with case frameworks, financial modeling, behavioral
                techniques, and targeted practice.
              </Text>

              <HStack
                mt="auto"
                alignSelf="flex-start"
                spacing="2"
                pl="4"
                pr="1"
                py="1"
                borderRadius="full"
                border="1px solid"
                borderColor="app.border.subtle"
                bg="app.surface.subtle"
              >
                <Text color="app.text.secondary" fontSize="sm">
                  Build in public with <Text as="span" color="primary.300">#66DaysPrep</Text>
                </Text>
                <IconButton
                  icon={hasCopied ? <FiCheck /> : <FiCopy />}
                  aria-label="Copy 66 Days Prep hashtag"
                  onClick={onCopy}
                  variant="ghost"
                  size="sm"
                  isRound
                  color="app.text.primary"
                />
              </HStack>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 12, lg: 5 }}
            minH={{ base: '280px', lg: '420px' }}
            p={{ base: 6, md: 8 }}
            sx={cardStyles}
          >
            <VStack align="stretch" h="full" spacing="5">
              <HStack justify="space-between">
                <Text color="primary.300" fontSize="sm" fontWeight="700" textTransform="uppercase">
                  Daily practice
                </Text>
                <CardIcon icon={FiZap} />
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: '3xl', md: '4xl' }}
                lineHeight="1"
                letterSpacing="-0.04em"
                fontWeight="semibold"
                color="app.text.primary"
              >
                Drills that build speed and accuracy.
              </Heading>
              <Text color="app.text.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Timed market sizing, profitability, framework, and mental-math
                drills adapt to your level and reinforce analytical thinking.
              </Text>
              <Box mt="auto" pt="5" borderTop="1px solid" borderColor="app.border.subtle">
                <Text color="app.text.faint" fontSize="sm">Practice daily. Review model answers. Track improvement.</Text>
              </Box>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 12, lg: 5 }}
            minH={{ base: '280px', lg: '340px' }}
            p={{ base: 6, md: 8 }}
            sx={cardStyles}
          >
            <VStack align="stretch" h="full" spacing="5">
              <HStack justify="space-between">
                <Text color="primary.300" fontSize="sm" fontWeight="700" textTransform="uppercase">
                  AI mock interviews
                </Text>
                <CardIcon icon={FiMic} />
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: '3xl', md: '4xl' }}
                lineHeight="1"
                letterSpacing="-0.04em"
                fontWeight="semibold"
                color="app.text.primary"
              >
                Practice with a live AI interviewer.
              </Heading>
              <Text color="app.text.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Answer realistic banking and consulting questions by voice,
                respond to intelligent follow-ups, and receive a detailed
                evaluation of both what you said and how you delivered it.
                Review your scores, strengths, improvements, delivery metrics,
                and a stronger sample answer after every session.
              </Text>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 12, lg: 7 }}
            minH={{ base: '320px', lg: '340px' }}
            p={{ base: 6, md: 8 }}
            sx={cardStyles}
          >
            <VStack align="stretch" h="full" spacing="5">
              <HStack justify="space-between">
                <Text color="primary.300" fontSize="sm" fontWeight="700" textTransform="uppercase">
                  Firm-specific focus
                </Text>
                <CardIcon icon={FiTarget} />
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: '3xl', md: '4xl' }}
                lineHeight="1"
                letterSpacing="-0.04em"
                fontWeight="semibold"
                color="app.text.primary"
              >
                Target the firms that matter to you.
              </Heading>
              <Text color="app.text.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.65">
                Build focused preparation tracks for bulge-bracket banks, MBB,
                private equity, and other competitive career paths.
              </Text>
              <Wrap mt="auto" spacing="2.5">
                {PREP_TAGS.map((tag) => (
                  <Tag
                    key={tag}
                    borderRadius="full"
                    px="3.5"
                    py="1.5"
                    bg="rgba(196, 176, 136, 0.11)"
                    color="app.text.secondary"
                    border="1px solid"
                    borderColor="app.border.subtle"
                  >
                    {tag}
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          </GridItem>
        </Grid>
      </Section>
    </Box>
  )
}
