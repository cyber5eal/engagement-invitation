'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { InvitationCard } from '@/components/invitation-card'
import backgroundScene from '@/images/flat-background.jpg'

type Props = {
  onFinished?: () => void
}

type Phase =
  | 'closed'
  | 'opening'
  | 'lifting'
  | 'expanding'
  | 'revealed'

export function EnvelopeScene({ onFinished }: Props) {
  const [phase, setPhase] = useState<Phase>('closed')

  const timers = useRef<number[]>([])
  const audioRef = useRef<HTMLAudioElement>(null)

  const paperExpanded =
    phase === 'expanding' ||
    phase === 'revealed'

  const playMusic = () => {
        if (!audioRef.current) return

        const audio = audioRef.current

        audio.volume = 0
        audio.play().catch(console.error)

        let volume = 0

            const fade = setInterval(() => {
         volume += 0.025

         if (volume >= 0.35) {
         volume = 0.35
        clearInterval(fade)
     }

    audio.volume = volume
  }, 100)
}
  const openEnvelope = () => {
    if (phase !== 'closed') return

    playMusic()

    setPhase('opening')

    timers.current.push(
      window.setTimeout(() => {
        setPhase('lifting')
      }, 650)
    )

    timers.current.push(
      window.setTimeout(() => {
        setPhase('expanding')
      }, 2300)
    )

    timers.current.push(
      window.setTimeout(() => {
        setPhase('revealed')
      }, 3800)
    )
  }

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout)
    }
  }, [])

  return (
  <div className="relative w-screen min-h-screen overflow-hidden">
 {/*    ===========================
        BACKGROUND
        ============================ */}

   <div className="absolute inset-0">
  <Image
    src="/images/flat-background.jpg"
    alt=""
    fill
    sizes="100vw"
    className="object-cover"
  />

  <div
    className="absolute inset-0"
    style={{
      background: "rgba(0, 0, 0, 0.12)",
    }}
  />
</div>


{/* ===========================
    WINDOW SHADOW
    =========================== */}

<div
  aria-hidden
  className="absolute inset-0 pointer-events-none"
  style={{
    zIndex: 2,
    opacity: .185,
    background: `
      linear-gradient(
        110deg,
        transparent 0%,
        transparent 18%,
        rgba(0, 0, 0, 0.48) 18%,
        rgba(0, 0, 0, 0.73) 22%,
        transparent 22%,
        transparent 42%,
        rgba(0, 0, 0, 0.96) 42%,
        rgba(0, 0, 0, 0.33) 46%,
        transparent 46%
      )
    `,
    filter: "blur(8px)",
    transform: "scale(1.5) rotate(-10deg)",
    transformOrigin: "top left",
  }}
/>

{/* ===========================
    AMBIENT LIGHT
    =========================== */}

<div
  aria-hidden
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(
        ellipse at 50% 18%,
        rgba(255,252,246,.95) 0%,
        rgba(248,242,232,.75) 40%,
        rgba(226,214,197,.95) 100%
      )
    `,
    zIndex: 0,
  }}
/>
   
{/* ===========================
    ENVELOPE GLOW
    =========================== */}

<div
  aria-hidden
  className="absolute left-1/2"
  style={{
    top: "48%",
    width: "85vw",
    maxWidth: 950,
    height: 700,

    transform: "translate(-50%,-50%)",

    background:
      "radial-gradient(rgba(255,248,235,.65), rgba(255,248,235,0) 72%)",

    filter: "blur(45px)",

    zIndex: 10,
  }}
/>
{/*   ===========================
          ENVELOPE
      ============================ */}

      <Image
  src={
    phase === 'closed'
      ? '/images/n-closed-env.png'
      : '/images/n-open-env.png'
  }
         alt="Envelope"
  fill
  priority
  className="object-contain pointer-events-none select-none"
  style={{
    zIndex: 1,

    filter:
      "drop-shadow(0 18px 30px rgba(0,0,0,.16))",

    opacity: phase === 'revealed' ? 0 : 1,

    transition:
      "opacity 700ms ease 450ms, filter 300ms ease",
  }}
/>


    {/* Vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 2,
        boxShadow: "inset 0 0 220px rgba(0,0,0,.10)",
      }}
    />

      {/* ===========================
          PAPER
        ============================ */}

      <div
        className="absolute left-1/2 relative"
        style={{
          top:
  phase === 'closed'
    ? 138
    : phase === 'opening'
    ? 138
    : phase === 'lifting'
    ? 86
    : 24 ,

          width: paperExpanded
            ? '96vw'
            : '340px',

          maxWidth: '450px',

          height: paperExpanded
  ? '1020px'
  : '460px',
  transform:
    phase === 'closed'
      ? 'translate(-50%,130px) scale(.18,.18)'
      : phase === 'opening'
      ? 'translate(-50%,130px) scale(.18,.18)'
      : phase === 'lifting'
      ? 'translate(-50%,0) scale(.82,.96)'
      : phase === 'expanding'
      ? 'translate(-50%,0) scale(1)'
      : 'translate(-50%,0) scale(1)',

  transformOrigin: 'top center',

  transition: `
    transform 1900ms cubic-bezier(.22,1,.36,1),
    width 800ms ease,
    height 800ms ease,
    top 800ms ease,
    opacity 250ms
  `,

  opacity: phase === 'closed' ? 0 : 1,

  zIndex: phase === 'lifting' ? 15 : 30,
}}
>

<Image
  src="/images/ripped-paper2.png"
  alt=""
  fill
  sizes="(max-width: 768px) 92vw, 430px"
  className="object-fill select-none pointer-events-none"
/>

                {/* INVITATION CONTENT */}

        <div
          className="absolute inset-0 justify-center"
          style={{
            opacity:
  phase === 'revealed'
    ? 1
    : 0,

transition:
  'opacity 700ms ease',

            pointerEvents:
              phase === 'revealed'
                ? 'auto'
                : 'none',
          }}
        >
          <div className="relative">
    <InvitationCard />
</div>
</div>
</div>

{/* ===========================
    BONDS
=========================== */}

{phase === 'closed' && (
  <button
  type="button"
  onClick={openEnvelope}
  className="absolute rings-float"
  style={{
    width: '20%',
    maxWidth: '92px',
    aspectRatio: '1 / 1',

    left: '50%',
    top: '54.5%',

    transform: 'translate(-50%, -50%)',

    zIndex: 30,

    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
  }}
>

    <Image
  src="/images/bonds.png"
  alt="Engagement Rings"
  fill
  sizes="92px"
  priority
  className="object-contain rings-breathe"
/>
  </button>
  
)}
<div
  aria-hidden
  className="absolute left-1/2 pointer-events-none"
  style={{
    top: '56%',
    width: 180,
    height: 180,

    transform: 'translate(-50%, -50%)',

    background:
      'radial-gradient(circle, rgba(223,185,92,.22) 0%, rgba(223,185,92,.08) 45%, rgba(223,185,92,0) 75%)',

    filter: 'blur(30px)',

    opacity: phase === 'closed' ? 1 : 0,

    transition: 'opacity .4s ease',

    zIndex: 25,
  }}
/>
 {/* ===========================
      ENVELOPE SHADOW
     ============================ */}
      <div
        aria-hidden
        className="absolute left-1/2"
        style={{
          bottom: 18,
          width: '72%',
          height: 34,

          transform: 'translateX(-50%)',

          borderRadius: '50%',

          background:
            'radial-gradient(rgba(0,0,0,.18), rgba(0,0,0,0))',

          opacity:
            phase === 'closed'
              ? .45
              : phase === 'opening'
              ? .38
              : .18,

          filter: 'blur(14px)',

          transition: 'opacity 800ms ease',

          zIndex: 0,
        }}
      />

      {/* ===========================
          PAPER SHADOW
         ============================ */}

      <div
        aria-hidden
        className="absolute left-1/2"
        style={{
          top:
            paperExpanded
              ? 46
              : 96,

          width:
            paperExpanded
              ? '84%'
              : '63%',

          height:
            paperExpanded
              ? 48
              : 34,

          transform:
            'translateX(-50%)',

          borderRadius: '50%',

          background:
            'radial-gradient(rgba(0,0,0,.14), rgba(0,0,0,0))',

          opacity:
            phase === 'closed'
              ? 0
              : .85,

          filter:
            'blur(18px)',

          transition:
            'all 900ms ease',

          zIndex: 5,
        }}
      />
{/* ===========================
    DIRECTIONAL LIGHT
    =========================== */}

<div
  aria-hidden
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,.35) 0%,
        rgba(255,255,255,.12) 28%,
        rgba(255,255,255,0) 55%
      )
    `,
    mixBlendMode: "screen",
    zIndex: 24,
    
  }}
  
/>
<div
  aria-hidden
  className="absolute inset-0 pointer-events-none"
  style={{
    boxShadow:
      "inset 0 0 180px rgba(0,0,0,.12)",

    zIndex: 24,
  }}
/>
      {/* ===========================
          LIGHT OVERLAY
         ============================ */}

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,.18), rgba(255,255,255,0))',

          opacity:
            phase === 'closed'
              ? 1
              : .55,

          transition:
            'opacity 900ms ease',

          zIndex: 25,
        }}
      />    
      <audio
  ref={audioRef}
  preload="auto"
  loop
>
  <source src="/audio/zaffe-blossom.mp3" type="audio/mpeg" />
</audio>
</div>
  )
}