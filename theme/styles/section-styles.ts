import { SystemStyleObject } from '@chakra-ui/react'

export const sectionContentStyles: SystemStyleObject = {
  '& h1, & h2, & h3, & h4, & h5, & h6, & .chakra-heading, & .chakra-text, & p, & span, & svg, & .chakra-icon': {
    position: 'relative',
    zIndex: 1,
  },
}

export const glassmorphicCardStyles: SystemStyleObject = {
  bg: 'rgba(245, 238, 221, 0.055)',
  backdropFilter: 'blur(12px)',
  borderRadius: '24px',
  borderWidth: '1px',
  borderColor: 'rgba(196, 176, 136, 0.14)',
  boxShadow: '0 4px 22px rgba(0, 0, 0, 0.2)',
  _hover: {
    bg: 'rgba(245, 238, 221, 0.08)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.24)',
  },
  transition: 'all 0.3s ease',
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
    bg: 'primary.500',
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
