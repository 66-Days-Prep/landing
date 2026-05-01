//app/(marketing)/layout.tsx

import { MarketingLayout } from '#components/layout'
import { Analytics } from '@vercel/analytics/react'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MarketingLayout
      announcementProps={{
        title: '🌸 Spring Back to School Offer',
        description:
          'LIMITED TIME ONLY!<span style="display:inline-flex;align-items:center;margin-left:12px;padding:2px 8px;border-radius:0;background:#000;color:#fff;font-weight:700;letter-spacing:0.02em;">50% OFF</span>',
        href: '/#pricing',
      }}
    >
      {props.children}
      <Analytics />
    </MarketingLayout>
  )
}
