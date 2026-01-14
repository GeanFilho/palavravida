import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Calendar, Download, MessageCircle, Mail, HelpCircle } from "lucide-react"

export default function AjudaPage() {
  const faqs = [
    {
      question: "Como faço para acessar os ebooks?",
      answer:
        "Após escolher seu plano, você terá acesso imediato à biblioteca de ebooks na sua área de membros. Basta clicar no botão 'Baixar' em qualquer ebook para fazer o download em PDF.",
    },
    {
      question: "Os devocionais são atualizados diariamente?",
      answer:
        "Sim! Nossos devocionais são renovados todos os dias automaticamente, oferecendo conteúdo fresco e inspirador para sua jornada espiritual diária.",
    },
    {
      question: "Posso mudar de plano depois?",
      answer:
        "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento na área de membros, clicando em 'Alterar Plano'.",
    },
    {
      question: "Como funciona o plano Completo?",
      answer:
        "O plano Completo inclui todos os ebooks da biblioteca, mais devocionais diários, conteúdo especial para todas as idades, e materiais pedagógicos exclusivos.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim, você pode cancelar sua assinatura quando quiser, sem multas ou taxas adicionais. Seu acesso permanece ativo até o final do período já pago.",
    },
    {
      question: "Os downloads são ilimitados?",
      answer:
        "Nos planos Premium e Completo, sim! Você pode baixar quantos ebooks quiser. No plano Essencial, você tem acesso a 5 ebooks selecionados.",
    },
  ]

  const guides = [
    {
      icon: BookOpen,
      title: "Acessando Ebooks",
      description: "Aprenda a navegar pela biblioteca e baixar seus ebooks favoritos",
    },
    {
      icon: Calendar,
      title: "Devocionais Diários",
      description: "Descubra como aproveitar ao máximo os devocionais personalizados",
    },
    {
      icon: Download,
      title: "Downloads e PDF",
      description: "Saiba como baixar e organizar seus materiais em qualquer dispositivo",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Palavra<span className="text-secondary">&</span>Vida
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Central de Ajuda
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Encontre respostas para suas dúvidas e aprenda a usar a plataforma
            </p>
          </div>

          {/* Guias Rápidos */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">Guias Rápidos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <guide.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contato */}
          <section>
            <Card className="border-2 bg-muted/30">
              <CardContent className="p-8 sm:p-10 text-center">
                <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ainda precisa de ajuda?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Nossa equipe está pronta para ajudar você. Entre em contato e responderemos o mais rápido possível.
                </p>
                <Link href="/contato">
                  <Button className="gap-2">
                    <Mail className="h-4 w-4" />
                    Falar com Suporte
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
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
