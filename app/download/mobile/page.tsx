// app/download/mobile/page.tsx
import { redirect } from 'next/navigation'

import { APP_STORE_LINKS } from '#constants'

export default function DownloadMobile() {
  redirect(APP_STORE_LINKS.ios)
}
