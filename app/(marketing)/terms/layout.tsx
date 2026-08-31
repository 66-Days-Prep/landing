import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | 66 Days Prep',
  alternates: { canonical: '/terms' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
