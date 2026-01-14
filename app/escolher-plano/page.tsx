"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Sparkles } from "lucide-react"

export default function EscolherPlanoPage() {
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

  if (!user) return null

  const plans = [
    {
      name: "Essencial",
      price: "29,90",
      description: "Ideal para começar sua jornada espiritual",
      features: [
        "5 ebooks de orações selecionados",
        "2 devocionais diários inspiradores",
        "Acesso à comunidade de membros",
        "Suporte por email",
      ],
      highlight: false,
      badge: null,
      href: "/plano-essencial",
    },
    {
      name: "Premium",
      price: "49,90",
      description: "A escolha perfeita para crescimento completo",
      features: [
        "10 ebooks completos ilimitados",
        "4 devocionais personalizados diários",
        "Estudos bíblicos exclusivos",
        "Grupo VIP de oração online",
        "Downloads ilimitados em PDF",
        "Suporte prioritário 24/7",
      ],
      highlight: true,
      badge: "Mais popular",
      href: "/plano-premium",
    },
    {
      name: "Completo",
      price: "79,90",
      description: "Acesso total a toda biblioteca de conteúdo",
      features: [
        "Tudo do plano Premium incluído",
        "14 ebooks + conteúdo extra exclusivo",
        "5 devocionais variados por dia",
        "Conteúdo para todas as idades",
        "Histórias bíblicas ilustradas",
        "Material pedagógico completo",
      ],
      highlight: false,
      badge: null,
      href: "/plano-completo",
    },
    {
      name: "Família",
      price: "99,90",
      description: "Conteúdo especial para toda a família",
      features: [
        "Tudo do plano Completo incluído",
        "18 ebooks + conteúdo infantil exclusivo",
        "6 devocionais diários (adultos + kids)",
        "Atividades bíblicas interativas para crianças",
        "Músicas e vídeos infantis cristãos",
        "Perfis para até 5 membros da família",
      ],
      highlight: false,
      badge: "Para Famílias",
      isFamily: true,
      href: "/plano-familia",
    },
  ]

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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Olá, {user.name}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">Escolha o plano ideal para você</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 transition-all ${
                  plan.highlight
                    ? "border-primary shadow-lg relative"
                    : plan.isFamily
                      ? "border-secondary/50 hover:border-secondary relative"
                      : "hover:border-primary/30"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-medium rounded-full flex items-center gap-1.5 ${
                      plan.isFamily ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {plan.highlight && <Sparkles className="h-3.5 w-3.5" />}
                    {plan.badge}
                  </div>
                )}
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-muted-foreground">R$</span>
                      <span className="text-5xl font-bold">{plan.price.split(",")[0]}</span>
                      <span className="text-2xl text-muted-foreground">,{plan.price.split(",")[1]}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href}>
                    <Button
                      className={`w-full gap-2 ${
                        plan.isFamily ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""
                      }`}
                      variant={plan.highlight ? "default" : plan.isFamily ? "default" : "outline"}
                    >
                      Ver detalhes
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Cancele quando quiser • Acesso imediato • Sem compromisso de longo prazo
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
