import { ColorModeScript, theme } from '@chakra-ui/react'
import { Metadata } from 'next'

import { Provider } from './provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.66daysprep.com'),
  title: '66 Days Prep - Daily Banking & Consulting Prep',
  description:
    '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
  openGraph: {
    title: '66 Days Prep - Daily Banking & Consulting Prep',
    description:
      '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
    siteName: '66 Days Prep',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '66 Days Prep - Daily Banking & Consulting Prep',
    description:
      '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
