// ============================================================
// Todo o conteúdo do portfólio fica aqui.
// Edite este arquivo para atualizar o site sem mexer nos componentes.
// ============================================================

export const profile = {
  name: 'Adilan Santos',
  initials: 'AS',
  role: 'Desenvolvedor Full Stack & Back-end',
  location: 'São Paulo, Brasil · Remoto',
  availability: 'Disponível para novas oportunidades',
  tagline:
    'Desenvolvo APIs REST, integrações entre sistemas e serviços na nuvem, com foco em Python e back-end.',
  bio: [
    'Tenho 5 anos de experiência em desenvolvimento back-end, arquitetura de APIs REST e integrações corporativas.',
    'Na Desk Manager, liderei integrações de ponta a ponta entre plataformas como ServiceNow, Jira, HubSpot e NinjaRMM, usando Python, PHP e serviços AWS.',
    'Sou formado em Análise e Desenvolvimento de Sistemas e trabalho com metodologias ágeis, como Scrum e Kanban.',
  ],
  email: 'contatoadilan@hotmail.com',
  github: 'https://github.com/adilansantos',
  linkedin: 'https://www.linkedin.com/in/adilansantos/',
}

export const skillGroups = [
  { title: 'Back-end e linguagens', items: ['Python (FastAPI, Django)', 'PHP', 'Node.js', 'JavaScript', 'TypeScript'] },
  { title: 'APIs e integrações', items: ['APIs REST', 'Webhooks', 'Web Services', 'AMQP / RabbitMQ', 'JSON'] },
  { title: 'Cloud e DevOps', items: ['AWS Lambda', 'AWS S3', 'AWS DynamoDB', 'CloudWatch', 'Serverless', 'Docker', 'CI/CD'] },
  { title: 'Bancos de dados', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Modelagem de dados'] },
  { title: 'Front-end', items: ['HTML', 'CSS', 'Bootstrap', 'jQuery'] },
  { title: 'Metodologias', items: ['Git', 'Scrum', 'Kanban', 'Microservices', 'Troubleshooting'] },
]

export const experience = [
  {
    period: 'Jul 2022 – Set 2026',
    role: 'Desenvolvedor Full Stack & Back-end',
    company: 'Desk Manager',
    summary: 'Plataforma de Enterprise Service Management (ESM).',
    highlights: [
      'Liderança de projetos de integração de sistemas, da necessidade de negócio à arquitetura e ao código em produção.',
      'Criação e manutenção de APIs REST e Web Services escaláveis em Python e PHP.',
      'Sincronização bidirecional de dados entre ServiceNow, Jira Software, HubSpot, NinjaRMM e a plataforma.',
      'Pipelines orientados a eventos com webhooks, JSON e mensageria assíncrona (AMQP).',
      'Modelagem de bancos PostgreSQL e MySQL e deploy de funções serverless na AWS (Lambda, S3, DynamoDB).',
      'Diagnóstico e resolução de problemas complexos de comunicação entre APIs e fluxo de dados.',
      'Desenvolvimento de módulos front-end e dashboards operacionais com JavaScript, TypeScript e Bootstrap.',
      'Trabalho em equipes ágeis multifuncionais (Scrum e Kanban), com controle de versão em Git.',
    ],
  },
  {
    period: 'Dez 2021 – Jun 2022',
    role: 'Analista de Suporte Técnico',
    company: 'Keruak Software',
    summary: 'Suporte e estabilidade de plataformas web.',
    highlights: [
      'Diagnóstico avançado e análise de logs, identificando a causa raiz de problemas em integrações de API e fluxo de dados.',
      'Trabalho junto à equipe de engenharia para resolver bugs recorrentes e melhorar a estabilidade da plataforma.',
    ],
  },
  {
    period: 'Set 2019 – Nov 2021',
    role: 'Analista de Suporte ao Cliente',
    company: 'Desk Manager',
    summary: 'Suporte técnico em ambiente SaaS.',
    highlights: [
      'Diagnóstico de problemas operacionais e otimização do fluxo de chamados.',
    ],
  },
]

export const education = {
  degree: 'Análise e Desenvolvimento de Sistemas (ADS)',
  institution: 'Universidade de Mogi das Cruzes (UMC)',
  languages: ['Português: nativo', 'Inglês: intermediário (técnico, leitura e documentação de código)'],
}

// Adicione seus projetos aqui. Se o array ficar vazio, a seção de projetos some do site.
// Exemplo:
// {
//   title: 'Nome do projeto',
//   description: 'O que ele faz e qual problema resolve.',
//   stack: ['Python', 'FastAPI', 'PostgreSQL'],
//   repo: 'https://github.com/adilansantos/nome-do-projeto',
//   demo: 'https://...',
// },
export const projects = [
  {
    title: 'Event Ingestion API',
    description:
      'API FastAPI que recebe webhooks com idempotência no PostgreSQL, fila RabbitMQ, worker com retentativas e dead-letter queue.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    repo: 'https://github.com/AdilanSantos/event-queue',
    demo: null,
  },
]
