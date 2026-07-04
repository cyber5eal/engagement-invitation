import { RsvpButton } from '@/components/rsvp-button'

function Ornament() {
  return (
    <div
      aria-hidden="true"
      className="my-[clamp(10px,2vw,18px)] flex items-center justify-center gap-3"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="text-gold-foil text-sm leading-none">✦</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}

export function InvitationCard() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[420px]
        flex-col
        items-center
        px-[10%]
        py-[25%]
        text-center
      "
    >
      {/* Header */}

      <p className="font-serif text-[clamp(0.65rem,2vw,0.75rem)] uppercase tracking-[0.45em] text-gold-foil">
        ENGAGEMENT
      </p>

      <h1 className="mt-[clamp(10px,2vw,18px)] font-heading font-medium leading-[0.9] tracking-tight text-[clamp(3rem,11vw,4.5rem)]">
        <span style={{ color: '#6B5A49' }}>Marc</span>
        <span className="mx-2 text-gold-foil">&amp;</span>
        <span style={{ color: '#6B5A49' }}>Karine</span>
      </h1>

      <p className="mt-[clamp(10px,2vw,18px)] font-serif italic leading-snug text-[#8B7966] text-[clamp(1.2rem,4vw,1.7rem)]">
        Two souls.
        <br />
        One love.
      </p>

      <Ornament />

      {/* Invitation */}

      <p className="max-w-[16rem] font-serif leading-relaxed text-[#5A4A3A] text-[clamp(0.92rem,3vw,1rem)]">
        Together with their families, request the pleasure of your company
        as they celebrate their engagement.
      </p>

      <blockquote className="mt-[clamp(18px,4vw,30px)] max-w-[17rem] font-serif italic leading-relaxed text-[#6B5A49] text-[clamp(1rem,3.7vw,1.3rem)]">
        “Therefore what God has joined together, let no one separate.”

        <cite className="mt-3 block text-[0.72rem] not-italic uppercase tracking-[0.32em] text-gold-foil">
          Matthew 19:6
        </cite>
      </blockquote>

      <Ornament />

      {/* Date */}

      <div className="mt-[clamp(16px,4vw,28px)] w-full">
        <div className="flex items-center justify-center gap-[clamp(18px,6vw,36px)]">
          <div className="text-right">
            <p
              className="font-cormorant leading-none text-[clamp(.9rem,3vw,1rem)]"
              style={{ color: '#6B5A49' }}
            >
              SATURDAY
            </p>

            <p
              className="mt-2 font-cormorant text-[clamp(1.2rem,4vw,1.5rem)]"
              style={{ color: '#6B5A49' }}
            >
              September 5, 2026
            </p>
          </div>

          <div
            className="h-16 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, #C9A35F, transparent)',
            }}
          />

          <div className="text-left">
            <p className="font-serif text-[clamp(1rem,3vw,1.2rem)] text-[#5A4A3A]">
              2:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Venue */}

      <div className="mt-[clamp(20px,5vw,34px)] space-y-1">
        <p
          className="font-cormorant leading-none text-[clamp(1.7rem,5vw,2rem)]"
          style={{ color: '#6B5A49' }}
        >
          Beit Jeddi
        </p>

        <p className="font-serif uppercase tracking-[0.42em] text-[#8B7966] text-[clamp(.75rem,2.4vw,.85rem)]">
          BSABA, LEBANON
        </p>
      </div>

      <Ornament />

      {/* RSVP */}

      <p className="max-w-[16rem] font-serif italic leading-relaxed text-[#6B5A49]/90 text-[clamp(1rem,3.2vw,1.2rem)]">
        Your presence would mean the world to us.
      </p>

      <p className="mt-2 text-[0.72rem] font-serif uppercase tracking-[0.32em] text-[#8B7966]">
        Kindly RSVP by August 15, 2026
      </p>

      <div className="mt-[clamp(16px,4vw,26px)] w-full flex justify-center">
        <RsvpButton />
      </div>
    </div>
  )
}