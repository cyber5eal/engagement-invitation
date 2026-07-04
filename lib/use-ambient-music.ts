'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const TRACK_SRC = '/audio/zaffe-blossom.mp3'
const TARGET_VOLUME = 1
const FADE_MS = 2200

/**
 * Ambient background music for the invitation.
 *
 * - start(): called on the user's first interaction (tapping the wax
 *   seal). Browsers block true autoplay-with-sound until a gesture, so
 *   this is the reliable trigger; if the browser *does* allow autoplay
 *   (some mobile/webview contexts embedding this page do), the effect
 *   below also makes a best-effort silent attempt on mount.
 * - toggle(): pause/resume, used by the on-screen music button.
 * - Loops indefinitely, fades in smoothly rather than starting abruptly.
 *
 * NOTE: If your project already has a `lib/use-ambient-music.ts`, this
 * file replaces it 1:1 — same exported shape ({ start, toggle, playing }) —
 * so no other file needs to change.
 */
export function useAmbientMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeFrame = useRef<number | null>(null)
  const [playing, setPlaying] = useState(false)

  const fadeTo = useCallback((audio: HTMLAudioElement, target: number) => {
    if (fadeFrame.current) cancelAnimationFrame(fadeFrame.current)
    const startVolume = audio.volume
    const startTime = performance.now()

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / FADE_MS)
      audio.volume = startVolume + (target - startVolume) * t
      if (t < 1) {
        fadeFrame.current = requestAnimationFrame(step)
      }
    }
    fadeFrame.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const audio = new Audio(TRACK_SRC)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0
    audioRef.current = audio

    // Best-effort silent autoplay attempt for contexts that permit it.
    audio
      .play()
      .then(() => {
        fadeTo(audio, TARGET_VOLUME)
        setPlaying(true)
      })
      .catch(() => {
        // Autoplay blocked — will start on the seal-tap gesture instead.
      })

    return () => {
      if (fadeFrame.current) cancelAnimationFrame(fadeFrame.current)
      audio.pause()
      audioRef.current = null
    }
  }, [fadeTo])

  const start = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused && audio.volume > 0) return

    audio
      .play()
      .then(() => {
        fadeTo(audio, TARGET_VOLUME)
        setPlaying(true)
      })
      .catch(() => {
        // Ignore — user can still use the manual toggle button.
      })
  }, [fadeTo])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          fadeTo(audio, TARGET_VOLUME)
          setPlaying(true)
        })
        .catch(() => {})
    } else {
      fadeTo(audio, 0)
      window.setTimeout(() => {
        audio.pause()
        setPlaying(false)
      }, FADE_MS)
    }
  }, [fadeTo])

  return { start, toggle, playing }
}
