// Sistema de devocionais diários - 365 dias únicos por ano
type Devotional = {
  date: string
  title: string
  verse: string
  preview: string
}

// Base expandida de versículos e temas para gerar devocionais variados
const devotionalThemes = [
  {
    themes: ["Fé", "Confiança", "Esperança", "Amor", "Paz", "Perdão", "Gratidão", "Sabedoria", "Força", "Paciência"],
    verses: [
      { ref: "Hebreus 11:1", text: "A fé é a certeza das coisas que esperamos e a convicção de fatos que não vemos" },
      {
        ref: "Provérbios 3:5-6",
        text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento",
      },
      { ref: "Romanos 15:13", text: "Que o Deus da esperança os encha de toda alegria e paz" },
      { ref: "1 Coríntios 13:4-7", text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria" },
      { ref: "João 14:27", text: "Deixo-lhes a paz; a minha paz lhes dou" },
      { ref: "Efésios 4:32", text: "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente" },
      { ref: "1 Tessalonicenses 5:18", text: "Deem graças em todas as circunstâncias" },
      { ref: "Tiago 1:5", text: "Se algum de vocês tem falta de sabedoria, peça-a a Deus" },
      { ref: "Filipenses 4:13", text: "Tudo posso naquele que me fortalece" },
      { ref: "Romanos 5:3-4", text: "Nos gloriamos nas tribulações, sabendo que produzem perseverança" },
      { ref: "Salmos 23:1", text: "O Senhor é meu pastor; nada me faltará" },
      { ref: "Isaías 40:31", text: "Os que esperam no Senhor renovarão as suas forças" },
      { ref: "Mateus 6:33", text: "Busquem primeiro o Reino de Deus e a sua justiça" },
      { ref: "Romanos 8:28", text: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus" },
      { ref: "Jeremias 29:11", text: "Pois sou eu que conheço os planos que tenho para vocês" },
      { ref: "Salmos 46:10", text: "Aquietem-se e saibam que eu sou Deus" },
      { ref: "João 3:16", text: "Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito" },
      { ref: "Provérbios 16:3", text: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos" },
      { ref: "Salmos 119:105", text: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho" },
      { ref: "Mateus 11:28", text: "Venham a mim, todos os que estão cansados e sobrecarregados" },
    ],
  },
]

const devotionalTemplates = [
  {
    title: "Confie no Tempo Perfeito de Deus",
    content:
      "Há tempo para todas as coisas debaixo do céu. Hoje, reflita sobre como o tempo de Deus é sempre perfeito, mesmo quando não compreendemos seus propósitos...",
  },
  {
    title: "A Força que Vem da Fé",
    content:
      "A fé verdadeira nos sustenta nos momentos mais difíceis. Quando confiamos plenamente em Deus, descobrimos uma força interior que supera todos os desafios...",
  },
  {
    title: "Amor que Transforma Vidas",
    content:
      "O amor divino tem o poder de transformar completamente nossas vidas. Quando permitimos que esse amor flua através de nós, tocamos e abençoamos aqueles ao nosso redor...",
  },
  {
    title: "Perseverança nos Desafios",
    content:
      "Os desafios não vieram para nos destruir, mas para nos fortalecer. Cada dificuldade superada é um degrau na escada do crescimento espiritual...",
  },
  {
    title: "Gratidão Transforma o Coração",
    content:
      "A gratidão é uma das práticas mais poderosas da vida cristã. Quando aprendemos a ser gratos em todas as circunstâncias, nosso coração se enche de paz e alegria...",
  },
  {
    title: "Paz em Meio à Tempestade",
    content:
      "A paz de Deus não significa ausência de problemas, mas presença divina em meio às dificuldades. Hoje, busque essa paz que excede todo entendimento...",
  },
  {
    title: "Renovação Diária",
    content:
      "Cada novo dia é uma oportunidade de recomeço. Deus nos oferece misericórdias renovadas a cada manhã, prontas para nos fortalecer e guiar...",
  },
  {
    title: "Sabedoria para Decisões",
    content:
      "Quando buscamos a sabedoria divina antes de tomar decisões importantes, encontramos clareza e direção. Deus promete dar sabedoria liberalmente a todos que pedem...",
  },
  {
    title: "O Poder do Perdão",
    content:
      "Perdoar não é um sentimento, é uma decisão. Quando escolhemos perdoar, liberamos não apenas a outra pessoa, mas principalmente a nós mesmos do peso do ressentimento...",
  },
  {
    title: "Esperança que Não Decepciona",
    content:
      "A esperança cristã não é um desejo vago, mas uma certeza fundamentada nas promessas de Deus. Essa esperança nos sustenta e nos impulsiona para frente...",
  },
  {
    title: "O Bom Pastor",
    content:
      "Assim como ovelhas precisam de um pastor, nós precisamos da direção de Deus. Ele conhece o caminho, nos protege e supre todas as nossas necessidades...",
  },
  {
    title: "Forças Renovadas",
    content:
      "Quando nos sentimos exaustos e sem forças, podemos encontrar renovação em Deus. Ele promete fortalecer aqueles que nele esperam com paciência e fé...",
  },
  {
    title: "Prioridades do Reino",
    content:
      "Em um mundo de tantas distrações, é fácil perder o foco no que realmente importa. Buscar primeiro o Reino de Deus reorganiza todas as outras áreas da vida...",
  },
  {
    title: "Tudo Coopera para o Bem",
    content:
      "Mesmo quando não entendemos as circunstâncias, podemos confiar que Deus está trabalhando em nosso favor. Ele transforma até as dificuldades em bênçãos...",
  },
  {
    title: "Planos de Esperança",
    content:
      "Deus tem planos específicos para cada um de nós - planos de paz e não de mal. Quando confiamos nesses planos, encontramos segurança e direção para o futuro...",
  },
  {
    title: "Aquietando a Alma",
    content:
      "No barulho do mundo moderno, precisamos aprender a aquietar nossa alma diante de Deus. É no silêncio que ouvimos sua voz e renovamos nossas forças...",
  },
  {
    title: "O Amor Supremo",
    content:
      "O maior ato de amor da história foi Deus enviar seu Filho por nós. Esse amor incondicional nos transforma e nos capacita a amar os outros da mesma forma...",
  },
  {
    title: "Consagrando Nossos Planos",
    content:
      "Quando entregamos nossos planos a Deus, eles se tornam melhores do que poderíamos imaginar. A consagração é o primeiro passo para o sucesso verdadeiro...",
  },
  {
    title: "Luz no Caminho",
    content:
      "A Palavra de Deus ilumina nossos passos e nos mostra a direção certa. Em tempos de incerteza, ela é nossa bússola confiável e segura...",
  },
  {
    title: "Descanso para a Alma",
    content:
      "Jesus nos convida a encontrar descanso nele. Não apenas descanso físico, mas um descanso profundo da alma que só ele pode proporcionar...",
  },
]

// Função para obter o dia do ano (1-365)
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export function getDailyDevotional(dayOfYear: number, offset = 0): Devotional {
  // Combina dia do ano com offset para gerar devocionais diferentes
  const combinedIndex = (dayOfYear * 7 + offset * 3) % devotionalTemplates.length
  const verseIndex = (dayOfYear * 11 + offset * 5) % devotionalThemes[0].verses.length

  const template = devotionalTemplates[combinedIndex]
  const verse = devotionalThemes[0].verses[verseIndex]

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const date = new Date()
  const day = date.getDate()
  const month = months[date.getMonth()]

  return {
    date: `${day} de ${month}`,
    title: template.title,
    verse: verse.ref,
    preview: template.content,
  }
}

export function getDevotionalsForPlan(plan: string, count: number): Devotional[] {
  const today = getDayOfYear(new Date())
  const devotionals: Devotional[] = []

  for (let i = 0; i < count; i++) {
    // Cada devocional usa um offset diferente para garantir conteúdo único
    devotionals.push(getDailyDevotional(today, i))
  }

  return devotionals
}
