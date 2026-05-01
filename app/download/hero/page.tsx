
// app/download/hero/page.tsx
import { redirect } from 'next/navigation'

import { APP_STORE_LINKS } from '#constants'

export default function DownloadHero() {
  redirect(APP_STORE_LINKS.ios)
}
