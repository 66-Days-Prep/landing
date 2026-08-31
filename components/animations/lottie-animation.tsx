'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import type { AnimationItem } from 'lottie-web'

import { useEffect, useRef } from 'react'

interface LottieAnimationProps extends BoxProps {
  path: string
  startFrame: number
  endFrame: number
  paused?: boolean
}

export function LottieAnimation({
  path,
  startFrame,
  endFrame,
  paused = false,
  ...boxProps
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(paused)
  const syncPlaybackRef = useRef<() => void>(() => {})

  useEffect(() => {
    pausedRef.current = paused
    syncPlaybackRef.current()
  }, [paused])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animation: AnimationItem | null = null
    let cancelled = false
    let isIntersecting = false
    let hasStarted = false
    let playForward = true
    let removeCompleteListener: (() => void) | undefined
    let removeReadyListener: (() => void) | undefined

    const canPlay = () =>
      !reducedMotion.matches &&
      !pausedRef.current &&
      isIntersecting &&
      document.visibilityState === 'visible'

    const playNextSegment = () => {
      if (!animation || !canPlay()) return

      animation.playSegments(
        playForward ? [startFrame, endFrame] : [endFrame, startFrame],
        true,
      )
      hasStarted = true
      playForward = !playForward
    }

    const syncPlayback = () => {
      if (!animation?.isLoaded) return

      if (reducedMotion.matches) {
        animation.stop()
        animation.goToAndStop(startFrame, true)
        hasStarted = false
        playForward = true
        return
      }

      if (!canPlay()) {
        animation.pause()
        return
      }

      if (hasStarted) {
        animation.play()
      } else {
        playNextSegment()
      }
    }

    const loadAnimation = async () => {
      if (animation || cancelled) return

      const { default: lottie } = await import(
        'lottie-web/build/player/lottie_light'
      )
      if (cancelled || animation || !containerRef.current) return

      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: true,
        },
      })
      animation.setSubframe(false)

      removeReadyListener = animation.addEventListener('DOMLoaded', () => {
        animation?.goToAndStop(startFrame, true)
        syncPlayback()
      })
      removeCompleteListener = animation.addEventListener(
        'complete',
        playNextSegment,
      )
    }

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting
        if (isIntersecting && !animation) {
          void loadAnimation()
          return
        }
        syncPlayback()
      },
      { rootMargin: '160px 0px' },
    )

    const syncDocumentVisibility = () => syncPlayback()
    syncPlaybackRef.current = syncPlayback

    visibilityObserver.observe(container)
    reducedMotion.addEventListener('change', syncPlayback)
    document.addEventListener('visibilitychange', syncDocumentVisibility)

    return () => {
      cancelled = true
      syncPlaybackRef.current = () => {}
      visibilityObserver.disconnect()
      reducedMotion.removeEventListener('change', syncPlayback)
      document.removeEventListener('visibilitychange', syncDocumentVisibility)
      removeReadyListener?.()
      removeCompleteListener?.()
      animation?.destroy()
    }
  }, [endFrame, path, startFrame])

  return <Box ref={containerRef} aria-hidden="true" {...boxProps} />
}
