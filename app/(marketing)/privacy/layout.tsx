import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 66 Days Prep',
  alternates: { canonical: '/privacy' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
