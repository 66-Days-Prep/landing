'use client'

import { Box } from '@chakra-ui/react'

import { Faq } from '#components/faq'
import faq from '#data/faq'
import { sectionContentStyles } from '#theme/styles/section-styles'

export function FaqSection() {
  return (
    <Box sx={sectionContentStyles}>
      <Faq {...faq} align="center" />
    </Box>
  )
}
