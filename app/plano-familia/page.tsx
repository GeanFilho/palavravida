"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, ArrowLeft, Users } from "lucide-react"

export default function PlanoFamiliaPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; plan?: string } | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)

      if (parsedUser.plan) {
        router.push("/membros")
      }
    }
  }, [router])

  const handleSelectPlan = () => {
    if (user) {
      const updatedUser = { ...user, plan: "familia" }
      localStorage.setItem("user", JSON.stringify(updatedUser))
      router.push("/membros")
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <Link href="/" className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Palavra<span className="text-secondary">&</span>Vida
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/escolher-plano"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para planos
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
              <Users className="h-3.5 w-3.5" />
              Para Famílias
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Plano Família</h1>
            <p className="text-xl text-muted-foreground">Conteúdo especial para toda a família com foco infantil</p>
          </div>

          <Card className="border-2 border-secondary/50">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-6xl font-bold">99</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <div className="border-t border-border pt-8 mb-8">
                <h3 className="font-semibold text-lg mb-4">O que está incluído:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Tudo do plano Completo incluído</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>18 ebooks + conteúdo infantil exclusivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>6 devocionais diários (adultos + kids)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Atividades bíblicas interativas para crianças</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Músicas e vídeos infantis cristãos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Perfis para até 5 membros da família</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-secondary" />
                  Ebooks infantis exclusivos:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Aventuras de Noé</li>
                  <li>• Heróis da Bíblia para Crianças</li>
                  <li>• Orações para Pequeninos</li>
                  <li>• Atividades Bíblicas Divertidas</li>
                </ul>
              </div>

              <Button
                onClick={handleSelectPlan}
                className="w-full gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                size="lg"
              >
                Assinar Plano Família
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">Cancele quando quiser • Sem compromisso</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
