import { Analytics } from '@vercel/analytics/react'

import { MarketingLayout } from '#components/layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      {children}
      <Analytics />
    </MarketingLayout>
  )
}
