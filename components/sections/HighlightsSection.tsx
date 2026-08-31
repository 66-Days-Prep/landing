'use client'

import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiCopy,
  FiMic,
  FiTarget,
  FiZap,
} from 'react-icons/fi'

import { Section } from '#components/section'

const card = {
  minW: 0,
  display: 'flex',
  flexDirection: 'column',
  p: { base: 5, md: 7 },
  bg: '#141416',
  border: '1px solid #242428',
  borderRadius: '14px',
  overflow: 'hidden',
} as const
const title = {
  fontSize: { base: '24px', md: '28px' },
  lineHeight: '1.1',
  letterSpacing: '-0.04em',
  fontWeight: '500',
} as const

export function HighlightsSection() {
  const { onCopy, hasCopied } = useClipboard('#66DaysPrep')
  return (
    <Section id="benefits" innerWidth="1200px" pt={{ base: 8, md: 10 }}>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(12,minmax(0,1fr))' }}
        gap="4"
      >
        <GridItem colSpan={{ base: 1, lg: 7 }} sx={card}>
          <HStack justify="space-between" mb="5">
            <Text
              color="app.text.muted"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Complete preparation
            </Text>
            <Icon as={FiBookOpen} color="primary.400" boxSize="22px" />
          </HStack>
          <Heading as="h2" sx={title}>
            Master the concepts.
            <br />
            Then put them to work.
          </Heading>
          <Wrap gap="2" mt="7" mb="6">
            {[
              'Valuation',
              'Case frameworks',
              'Financial modeling',
              'Behavioral questions',
            ].map((topic) => (
              <Box
                key={topic}
                px="3"
                py="2"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="7px"
                fontSize="sm"
                color="app.text.secondary"
              >
                {topic}
              </Box>
            ))}
          </Wrap>
          <Text fontSize="md" lineHeight="1.7" color="app.text.muted">
            Build strong fundamentals for investment banking, management
            consulting, and corporate finance with focused lessons and practical
            resources.
          </Text>
          <HStack
            mt="6"
            pt="4"
            borderTop="1px solid"
            borderColor="app.border.subtle"
            justify="space-between"
          >
            <Text fontSize="sm" color="app.text.secondary">
              Build your habit with{' '}
              <Box as="span" color="primary.400">
                #66DaysPrep
              </Box>
            </Text>
            <IconButton
              size="sm"
              variant="ghost"
              aria-label={
                hasCopied ? 'Hashtag copied' : 'Copy 66 Days Prep hashtag'
              }
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              onClick={onCopy}
            />
            <Box
              role="status"
              position="absolute"
              w="1px"
              h="1px"
              overflow="hidden"
            >
              {hasCopied ? 'Hashtag copied to clipboard' : ''}
            </Box>
          </HStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 5 }} sx={card}>
          <HStack justify="space-between" mb="5">
            <Text
              color="app.text.muted"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Daily drills
            </Text>
            <Icon as={FiZap} color="#F37F5B" boxSize="22px" />
          </HStack>
          <Heading as="h3" sx={title}>
            Small sessions.
            <br />
            Sharper thinking.
          </Heading>
          <Box
            mt="7"
            mb="6"
            p="4"
            bg="#0E0E10"
            borderRadius="10px"
            border="1px solid"
            borderColor="app.border.subtle"
          >
            {[
              'Mental math & market sizing',
              'Profitability & case frameworks',
              'Excel & technical questions',
            ].map((item, i) => (
              <HStack
                key={item}
                spacing="3"
                py="3"
                borderTop={i ? '1px solid' : undefined}
                borderColor="app.border.subtle"
              >
                <Icon as={FiCheck} color="primary.400" />
                <Text fontSize="sm" color="app.text.secondary">
                  {item}
                </Text>
              </HStack>
            ))}
          </Box>
          <Text fontSize="md" lineHeight="1.7" color="app.text.muted">
            Build speed and accuracy with timed practice. Review model answers,
            revisit weak spots, and make each session count.
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, lg: 5 }}
          sx={card}
          id="ai-practice"
          scrollMarginTop="112px"
        >
          <HStack justify="space-between" mb="5">
            <Text
              color="app.text.muted"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              AI mock interviews
            </Text>
            <Icon as={FiMic} color="#30AAD6" boxSize="22px" />
          </HStack>
          <Heading as="h3" sx={title}>
            Practice out loud.
            <br />
            Improve with feedback.
          </Heading>
          <Box
            aria-hidden="true"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5px"
            h="76px"
            my="5"
          >
            {[12, 24, 18, 38, 50, 30, 60, 42, 66, 34, 50, 24, 40, 20, 12].map(
              (height, i) => (
                <Box
                  key={i}
                  w="5px"
                  h={`${height}px`}
                  borderRadius="full"
                  bg={i > 4 && i < 10 ? '#30AAD6' : 'whiteAlpha.300'}
                />
              ),
            )}
          </Box>
          <Text fontSize="md" lineHeight="1.7" color="app.text.muted">
            Answer realistic questions by voice and respond to follow-ups.
            Review your scores, delivery, strengths, and a stronger sample
            answer after each session.
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 7 }} sx={card}>
          <HStack justify="space-between" mb="5">
            <Text
              color="app.text.muted"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Firm-specific focus
            </Text>
            <Icon as={FiTarget} color="#43CFA1" boxSize="22px" />
          </HStack>
          <Heading as="h3" sx={title}>
            Your target role.
            <br />
            Your preparation path.
          </Heading>
          <Text mt="5" fontSize="md" lineHeight="1.7" color="app.text.muted">
            Focus your effort on the skills your next interview will test, from
            bulge-bracket banking to MBB consulting and private equity.
          </Text>
          <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap="2" mt="6">
            {[
              'Investment banking',
              'Management consulting',
              'Corporate finance',
              'Private equity',
            ].map((role) => (
              <HStack
                key={role}
                justify="space-between"
                borderRadius="8px"
                border="1px solid"
                borderColor="app.border.subtle"
                bg="whiteAlpha.50"
                p="3"
              >
                <Text fontSize="sm">{role}</Text>
                <Icon as={FiArrowUpRight} color="app.text.faint" />
              </HStack>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Section>
  )
}
