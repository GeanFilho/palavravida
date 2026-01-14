"use client"

import type React from "react"
import { Libre_Baskerville, Inter } from "next/font/google"

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
