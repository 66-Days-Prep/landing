import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
import {
  COMPANY_LINKS,
  INTERNAL_ROUTES,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from '#constants'

const siteConfig = {
  logo: Logo,
  seo: {
    title: '66 Days Prep',
    description:
      '66 Days Prep is an AI-powered daily prep system for students and professionals preparing for banking and consulting interviews.',
  } as NextSeoProps,
  termsUrl: INTERNAL_ROUTES.terms,
  privacyUrl: INTERNAL_ROUTES.privacy,
  header: {
    links: [
      {
        id: 'benefits',
        label: 'Features',
      },
      {
        id: 'features',
        label: 'How To Use',
      },
      {
        id: 'testimonials',
        label: 'Reviews',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'Help',
      },
      {
        label: 'Download',
        href: INTERNAL_ROUTES.downloadHero,
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Developed by <Link href={COMPANY_LINKS.website}>Uru Technologies LLC</Link>{' '}
        © 2025-2026 • All Rights Reserved
      </>
    ),
    links: [
      {
        href: `mailto:${SUPPORT_EMAIL}`,
        label: 'Contact',
      },
      {
        href: INTERNAL_ROUTES.terms,
        label: 'Terms of Service',
      },
      {
        href: INTERNAL_ROUTES.privacy,
        label: 'Privacy Policy',
      },
      {
        href: SOCIAL_LINKS.linkedin,
        label: <FaLinkedinIn size="18" />,
      },
      {
        href: SOCIAL_LINKS.tiktok,
        label: <FaTiktok size="18" />,
      },
      {
        href: SOCIAL_LINKS.instagram,
        label: <FaInstagram size="18" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
