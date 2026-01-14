import type React from "react"
import type { Metadata } from "next"
import RootLayoutClient from "./_client"
import "./globals.css"

export const metadata: Metadata = {
  title: "Palavra & Vida — Plataforma de Crescimento Espiritual",
  description:
    "Conteúdo espiritual profundo para transformação pessoal. Ebooks, devocionais e estudos bíblicos exclusivos.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
}
