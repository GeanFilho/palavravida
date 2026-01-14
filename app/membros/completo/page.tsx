"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, BookOpen, Menu, X, ArrowRight, Users, GraduationCap } from "lucide-react"
import { getDevotionalsForPlan } from "@/lib/devotionals"

const ebooks = [
  {
    title: "Orações de Prosperidade",
    description: "Orações poderosas para abundância e prosperidade financeira através da fé",
    pages: 45,
    category: "Prosperidade",
  },
  {
    title: "Fortalecendo Relacionamentos",
    description: "Princípios bíblicos para relacionamentos saudáveis e duradouros",
    pages: 62,
    category: "Relacionamentos",
  },
  {
    title: "Orações de Cura Interior",
    description: "Orações para cura física, emocional e espiritual",
    pages: 38,
    category: "Cura",
  },
  {
    title: "Vencendo Medos e Ansiedades",
    description: "Supere medos, ansiedades e preocupações com a força da fé",
    pages: 52,
    category: "Vida Pessoal",
  },
  {
    title: "O Poder da Gratidão",
    description: "Práticas diárias de gratidão que transformam sua vida",
    pages: 41,
    category: "Vida Pessoal",
  },
  {
    title: "Família Abençoada",
    description: "Orações e ensinamentos para fortalecer os laços familiares",
    pages: 55,
    category: "Relacionamentos",
  },
  {
    title: "Jejum e Oração",
    description: "Guia completo sobre jejum espiritual e seus benefícios",
    pages: 68,
    category: "Vida Espiritual",
  },
  {
    title: "Libertação Espiritual",
    description: "Orações de libertação e proteção espiritual",
    pages: 72,
    category: "Vida Espiritual",
  },
  {
    title: "Propósito de Vida",
    description: "Descubra o plano de Deus para sua vida",
    pages: 58,
    category: "Propósito",
  },
  {
    title: "Guerra Espiritual",
    description: "Estratégias bíblicas para vencer batalhas espirituais",
    pages: 81,
    category: "Vida Espiritual",
  },
  {
    title: "Criando Filhos na Fé",
    description: "Guia prático para educar crianças nos caminhos de Deus",
    pages: 95,
    category: "Educação",
  },
  {
    title: "Histórias Bíblicas Ilustradas",
    description: "Histórias da Bíblia adaptadas para todas as idades",
    pages: 120,
    category: "Histórias",
  },
  {
    title: "Jovens e Fé",
    description: "Orientações para guiar jovens em sua jornada espiritual",
    pages: 78,
    category: "Juventude",
  },
  {
    title: "Devocionais em Família",
    description: "Como realizar momentos devocionais juntos",
    pages: 65,
    category: "Devocionais",
  },
]

export default function MembrosCompletoPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; plan?: string } | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dailyDevotionals, setDailyDevotionals] = useState<any[]>([])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (!parsedUser.plan) {
      router.push("/escolher-plano")
      return
    }

    if (parsedUser.plan !== "completo") {
      router.push(`/membros/${parsedUser.plan}`)
      return
    }

    setUser(parsedUser)
    setDailyDevotionals(getDevotionalsForPlan("completo", 5))
  }, [router])

  const handleChangePlan = () => {
    if (user) {
      const updatedUser = { name: user.name }
      localStorage.setItem("user", JSON.stringify(updatedUser))
      router.push("/escolher-plano")
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <Link href="/membros" className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Palavra<span className="text-secondary">&</span>Vida
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/membros" className="text-sm font-medium text-foreground">
                Início
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right mr-2">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">Plano Completo</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
              <Link href="/membros" className="block text-sm font-medium py-2">
                Início
              </Link>
              <div className="pt-3 border-t border-border">
                <p className="text-sm font-medium mb-1">{user.name}</p>
                <p className="text-xs text-muted-foreground mb-3">Plano Completo</p>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-16 sm:mb-20">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            Olá, {user.name.split(" ")[0]}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Continue sua jornada de crescimento espiritual</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          <Card className="border-2">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-foreground mb-3" />
              <div className="text-3xl font-bold mb-1">{ebooks.length}</div>
              <div className="text-sm text-muted-foreground">Ebooks no seu plano</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-secondary mb-3" />
              <div className="text-3xl font-bold mb-1">{dailyDevotionals.length}</div>
              <div className="text-sm text-muted-foreground">Devocionais de hoje</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">VIP</div>
              <div className="text-sm text-muted-foreground">Grupo de Oração</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <GraduationCap className="h-8 w-8 text-secondary mb-3" />
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm text-muted-foreground">Estudos Bíblicos</div>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Devocionais Diários</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyDevotionals.map((devotional, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all cursor-pointer group">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-sm text-muted-foreground mb-3">{devotional.date}</div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {devotional.title}
                  </h3>
                  <div className="text-sm font-medium text-secondary mb-4">{devotional.verse}</div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{devotional.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Biblioteca de Ebooks</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all group">
                <CardContent className="p-6 sm:p-8">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                    {ebook.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {ebook.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">{ebook.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">{ebook.pages} páginas</div>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Baixar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Conheça o Plano Família</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Conteúdo especial para crianças com atividades interativas, músicas, vídeos e até 5 perfis familiares.
              </p>
              <Button size="lg" className="gap-2" onClick={handleChangePlan}>
                Ver Plano Família
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Palavra & Vida. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
