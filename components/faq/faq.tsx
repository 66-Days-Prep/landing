import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import { Section, SectionProps } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
  align?: 'left' | 'center' | { base: 'center'; md: 'left' }
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently Asked Questions',
    description,
    items = [],
    align: _align,
    ...rest
  } = props

  return (
    <Section id="faq" innerWidth="container.xl" {...rest}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, lg: 20 }}
        alignItems="start"
        position="relative"
        zIndex={1}
      >
        <Box maxW={{ base: '100%', lg: '430px' }} pt={{ base: 0, lg: 2 }}>
          <Text
            mb="4"
            fontSize="sm"
            fontWeight="800"
            color="primary.300"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            FAQ
          </Text>
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
          <Text
            mt="5"
            fontSize={{ base: 'lg', md: 'xl' }}
            color="app.text.muted"
            lineHeight="1.6"
          >
            {description ||
              'Clear answers about the daily system, available tools, pricing, and supported devices.'}
          </Text>
        </Box>

        <Accordion allowToggle borderTop="1px solid" borderColor="app.border.subtle">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              border="none"
              borderBottom="1px solid"
              borderColor="app.border.subtle"
            >
              <AccordionButton
                py={{ base: 5, md: 6 }}
                px="0"
                _hover={{ bg: 'transparent', color: 'primary.300' }}
                _focus={{ boxShadow: 'none' }}
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
                <AccordionIcon color="app.text.muted" boxSize="24px" />
              </AccordionButton>
              <AccordionPanel
                pb={{ base: 5, md: 6 }}
                px="0"
                pt="0"
                color="app.text.muted"
              >
                <Text whiteSpace="pre-line" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                  {item.a}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </SimpleGrid>
    </Section>
  )
}
