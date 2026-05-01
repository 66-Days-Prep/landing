'use client'

import { Box, Stack } from '@chakra-ui/react'
import { useMemo } from 'react'

import { Testimonial, Testimonials } from '#components/testimonials'
import testimonials from '#data/testimonials'
import {
  glassmorphicCardStyles,
  sectionContentStyles,
} from '#theme/styles/section-styles'

export function TestimonialsSection() {
  const columns = useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (cols, t, i) => {
        cols[i % 3].push(t)
        return cols
      },
      [[], [], []],
    )
  }, [])

  return (
    <Box sx={sectionContentStyles}>
      <Testimonials
        id="testimonials"
        title={testimonials.title}
        columns={[1, 2, 3]}
        innerWidth="container.xl"
      >
        <>
          {columns.map((column, i) => (
            <Stack key={i} spacing="8" position="relative" zIndex={1}>
              {column.map((t, j) => (
                <Testimonial
                  key={j}
                  {...t}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    ...glassmorphicCardStyles,
                  }}
                />
              ))}
            </Stack>
          ))}
        </>
      </Testimonials>
    </Box>
  )
}
