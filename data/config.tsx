import type { NextSeoProps } from 'next-seo'

import { INTERNAL_ROUTES } from '#constants'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: '66 Days Prep',
    description:
      'Daily banking and consulting interview preparation with focused lessons, practice drills, AI feedback, and progress tracking.',
  } as NextSeoProps,
  termsUrl: INTERNAL_ROUTES.terms,
  privacyUrl: INTERNAL_ROUTES.privacy,
  header: {
    links: [
      { id: 'benefits', label: 'Features' },
      { id: 'features', label: 'How to use' },
      { id: 'testimonials', label: 'Reviews' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'faq', label: 'Help' },
    ],
  },
}
export default siteConfig
