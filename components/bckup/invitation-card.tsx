import { RsvpButton } from '@/components/rsvp-button'

function Ornament() {
  return (
    <div
      className="flex items-center justify-center gap-3 py-1"
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="text-gold-foil text-sm leading-none">✦</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}

export function InvitationCard() {
  return (
    <div className="relative flex flex-col items-center px-7 py-12 text-center sm:px-10 sm:py-14">
      <p className="font-serif text-[0.7rem] uppercase tracking-[0.42em] text-gold-foil">
        Engagement
      </p>

      {/* Names styled individually — only the ampersand carries gold,
          Marc and Karine sit in the deep editorial taupe for contrast
          against the ivory paper. */}
      <h1 className="mt-5 font-heading text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl">
        <span style={{ color: '#6B5A49' }}>Marc</span>
        <span className="text-gold-foil mx-2 align-middle">&amp;</span>
        <span style={{ color: '#6B5A49' }}>Karine</span>
      </h1>

<p className="mt-5 font-serif text-xl italic leading-snug text-[#8B7966] sm:text-2xl">
          Two souls.
        <br />
        One love.
      </p>

      <Ornament />

      <p className="max-w-xs font-serif text-[0.95rem] leading-relaxed text-[#5A4A3A]">
        Together with their families, request the pleasure of your company as
        they celebrate their engagement.
      </p>

      <blockquote className="mt-7 max-w-xs font-serif italic text-lg leading-relaxed text-[#6B5A49]">
        &ldquo;Therefore what God has joined together, let no one
        separate.&rdquo;
        <cite className="mt-2 block font-serif text-xs not-italic uppercase tracking-[0.28em] text-gold-foil">
          Matthew 19:6
        </cite>
      </blockquote>

      <Ornament />

      <div className="mt-6 w-full max-w-sm">

  <div className="flex items-center justify-center gap-8">

<div className="text-right">
  <p
    className="font-cormorant text-[0.9rem] leading-none"
    style={{ color: '#6B5A49' }}
  >
    SATURDAY
  </p>

  <p className="mt-2 font-cormorant text-[1.2rem]"
  style={{ color: '#6B5A49' }}
  >
    September 5, 2026
  </p>
</div>

    <div
      className="h-14 w-px"
      style={{
        background:
          "linear-gradient(to bottom, transparent, #C9A35F, transparent)",
      }}
    />

    <div className="text-left">
  <p className="mt-1 font-serif text-base text-[#5A4A3A]">
        2:00 PM
      </p>
    </div>
  </div>
</div>

      <div className="mt-8 space-y-1">
        <p className="font-cormorant text-[1.5rem] leading-none" style={{ color: '#6B5A49' }}>
          Beit Jeddi
        </p>
        <p className="font-serif text-[0.82rem] uppercase tracking-[0.45em] text-[#8B7966]">
          Bsaba, Lebanon
        </p>
      </div>

      <Ornament />

      <p className="max-w-[15rem] font-serif italic text-lg leading-relaxed text-[#6B5A49]/90">
        Your presence would mean the world to us.
      </p>
      <p className="mt-4 font-serif text-xs uppercase tracking-[0.3em] text-[#8B7966]">
        Kindly RSVP by August 15, 2026
      </p>

      <RsvpButton />
    </div>
  )
}
