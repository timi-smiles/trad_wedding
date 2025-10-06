import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ayomide ❤️ Adekunle | #AyoKunle2025",
  description: "Join us as we celebrate our traditional Wedding",
  generator: "v0.app",
  icons: {
    icon: '/14.jpg',
    apple: '/14.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`font-sans overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
