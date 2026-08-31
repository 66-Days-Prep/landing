import { Metadata, Viewport } from 'next'

import {
  APP_STORE_LINKS,
  ASSETS,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from '#constants'

import { Provider } from './provider'

const baseUrl = 'https://www.66daysprep.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: '66 Days Prep - Daily Banking & Consulting Prep',
  description:
    '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
  openGraph: {
    title: '66 Days Prep - Daily Banking & Consulting Prep',
    description:
      '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
    siteName: '66 Days Prep',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '66 Days Prep — Your daily edge in banking and consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
    title: '66 Days Prep - Daily Banking & Consulting Prep',
    description:
      '66 Days Prep is an AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0E0E10',
  viewportFit: 'cover',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '66 Days Prep',
  url: baseUrl,
  logo: `${baseUrl}${ASSETS.images.logo}`,
  description:
    'AI-powered daily preparation app for banking and consulting interviews.',
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.tiktok,
    SOCIAL_LINKS.instagram,
    APP_STORE_LINKS.ios,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: SUPPORT_EMAIL,
    contactType: 'customer support',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '66 Days Prep',
  url: baseUrl,
  description:
    'Daily banking and consulting interview preparation with AI-powered drills, streaks, and resume review.',
  publisher: {
    '@type': 'Organization',
    name: '66 Days Prep',
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '66 Days Prep',
  operatingSystem: 'iOS',
  applicationCategory: 'EducationApplication',
  description:
    'AI-powered daily prep system for banking and consulting interviews, with practice drills, streak tracking, resume review, and focused study tools.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free download available',
  },
  downloadUrl: APP_STORE_LINKS.ios,
}

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = 'dark'

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <meta name="color-scheme" content={colorMode} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
