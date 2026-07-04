import Image from 'next/image'

/**
 * Pressed botanical details tucked beneath the invitation card's edges —
 * three baby's breath sprigs + two dried flowers, as though physically
 * pressed into the handmade paper. Purely decorative, kept low-opacity
 * and behind the card's own text (card content sits in a later DOM
 * layer / higher stacking order via the card's own z-index), and never
 * placed near the card's text column.
 *
 * Mount this INSIDE the same relatively-positioned wrapper that holds
 * the invitation card, as a sibling that renders before the card, e.g.:
 *
 *   <div className="relative ...">
 *     <BotanicalDecor />
 *     <div className="deckle relative ... shadow-...">  {card}  </div>
 *   </div>
 */
export function BotanicalDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Baby's breath — lower-left, peeking from under the card */}
      <div
        className="pressed-botanical absolute"
        style={{
          left: '-9%',
          bottom: '-6%',
          width: '42%',
          maxWidth: 150,
          transform: 'rotate(-14deg)',
          zIndex: 20,
        }}
      >
        <Image
          src="/images/botanical/baby-breath.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* Baby's breath — upper-right, tucked behind the top corner */}
      <div
        className="pressed-botanical absolute"
        style={{
          right: '-7%',
          top: '-8%',
          width: '42%',
          maxWidth: 120,
          transform: 'rotate(18deg) scaleX(-1)',
          zIndex: -1,
        }}
      >
        <Image
          src="/images/botanical/baby-breath.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* Baby's breath — small accent, lower-right */}
      <div
        className="pressed-botanical absolute"
        style={{
          right: '-5%',
          bottom: '6%',
          width: '42%',
          maxWidth: 78,
          transform: 'rotate(6deg)',
          zIndex: 20,
          opacity: 0.7,
        }}
      >
        <Image
          src="/images/botanical/baby-breath.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* Dried flower sprig 1 — upper-left */}
      <div
        className="pressed-botanical absolute"
        style={{
          left: '-8%',
          top: '4%',
          width: '22%',
          maxWidth: 104,
          transform: 'rotate(-10deg)',
          zIndex: 20,
        }}
      >
        <Image
          src="/images/botanical/dried-flower-1.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>

      {/* Dried flower sprig 2 — lower-center-right */}
      <div
        className="pressed-botanical absolute"
        style={{
          right: '10%',
          bottom: '-9%',
          width: '42%',
          maxWidth: 112,
          transform: 'rotate(8deg)',
          zIndex: 20,
        }}
      >
        <Image
          src="/images/botanical/dried-flower-2.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
