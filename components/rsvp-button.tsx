'use client'

const WHATSAPP_NUMBER = '96170971865'
const MESSAGE = encodeURIComponent(
  "Hello! I would love to RSVP for Marc & Karine's engagement celebration.",
)

export function RsvpButton() {
  const open = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`
    if (typeof window !== 'undefined' && window.self !== window.top) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
  }

  return (
    <button
      type="button"
      onClick={open}
      className="group relative mt-5 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-gold/50 px-9 py-3.5 text-[#FAF6EF] shadow-[0_10px_30px_-12px_rgba(107,90,73,0.55)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
      style={{ backgroundColor: '#6B5A49' }}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M12.04 2a9.9 9.9 0 0 0-8.42 15.15L2 22l4.97-1.3A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 0 16.2 8 8 0 0 1-4.08-1.12l-.29-.17-2.95.77.79-2.87-.19-.3A8.1 8.1 0 0 1 12.04 3.8Zm4.66 11.44c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span className="font-serif text-sm uppercase tracking-[0.28em]">
        RSVP via WhatsApp
      </span>
    </button>
  )
}
