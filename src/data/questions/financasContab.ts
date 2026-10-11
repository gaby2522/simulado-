import { Question } from '../../types/quiz';

export const FINANCAS_CONTAB_QUESTIONS: Question[] = [
  // 1. Escrituração e Livros Contábeis
  {
    id: 'fin-1',
    number: 1,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Escrituração no Livro Diário',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'As entidades devem manter registros contábeis suportados por documentos legais e hábeis, tais como notas fiscais, recibos e contratos. De acordo com a teoria contábil e normas do Conselho Federal de Contabilidade, tais registros devem ser realizados no livro Diário, por lançamento cuja quantidade de elementos essenciais é',
    options: [
      { letter: 'A', text: 'dois' },
      { letter: 'B', text: 'três' },
      { letter: 'C', text: 'quatro' },
      { letter: 'D', text: 'cinco' },
      { letter: 'E', text: 'seis' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Conforme a Resolução CFC e NBC TG, os cinco elementos indispensáveis do lançamento contábil no livro Diário são: 1) Data da ocorrência da transação; 2) Conta(s) a ser(em) debitada(s); 3) Conta(s) a ser(em) creditada(s); 4) Histórico da operação; 5) Valor da transação em moeda corrente.'
  },
  {
    id: 'fin-2',
    number: 2,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Contabilidade Geral - Subscrição e Integralização de Capital',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Os acionistas da Companhia Y de capital fechado aprovaram o aumento de seu capital social, em assembleia geral extraordinária, com a emissão de 100.000 novas ações ordinárias de valor nominal de R$ 2,00 cada uma. As ações foram oferecidas aos atuais acionistas, que, exercendo seu direito de preferência, subscreveram 80% das ações oferecidas.\nIndependentemente de quaisquer outros aspectos técnicos ou legais, a Companhia Y deve fazer o registro contábil dessa subscrição das ações da seguinte forma:',
    options: [
      { letter: 'A', text: 'D: Capital subscrito 80.000,00 | C: Capital social 80.000,00' },
      { letter: 'B', text: 'D: Capital social 160.000,00 | C: Capital subscrito 160.000,00' },
      { letter: 'C', text: 'D: Capital a realizar 160.000,00 | C: Capital social 160.000,00' },
      { letter: 'D', text: 'D: Caixa 160.000,00 | C: Capital subscrito 160.000,00' },
      { letter: 'E', text: 'D: Capital subscrito 200.000,00 | C: Capital a realizar 200.000,00' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A subscrição representa o compromisso formal assumido pelos sócios. O montante subscrito é 80% de 100.000 ações = 80.000 ações × R$ 2,00 = R$ 160.000,00. O registro contábil debita a conta retificadora do Patrimônio Líquido "Capital Social a Realizar" e credita a conta de Patrimônio Líquido "Capital Social" no valor de R$ 160.000,00.'
  },
  {
    id: 'fin-3',
    number: 3,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Demonstração dos Fluxos de Caixa (DFC) - Atividades Operacionais',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A Demonstração dos Fluxos de Caixa (DFC) objetiva evidenciar a movimentação financeira da empresa no decorrer de um exercício social. Nesse contexto, a expressão “as principais atividades geradoras de receita da entidade pelas transações que envolvem a consecução de seu objeto social” corresponde à definição técnica de',
    options: [
      { letter: 'A', text: 'atividades de financiamento' },
      { letter: 'B', text: 'atividades de investimento' },
      { letter: 'C', text: 'atividades operacionais' },
      { letter: 'D', text: 'equivalentes de caixa' },
      { letter: 'E', text: 'fluxos de caixa' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Conforme o Pronunciamento Técnico CPC 03 (R2) e a NBC TG 03, as atividades operacionais são as principais atividades geradoras de receita da entidade e outras atividades que não são de investimento tampouco de financiamento.'
  },
  {
    id: 'fin-4',
    number: 4,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DFC - Método Direto vs Indireto',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A Demonstração dos Fluxos de Caixa (DFC) pode ser elaborada por dois métodos distintos, direto e indireto, com os critérios de evidenciação diferenciados no fluxo operacional. Nesse contexto, a característica do fluxo operacional elaborado pelo método direto é a de evidenciar seus componentes pelo valor',
    options: [
      { letter: 'A', text: 'bruto' },
      { letter: 'B', text: 'líquido' },
      { letter: 'C', text: 'ajustado' },
      { letter: 'D', text: 'apurado por diferenças' },
      { letter: 'E', text: 'do lucro líquido ajustado' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). No método direto da DFC, as principais classes de recebimentos e pagamentos operacionais são divulgadas pelos seus valores brutos (ex.: recebimentos brutos de clientes, pagamentos brutos a fornecedores e a empregados).'
  },
  {
    id: 'fin-5',
    number: 5,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DRE e Apuração do Lucro Anual',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Uma empresa produz e vende um produto que tem uma demanda anual de 12.000 unidades. O preço de venda do produto é de R$ 100,00 por unidade. O custo fixo anual da empresa com esse produto é de R$ 120.000,00 e o custo variável por unidade produzida é de R$ 60,00.\nQual é o lucro anual (L), em R$, dessa empresa?',
    options: [
      { letter: 'A', text: '326.500' },
      { letter: 'B', text: '360.000' },
      { letter: 'C', text: '415.000' },
      { letter: 'D', text: '738.000' },
      { letter: 'E', text: '980.000' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Receita Total = 12.000 × 100 = R$ 1.200.000,00. Custos Variáveis Totais = 12.000 × 60 = R$ 720.000,00. Margem de Contribuição Total = 1.200.000 - 720.000 = R$ 480.000,00. Lucro = Margem de Contribuição - Custos Fixos = 480.000 - 120.000 = R$ 360.000,00.'
  },
  {
    id: 'fin-6',
    number: 6,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Finanças Corporativas - Conceito de Risco de Ativos',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A melhor descrição do conceito de risco dos ativos financeiros é a seguinte:',
    options: [
      { letter: 'A', text: 'o risco financeiro é a variação dos preços dos ativos.' },
      { letter: 'B', text: 'o risco financeiro é a variação dos retornos dos ativos baseados nos preços.' },
      { letter: 'C', text: 'o risco financeiro se refere ao processo de eliminação da variação dos preços dos ativos.' },
      { letter: 'D', text: 'o risco financeiro é uma variável irrelevante na tomada de decisão, pois não mede a variação dos retornos futuros dos ativos.' },
      { letter: 'E', text: 'o risco financeiro mede somente a parte negativa dos retornos dos ativos.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O risco financeiro de um ativo reflete a variabilidade ou volatilidade dos retornos gerados a partir da flutuação de seus preços no tempo.'
  },
  {
    id: 'fin-7',
    number: 7,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Engenharia Econômica - VPL e Taxa Interna de Retorno',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    tableOrData: 'Taxa de desconto | VPL (em milhares de R$)\n10% | 130\n15% | 50\n20% | -50',
    questionText: 'Em gerenciamento de projetos, há métodos de avaliação e cálculo de viabilidade econômica. Uma empresa apresenta os dados mostrados na Tabela. No caso da avaliação desse projeto pela empresa, a partir de que taxa o projeto começa a ser viável?',
    options: [
      { letter: 'A', text: '20,0%' },
      { letter: 'B', text: '17,5%' },
      { letter: 'C', text: '15,0%' },
      { letter: 'D', text: '12,5%' },
      { letter: 'E', text: '10,0%' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Um projeto é economicamente viável quando VPL ≥ 0. A taxa na qual o VPL se anula (VPL = 0) é a Taxa Interna de Retorno (TIR). Entre 15% (VPL = +50) e 20% (VPL = -50), o VPL cai linearmente 100 unidades em 5 pontos percentuais. Ele atinge zero exatamente em 15% + 2,5% = 17,5%.'
  },
  {
    id: 'fin-8',
    number: 8,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Análise de Balanço - Capital de Giro Líquido',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Se o endividamento de longo prazo de uma empresa é destinado a financiar seu capital de giro líquido, um índice cuja razão entre exigíveis (curto e longo prazo) e capital de giro líquido seja igual a 1 significa que a(o)',
    options: [
      { letter: 'A', text: 'empresa mantém um capital de giro líquido abaixo do volume de dívidas de longo prazo.' },
      { letter: 'B', text: 'empresa mantém um capital de giro líquido igual ao volume de dívidas de curto prazo.' },
      { letter: 'C', text: 'empresa fez uma captação de recursos de terceiros de longo prazo para financiar o ativo não circulante.' },
      { letter: 'D', text: 'ativo circulante da empresa não é suficiente para quitar as dívidas totais.' },
      { letter: 'E', text: 'patrimônio líquido está aplicado em ativo não circulante.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Se a totalidade dos exigíveis de longo prazo financia o CGL e a relação Exigíveis Totais / CGL = 1, tem-se que a proporção das dívidas circulantes de curto prazo iguala-se matematicamente ao montante de capital de giro líquido mantido.'
  },
  {
    id: 'fin-9',
    number: 9,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Matemática Financeira - Amortização a Juros Compostos',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    tableOrData: 'Empréstimo em jan/2023: R$ 200 mil a taxa de 10% a.a. juros compostos.\nPagamentos:\njan/24: R$ 50 mil\njan/25: R$ 70 mil\njan/26: parcela restante',
    questionText: 'Um empréstimo no valor de R$ 200 mil foi realizado em janeiro de 2023, a uma taxa de juro de 10% ao ano, no regime de juros compostos. Para liquidar a dívida com os pagamentos informados, a quantia, em milhares de reais, que mais se aproxima do valor da terceira parcela é igual a',
    options: [
      { letter: 'A', text: '88,0' },
      { letter: 'B', text: '96,8' },
      { letter: 'C', text: '117,7' },
      { letter: 'D', text: '128,7' },
      { letter: 'E', text: '132,8' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Saldo devedor após 1 ano (jan/24): 200 × 1,10 - 50 = 220 - 50 = 170 mil. Saldo após 2 anos (jan/25): 170 × 1,10 - 70 = 187 - 70 = 117 mil. Terceira parcela necessária em jan/26: 117 × 1,10 = 128,7 mil reais.'
  },
  {
    id: 'fin-10',
    number: 10,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Matemática Financeira - Capitalização Composta e Taxa Efetiva',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    tableOrData: 'Tabela fornecida:\nx: 0,1 -> 2^x = 1,072\nx: 0,2 -> 2^x = 1,149\nx: 0,3 -> 2^x = 1,231\nx: 0,4 -> 2^x = 1,319\nx: 0,5 -> 2^x = 1,414',
    questionText: 'Uma empresa comprou um ativo por 18 milhões de reais em janeiro de 2008. Buscando captar recursos, devido a uma crise financeira que atravessa, a empresa estuda vender o ativo, o qual foi avaliado, em janeiro de 2018, no valor de aproximadamente 36 milhões de reais.\nSe o valor de venda for igual ao avaliado, o valor mais próximo da taxa anual de retorno, proporcionada por esse investimento, considerando-se o sistema de capitalização composta, é',
    options: [
      { letter: 'A', text: '5,8%' },
      { letter: 'B', text: '7,2%' },
      { letter: 'C', text: '10,0%' },
      { letter: 'D', text: '12,5%' },
      { letter: 'E', text: '14,9%' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Prazo: 10 anos (jan/2008 a jan/2018). M = C × (1 + i)^n => 36 = 18 × (1 + i)^10 => (1 + i)^10 = 2 => 1 + i = 2^(1/10) = 2^(0,1). Pela tabela dada, 2^(0,1) = 1,072. Logo, i = 1,072 - 1 = 0,072 = 7,2% ao ano.'
  },
  {
    id: 'fin-11',
    number: 11,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Matemática Financeira - Desconto Racional Composto',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Uma empresa avalia antecipar o pagamento das duas últimas parcelas de um financiamento, realizado a uma taxa de juro de 5% ao mês, para abril de 2018. As parcelas, no valor de R$ 8.820,00 cada uma, têm data de vencimento para maio de 2018 e junho de 2018.\nConsiderando-se o desconto racional composto, o valor de quitação total das duas parcelas, se o pagamento das duas for realizado em abril de 2018, é igual a',
    options: [
      { letter: 'A', text: 'R$ 15.876,00' },
      { letter: 'B', text: 'R$ 16.000,00' },
      { letter: 'C', text: 'R$ 16.400,00' },
      { letter: 'D', text: 'R$ 16.800,00' },
      { letter: 'E', text: 'R$ 17.640,00' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O valor atual racional composto é VP = N / (1 + i)^n. Parcela de maio (1 mês antes): VP1 = 8.820 / 1,05 = R$ 8.400,00. Parcela de junho (2 meses antes): VP2 = 8.820 / (1,05)² = 8.820 / 1,1025 = R$ 8.000,00. Valor total quitado = 8.400 + 8.000 = R$ 16.000,00.'
  },
  {
    id: 'fin-12',
    number: 12,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Gestão Financeira Comercial - Ciclo de Vida do Cliente (LTV)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um levantamento realizado pela direção da empresa W Transportes mostrou que o ciclo de vida médio dos clientes corporativos de serviços de transportes é de 6 anos. Se o objetivo da direção é que o valor da relação comercial de cada cliente corporativo seja, no mínimo, de R$ 300.000,00, qual deve ser o montante mínimo de negócios mensais de cada cliente da empresa?',
    options: [
      { letter: 'A', text: 'R$ 4.166,67' },
      { letter: 'B', text: 'R$ 16.666,67' },
      { letter: 'C', text: 'R$ 33.333,33' },
      { letter: 'D', text: 'R$ 45.833,33' },
      { letter: 'E', text: 'R$ 50.000,00' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O ciclo de vida de 6 anos equivale a 6 × 12 = 72 meses. Para atingir o valor acumulado de R$ 300.000,00: 300.000 / 72 = R$ 4.166,67 por mês.'
  },
  {
    id: 'fin-13',
    number: 13,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Gestão de Custos e Compras - Geração de Saving',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A cotação de preços é uma importante etapa dentro da gestão de compras. Uma das razões que levam a empresa a realizar cotações entre possíveis fornecedores é',
    options: [
      { letter: 'A', text: 'reduzir o custo do pedido.' },
      { letter: 'B', text: 'reduzir o lead time do pedido.' },
      { letter: 'C', text: 'aumentar o custo do pedido.' },
      { letter: 'D', text: 'aumentar o saving.' },
      { letter: 'E', text: 'aumentar o giro do estoque.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O saving representa a economia financeira gerada nas negociações de compras frente ao orçamento base ou histórico de preços. A cotação competitiva visa maximizar esse ganho.'
  },
  {
    id: 'fin-14',
    number: 14,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Contabilidade Geral - Equação Fundamental do Patrimônio',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Em relação aos conceitos fundamentais de patrimônio e estrutura patrimonial contábil, é correto afirmar que a situação líquida (Patrimônio Líquido) de uma entidade é nula quando',
    options: [
      { letter: 'A', text: 'o total do Ativo for maior que o total do Passivo Exigível.' },
      { letter: 'B', text: 'o total do Ativo for rigorosamente igual ao total do Passivo Exigível.' },
      { letter: 'C', text: 'o total do Passivo Exigível for nulo e o Ativo for positivo.' },
      { letter: 'D', text: 'o total do Ativo for menor que o Passivo Exigível (passivo a descoberto).' },
      { letter: 'E', text: 'todas as disponibilidades financeiras em caixa forem iguais a zero.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Pela equação fundamental da contabilidade: PL = Ativo - Passivo Exigível. Quando Ativo = Passivo Exigível, a Situação Líquida / Patrimônio Líquido é exatamente igual a zero (situação líquida nula).'
  },
  {
    id: 'fin-15',
    number: 15,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Fatos Contábeis - Tipologia dos Fatos',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'A aquisição de computadores para o setor administrativo à vista, mediante pagamento com recursos depositados em conta corrente bancária, caracteriza contabilmente um fato',
    options: [
      { letter: 'A', text: 'modificativo aumentativo.' },
      { letter: 'B', text: 'modificativo diminutivo.' },
      { letter: 'C', text: 'permutativo entre elementos do ativo.' },
      { letter: 'D', text: 'misto aumentativo.' },
      { letter: 'E', text: 'misto diminutivo.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Ocorre débito no Ativo Imobilizado (computadores) e crédito no Ativo Circulante (Bancos Conta Movimento). Há apenas permuta de valores entre contas patrimoniais do Ativo, sem alterar o montante do Patrimônio Líquido (fato permutativo ou compensativo).'
  },
  {
    id: 'fin-16',
    number: 16,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Fatos Contábeis - Fato Modificativo',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O reconhecimento da despesa com salários do mês a serem pagos no quinto dia útil do mês seguinte gera um lançamento contábil que classifica esse acontecimento como fato contábil',
    options: [
      { letter: 'A', text: 'permutativo entre o ativo e o passivo.' },
      { letter: 'B', text: 'modificativo diminutivo.' },
      { letter: 'C', text: 'modificativo aumentativo.' },
      { letter: 'D', text: 'misto aumentativo.' },
      { letter: 'E', text: 'permutativo exclusivo do passivo.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Debita-se Despesa de Salários (conta de resultado que reduz o PL) e credita-se Salários a Pagar (Passivo Circulante). A operação provoca diminuição do Patrimônio Líquido, caracterizando um fato modificativo diminutivo.'
  },
  {
    id: 'fin-17',
    number: 17,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Balanço Patrimonial - Classificação de Contas do Ativo',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'No Balanço Patrimonial estruturado segundo a Lei nº 6.404/1976 e suas alterações, as contas são dispostas em grupos. Os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou exercidos com essa finalidade, inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens, classificam-se no',
    options: [
      { letter: 'A', text: 'Ativo Circulante.' },
      { letter: 'B', text: 'Ativo Realizável a Longo Prazo.' },
      { letter: 'C', text: 'Ativo Imobilizado.' },
      { letter: 'D', text: 'Ativo Intangível.' },
      { letter: 'E', text: 'Investimentos permanentes.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Conforme o art. 179, IV, da Lei 6.404/76, essa é a definição literal das contas do subgrupo do Ativo Imobilizado.'
  },
  {
    id: 'fin-18',
    number: 18,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Balanço Patrimonial - Ativo Intangível',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'No Balanço Patrimonial, a conta que deve ser classificada no subgrupo do Ativo Intangível é:',
    options: [
      { letter: 'A', text: 'Terrenos mantidos para valorização futura sem uso operacional.' },
      { letter: 'B', text: 'Veículos utilizados na distribuição de mercadorias.' },
      { letter: 'C', text: 'Marcas e patentes adquiridas pela entidade.' },
      { letter: 'D', text: 'Ações de outras companhias avaliadas pelo método de equivalência patrimonial.' },
      { letter: 'E', text: 'Estoques de matéria-prima destinados à industrialização.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O Ativo Intangível reúne direitos e bens incorpóreos identificáveis sem substância física destinados à manutenção da atividade operacional, tais como marcas, patentes, licenças e softwares.'
  },
  {
    id: 'fin-19',
    number: 19,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Balanço Patrimonial - Estrutura do Patrimônio Líquido',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'De acordo com a Lei das Sociedades por Ações, o Patrimônio Líquido é dividido em grupos de contas. NÃO faz parte da composição do Patrimônio Líquido a conta de',
    options: [
      { letter: 'A', text: 'Capital Social subscrito.' },
      { letter: 'B', text: 'Reservas de Capital.' },
      { letter: 'C', text: 'Reservas de Lucros.' },
      { letter: 'D', text: 'Adiantamento a Fornecedores.' },
      { letter: 'E', text: 'Ações em Tesouraria.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). "Adiantamento a Fornecedores" representa um direito da empresa (receber mercadorias ou serviços contratados) e integra o Ativo Circulante, não o Patrimônio Líquido.'
  },
  {
    id: 'fin-20',
    number: 20,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Regime de Competência vs Regime de Caixa',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Uma empresa prestou serviços em dezembro de 2023 no valor de R$ 50.000,00, emitindo a respectiva nota fiscal com vencimento para pagamento em janeiro de 2024. De acordo com o Regime de Competência, preconizado pelas normas brasileiras de contabilidade, essa receita deve ser reconhecida no exercício de',
    options: [
      { letter: 'A', text: '2023, independentemente de quando for efetivamente recebida.' },
      { letter: 'B', text: '2024, no momento exato da entrada financeira do dinheiro no caixa.' },
      { letter: 'C', text: '2023 e 2024 dividida em partes iguais de R$ 25.000,00.' },
      { letter: 'D', text: '2024, desde que não ocorra inadimplência pelo tomador do serviço.' },
      { letter: 'E', text: 'qualquer um dos anos, à livre escolha dos administradores da empresa.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Pelo Princípio da Competência (NBC TG Estrutura Conceitual), as receitas e despesas são apropriadas no período em que são geradas (fato gerador ocorrido em 2023), independentemente do momento de sua liquidação financeira.'
  },
  {
    id: 'fin-21',
    number: 21,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DRE - Estrutura da Receita Líquida',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na Demonstração do Resultado do Exercício (DRE), para se chegar à Receita Operacional Líquida a partir da Receita Operacional Bruta de vendas, devem ser deduzidos:',
    options: [
      { letter: 'A', text: 'o Custo das Mercadorias Vendidas (CMV) e as despesas com juros.' },
      { letter: 'B', text: 'os tributos sobre vendas (como ICMS e ISS), devoluções de vendas e abatimentos concedidos.' },
      { letter: 'C', text: 'as despesas administrativas e os salários do pessoal de vendas.' },
      { letter: 'D', text: 'o imposto de renda da pessoa jurídica e a contribuição social sobre o lucro.' },
      { letter: 'E', text: 'os dividendos distribuídos aos acionistas preferenciais.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Receita Líquida = Receita Bruta - Deduções da Receita Bruta (Vendas Canceladas/Devoluções, Abatimentos Incondicionais, Descontos Comerciais e Tributos Incidentes sobre Vendas como ICMS, PIS, COFINS e ISS).'
  },
  {
    id: 'fin-22',
    number: 22,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DRE - Custo das Mercadorias Vendidas (CMV)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Dados da empresa comercial:\nEstoque Inicial (EI) = R$ 40.000,00\nCompras Líquidas do Período (C) = R$ 110.000,00\nEstoque Final inventariado (EF) = R$ 30.000,00',
    questionText: 'Considerando os dados fornecidos da empresa comercial, o Custo das Mercadorias Vendidas (CMV) apurado para a DRE foi de:',
    options: [
      { letter: 'A', text: 'R$ 100.000,00' },
      { letter: 'B', text: 'R$ 120.000,00' },
      { letter: 'C', text: 'R$ 140.000,00' },
      { letter: 'D', text: 'R$ 150.000,00' },
      { letter: 'E', text: 'R$ 180.000,00' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A fórmula básica do CMV para empresas comerciais é: CMV = Estoque Inicial + Compras Líquidas - Estoque Final = 40.000 + 110.000 - 30.000 = 150.000 - 30.000 = R$ 120.000,00.'
  },
  {
    id: 'fin-23',
    number: 23,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Análise Financeira - Ponto de Equilíbrio Contábil (PEC)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Uma empresa fabrica um produto cujo preço de venda unitário é R$ 80,00 e o custo variável unitário é R$ 50,00. Sabendo-se que os custos e despesas fixos anuais totalizam R$ 150.000,00, a quantidade mínima de unidades que a empresa precisa vender anualmente para atingir o Ponto de Equilíbrio Contábil (PEC) é:',
    options: [
      { letter: 'A', text: '1.875 unidades' },
      { letter: 'B', text: '3.000 unidades' },
      { letter: 'C', text: '5.000 unidades' },
      { letter: 'D', text: '7.500 unidades' },
      { letter: 'E', text: '10.000 unidades' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Margem de Contribuição Unitária (MC) = Preço de Venda - Custo Variável = 80 - 50 = R$ 30,00. PEC (em unidades) = Custos Fixos / MC = 150.000 / 30 = 5.000 unidades.'
  },
  {
    id: 'fin-24',
    number: 24,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Análise de Índices de Liquidez - Liquidez Corrente',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Balanço da Cia Alfa:\nAtivo Circulante = R$ 240.000,00\nAtivo Não Circulante = R$ 360.000,00\nPassivo Circulante = R$ 160.000,00\nPassivo Não Circulante = R$ 200.000,00\nPatrimônio Líquido = R$ 240.000,00',
    questionText: 'Com base nas informações do Balanço Patrimonial da Cia Alfa, o Índice de Liquidez Corrente (ILC) da empresa é:',
    options: [
      { letter: 'A', text: '0,67' },
      { letter: 'B', text: '1,00' },
      { letter: 'C', text: '1,20' },
      { letter: 'D', text: '1,50' },
      { letter: 'E', text: '2,50' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O Índice de Liquidez Corrente é calculado pela razão: ILC = Ativo Circulante / Passivo Circulante = 240.000 / 160.000 = 1,50. Isso indica que a empresa dispõe de R$ 1,50 em recursos de curto prazo para cada R$ 1,00 de dívida no mesmo período.'
  },
  {
    id: 'fin-25',
    number: 25,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Análise de Índices de Liquidez - Liquidez Seca',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Diferentemente do índice de liquidez corrente, o Índice de Liquidez Seca (ILS) avalia a capacidade de quitação de curto prazo excluindo do Ativo Circulante a seguinte conta patrimonial por sua menor velocidade de realização financeira:',
    options: [
      { letter: 'A', text: 'Disponibilidades financeiras em bancos' },
      { letter: 'B', text: 'Estoques de mercadorias' },
      { letter: 'C', text: 'Duplicatas a receber de clientes' },
      { letter: 'D', text: 'Títulos públicos negociáveis' },
      { letter: 'E', text: 'Aplicações financeiras de liquidez imediata' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Liquidez Seca = (Ativo Circulante - Estoques) / Passivo Circulante. Excluem-se os estoques porque dependem da realização de vendas e recebimento futuro, sendo o item de realização mais lenta do ativo circulante.'
  },
  {
    id: 'fin-26',
    number: 26,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DFC - Classificação dos Fluxos das Atividades',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na Demonstração dos Fluxos de Caixa (DFC), o pagamento de dividendos aos acionistas da entidade e a captação de recursos decorrente da emissão de debêntures são transações classificadas, respectivamente, como:',
    options: [
      { letter: 'A', text: 'Atividades operacionais e atividades de investimento.' },
      { letter: 'B', text: 'Atividades de investimento e atividades operacionais.' },
      { letter: 'C', text: 'Atividades de financiamento e atividades de financiamento.' },
      { letter: 'D', text: 'Atividades operacionais e atividades de financiamento.' },
      { letter: 'E', text: 'Atividades de investimento e atividades de investimento.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Conforme o CPC 03, as atividades de financiamento englobam a captação de recursos de credores (emissão de títulos da dívida/debêntures e empréstimos bancários) e as remunerações/amortizações associadas aos proprietários do capital (aporte ou pagamento de dividendos).'
  },
  {
    id: 'fin-27',
    number: 27,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'DFC - Fluxo das Atividades de Investimento',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na DFC, a aquisição de um imóvel para instalação de uma nova filial comercial, com pagamento integral à vista no exercício, é classificada no fluxo das atividades de',
    options: [
      { letter: 'A', text: 'financiamento, como saída de caixa.' },
      { letter: 'B', text: 'investimento, como saída de caixa.' },
      { letter: 'C', text: 'operações correntes, como entrada de caixa.' },
      { letter: 'D', text: 'desinvestimento, como equivalentes de caixa.' },
      { letter: 'E', text: 'financiamento, como entrada de caixa.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Atividades de investimento correspondem a aquisições e vendas de ativos de longo prazo (como itens do Ativo Imobilizado ou Intangível). A compra do imóvel gera desembolso classificado como saída de caixa nas atividades de investimento.'
  },
  {
    id: 'fin-28',
    number: 28,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Princípios Contábeis - Princípio da Oportunidade e Prudência',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O princípio contábil que determina a adoção do menor valor para os componentes do Ativo e do maior valor para os do Passivo, sempre que se apresentem alternativas igualmente válidas para a quantificação das mutações patrimoniais, é o princípio da',
    options: [
      { letter: 'A', text: 'Entidade' },
      { letter: 'B', text: 'Continuidade' },
      { letter: 'C', text: 'Prudência' },
      { letter: 'D', text: 'Competência' },
      { letter: 'E', text: 'Universalidade' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O princípio da Prudência (ou Conservadorismo) determina cautela no reconhecimento de ativos e receitas para não superavaliá-los, e de passivos e despesas para não subavaliá-los.'
  },
  {
    id: 'fin-29',
    number: 29,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Contabilidade Geral - Princípio da Entidade',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O administrador de uma sociedade empresária pagou a mensalidade escolar particular de seu filho utilizando recursos da conta bancária da empresa. Tal procedimento viola diretamente o princípio contábil da',
    options: [
      { letter: 'A', text: 'Continuidade' },
      { letter: 'B', text: 'Oportunidade' },
      { letter: 'C', text: 'Entidade' },
      { letter: 'D', text: 'Atualização Monetária' },
      { letter: 'E', text: 'Competência' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O Princípio da Entidade estabelece a autonomia patrimonial da pessoa jurídica: o patrimônio da empresa nunca se confunde com o patrimônio particular de seus sócios, proprietários ou gestores.'
  },
  {
    id: 'fin-30',
    number: 30,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Depreciação de Bens do Ativo Imobilizado',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Dados do equipamento adquirido:\nValor de Aquisição = R$ 120.000,00\nValor Residual estimado no final da vida útil = R$ 20.000,00\nVida útil estimada = 5 anos (método linear de cotas constantes)',
    questionText: 'Com base nas informações, o valor da despesa anual com depreciação a ser reconhecido na contabilidade é de:',
    options: [
      { letter: 'A', text: 'R$ 15.000,00' },
      { letter: 'B', text: 'R$ 20.000,00' },
      { letter: 'C', text: 'R$ 24.000,00' },
      { letter: 'D', text: 'R$ 28.000,00' },
      { letter: 'E', text: 'R$ 32.000,00' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Valor Depreciável = Valor de Aquisição - Valor Residual = 120.000 - 20.000 = R$ 100.000,00. Depreciação Anual = Valor Depreciável / Vida Útil = 100.000 / 5 = R$ 20.000,00 por ano.'
  },
  {
    id: 'fin-31',
    number: 31,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Matemática Financeira - Juros Simples',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Uma empresa aplicou o capital de R$ 60.000,00 em um fundo a uma taxa de juros simples de 1,5% ao mês, durante um prazo de 8 meses. O montante total resgatado ao final da aplicação foi de:',
    options: [
      { letter: 'A', text: 'R$ 64.800,00' },
      { letter: 'B', text: 'R$ 67.200,00' },
      { letter: 'C', text: 'R$ 68.500,00' },
      { letter: 'D', text: 'R$ 72.000,00' },
      { letter: 'E', text: 'R$ 75.600,00' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Juros Simples = C × i × t = 60.000 × 0,015 × 8 = 60.000 × 0,12 = R$ 7.200,00. Montante M = C + J = 60.000 + 7.200 = R$ 67.200,00.'
  },
  {
    id: 'fin-32',
    number: 32,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Matemática Financeira - Desconto Comercial (Por Fora)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Uma duplicata com valor nominal de R$ 20.000,00 foi descontada em um banco 2 meses antes do vencimento, à taxa de desconto comercial simples (por fora) de 3% ao mês. O valor líquido creditado na conta da empresa foi de:',
    options: [
      { letter: 'A', text: 'R$ 18.800,00' },
      { letter: 'B', text: 'R$ 19.200,00' },
      { letter: 'C', text: 'R$ 19.400,00' },
      { letter: 'D', text: 'R$ 19.600,00' },
      { letter: 'E', text: 'R$ 19.800,00' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). No desconto comercial simples: d = N × i × t = 20.000 × 0,03 × 2 = R$ 1.200,00. Valor atual líquido = N - d = 20.000 - 1.200 = R$ 18.800,00.'
  },
  {
    id: 'fin-33',
    number: 33,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Análise de Balanço - Endividamento Geral',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Dados do Balanço:\nPassivo Circulante = R$ 80.000,00\nPassivo Não Circulante = R$ 120.000,00\nPatrimônio Líquido = R$ 200.000,00\nAtivo Total = R$ 400.000,00',
    questionText: 'Com base nas informações patrimoniais, o Índice de Endividamento Geral (Capitais de Terceiros / Ativo Total) é:',
    options: [
      { letter: 'A', text: '25%' },
      { letter: 'B', text: '40%' },
      { letter: 'C', text: '50%' },
      { letter: 'D', text: '60%' },
      { letter: 'E', text: '100%' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Capital de Terceiros (Exigível Total) = Passivo Circulante + Passivo Não Circulante = 80.000 + 120.000 = R$ 200.000,00. Endividamento Geral = 200.000 / 400.000 = 0,50 = 50%.'
  },
  {
    id: 'fin-34',
    number: 34,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Custos - Classificação Diretos e Indiretos',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Na contabilidade de custos, a despesa com aluguel do galpão da fábrica onde são produzidos simultaneamente múltiplos modelos de produtos é classificada como custo',
    options: [
      { letter: 'A', text: 'direto e variável.' },
      { letter: 'B', text: 'indireto e fixo.' },
      { letter: 'C', text: 'direto e fixo.' },
      { letter: 'D', text: 'indireto e variável.' },
      { letter: 'E', text: 'de oportunidade.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O aluguel não varia com o volume imediato de peças produzidas (custo fixo) e sua apropriação a cada produto individual exige critérios subjetivos de rateio (custo indireto).'
  },
  {
    id: 'fin-35',
    number: 35,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Contabilidade Geral - Método das Partidas Dobradas',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'O postulado fundamental do Método das Partidas Dobradas, criado por Luca Pacioli e universalmente adotado na contabilidade, estabelece que',
    options: [
      { letter: 'A', text: 'o total dos lucros deve sempre dobrar a cada exercício social.' },
      { letter: 'B', text: 'para cada débito efetuado em uma ou mais contas, deve haver um crédito correspondente de igual valor em uma ou mais contas.' },
      { letter: 'C', text: 'as receitas só podem ser reconhecidas mediante a emissão de duas notas fiscais.' },
      { letter: 'D', text: 'o total do Ativo deve ser sempre o dobro do total do Passivo.' },
      { letter: 'E', text: 'todas as despesas devem ser debitadas duas vezes para assegurar conferência.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Pelo método das partidas dobradas, a soma dos valores debitados é rigorosamente igual à soma dos valores creditados em qualquer escrituração, mantendo constante o equilíbrio contábil.'
  },
  {
    id: 'fin-36',
    number: 36,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Contabilidade Geral - Natureza das Contas Contábeis',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Assinale a opção em que todas as contas apresentadas possuem natureza estritamente devedora no plano de contas:',
    options: [
      { letter: 'A', text: 'Caixa, Estoques de Mercadorias e Despesas Administrativas' },
      { letter: 'B', text: 'Fornecedores a Pagar, Capital Social e Receitas de Vendas' },
      { letter: 'C', text: 'Salários a Pagar, Empréstimos Bancários e Caixa' },
      { letter: 'D', text: 'Receita de Aluguel, Financiamentos a Pagar e Veículos' },
      { letter: 'E', text: 'Capital Social, Adiantamento de Clientes e Clientes a Receber' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Contas do Ativo (Caixa e Estoques) e contas de Despesa possuem saldo de natureza devedora (aumentam a débito e diminuem a crédito). Contas do Passivo, PL e Receitas têm natureza credora.'
  },
  {
    id: 'fin-37',
    number: 37,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Retificação de Lançamentos Contábeis',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'Quando um contador comete um erro de escrituração no livro Diário e realiza um lançamento inverso àquele feito erroneamente, anulando-o totalmente, para em seguida efetuar o lançamento correto, ele utilizou a técnica de retificação denominada',
    options: [
      { letter: 'A', text: 'transferência' },
      { letter: 'B', text: 'complementação' },
      { letter: 'C', text: 'estorno' },
      { letter: 'D', text: 'ressalva' },
      { letter: 'E', text: 'subrogação' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A ITG 2000 define o estorno como o lançamento que anula integralmente um registro anterior lançado de forma incorreta.'
  },
  {
    id: 'fin-38',
    number: 38,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Provisões Contábeis e Perdas Estimadas',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    questionText: 'A conta de "Perdas Estimadas com Créditos de Liquidação Duvidosa" (PECLD), constituída ao final do exercício para cobrir prováveis inadimplências de clientes, é classificada no Balanço Patrimonial como conta',
    options: [
      { letter: 'A', text: 'do Passivo Não Circulante.' },
      { letter: 'B', text: 'retificadora do Ativo Circulante.' },
      { letter: 'C', text: 'do Patrimônio Líquido.' },
      { letter: 'D', text: 'do Ativo Imobilizado.' },
      { letter: 'E', text: 'de Receita Antecipada no Passivo Circulante.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A PECLD é uma conta redutora (retificadora) do grupo Clientes/Contas a Receber no Ativo Circulante, apresentando saldo credor e reduzindo o valor contábil dos créditos para o valor justo realizável líquido.'
  },
  {
    id: 'fin-39',
    number: 39,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Finanças e Investimentos - Payback Simples',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Projeto de Modernização Operacional:\nInvestimento Inicial (t=0) = R$ 180.000,00\nEntrada líquida de caixa no Ano 1 = R$ 60.000,00\nEntrada líquida de caixa no Ano 2 = R$ 60.000,00\nEntrada líquida de caixa no Ano 3 = R$ 60.000,00',
    questionText: 'Com base no fluxo de caixa projetado, o período de recuperação do investimento inicial pelo método do Payback Simples é de:',
    options: [
      { letter: 'A', text: '1 ano' },
      { letter: 'B', text: '2 anos' },
      { letter: 'C', text: '3 anos' },
      { letter: 'D', text: '4 anos' },
      { letter: 'E', text: '5 anos' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O Payback Simples indica o tempo exato para que os fluxos de caixa líquidos acumulados igualem o desembolso inicial: Ano 1 = 60.000; Ano 2 = 120.000; Ano 3 = 180.000. O investimento é recuperado em exatamente 3 anos.'
  },
  {
    id: 'fin-40',
    number: 40,
    subjectId: 'financas_contab',
    subjectName: 'Finanças e Contabilidade',
    topic: 'Avaliação de Desempenho Financeiro - ROE (Retorno sobre o PL)',
    examSource: 'Cesgranrio - Concursos da Área Administrativa',
    tableOrData: 'Demonstrações da Cia Beta:\nLucro Líquido do Exercício = R$ 50.000,00\nPatrimônio Líquido Médio = R$ 250.000,00\nAtivo Total = R$ 500.000,00',
    questionText: 'Com base nos dados fornecidos da Cia Beta, o Retorno sobre o Patrimônio Líquido (ROE - Return on Equity) dessa empresa no exercício é:',
    options: [
      { letter: 'A', text: '10%' },
      { letter: 'B', text: '15%' },
      { letter: 'C', text: '20%' },
      { letter: 'D', text: '25%' },
      { letter: 'E', text: '50%' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O ROE mede a rentabilidade proporcionada aos acionistas: ROE = Lucro Líquido / Patrimônio Líquido = 50.000 / 250.000 = 0,20 = 20%.'
  }
];
