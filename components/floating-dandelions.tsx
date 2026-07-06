'use client'

import Image from 'next/image'

/**
 * Eight individually-cropped dandelion seed sprites (sliced from the
 * uploaded sprite sheet), each drifting on its own slow diagonal path.
 *
 * Rendered as a fixed, full-viewport layer sitting BELOW the envelope /
 * card (z-index 5, while <main> content sits at z-index 10+), so seeds
 * can never visually obstruct text — the opaque card simply covers
 * whatever passes behind it.
 */

type Seed = {
  src: string
  left: string
  top: string
  size: number
  duration: number
  delay: number
  opacity: number
  blur: number
  driftX: number
  driftY: number
  rot: number
}

const SEED_FILES = [
  '/images/dandelions/seed-1.png',
  '/images/dandelions/seed-2.png',
  '/images/dandelions/seed-3.png',
  '/images/dandelions/seed-4.png',
  '/images/dandelions/seed-5.png',
  '/images/dandelions/seed-6.png',
  '/images/dandelions/seed-7.png',
  '/images/dandelions/seed-8.png',
]

// Simple deterministic pseudo-random so server/client render match
// (no hydration mismatch) while still looking scattered.
function seededRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 10000
  return x - Math.floor(x)
}

function buildSeeds(): Seed[] {
  return [
    {
      src: SEED_FILES[0],
      left: '8%',
      top: '82%',
      size: 42,
      duration: 24,
      delay: -6,
      opacity: 0.45,
      blur: 0,
      driftX: 180,
      driftY: -220,
      rot: 18,
    },
    {
      src: SEED_FILES[1],
      left: '88%',
      top: '68%',
      size: 36,
      duration: 28,
      delay: -12,
      opacity: 0.35,
      blur: 0,
      driftX: -160,
      driftY: -180,
      rot: -12,
    },
    {
      src: SEED_FILES[2],
      left: '20%',
      top: '25%',
      size: 28,
      duration: 20,
      delay: -3,
      opacity: 0.28,
      blur: 0,
      driftX: 120,
      driftY: -120,
      rot: 10,
    },
    {
      src: SEED_FILES[3],
      left: '72%',
      top: '18%',
      size: 46,
      duration: 30,
      delay: -18,
      opacity: 0.40,
      blur: 0,
      driftX: -140,
      driftY: 110,
      rot: 22,
    },
    {
      src: SEED_FILES[4],
      left: '55%',
      top: '88%',
      size: 38,
      duration: 26,
      delay: -8,
      opacity: 0.30,
      blur: 0,
      driftX: 90,
      driftY: -190,
      rot: 14,
    },
    {
      src: SEED_FILES[5],
      left: '94%',
      top: '44%',
      size: 34,
      duration: 32,
      delay: -20,
      opacity: 0.32,
      blur: 1,
      driftX: -210,
      driftY: 80,
      rot: -18,
    },
    {
      src: SEED_FILES[6],
      left: '12%',
      top: '50%',
      size: 52,
      duration: 34,
      delay: -15,
      opacity: 0.22,
      blur: 1.3,
      driftX: 200,
      driftY: -140,
      rot: 16,
    },
    {
      src: SEED_FILES[7],
      left: '60%',
      top: '12%',
      size: 30,
      duration: 22,
      delay: -5,
      opacity: 0.42,
      blur: 0.5,
      driftX: -80,
      driftY: 170,
      rot: 8,
    },
  ]
}

export function FloatingDandelions() {
  const seeds = buildSeeds()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 60 }}
    >
      {seeds.map((s, i) => (
        <span
          key={i}
          className="animate-dandelion-drift absolute"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              filter: `blur(${s.blur}px)`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              '--seed-opacity': s.opacity,
              '--drift-x': `${s.driftX}px`,
              '--drift-y': `${s.driftY}px`,
              '--drift-rot': `${s.rot}deg`,
            } as React.CSSProperties
          }
        >
          <Image
            src={s.src}
            alt=""
            fill
            sizes="60px"
            className="object-contain"
          />
        </span>
      ))}
    </div>
  )
}
