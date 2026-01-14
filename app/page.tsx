"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, BookOpen, Sparkles, ArrowRight, Calendar, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Palavra<span className="text-secondary">&</span>Vida
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/login">
                <Button size="sm" className="gap-1.5">
                  Começar
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-8 sm:mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
            </span>
            Mais de 10.000 membros ativos
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 sm:mb-10 leading-[1.1] tracking-tight">
            Cresça na fé.
            <br />
            <span className="text-secondary">Viva a Palavra.</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mb-10 sm:mb-12 leading-relaxed font-light">
            Acesse ebooks inspiradores, devocionais personalizados e estudos bíblicos que transformam vidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#planos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-transparent">
                Ver planos
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-secondary" />
              Cancele quando quiser
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-secondary" />
              Acesso total
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-secondary" />
              Suporte 24/7
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-32">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Biblioteca completa
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              50+ ebooks prontos para transformar sua vida
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Orações para prosperidade, cura interior, relacionamentos saudáveis e muito mais. Todo conteúdo
              cuidadosamente selecionado por líderes espirituais.
            </p>
            <Link href="/login">
              <Button variant="link" className="p-0 text-lg group">
                Explorar biblioteca
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-foreground mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Ebooks disponíveis</div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary/50 transition-all mt-8">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-secondary mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">365</div>
                <div className="text-sm text-muted-foreground">Devocionais/ano</div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent/50 transition-all">
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-muted-foreground mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação média</div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all mt-8">
              <CardContent className="p-6">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Membros ativos</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Card className="border-2 p-8 sm:p-10 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">9 de Janeiro</h3>
                    <p className="text-sm text-muted-foreground mb-2">Eclesiastes 3:1</p>
                    <p className="text-muted-foreground leading-relaxed">
                      "Há tempo para todas as coisas debaixo do céu. Hoje, reflita sobre como o tempo de Deus é sempre
                      perfeito..."
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    Receba reflexões profundas baseadas na Palavra de Deus todos os dias
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Crescimento diário
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Devocionais que falam com você
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Mensagens personalizadas baseadas em suas necessidades espirituais. Comece cada dia com propósito e
              direção divina.
            </p>
            <Link href="/login">
              <Button variant="link" className="p-0 text-lg group">
                Receber devocionais
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="planos"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 border-t border-border"
      >
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Escolha seu plano
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Comece sua jornada espiritual hoje mesmo.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Essencial */}
          <Card className="border-2 hover:border-primary/30 transition-all">
            <CardContent className="p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Essencial</h3>
                <p className="text-muted-foreground text-sm mb-6">Para iniciar sua jornada</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">29</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 ebooks selecionados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 devocionais diários</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Acesso à comunidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Suporte por email</span>
                </li>
              </ul>

              <Link href="/login" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Começar agora
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Premium */}
          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Mais popular
            </div>
            <CardContent className="p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground text-sm mb-6">Crescimento completo</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">49</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">10 ebooks completos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">4 devocionais diários</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Estudos bíblicos exclusivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Grupo VIP de oração</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Downloads ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Suporte prioritário 24/7</span>
                </li>
              </ul>

              <Link href="/login" className="block">
                <Button className="w-full">Começar agora</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Completo */}
          <Card className="border-2 hover:border-primary/30 transition-all">
            <CardContent className="p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Completo</h3>
                <p className="text-muted-foreground text-sm mb-6">Acesso total à biblioteca</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">79</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tudo do Premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">14 ebooks + conteúdo extra</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 devocionais diários variados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Conteúdo para todas as idades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Histórias bíblicas ilustradas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Material pedagógico</span>
                </li>
              </ul>

              <Link href="/login" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Começar agora
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Família */}
          <Card className="border-2 border-secondary/50 hover:border-secondary transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Para Famílias
            </div>
            <CardContent className="p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">Família</h3>
                <p className="text-muted-foreground text-sm mb-6">Conteúdo infantil especial</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">99</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                  <span className="text-muted-foreground ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tudo do Completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">18 ebooks + conteúdo infantil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">6 devocionais (adultos + kids)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Atividades bíblicas para crianças</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Músicas e vídeos infantis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Perfis para até 5 membros</span>
                </li>
              </ul>

              <Link href="/login" className="block">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Começar agora
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Pronto para transformar sua vida espiritual?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Junte-se a milhares de pessoas que estão crescendo na fé através dos nossos conteúdos.
          </p>
          <Link href="/login">
            <Button size="lg" className="text-base h-12 px-8">
              Começar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div className="max-w-sm">
              <div className="font-serif text-2xl font-bold mb-4">
                Palavra<span className="text-secondary">&</span>Vida
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transformando vidas através da fé, com conteúdo que nutre o espírito.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-sm">Planos</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="#planos" className="hover:text-foreground transition-colors">
                      Essencial
                    </Link>
                  </li>
                  <li>
                    <Link href="#planos" className="hover:text-foreground transition-colors">
                      Premium
                    </Link>
                  </li>
                  <li>
                    <Link href="#planos" className="hover:text-foreground transition-colors">
                      Completo
                    </Link>
                  </li>
                  <li>
                    <Link href="#planos" className="hover:text-foreground transition-colors">
                      Família
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">Conteúdo</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="/login" className="hover:text-foreground transition-colors">
                      Ebooks
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-foreground transition-colors">
                      Devocionais
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-foreground transition-colors">
                      Estudos
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm">Suporte</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="/ajuda" className="hover:text-foreground transition-colors">
                      Ajuda
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="hover:text-foreground transition-colors">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Palavra & Vida. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/termos" className="hover:text-foreground transition-colors">
                Termos
              </Link>
              <Link href="/privacidade" className="hover:text-foreground transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
