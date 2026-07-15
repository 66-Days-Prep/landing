import { SystemStyleObject } from '@chakra-ui/react'

export const sectionContentStyles: SystemStyleObject = {
  '& h1, & h2, & h3, & h4, & h5, & h6, & .chakra-heading, & .chakra-text, & p, & span, & svg, & .chakra-icon': {
    position: 'relative',
    zIndex: 1,
  },
}

export const glassmorphicCardStyles: SystemStyleObject = {
  bg: 'app.surface.card',
  backdropFilter: 'blur(18px) saturate(125%)',
  borderRadius: '24px',
  borderWidth: '1px',
  borderColor: 'app.border.subtle',
  boxShadow: 'inset 0 1px 0 rgba(245, 238, 221, 0.075), 0 14px 38px rgba(0, 0, 0, 0.16)',
  _hover: {
    bg: 'app.surface.cardHover',
    borderColor: 'app.border.strong',
    transform: 'translateY(-3px)',
    boxShadow: 'inset 0 1px 0 rgba(245, 238, 221, 0.1), 0 18px 44px rgba(0, 0, 0, 0.2)',
  },
  transition: 'transform 0.24s ease, border-color 0.24s ease, background 0.24s ease, box-shadow 0.24s ease',
}

export const pulseAnimation = {
  '@keyframes pulseRing': {
    '0%': {
      opacity: 0.22,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.28,
      transform: 'scale(2.15)',
    },
    '100%': {
      opacity: 0.22,
      transform: 'scale(1)',
    },
  },
}

export const statusDotPulseStyles: SystemStyleObject = {
  position: 'relative',
  borderRadius: 'full',
  _before: {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'full',
    bg: 'primary.500',
    opacity: 0.22,
    transformOrigin: 'center',
    animation: 'pulseRing 1.9s ease-in-out infinite',
  },
}

export const heroPulseAnimation: SystemStyleObject = {
  position: 'relative',
  borderRadius: 'full',
  _before: {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'full',
    bg: 'green.500',
    opacity: 0.22,
    transformOrigin: 'center',
    animation: 'heroPulseRing 1.9s ease-in-out infinite',
  },
  '@keyframes heroPulseRing': {
    '0%': {
      opacity: 0.22,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.24,
      transform: 'scale(1.7)',
    },
    '100%': {
      opacity: 0.22,
      transform: 'scale(1)',
    },
  },
}
