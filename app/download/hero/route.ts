import { NextResponse } from 'next/server'

import { APP_STORE_LINKS } from '#constants'

export function GET() {
  return NextResponse.redirect(APP_STORE_LINKS.ios)
}
