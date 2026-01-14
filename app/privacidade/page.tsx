import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield } from "lucide-react"

export default function PrivacidadePage() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Palavra & Vida coleta apenas as informações necessárias para fornecer nossos serviços:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Nome:</strong> Para personalizar sua experiência na plataforma
                </li>
                <li>
                  <strong>Preferências de uso:</strong> Para oferecer conteúdo relevante
                </li>
                <li>
                  <strong>Dados de navegação:</strong> Para melhorar nossos serviços
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Personalizar os devocionais e recomendações de conteúdo</li>
                <li>Melhorar a experiência de uso da plataforma</li>
                <li>Comunicar atualizações importantes sobre o serviço</li>
                <li>Fornecer suporte ao cliente</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">3. Armazenamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seus dados são armazenados localmente no seu dispositivo através do navegador. Não mantemos bancos de
                dados centralizados com informações pessoais dos usuários.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Palavra & Vida <strong>não vende, aluga ou compartilha</strong> suas informações pessoais com
                terceiros para fins de marketing. Podemos compartilhar dados apenas:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos legais</li>
                <li>Com provedores de serviço essenciais (processamento de pagamento)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">5. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Você tem direito a:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Acessar os dados que temos sobre você</li>
                <li>Solicitar correção de informações incorretas</li>
                <li>Solicitar exclusão dos seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies essenciais para o funcionamento da plataforma e para lembrar suas preferências. Você
                pode desativar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do
                site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">7. Segurança</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso não
                autorizado, alteração ou destruição.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold mb-4">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas através da
                plataforma.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre privacidade, entre em contato através da nossa{" "}
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
