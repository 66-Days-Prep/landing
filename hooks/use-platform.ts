'use client'

import { useEffect, useState } from 'react'

export type Platform = 'ios' | 'android' | 'desktop'

export function usePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>('desktop')

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
    const isAndroid = /android/i.test(userAgent)

    if (isIOS) {
      setPlatform('ios')
    } else if (isAndroid) {
      setPlatform('android')
    } else {
      setPlatform('desktop')
    }
  }, [])

  return platform
}
