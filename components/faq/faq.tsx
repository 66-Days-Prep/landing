import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { Section, SectionProps } from 'components/section'
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title: React.ReactNode
  description: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
  align?: 'left' | 'center' | { base: 'center'; md: 'left' }
}

export const Faq: React.FC<FaqProps> = (props) => {
  const { title, description, items = [], align: _align, ...rest } = props

  return (
    <Section id="faq" innerWidth="container.xl" {...rest}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, lg: 20 }}
        alignItems="start"
        position="relative"
        zIndex={1}
      >
        <Box maxW={{ base: '100%', lg: '420px' }} pt={{ base: 0, lg: 2 }}>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            lineHeight="0.95"
            letterSpacing="-0.045em"
            fontWeight="semibold"
            color="app.text.primary"
          >
            {title}
          </Heading>
          {description ? (
            <Text
              mt="5"
              fontSize={{ base: 'lg', md: 'xl' }}
              color="muted"
              lineHeight="1.55"
            >
              {description}
            </Text>
          ) : null}
        </Box>

        <Accordion
          defaultIndex={0}
          allowToggle
          borderTop="1px solid"
          borderColor="app.border.subtle"
        >
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              border="none"
              borderBottom="1px solid"
              borderColor="app.border.subtle"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    py={{ base: 4, md: 5 }}
                    px="0"
                    _hover={{ bg: 'transparent', color: 'primary.400' }}
                    _focusVisible={{
                      outline: '2px solid',
                      outlineColor: 'primary.400',
                      outlineOffset: '4px',
                    }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="app.text.primary"
                        letterSpacing="-0.02em"
                      >
                        {item.q}
                      </Text>
                    </Box>
                    <Icon
                      as={isExpanded ? HiOutlineMinusSmall : HiOutlinePlusSmall}
                      color="whiteAlpha.700"
                      boxSize="22px"
                      flexShrink={0}
                      ml="4"
                    />
                  </AccordionButton>
                  <AccordionPanel
                    pb={{ base: 4, md: 5 }}
                    px="0"
                    pt="0"
                    color="muted"
                    motionProps={{
                      transition: {
                        enter: { duration: 0.22, ease: 'easeInOut' },
                        exit: { duration: 0.22, ease: 'easeInOut' },
                      },
                    }}
                  >
                    <Text
                      whiteSpace="pre-line"
                      fontSize={{ base: 'md', md: 'lg' }}
                      lineHeight="1.65"
                    >
                      {item.a}
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </SimpleGrid>
    </Section>
  )
}
