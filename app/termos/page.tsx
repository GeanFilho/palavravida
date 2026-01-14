import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"

export default function TermosPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao acessar e usar a plataforma Palavra & Vida, você concorda com estes Termos de Uso. Se você não
                concordar com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Palavra & Vida oferece uma plataforma de conteúdo espiritual cristão, incluindo:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Ebooks de orações e estudos bíblicos</li>
                <li>Devocionais diários personalizados</li>
                <li>Materiais para crescimento espiritual</li>
                <li>Conteúdo para todas as idades</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">3. Uso Permitido</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você pode usar nosso conteúdo para fins pessoais e espirituais. É proibido:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Redistribuir ou vender o conteúdo sem autorização</li>
                <li>Modificar ou criar obras derivadas sem permissão</li>
                <li>Usar o conteúdo para fins comerciais não autorizados</li>
                <li>Compartilhar sua assinatura com terceiros fora do plano contratado</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">4. Assinaturas e Pagamentos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As assinaturas são cobradas mensalmente. Você pode cancelar a qualquer momento, mantendo acesso até o
                final do período pago. Não oferecemos reembolso por períodos parciais.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">5. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo o conteúdo da plataforma, incluindo textos, imagens, ebooks e devocionais, é protegido por direitos
                autorais e pertence à Palavra & Vida ou aos seus licenciadores.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O conteúdo é fornecido apenas para fins informativos e espirituais. Não substituímos aconselhamento
                pastoral, psicológico ou médico profissional.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">7. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão
                comunicadas por email ou através da plataforma.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato através da nossa{" "}
                <Link href="/contato" className="text-primary hover:underline">
                  página de contato
                </Link>
                .
              </p>
            </section>
          </div>
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
