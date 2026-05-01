'use client'

import {
  Box,
  Flex,
  IconButton,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { FiCheck, FiCopy } from 'react-icons/fi'

import { Highlights, HighlightsItem } from '#components/highlights'
import { Em } from '#components/typography'
import {
  glassmorphicCardStyles,
  sectionContentStyles,
} from '#theme/styles/section-styles'

const PREP_TAGS = [
  'Goldman Sachs',
  'McKinsey & Company',
  'Boston Consulting Group',
  'Bain & Company',
  'J.P. Morgan',
  'Morgan Stanley',
  'Blackstone',
  'KKR',
  'Deloitte',
] as const

export function HighlightsSection() {
  const { onCopy, hasCopied } = useClipboard('#66DaysPrep')

  return (
    <Box sx={sectionContentStyles}>
      <Highlights>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Master Banking & Consulting Interviews"
        >
          <VStack alignItems="flex-start" spacing="8" position="relative" zIndex={1}>
            <Text color="muted" fontSize="xl">
              Get ready for <Em>investment banking</Em>,{' '}
              <Em>management consulting</Em>, and <Em>corporate finance</Em>{' '}
              roles with our comprehensive prep program. Learn case study
              frameworks, financial modeling, and behavioral interview
              techniques from industry experts.
            </Text>

            <Flex
              rounded="full"
              flexDirection="row"
              alignItems="center"
              py="1"
              ps={{ base: 5, md: 8 }}
              pe="2"
              sx={glassmorphicCardStyles}
            >
              <Box>
                <Text color="primary.300" display="inline">
                  landedjob
                </Text>{' '}
                <Text color="primary.100" display="inline">
                  #66DaysPrep
                </Text>
              </Box>
              <IconButton
                icon={hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy hashtag"
                onClick={onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </Flex>
          </VStack>
        </HighlightsItem>

        <HighlightsItem title="Industry Insights">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Stay updated with the latest trends in banking and consulting. Our
            content covers market analysis, industry changes, and what top firms
            are really looking for in candidates.
          </Text>
        </HighlightsItem>

        <HighlightsItem title="Daily Drills">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Timed drills covering market sizing, profitability, frameworks, and
            mental math designed to strengthen analytical thinking and
            quantitative reasoning with model answers that build both speed and
            accuracy tailored to your level.
          </Text>
        </HighlightsItem>

        <HighlightsItem colSpan={[1, null, 2]} title="Target Your Dream Firm">
          <Text color="muted" fontSize="lg" position="relative" zIndex={1}>
            Whether you&apos;re aiming for bulge bracket banks or MBB consulting
            firms, we have specialized prep tracks for different career paths
            and firm types.
          </Text>
          <Wrap mt="8" position="relative" zIndex={1}>
            {PREP_TAGS.map((tag) => (
              <Tag
                key={tag}
                variant="subtle"
                colorScheme="primary"
                rounded="full"
                px="3"
              >
                {tag}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
      </Highlights>
    </Box>
  )
}
