import { SubjectId, SubjectInfo } from '../types/quiz';

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'portugues',
    title: 'Língua Portuguesa',
    totalQuestions: 20,
    timeMinutes: 45,
    description: 'Compreensão e interpretação de texto, ortografia oficial, classes de palavras, sintaxe (concordância, regência, crase), coesão textual, pontuação e significação das palavras.',
    topics: [
      'Compreensão e Interpretação de Texto',
      'Ortografia Oficial e Acentuação Gráfica',
      'Emprego das Classes de Palavras e Tempos Verbais',
      'Sintaxe de Concordância Nominal e Verbal',
      'Regência Verbal e Nominal / Emprego do Sinal de Crase',
      'Mecanismos de Coesão Textual e Conectivos',
      'Pontuação e Significação de Palavras (Sinonímia/Antonímia)'
    ],
    badgeColor: 'bg-blue-600 text-white',
  },
  {
    id: 'matematica',
    title: 'Matemática',
    totalQuestions: 20,
    timeMinutes: 60,
    description: 'Conjuntos, funções, progressões (PA e PG), matemática financeira (juros simples/compostos, descontos e porcentagem), estatística básica, geometria plana e espacial.',
    topics: [
      'Progressão Aritmética (PA) e Progressão Geométrica (PG)',
      'Funções (1º e 2º Grau) e Gráficos',
      'Matemática Financeira (Porcentagem, Juros Compostos e Descontos)',
      'Estatística Básica e Interpretação de Gráficos e Tabelas',
      'Geometria Plana e Geometria Espacial (Prismas e Cilindros)',
      'Conjuntos, Análise Combinatória e Probabilidade',
      'Sistemas Lineares e Equações'
    ],
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    id: 'processos_adm',
    title: 'Processos Administrativos e Legislação',
    totalQuestions: 40,
    timeMinutes: 90,
    description: 'Gestão de pessoas, cargos e carreiras, competências, conflitos e negociação, tomada de decisão, ESG, Lei 13.303/2016 (Estatais), LC 123/2006, contratos e redação oficial.',
    topics: [
      'Gestão de Pessoas (Recrutamento, Seleção, Treinamento e Carreira)',
      'Gestão por Competências e Avaliação de Desempenho (360°, ADP vs ADC)',
      'Gestão de Conflitos e Técnicas de Negociação (Integrativa e Árbitro)',
      'Administração Geral, Tomada de Decisão e Vieses Cognitivos',
      'Gestão de Indicadores de Desempenho (Níveis e Agregação)',
      'Noções de ESG (Modelo PER OCDE, Relatórios GRI e Impactos Ambientais)',
      'Legislação das Estatais (Lei 13.303/2016) e LC 123/2006 (Licitações)',
      'Fiscalização e Gestão de Contratos e Projetos (PMBOK)',
      'Redação Oficial (Manual da Presidência, Impessoalidade, Clareza e Tipos)'
    ],
    badgeColor: 'bg-indigo-600 text-white',
  },
  {
    id: 'financas_contab',
    title: 'Finanças e Contabilidade',
    totalQuestions: 40,
    timeMinutes: 90,
    description: 'Contabilidade geral, escrituração no livro Diário, subscrição de capital, Balanço Patrimonial, DRE, margem de contribuição, DFC (direto e indireto), matemática financeira e VPL.',
    topics: [
      'Noções de Contabilidade Geral e Escrituração no Livro Diário',
      'Subscrição e Integralização de Capital Social',
      'Balanço Patrimonial e Estrutura dos Ativos e Passivos',
      'Demonstração do Resultado do Exercício (DRE), Margem e Lucro Anual',
      'Demonstração dos Fluxos de Caixa (DFC) - Atividades Operacionais e Método Direto',
      'Capital de Giro Líquido e Gestão Financeira de Curto e Longo Prazo',
      'Matemática Financeira: Capitalização Composta, Desconto Racional e Parcelamentos',
      'Avaliação de Investimentos: Valor Presente Líquido (VPL) e Risco Financeiro'
    ],
    badgeColor: 'bg-amber-600 text-white',
  },
  {
    id: 'logistica',
    title: 'Logística e Gestão da Cadeia de Suprimentos',
    totalQuestions: 40,
    timeMinutes: 90,
    description: 'Administração de recursos materiais, ponto de ressuprimento, estoque de segurança, LEC, WMS, RFID, código de barras, cotação de compras, fornecedores e rede logística.',
    topics: [
      'Administração de Recursos Materiais e Política de Estoques',
      'Ponto de Ressuprimento (PR) e Lote Econômico de Compras (LEC)',
      'Cálculo de Estoque de Segurança com Incerteza de Demanda e Lead Time',
      'Sistemas de Gerenciamento de Armazéns (WMS)',
      'Tecnologias de Rastreabilidade e Identificação (RFID e Código de Barras)',
      'Gestão de Compras, Cotação de Preços, Saving e Procurement',
      'Desenvolvimento e Gestão de Fornecedores e Contratos',
      'Projeto de Rede Logística, Programação da Produção e Serviços de Transporte'
    ],
    badgeColor: 'bg-teal-600 text-white',
  },
  {
    id: 'informatica',
    title: 'Noções de Informática',
    totalQuestions: 20,
    timeMinutes: 40,
    description: 'Sistema operacional Windows (gerenciamento de arquivos e atalhos), MS Word, MS Excel (fórmulas e funções), MS PowerPoint, redes, segurança (VPN) e internet.',
    topics: [
      'Sistema Operacional Windows (Arquivos, Atalhos e Comandos do Prompt)',
      'Microsoft Word (Edição, Modos de Exibição, Atalhos e Ferramentas)',
      'Microsoft Excel (Fórmulas Avançadas: ÍNDICE, CORRESP, PROCV, SE e Operadores)',
      'Microsoft PowerPoint e Ferramentas de Escritório',
      'Redes de Computadores, Intranet e Conexão Segura (VPN)',
      'Navegadores Web (Atalhos e Funcionalidades) e Segurança'
    ],
    badgeColor: 'bg-purple-600 text-white',
  },
  {
    id: 'completo',
    title: 'Simulado Geral Integrado Cesgranrio',
    totalQuestions: 70,
    timeMinutes: 240, // 4 horas de prova oficial Cesgranrio
    description: 'Simulado integral no padrão do Caderno de Prova da Cesgranrio para Nível Médio Administrativo, com tempo total de 4h e preenchimento de Cartão-Resposta.',
    topics: [
      '20 Questões de Língua Portuguesa',
      '20 Questões de Matemática',
      '30 Questões Selecionadas de Conhecimentos Específicos e Informática'
    ],
    badgeColor: 'bg-rose-700 text-white',
  }
];
