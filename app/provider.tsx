'use client'

import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'

const darkColorModeManager = {
  type: 'localStorage' as const,
  get: () => 'dark' as const,
  set: () => {},
}

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme} colorModeManager={darkColorModeManager}>
      <AuthProvider>{props.children}</AuthProvider>
    </SaasProvider>
  )
}
