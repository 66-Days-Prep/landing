'use client'

import { Box, Stack } from '@chakra-ui/react'
import { useMemo } from 'react'

import { Testimonial, Testimonials } from '#components/testimonials'
import testimonials from '#data/testimonials'
import { sectionContentStyles } from '#theme/styles/section-styles'

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
        description={testimonials.description}
        columns={{ base: 1, md: 2, lg: 3 }}
        innerWidth="container.xl"
      >
        <>
          {columns.map((column, i) => (
            <Stack key={i} spacing="5" position="relative" zIndex={1}>
              {column.map((t, j) => (
                <Testimonial
                  key={j}
                  {...t}
                  sx={{
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    bg: 'linear-gradient(145deg, rgba(245, 238, 221, 0.075) 0%, rgba(196, 176, 136, 0.028) 62%, rgba(245, 238, 221, 0.045) 100%)',
                    backdropFilter: 'blur(18px) saturate(125%)',
                    borderRadius: '22px',
                    borderWidth: '1px',
                    borderColor: 'app.border.subtle',
                    boxShadow:
                      'inset 0 1px 0 rgba(245, 238, 221, 0.075), 0 14px 36px rgba(0, 0, 0, 0.14)',
                    transition:
                      'transform 0.24s ease, border-color 0.24s ease, background 0.24s ease, box-shadow 0.24s ease',
                    _hover: {
                      transform: 'translateY(-3px)',
                      borderColor: 'app.border.strong',
                      bg: 'linear-gradient(145deg, rgba(245, 238, 221, 0.095) 0%, rgba(196, 176, 136, 0.04) 62%, rgba(245, 238, 221, 0.055) 100%)',
                      boxShadow:
                        'inset 0 1px 0 rgba(245, 238, 221, 0.1), 0 18px 44px rgba(0, 0, 0, 0.18)',
                    },
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
