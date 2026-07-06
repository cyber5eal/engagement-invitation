import { RsvpButton } from '@/components/rsvp-button'
import { Clock3, MapPin } from "lucide-react"

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
  
  const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Beit+Jeddi+Bsaba+Lebanon"
 
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[360px]
        flex-col
        items-center
        px-[14%]
        py-[20%]
        text-center
      "
    >
      {/* Header */}

      <p className="font-serif text-[clamp(1.5rem,2.6vw,1.15rem)] uppercase tracking-[0.62em] text-gold-foil">
  ENGAGEMENT
</p>

      <h1 className="mt-[clamp(18px,3vw,38px)] font-heading font-medium leading-[0.9] tracking-tight text-[clamp(1.8rem,7vw,2.6rem)]">
        <span style={{ color: '#6B5A49' }}>Marc</span>
        <span
          className="mx-3 text-gold-foil"
          style={{
          fontSize: '.82em',
           }}
          >
          &amp; 
          </span>
        <span style={{ color: '#6B5A49' }}>Karine</span>
      </h1>

      <p className="mt-[clamp(20px,4vw,34px)] font-serif italic leading-snug text-[#8B7966] text-[clamp(1.2rem,4vw,1.7rem)]">
        Two souls.
        One journey.
      </p>

      <Ornament />

      {/* Invitation */}

      <p className="max-w-[18rem] font-serif leading-[2.15] text-[#5A4A3A] text-[clamp(0.92rem,3vw,1rem)]">
        With great joy, we invite you to celebrate our engagement and share this special moment with us.
      </p>

      <blockquote className="mt-[clamp(34px,6vw,54px)] mb-[clamp(24px,5vw,40px)] max-w-[17rem] font-serif italic leading-[1.9] text-[#6B5A49] text-[clamp(1rem,3.7vw,1.3rem)]">
        “Therefore what God has joined together, let no one separate.”

        <cite className="mt-3 block text-[0.72rem] not-italic uppercase tracking-[0.32em] text-gold-foil">
          Matthew 19:6
        </cite>
      </blockquote>

      <Ornament />

      {/* Date */}

      <div className="mt-[clamp(16px,4vw,28px)] w-full">
        <div className="flex items-center justify-center gap-[clamp(18px,6vw,36px)]"
        >
          <div className="text-right">
            <p
              className="font-cormorant leading-none text-[clamp(.9rem,3vw,1rem)]"
              style={{ color: '#6B5A49' }}
            >
              SATURDAY
            </p>

            <p
              className="font-cormorant leading-none text-[clamp(.9rem,3vw,1rem)]"
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

          <div className="mt-1 flex items-center justify-center gap-3 text-[#6B5A49]">
  <Clock3
    size={18}
    strokeWidth={1.7}
    color="#C9A35F"
  />

  <span className="font-serif text-lg">
    8:00 PM
  </span>
</div>
        </div>
      </div>


{/* Venue */}

<div className="mt-12 flex justify-center">
  <a
    href={mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group
    flex
    items-center
    gap-3

    rounded-2xl

    border
    border-[#D4B06A]/60

    bg-white/20
    backdrop-blur-[2px]

    px-6
    py-4

    shadow-sm

    transition-all
    duration-300

    active:scale-95
"
style={{
  boxShadow:
    "0 0 0 1px rgba(212,176,106,.12), 0 4px 12px rgba(0,0,0,.05)",
}}
  >
    <MapPin
      size={20}
      strokeWidth={1.8}
      color="#C9A35F"
          className="relative -top-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
  />


    <div className="text-left">
    <p className="font-serif text-lg text-[#6B5A49] transition-colors group-hover:text-[#C9A35F]">
      Beit Jeddi
    </p>

    <p className="text-sm uppercase tracking-[0.25em] text-[#8B7966]">
      Bsaba, Lebanon
    </p>
  </div>
  </a>
</div>

      <Ornament />

{/* RSVP */}

      <p className="mt-10 max-w-[18rem] font-serif italic leading-[1.9] text-[#6B5A49]/90 text-[clamp(1rem,3.2vw,1.2rem)]">
        Your presence would complete our celebration
      </p>

      <div className="mt-[clamp(30px,6vw,44px)] mb-15 w-full flex justify-center">
        <RsvpButton />
      </div>
    </div>
  )
}