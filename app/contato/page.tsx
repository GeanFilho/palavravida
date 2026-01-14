"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MessageSquare, Clock, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simula envio
    setSent(true)
  }

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
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Estamos aqui para ajudar. Envie sua mensagem e responderemos em breve.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="border-2">
                <CardContent className="p-6">
                  <MessageSquare className="h-6 w-6 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Suporte Geral</h3>
                  <p className="text-sm text-muted-foreground">contato@palavraevida.com.br</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <Clock className="h-6 w-6 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
                  <p className="text-sm text-muted-foreground">Respondemos em até 24 horas úteis</p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="p-6 sm:p-8">
                  {sent ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                        <CheckCircle className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                      <p className="text-muted-foreground mb-6">
                        Obrigado por entrar em contato. Responderemos sua mensagem em breve.
                      </p>
                      <Button variant="outline" onClick={() => setSent(false)}>
                        Enviar outra mensagem
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Nome</label>
                          <Input
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Assunto</label>
                        <Input
                          placeholder="Sobre o que deseja falar?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Mensagem</label>
                        <Textarea
                          placeholder="Escreva sua mensagem aqui..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
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
