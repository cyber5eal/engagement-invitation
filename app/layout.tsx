import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { EB_Garamond, Geist_Mono } from 'next/font/google'
import './globals.css'

// Uploaded heading/display face.
const levaBlackshear = localFont({
  src: '../public/fonts/leva-blackshear.ttf',
  variable: '--font-leva',
  display: 'swap',
})

const cormorant = localFont({
  src: '../public/fonts/CormorantGaramond-VariableFont_wght.ttf',
  variable: '--font-cormorant',
  display: 'swap',
})

// No dedicated body font file was supplied, so EB Garamond remains the
// body/serif face. Swap this out if a body font is provided later.
const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Marc & Karine — An Invitation',
  description:
    'Together with their families, Marc & Karine request the pleasure of your company as they celebrate their engagement.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf6ef',
  userScalable: false,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${levaBlackshear.variable} ${cormorant.variable} ${ebGaramond.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
