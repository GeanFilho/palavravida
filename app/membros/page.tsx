"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

const contentByPlan = {
  essencial: {
    ebooks: [
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
    ],
  },
  premium: {
    ebooks: [
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
    ],
  },
  completo: {
    ebooks: [
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
    ],
  },
  familia: {
    ebooks: [
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
        category: "Infantil",
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
      {
        title: "Aventuras de Noé",
        description: "A história da arca de Noé com atividades interativas para crianças",
        pages: 48,
        category: "Infantil",
      },
      {
        title: "Heróis da Bíblia para Crianças",
        description: "Histórias de Davi, Moisés, José e outros heróis em linguagem infantil",
        pages: 85,
        category: "Infantil",
      },
      {
        title: "Orações para Pequeninos",
        description: "Orações simples e ilustradas para crianças aprenderem a conversar com Deus",
        pages: 32,
        category: "Infantil",
      },
      {
        title: "Atividades Bíblicas Divertidas",
        description: "Colorir, jogos e passatempos com temas bíblicos",
        pages: 60,
        category: "Atividades",
      },
    ],
  },
}

const planNames = {
  essencial: "Plano Essencial",
  premium: "Plano Premium",
  completo: "Plano Completo",
  familia: "Plano Família",
}

export default function MembrosPage() {
  const router = useRouter()

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

    // Redirect to the specific plan page
    const plan = parsedUser.plan.toLowerCase().replace("í", "i")
    router.push(`/membros/${plan}`)
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    </div>
  )
}
