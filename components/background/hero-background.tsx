import { Box } from '@chakra-ui/react'

export function HeroBackground() {
  return (
    <Box
      aria-hidden="true"
      position="absolute"
      inset="0"
      pointerEvents="none"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(ellipse at 50% 30%, rgba(93,112,148,0.12), transparent 62%), linear-gradient(180deg, #131315, #0E0E10)"
      />
      {(['left', 'right'] as const).map((side) => (
        <Box
          key={side}
          position="absolute"
          insetY="0"
          left={side === 'left' ? 0 : undefined}
          right={side === 'right' ? 0 : undefined}
          width="50%"
          opacity="0.16"
          backgroundImage="url('/static/backgrounds/hero-side-beams.svg')"
          backgroundSize="cover"
          backgroundPosition="center top"
          transform={side === 'right' ? 'scaleX(-1)' : undefined}
          sx={{ maskImage: 'linear-gradient(black 45%, transparent 100%)' }}
        />
      ))}
    </Box>
  )
}
