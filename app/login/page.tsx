"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, BookOpen, Heart, Sparkles } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()
  const [name, setName] = useState("")

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      if (parsedUser.name) {
        router.push("/escolher-plano")
      }
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify({ name }))
    router.push("/escolher-plano")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <Link href="/" className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Palavra<span className="text-secondary">&</span>Vida
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Bem-vindo ao Palavra & Vida
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Uma plataforma completa de crescimento espiritual com ebooks inspiradores, devocionais diários e conteúdos
              que transformam vidas através da fé.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <BookOpen className="h-5 w-5 text-foreground mx-auto mb-2" />
              <div className="text-sm font-medium">50+ Ebooks</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <Sparkles className="h-5 w-5 text-secondary mx-auto mb-2" />
              <div className="text-sm font-medium">Devocionais</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <Heart className="h-5 w-5 text-foreground mx-auto mb-2" />
              <div className="text-sm font-medium">Comunidade</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Como podemos te chamar?</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 text-center text-lg"
              />
            </div>

            <Button type="submit" className="w-full h-12 gap-2 text-base">
              Começar minha jornada
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Conteúdo pensado para nutrir sua fé todos os dias
          </p>
        </div>
      </main>
    </div>
  )
}
