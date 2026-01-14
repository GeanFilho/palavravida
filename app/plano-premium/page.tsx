"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

export default function PlanoPremiumPage() {
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
      const updatedUser = { ...user, plan: "premium" }
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
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Mais popular
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Plano Premium</h1>
            <p className="text-xl text-muted-foreground">A escolha perfeita para crescimento completo</p>
          </div>

          <Card className="border-2 border-primary">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-6xl font-bold">49</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <div className="border-t border-border pt-8 mb-8">
                <h3 className="font-semibold text-lg mb-4">O que está incluído:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>10 ebooks completos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>4 devocionais personalizados diários</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Estudos bíblicos exclusivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Grupo VIP de oração online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Downloads ilimitados em PDF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário 24/7</span>
                  </li>
                </ul>
              </div>

              <Button onClick={handleSelectPlan} className="w-full gap-2" size="lg">
                Assinar Plano Premium
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
