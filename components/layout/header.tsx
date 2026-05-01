import {
  Box,
  BoxProps,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import * as React from 'react'
import { Logo } from './logo'
import Navigation from './navigation'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}
  const { scrollY } = useScroll()
  
  React.useEffect(() => {
    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])
  
  const bg = useColorModeValue('rgba(245, 238, 221, 0.78)', 'rgba(24, 19, 15, 0.78)')
  
  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="rgba(196, 176, 136, 0.14)"
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ''}
      boxShadow={y > height ? 'md' : ''}
      borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      {/* Reduced base padding, increased padding only on large screens */}
      <Container maxW="container.xl" px={{ base: "4", lg: "12" }}> 
        <Flex width="full" position="relative" py="4">
          {/* Logo positioned flush left on mobile, with inset on desktop */}
          <Box
            position="absolute"
            left={{ base: "0", lg: "8" }}
            top="50%"
            transform="translateY(-50%)"
          >
            <Logo
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              }}
            />
          </Box>
          
          {/* Navigation */}
          <Box width="full">
            <Navigation centerLinks={true} insetButtons={true} mobileMode={true} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
