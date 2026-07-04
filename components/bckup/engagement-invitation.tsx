'use client'

import Image from 'next/image'

type Props = {
  opening: boolean
  onOpen: () => void
}

export function EnvelopeScene({ opening, onOpen }: Props) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 420,
        height: 300,
      }}
    >
      {/* PAPER */}

      <Image
        src="/images/ripped-paper.png"
        alt=""
        width={340}
        height={460}
        priority
        className="absolute left-1/2"
        style={{
          bottom: opening ? "32%" : "-52%",
          transform: "translateX(-50%)",
          transition:
            "bottom 1800ms cubic-bezier(.22,1,.36,1)",
          zIndex:10,
        }}
      />

      {/* ENVELOPE */}

      <Image
        src={
          opening
            ? "/images/Envelope-open.png"
            : "/images/Closed-envelope.png"
        }
        alt=""
        fill
        priority
        className="object-contain"
        style={{
          zIndex:20,
        }}
      />

      {/* SEAL */}

      {!opening && (
        <button
          onClick={onOpen}
          className="absolute left-1/2 top-1/2"
          style={{
            transform:
              "translate(-50%,20px)",
            zIndex:30,
          }}
        >
          <Image
            src="/images/seal.png"
            alt=""
            width={94}
            height={94}
          />
        </button>
      )}
    </div>
  )
}