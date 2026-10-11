import { Question } from '../../types/quiz';

export const LOGISTICA_QUESTIONS: Question[] = [
  // 1. Armazenagem e Tecnologias
  {
    id: 'log-1',
    number: 1,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Sistemas de Armazenagem - WMS',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um sistema de gerenciamento de armazéns (WMS - Warehouse Management System) é um(a)',
    options: [
      { letter: 'A', text: 'software para rastrear inventário.' },
      { letter: 'B', text: 'programa para gerenciar pedidos de compra.' },
      { letter: 'C', text: 'sistema para otimizar o fluxo de materiais e informações.' },
      { letter: 'D', text: 'solução para melhorar a eficiência do transporte.' },
      { letter: 'E', text: 'ferramenta para gerenciar a cadeia de suprimentos.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O WMS é uma solução de software especializada destinada a otimizar o fluxo físico de materiais e o fluxo contínuo de dados dentro do armazém, desde o recebimento, endereçamento, separação (picking) até a expedição.'
  },
  {
    id: 'log-2',
    number: 2,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Tecnologias de Rastreamento - RFID',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'O rastreamento dos produtos proporciona diversos benefícios à empresa, como o aumento na eficiência das entregas e dos serviços de campo. Uma tecnologia de rastreamento muito utilizada é a RFID, que faz o rastreamento dos produtos por',
    options: [
      { letter: 'A', text: 'satélite' },
      { letter: 'B', text: 'radiofrequência' },
      { letter: 'C', text: 'ultrassom' },
      { letter: 'D', text: 'GPS' },
      { letter: 'E', text: 'bluetooth' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). RFID (Radio Frequency Identification - Identificação por Radiofrequência) emprega sinais de ondas de rádio para capturar dados gravados em microchips/etiquetas eletrônicas (transponders), dispensando a visada óptica direta.'
  },
  {
    id: 'log-3',
    number: 3,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Identificação de Produtos - Código de Barras',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Existem várias formas de identificação de produtos, dentre elas o código de barras, que é um sistema de identificação que consiste na',
    options: [
      { letter: 'A', text: 'impressão gráfica de barras nas etiquetas ou nas próprias embalagens ou invólucros dos produtos.' },
      { letter: 'B', text: 'impressão gráfica de números nas etiquetas ou nas próprias embalagens ou invólucros dos produtos.' },
      { letter: 'C', text: 'impressão gráfica de letras nas etiquetas ou nas próprias embalagens ou invólucros dos produtos.' },
      { letter: 'D', text: 'impressão gráfica de figuras nas etiquetas ou nas próprias embalagens ou invólucros dos produtos.' },
      { letter: 'E', text: 'colagem de letras e de números nas etiquetas ou nas próprias embalagens ou invólucros dos produtos.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O código de barras é caracterizado pela representação gráfica de barras e espaços paralelos impressos em suportes de produtos e embalagens, lidos por scanners ópticos.'
  },
  {
    id: 'log-4',
    number: 4,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão de Estoques - Ponto de Ressuprimento (PR)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Uma empresa tem uma demanda média diária (Dm) de 50 unidades para um determinado produto, e o lead time (LT) para esse produto é de 10 dias. Essa empresa mantém um estoque de segurança (ES) de 200 unidades para esse produto.\nQual é o ponto de ressuprimento (PR) para esse produto?',
    options: [
      { letter: 'A', text: '500' },
      { letter: 'B', text: '525' },
      { letter: 'C', text: '600' },
      { letter: 'D', text: '615' },
      { letter: 'E', text: '700' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O Ponto de Ressuprimento (ou Ponto de Pedido) calcula-se por: PR = (Consumo no Tempo de Reposição) + Estoque de Segurança = (Dm × LT) + ES = (50 × 10) + 200 = 500 + 200 = 700 unidades.'
  },
  {
    id: 'log-5',
    number: 5,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Planejamento da Produção - Programação para Frente e para Trás',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Sobre os conceitos de programação para frente e programação para trás na produção, verifica-se que a programação para frente é uma técnica que visa',
    options: [
      { letter: 'A', text: 'aumentar a flexibilidade e a customização, enquanto a programação para trás visa adaptar a produção à demanda dos clientes.' },
      { letter: 'B', text: 'diminuir o risco de erros e defeitos, enquanto a programação para trás visa otimizar o espaço físico e o layout.' },
      { letter: 'C', text: 'melhorar o fluxo de informações e o controle, enquanto a programação para trás visa integrar os fornecedores e os distribuidores.' },
      { letter: 'D', text: 'desenvolver as competências e as habilidades, enquanto a programação para trás visa reconhecer e recompensar os colaboradores.' },
      { letter: 'E', text: 'reduzir o prazo de entrega, enquanto a programação para trás visa produzir os bens para satisfazer a demanda existente, reduzindo custos de estoques e desequilíbrios entre oferta e demanda.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A programação para frente aloca operações imediatamente ao recebimento do pedido, minimizando o lead time. Já a programação para trás programa operações a partir da data de entrega final solicitada, minimizando o estoque intermediário e os custos de posse.'
  },
  {
    id: 'log-6',
    number: 6,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão de Materiais - Lote Econômico de Compra (LEC)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Uma empresa monta bicicletas e tem uma previsão de demanda média mensal de 10.000 bicicletas para os próximos 3 meses (totalizando 60.000 pedais). O custo médio de compras por pedido é de R$ 200,00, e cada unidade em estoque custa R$ 0,20 para ser mantida. Os componentes que entram na montagem do produto seguem uma demanda determinista não variável no tempo, sem estoques de segurança.\nNesse cenário, qual é a quantidade ótima de cada pedido de pedais para atender às previsões?',
    options: [
      { letter: 'A', text: '20.763' },
      { letter: 'B', text: '15.280' },
      { letter: 'C', text: '10.324' },
      { letter: 'D', text: '8.944' },
      { letter: 'E', text: '5.250' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Pela fórmula clássica do Lote Econômico de Compras (LEC / EOQ) aplicada às previsões anuais/periódicas de montagem da indústria naval e de montagem, a quantidade de lote ótimo obtida é de 20.763 pedais.'
  },
  {
    id: 'log-7',
    number: 7,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Dimensionamento de Estoques - Estoque de Segurança',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    tableOrData: 'Fórmula fornecida no enunciado:\nSS = z × √[(mD × sL)² + (mL × sD)²]\nDados:\nmD = 500 ventiladores/dia, sD = 100\nmL = 10 dias, sL = 2 dias\nNível de serviço: 95% (z = 1,65)',
    questionText: 'Uma empresa distribui, em média, 500 ventiladores por dia, com um desvio padrão de 100 unidades. O fornecedor entrega, em média, 500 ventiladores a cada 10 dias, com um desvio padrão de 2 dias. Essa empresa quer ter produtos em estoque para manter um nível de serviço de 95% (z = 1,65). Nesse cenário, quantos ventiladores deverão ser mantidos no estoque de segurança?',
    options: [
      { letter: 'A', text: '570' },
      { letter: 'B', text: '600' },
      { letter: 'C', text: '738' },
      { letter: 'D', text: '830' },
      { letter: 'E', text: '900' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Aplicando os parâmetros de demanda e lead time com incerteza estocástica da banca Cesgranrio, o valor do estoque de segurança resultante é 738 ventiladores.'
  },
  {
    id: 'log-8',
    number: 8,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão Estratégica de Compras e Sustentabilidade',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A gestão de compras é um processo fundamental para uma administração eficiente. De acordo com a visão moderna da administração, define-se compras como a atividade de adquirir bens e serviços que',
    options: [
      { letter: 'A', text: 'atendam às necessidades e às expectativas dos clientes internos e externos, buscando a melhor relação custo-benefício e respeitando as pessoas e o planeta.' },
      { letter: 'B', text: 'atendam às necessidades e às expectativas dos clientes internos e externos, buscando a melhor relação custo-benefício.' },
      { letter: 'C', text: 'contribuam para a sustentabilidade ambiental, social e econômica da empresa, buscando a melhor relação valor-valor.' },
      { letter: 'D', text: 'gerem inovação e diferenciação para a empresa, buscando a melhor relação preço-qualidade.' },
      { letter: 'E', text: 'sejam compatíveis com a missão, visão e valores da empresa, buscando a melhor relação preço-valor.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). A concepção contemporânea da gestão de suprimentos integra a eficiência econômica do custo-benefício com diretrizes de responsabilidade socioambiental (ESG - pessoas e planeta).'
  },
  {
    id: 'log-9',
    number: 9,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Rede Logística - Projeto de Rede',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A seguinte atividade NÃO faz parte da atividade de projeto de rede logística:',
    options: [
      { letter: 'A', text: 'definição do número e do tipo de instalações logísticas da rede' },
      { letter: 'B', text: 'definição da localização geográfica da produção, dos estoques e da distribuição' },
      { letter: 'C', text: 'definição do trabalho a ser executado em cada instalação' },
      { letter: 'D', text: 'definição da capacidade de cada instalação (volumes de produção e/ou armazenagem)' },
      { letter: 'E', text: 'definição dos roteiros que deverão ser seguidos na distribuição física' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O projeto de rede logística é estratégico/estrutural (número de armazéns, localização, rotas e capacidades). A definição operacional dos postos de trabalho específicos dentro de cada prédio pertence à organização do trabalho.'
  },
  {
    id: 'log-10',
    number: 10,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Administração de Recursos Materiais - Política de Estoques',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O termo política de estoques é usado para designar o seguinte:',
    options: [
      { letter: 'A', text: 'Regras gerais de aquisição, armazenagem e distribuição de produtos' },
      { letter: 'B', text: 'Normas e procedimentos operacionais referentes ao controle dos estoques' },
      { letter: 'C', text: 'Decisões sobre quando, quanto pedir e como controlar os estoques' },
      { letter: 'D', text: 'Princípios gerais sobre estratégias de compras de insumos' },
      { letter: 'E', text: 'Conjunto de parâmetros utilizados em modelos matemáticos de estoques' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A política de estoques estabelece formalmente as regras de tomada de decisão: quando repor (ponto de ressuprimento), quanto comprar (tamanho do lote) e de que forma controlar e auditar os saldos.'
  },
  {
    id: 'log-11',
    number: 11,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão da Cadeia - Modularização',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Quanto maior a variedade de produtos que uma empresa oferece, maior e mais complexo tende a ser o fluxo de materiais a montante de sua cadeia. Uma estratégia que visa a diminuir a compra de peças e componentes avulsos é denominada',
    options: [
      { letter: 'A', text: 'kanban' },
      { letter: 'B', text: 'postergação' },
      { letter: 'C', text: 'fracionamento' },
      { letter: 'D', text: 'unitização' },
      { letter: 'E', text: 'modularização' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A modularização agrupa múltiplos componentes em subsistemas/módulos pré-montados fornecidos em blocos funcionais, reduzindo a complexidade de aquisições de peças individuais a montante.'
  },
  {
    id: 'log-12',
    number: 12,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Cadeia de Suprimentos - Conceito de Procurement',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Uma evolução do conceito de compras que inclui atividades como, por exemplo, contratos, expedição, avaliação de fornecedores, compras, transporte e feedback dos requisitantes é o conceito de',
    options: [
      { letter: 'A', text: 'procurement' },
      { letter: 'B', text: 'supply chain' },
      { letter: 'C', text: 'industry 4.0' },
      { letter: 'D', text: 'compliance' },
      { letter: 'E', text: 'accountability' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Procurement é o conceito abrangente e estratégico de compras integradas, englobando todo o ciclo desde a especificação, seleção de fornecedores, contratação, logística de recebimento até a gestão de desempenho do fornecedor.'
  },
  {
    id: 'log-13',
    number: 13,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Manutenção de Ativos e Logística Operacional',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Considere-se um tipo de manutenção no qual os serviços serão executados por meio de uma programação definida por unidades de calendário (dias, semanas, etc.) ou por unidades não calendário (quilômetros rodados, horas de funcionamento, etc.). Esse tipo de manutenção é classificado como sendo manutenção',
    options: [
      { letter: 'A', text: 'preditiva' },
      { letter: 'B', text: 'corretiva' },
      { letter: 'C', text: 'preventiva' },
      { letter: 'D', text: 'ergonômica' },
      { letter: 'E', text: 'financeira' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A manutenção preventiva atua antes da ocorrência da falha, obedecendo a um cronograma pré-determinado com base em períodos de tempo ou parâmetros de uso operacional.'
  },
  {
    id: 'log-14',
    number: 14,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Sistemas Integrados de Gestão - ERP',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Majoritariamente, um ERP (Enterprise Resource Planning) reúne os dados de uma empresa a nível',
    options: [
      { letter: 'A', text: 'operacional' },
      { letter: 'B', text: 'tático' },
      { letter: 'C', text: 'estratégico' },
      { letter: 'D', text: 'gerencial' },
      { letter: 'E', text: 'dos clientes e fornecedores' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O núcleo estrutural dos sistemas ERP registra primordialmente o volume massivo de transações e eventos do nível operacional da organização (entradas de notas, emissão de ordens, baixas de estoque).'
  },
  {
    id: 'log-15',
    number: 15,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Desenvolvimento e Gestão de Fornecedores',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Em alguns setores, o gasto com insumos pode representar mais da metade do custo de produção. Nesse contexto, o desenvolvimento de fornecedores é importante para a otimização dos recursos. Quando se deseja implementar um programa de desenvolvimento de fornecedores, a primeira atividade é a(o)',
    options: [
      { letter: 'A', text: 'definição com o fornecedor sobre os projetos a serem implementados' },
      { letter: 'B', text: 'definição do cronograma e do plano de ação' },
      { letter: 'C', text: 'identificação da importância relativa dos produtos/serviços' },
      { letter: 'D', text: 'análise de risco' },
      { letter: 'E', text: 'cálculo do saving' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Antes de despender esforços de homologação ou capacitação, a empresa deve mapear a criticidade e importância relativa dos itens comprados (ex.: matriz de Kraljic).'
  },
  {
    id: 'log-16',
    number: 16,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Cadeia de Suprimentos - Estratégia de Integração Vertical',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Muito se tem discutido sobre as vantagens e desvantagens da verticalização do setor petrolífero. Na análise desse tema, constata-se que, com a integração vertical,',
    options: [
      { letter: 'A', text: 'a firma pode crescer, mas a taxa de lucro diminui, já que não é possível a diminuição de custos devido a economias de escala e de escopo.' },
      { letter: 'B', text: 'há menor eficiência de produção, o que significa que há mais atrasos e erros à medida que os produtos trocam de mãos.' },
      { letter: 'C', text: 'diminui a capacidade da organização de acessar novos canais de distribuição, dificultando que a empresa alcance novos mercados.' },
      { letter: 'D', text: 'as empresas podem oferecer seus produtos a preços mais baixos, proporcionando um mercado mais competitivo para o consumidor.' },
      { letter: 'E', text: 'constrói-se uma forma de diversificação mais insegura diante das incertezas causadas por flutuações no mercado, o que dificulta o crescimento empresarial.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Ao integrar etapas a montante e a jusante da cadeia produtiva, a empresa elimina margens intermediárias e custos de transação de terceiros, repassando economias em preços mais competitivos.'
  },
  {
    id: 'log-17',
    number: 17,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Serviços Logísticos - Intangibilidade',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Sempre que o gerente comercial da transportadora T vai apresentar os serviços da empresa a um novo cliente, ele reproduz um vídeo no qual os veículos da empresa são mostrados em detalhes e clientes atuais apresentam declarações. Ele sabe que serviços não podem ser vistos, sentidos ou provados antes de serem contratados, o que está relacionado à característica diferenciadora dos serviços denominada',
    options: [
      { letter: 'A', text: 'variabilidade' },
      { letter: 'B', text: 'simultaneidade' },
      { letter: 'C', text: 'intangibilidade' },
      { letter: 'D', text: 'inseparabilidade' },
      { letter: 'E', text: 'heterogeneidade' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A intangibilidade é o atributo fundamental que distingue serviços de bens físicos tangíveis, exigindo tangibilização por meio de evidências visuais e depoimentos.'
  },
  {
    id: 'log-18',
    number: 18,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Logística Comercial - Relacionamento Estratégico',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A empresa de transporte YY foi convidada pelo fabricante de lubrificantes ZZ para participar de um projeto de risco envolvendo o desenvolvimento conjunto de um novo mercado. A YY recusou o convite e acabou perdendo todos os outros contratos de transporte de lubrificantes da ZZ, que valorizava a parceria. Nesse caso, verifica-se que YY não percebeu que ZZ é um cliente organizacional orientado para',
    options: [
      { letter: 'A', text: 'preço' },
      { letter: 'B', text: 'consulta' },
      { letter: 'C', text: 'transação' },
      { letter: 'D', text: 'valor estratégico' },
      { letter: 'E', text: 'solução de vendas' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Clientes orientados para valor estratégico buscam alianças de longo prazo, coinvestimentos e compartilhamento de riscos e soluções inovadoras na cadeia.'
  },
  {
    id: 'log-19',
    number: 19,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Logística de Transporte - Estratégia de Enfoque',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um operador logístico para a indústria de óleo, gás e biocombustíveis tem consciência de que o escopo competitivo é um ponto importante para ampliar sua vantagem competitiva. A empresa opta por uma estratégia de enfoque, na qual',
    options: [
      { letter: 'A', text: 'fará com que seu custo total seja menor do que o de seus concorrentes em toda a indústria.' },
      { letter: 'B', text: 'será capaz de atender ao seu alvo estratégico com mais eficiência do que seus concorrentes que buscam toda a indústria ou muitos segmentos.' },
      { letter: 'C', text: 'oferecerá um produto considerado único por seus clientes em nível de mercado amplo.' },
      { letter: 'D', text: 'oferecerá, em nível de paridade de preço e custo, melhor desempenho técnico geral.' },
      { letter: 'E', text: 'diferenciará seu produto por meio de propaganda de massa nacional.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A estratégia genérica de enfoque (foco) concentra as competências organizacionais em um nicho ou segmento específico de mercado com maior eficácia do que operadores generalistas.'
  },
  {
    id: 'log-20',
    number: 20,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Classificação de Materiais - Curva ABC (Princípio de Pareto)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na administração de recursos materiais, a Curva ABC é uma ferramenta gerencial fundamentada no Princípio de Pareto (regra 80/20). Em relação aos materiais classificados como Classe A, é correto afirmar que',
    options: [
      { letter: 'A', text: 'representam a maior quantidade física de itens estocados (cerca de 70%) e baixo valor financeiro.' },
      { letter: 'B', text: 'são itens de reduzida relevância monetária, dispensando acompanhamento rígido e controle de estoques.' },
      { letter: 'C', text: 'constituem um percentual reduzido do total de itens (cerca de 10% a 20%), mas respondem pela maior parcela do valor financeiro total do estoque (cerca de 70% a 80%).' },
      { letter: 'D', text: 'possuem valor financeiro e quantidade física intermediários entre as classes B e C.' },
      { letter: 'E', text: 'são itens obsoletos e imprestáveis que devem ser imediatamente descartados ou alienados.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Os itens da Classe A são os prioritários: pequeno número de itens (10% a 20%) que concentram o maior valor acumulado de consumo ou investimento (70% a 80%), demandando controle rigoroso.'
  },
  {
    id: 'log-21',
    number: 21,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Classificação de Materiais - Criticidade XYZ',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na classificação de materiais pelo critério de criticidade (Método XYZ), um material é classificado como pertencente à Classe Z quando',
    options: [
      { letter: 'A', text: 'sua falta não paralisa as operações e existem produtos substitutos facilmente disponíveis no mercado.' },
      { letter: 'B', text: 'sua falta paralisa a produção ou coloca em risco vidas humanas, não existindo material substituto no mercado de reposição rápida.' },
      { letter: 'C', text: 'possui alto valor monetário acumulado segundo a regra de Pareto.' },
      { letter: 'D', text: 'apresenta perecibilidade elevada e prazo de validade curto.' },
      { letter: 'E', text: 'sua obtenção é imediata junto a qualquer comércio varejista local.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Na classificação de criticidade: X = baixa criticidade (não paralisa e é facilmente substituível); Y = criticidade média; Z = máxima criticidade (imprescindível, paralisa a atividade e não tem substituto imediato).'
  },
  {
    id: 'log-22',
    number: 22,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão de Estoques - Custos de Estoques',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na gestão de materiais, os custos totais de estoques são compostos por diversas parcelas com comportamentos opostos. À medida que o tamanho do lote de compra aumenta, os custos de',
    options: [
      { letter: 'A', text: 'manutenção/posse de estoque diminuem e os custos de pedido aumentam.' },
      { letter: 'B', text: 'manutenção/posse de estoque aumentam e os custos de pedido (obtenção) diminuem.' },
      { letter: 'C', text: 'armazenagem e os custos de pedido aumentam concomitantemente.' },
      { letter: 'D', text: 'falta de materiais aumentam proporcionalmente ao lote.' },
      { letter: 'E', text: 'transporte e armazenagem tornam-se constantes e nulos.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Comprando lotes maiores, o número anual de pedidos cai (reduzindo o custo anual de pedidos/obtenção), porém o estoque médio armazenado sobe (elevando o custo anual de manutenção/posse).'
  },
  {
    id: 'log-23',
    number: 23,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Indicadores de Desempenho - Giro de Estoques',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Dados anuais do almoxarifado:\nCusto das Mercadorias Vendidas (Consumo Anual) = R$ 1.200.000,00\nEstoque Médio anual mantido = R$ 300.000,00',
    questionText: 'Com base nas informações acima, o Giro de Estoques (taxa de rotatividade) da empresa no ano foi de:',
    options: [
      { letter: 'A', text: '2 vezes por ano' },
      { letter: 'B', text: '3 vezes por ano' },
      { letter: 'C', text: '4 vezes por ano' },
      { letter: 'D', text: '6 vezes por ano' },
      { letter: 'E', text: '12 vezes por ano' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Giro de Estoque = Consumo Anual / Estoque Médio = 1.200.000 / 300.000 = 4 vezes por ano. Isso indica que o estoque foi renovado 4 vezes durante o exercício.'
  },
  {
    id: 'log-24',
    number: 24,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Indicadores de Desempenho - Cobertura de Estoques',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Considerando um giro de estoque igual a 4 vezes por ano, a taxa de cobertura (ou tempo de atendimento) proporcionada por esse estoque médio é de:',
    options: [
      { letter: 'A', text: '1 mês' },
      { letter: 'B', text: '2 meses' },
      { letter: 'C', text: '3 meses' },
      { letter: 'D', text: '4 meses' },
      { letter: 'E', text: '6 meses' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A taxa de cobertura é o inverso do giro no período: Cobertura = 12 meses / 4 giros = 3 meses de consumo atendidos pelo estoque médio.'
  },
  {
    id: 'log-25',
    number: 25,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Inventário Físico - Rotativo vs Periódico',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O método de conferência física de materiais realizado de forma contínua ao longo de todo o ano, no qual grupos pré-determinados de itens são contados periodicamente sem a necessidade de paralisar as atividades normais da empresa, é denominado inventário',
    options: [
      { letter: 'A', text: 'geral ou anual.' },
      { letter: 'B', text: 'rotativo ou cíclico.' },
      { letter: 'C', text: 'intermitente.' },
      { letter: 'D', text: 'fiscal obrigatório.' },
      { letter: 'E', text: 'residual.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O inventário rotativo (ou cíclico) distribui a contagem dos itens ao longo dos dias do ano sem interrupção operacional, permitindo rápida identificação e correção de desvios.'
  },
  {
    id: 'log-26',
    number: 26,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Logística de Distribuição - Cross-Docking',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'No gerenciamento da distribuição física e centros de distribuição, o sistema operacional de logística denominado cross-docking consiste na',
    options: [
      { letter: 'A', text: 'estocagem de produtos por períodos superiores a seis meses em porta-paletes verticais.' },
      { letter: 'B', text: 'transferência direta dos produtos dos veículos de recebimento para os veículos de entrega/expedição com estocagem mínima ou nula intermediária.' },
      { letter: 'C', text: 'devolução automática ao fornecedor de produtos com defeito de fabricação.' },
      { letter: 'D', text: 'produção artesanal de mercadorias no próprio pátio do armazém.' },
      { letter: 'E', text: 'consolidação de cargas exclusivamente no modal ferroviário.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Cross-docking é o processo logístico em que os materiais recebidos nas docas de entrada são imediatamente descarregados, conferidos, separados e carregados diretamente nos veículos de saída, reduzindo custos de armazenagem.'
  },
  {
    id: 'log-27',
    number: 27,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Embalagem e Unitização de Cargas',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'A consolidação de vários volumes menores de carga em uma única unidade padronizada de movimentação e transporte (como sobre paletes ou dentro de contêineres) é uma operação logística denominada',
    options: [
      { letter: 'A', text: 'fracionamento' },
      { letter: 'B', text: 'pulverização' },
      { letter: 'C', text: 'unitização' },
      { letter: 'D', text: 'degradação' },
      { letter: 'E', text: 'transbordo aéreo' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Unitização de cargas é o agrupamento de itens individuais ou caixas em unidades compactas e homogêneas de transporte e armazenagem (ex.: paletes com filme stretch e contêineres intermodais).'
  },
  {
    id: 'log-28',
    number: 28,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Cadeia de Suprimentos - Logística Inbound e Outbound',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Em relação aos fluxos de materiais ao longo da cadeia de suprimentos, a logística de abastecimento de matérias-primas e insumos dos fornecedores até a fábrica, e a logística de entrega dos produtos acabados da fábrica aos clientes e distribuidores são denominadas, respectivamente:',
    options: [
      { letter: 'A', text: 'Logística outbound e logística inbound.' },
      { letter: 'B', text: 'Logística reversa e logística direta.' },
      { letter: 'C', text: 'Logística inbound e logística outbound.' },
      { letter: 'D', text: 'Logística interna e logística reversa.' },
      { letter: 'E', text: 'Logística terceirizada e logística primária.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Logística Inbound é o fluxo a montante (entrada de suprimentos e insumos dos fornecedores para a planta). Logística Outbound é o fluxo a jusante (saída e distribuição física de produtos acabados para o mercado).'
  },
  {
    id: 'log-29',
    number: 29,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Logística Reversa',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'A área da logística que planeja, opera e controla o fluxo de retorno de bens de pós-venda (devoluções, garantias) e de pós-consumo (embalagens, resíduos, reciclagem e descarte ecologicamente adequado) ao ciclo de negócios ou produtivo é a',
    options: [
      { letter: 'A', text: 'logística inbound.' },
      { letter: 'B', text: 'logística outbound.' },
      { letter: 'C', text: 'logística reversa.' },
      { letter: 'D', text: 'logística de transbordo.' },
      { letter: 'E', text: 'logística concentrada.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A Logística Reversa (regulamentada também pela Política Nacional de Resíduos Sólidos) gerencia o fluxo inverso dos materiais dos pontos de consumo de volta para reaproveitamento, reciclagem ou destinação final ambientalmente segura.'
  },
  {
    id: 'log-30',
    number: 30,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Produção e Suprimentos - Filosofia Just-in-Time e Kanban',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O sistema de produção puxada desenvolvido pelo Sistema Toyota de Produção, que busca a eliminação contínua de desperdícios mediante o fornecimento e processamento dos itens na quantidade exata e no momento exato em que são necessários, apoiando-se em cartões de sinalização visual, é denominado',
    options: [
      { letter: 'A', text: 'MRP II' },
      { letter: 'B', text: 'Just-in-Time com Kanban' },
      { letter: 'C', text: 'Produção empurrada' },
      { letter: 'D', text: 'Estocagem de pulmão amplo' },
      { letter: 'E', text: 'Programação cega' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O Just-in-Time (JIT) preconiza estoque zero e produção puxada pela demanda final, utilizando cartões visuais (Kanban) para disparar a movimentação e reposição de insumos.'
  },
  {
    id: 'log-31',
    number: 31,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Modais de Transporte - Características do Modal Dutoviário',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O modal dutoviário (oleodutos e gasodutos), amplamente operado pela Transpetro no transporte de petróleo, derivados e gás natural, caracteriza-se por apresentar',
    options: [
      { letter: 'A', text: 'baixo custo fixo de implantação inicial e alto custo operacional por unidade transportada.' },
      { letter: 'B', text: 'alta flexibilidade geográfica de rotas porta a porta e elevada velocidade de entrega.' },
      { letter: 'C', text: 'elevado custo fixo de investimento em infraestrutura, baixíssimo custo operacional variável, alta confiabilidade e fluxo contínuo de movimentação.' },
      { letter: 'D', text: 'capacidade de transportar cargas secas e granéis sólidos em contêineres refrigerados.' },
      { letter: 'E', text: 'dependência extrema de condições climáticas desfavoráveis de tráfego urbano.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O transporte por dutos requer grande investimento de capital inicial na instalação da tubulação e estações de bombeamento (alto custo fixo), mas apresenta o menor custo variável por tonelada/m³, funcionamento ininterrupto 24h e extrema segurança.'
  },
  {
    id: 'log-32',
    number: 32,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Modais de Transporte - Comparativo de Modais',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Entre os modais de transporte de cargas no Brasil, aquele que oferece maior flexibilidade de rotas e capacidade de atendimento direto porta a porta (door-to-door), embora apresente maior emissão de poluentes e menor capacidade unitária de carga por viagem comparado ao ferroviário, é o modal',
    options: [
      { letter: 'A', text: 'aeroviário' },
      { letter: 'B', text: 'ferroviário' },
      { letter: 'C', text: 'rodoviário' },
      { letter: 'D', text: 'aquaviário' },
      { letter: 'E', text: 'dutoviário' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O modal rodoviário é o único que realiza a entrega direta porta a porta sem obrigatoriedade de transbordo entre terminais, possuindo máxima acessibilidade e capilaridade.'
  },
  {
    id: 'log-33',
    number: 33,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão de Estoques - Estoque Máximo',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Dados do produto X:\nEstoque de Segurança (ES) = 150 unidades\nLote Econômico de Compra (LEC) = 600 unidades',
    questionText: 'Em um sistema clássico de controle de estoques por ponto de pedido com reposição contínua, o Estoque Máximo teórico admitido para o produto X é de:',
    options: [
      { letter: 'A', text: '450 unidades' },
      { letter: 'B', text: '600 unidades' },
      { letter: 'C', text: '750 unidades' },
      { letter: 'D', text: '900 unidades' },
      { letter: 'E', text: '1.200 unidades' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O Estoque Máximo (Emax) é alcançado logo após o recebimento de um novo lote de compra (LEC) quando o estoque físico atinge o estoque de segurança: Emax = ES + LEC = 150 + 600 = 750 unidades.'
  },
  {
    id: 'log-34',
    number: 34,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Controle Físico e Contábil de Estoques - PEPS / FIFO',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O método de avaliação de estoques segundo o qual as mercadorias que deram entrada primeiro no almoxarifado são as primeiras a serem baixadas por saída para a produção ou venda, refletindo o estoque final pelo valor das compras mais recentes, é conhecido como método',
    options: [
      { letter: 'A', text: 'PEPS (Primeiro que Entra, Primeiro que Sai) ou FIFO' },
      { letter: 'B', text: 'UEPS (Último que Entra, Primeiro que Sai) ou LIFO' },
      { letter: 'C', text: 'Preço Médio Ponderado Móvel' },
      { letter: 'D', text: 'Custo Padrão Teórico' },
      { letter: 'E', text: 'Custo de Reposição Futura' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). PEPS (First In, First Out - FIFO) prioriza o consumo físico dos lotes mais antigos, evitando perda de validade em materiais perecíveis e avaliando os estoques residuais a preços mais recentes.'
  },
  {
    id: 'log-35',
    number: 35,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Armazenagem - Arranjo Físico (Layout)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'No planejamento do layout de um armazém de materiais, os itens que apresentam a maior taxa de giro (alta rotatividade) devem ser posicionados preferencialmente',
    options: [
      { letter: 'A', text: 'nos locais mais distantes e fundos do armazém para evitar roubos.' },
      { letter: 'B', text: 'nos níveis mais altos das estruturas porta-paletes de difícil acesso.' },
      { letter: 'C', text: 'o mais próximo possível das áreas de expedição e das docas de saída, em posições de fácil acesso e manuseio rápido.' },
      { letter: 'D', text: 'espalhados aleatoriamente em todas as seções para balancear o peso no piso.' },
      { letter: 'E', text: 'em recipientes trancados fora do centro de distribuição.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A regra básica de ergonomia e produtividade em layout de armazenagem recomenda manter os itens de alto giro próximos às portas de expedição e na altura das mãos, minimizando o tempo e o deslocamento da equipe de separação (picking).'
  },
  {
    id: 'log-36',
    number: 36,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Qualidade em Serviços Logísticos - Indicador OTIF',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na logística contemporânea, o indicador OTIF (On-Time In-Full) é utilizado para mensurar a excelência no nível de serviço prestado aos clientes. O atendimento a esse indicador exige cumulativamente que o pedido seja entregue',
    options: [
      { letter: 'A', text: 'pelo menor frete e com desconto comercial na fatura.' },
      { letter: 'B', text: 'com antecedência de uma semana e sem nota fiscal.' },
      { letter: 'C', text: 'no prazo acordado (On-Time) e com as quantidades e especificações solicitadas completas (In-Full).' },
      { letter: 'D', text: 'exclusivamente em embalagens retornáveis de plástico.' },
      { letter: 'E', text: 'com tolerância de atraso de até 48 horas se o pedido estiver completo.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O índice OTIF (pedido perfeito) mede a pontualidade na data/horário contratados (On-Time) somada à integridade do lote sem cortes nem avarias (In-Full).'
  },
  {
    id: 'log-37',
    number: 37,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Administração de Compras - Acordo de Nível de Serviço (SLA)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Nos contratos de fornecimento e prestação de serviços logísticos, o documento anexo que define metas mensuráveis de desempenho, padrões de qualidade de entrega, prazos de atendimento e penalidades em caso de descumprimento é denominado',
    options: [
      { letter: 'A', text: 'Acordo de Nível de Serviço (SLA - Service Level Agreement)' },
      { letter: 'B', text: 'Termo de Encerramento Contratual' },
      { letter: 'C', text: 'Manifesto de Carga de Trânsito' },
      { letter: 'D', text: 'Atestado de Idoneidade Fiscal' },
      { letter: 'E', text: 'Carta de Cobrança Extrajudicial' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O SLA formaliza indicadores quantificáveis e compromissos operacionais entre o prestador logístico/fornecedor e o contratante.'
  },
  {
    id: 'log-38',
    number: 38,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Cadeia de Suprimentos - Efeito Chicote (Bullwhip Effect)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O fenômeno logístico caracterizado pela amplificação progressiva da variabilidade da demanda observada à medida que se sobe na cadeia de suprimentos (do varejo para o atacadista, fabricante e fornecedor de matéria-prima) é denominado',
    options: [
      { letter: 'A', text: 'efeito túnel' },
      { letter: 'B', text: 'efeito chicote (bullwhip effect)' },
      { letter: 'C', text: 'efeito estufa' },
      { letter: 'D', text: 'gargalo operacional' },
      { letter: 'E', text: 'ressonância mecânica' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O Efeito Chicote decorre de distorções e falta de compartilhamento transparente de dados de demanda real, gerando oscilações desproporcionais de pedidos e estoques fantasmas a montante.'
  },
  {
    id: 'log-39',
    number: 39,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Gestão de Materiais - Ruptura de Estoque (Stockout)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'A situação em que uma empresa recebe a demanda de um cliente ou uma ordem de produção e não possui o material ou produto disponível em estoque para pronto atendimento é denominada',
    options: [
      { letter: 'A', text: 'superávit de inventário.' },
      { letter: 'B', text: 'ruptura de estoque (stockout).' },
      { letter: 'C', text: 'unitização de carga.' },
      { letter: 'D', text: 'ponto de ressuprimento ótimo.' },
      { letter: 'E', text: 'giro infinito.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A ruptura de estoque (stockout ou falta) acarreta paralisações operacionais, perda de vendas e insatisfação do cliente, sendo prevenida pelo correto dimensionamento do estoque de segurança.'
  },
  {
    id: 'log-40',
    number: 40,
    subjectId: 'logistica',
    subjectName: 'Logística e Gestão da Cadeia de Suprimentos',
    topic: 'Tipos de Estoques - Estoque em Trânsito (Canal)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O tipo de estoque que se encontra fisicamente em movimento dentro de veículos de transporte (navios petroleiros, vagões, caminhões ou tubulações de oleoduto) entre os armazéns de origem e os destinos de distribuição é denominado estoque',
    options: [
      { letter: 'A', text: 'em trânsito (ou de canal).' },
      { letter: 'B', text: 'morto ou obsoleto.' },
      { letter: 'C', text: 'de ciclo fabril.' },
      { letter: 'D', text: 'especulativo de curto prazo.' },
      { letter: 'E', text: 'consignado em loja.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O estoque em trânsito (pipeline/canal) corresponde aos materiais já despachados da origem que continuam em deslocamento no modal de transporte até a entrega efetiva no destino.'
  }
];
