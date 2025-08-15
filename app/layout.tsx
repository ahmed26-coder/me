import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import { RomanticNavigation } from "@/components/romantic-navigation"
import { PageTransition } from "@/components/page-transition"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { InteractiveHearts } from "@/components/interactive-hearts"
import { RomanticQuotes } from "@/components/romantic-quotes"
import BackgroundMusic from "@/components/music-control"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "My Beautiful Love",
  description: "A romantic website dedicated to someone special",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`}>
      <BackgroundMusic />
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-heading: ${workSans.variable};
  --font-body: ${openSans.variable};
}
        `}</style>
      </head>
      <body className="romantic-cursor">
        <InteractiveCursor />
        <InteractiveHearts />
        <RomanticQuotes />
        <RomanticNavigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
