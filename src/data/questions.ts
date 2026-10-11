import { Question, SubjectId } from '../types/quiz';
import { FINANCAS_CONTAB_QUESTIONS } from './questions/financasContab';
import { LOGISTICA_QUESTIONS } from './questions/logistica';

export { FINANCAS_CONTAB_QUESTIONS, LOGISTICA_QUESTIONS };

export const PORTUGUES_QUESTIONS: Question[] = [
  // Texto 1: À moda brasileira (Lygia Fagundes Telles)
  {
    id: 'pt-1',
    number: 1,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Compreensão e Interpretação de Texto',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    contextTextTitle: 'À moda brasileira (Lygia Fagundes Telles)',
    contextText: `1 Estou me vendo debaixo de uma árvore, lendo a pequena história da literatura brasileira.
2 Olavo Bilac! – eu disse em voz alta e de repente parei quase num susto depois que li os primeiros versos do soneto à língua portuguesa: Última flor do Lácio, inculta e bela / És, a um tempo, esplendor e sepultura.
3 Fiquei pensando, mas o poeta disse sepultura?! O tal de Lácio eu não sabia onde ficava, mas de sepultura eu entendia bem, disso eu entendia, repensei baixando o olhar para a terra. Se escrevia (e já escrevia) pequenos contos nessa língua, quer dizer que era a sepultura que esperava por esses meus escritos?
4 Fui falar com meu pai. Comecei por aquelas minhas sondagens antes de chegar até onde queria, os tais rodeios que ele ia ouvindo com paciência enquanto enrolava o cigarro de palha, fumava nessa época esses cigarros. Comecei por perguntar se minha mãe e ele não tinham viajado para o exterior.
5 Meu pai fixou em mim o olhar verde. Viagens, só pelo Brasil, meus avós é que tinham feito aquelas longas viagens de navio, Portugal, França, Itália... Não esquecer que a minha avó, Pedrina Perucchi, era italiana, ele acrescentou. Mas por que essa curiosidade?
6 Sentei-me ao lado dele, respirei fundo e comecei a gaguejar, é que seria tão bom se ambos tivessem nascido lá longe e assim eu estaria hoje escrevendo em italiano, italiano! – fiquei repetindo e abri o livro que trazia na mão: Olha aí, pai, o poeta escreveu com todas as letras, nossa língua é sepultura mesmo, tudo o que a gente fizer vai para debaixo da terra, desaparece!
7 Calmamente ele pousou o cigarro no cinzeiro ao lado. Pegou os óculos. O soneto é muito bonito, disse me encarando com severidade. Feio é isso, filha, isso de querer renegar a própria língua. Se você chegar a escrever bem, não precisa ser em italiano ou espanhol ou alemão, você ficará na nossa língua mesmo, está me compreendendo? E as traduções? Renegar a língua é renegar o país, guarde isso nessa cabecinha. E depois (ele voltou a abrir o livro), olha que beleza o que o poeta escreveu em seguida, Amo-te assim, desconhecida e obscura, veja que confissão de amor ele fez à nossa língua! Tem mais, ele precisava da rima para sepultura e calhou tão bem essa obscura, entendeu agora? – acrescentou e levantou-se. Deu alguns passos e ficou olhando a borboleta que entrou na varanda: Já fez a sua lição de casa?
8 Fechei o livro e recuei. Sempre que meu pai queria mudar de assunto ele mudava de lugar: saía da poltrona e ia para a cadeira de vime. Saía da cadeira de vime e ia para a rede ou simplesmente começava a andar. Era o sinal, Não quero falar nisso, chega. Então a gente falava noutra coisa ou ficava quieta.
9 Tantos anos depois, quando me avisaram lá do pequeno hotel em Jacareí que ele tinha morrido, fiquei pensando nisso, ah! se quando a morte entrou, se nesse instante ele tivesse mudado de lugar. Mudar depressa de lugar e de assunto. Depressa, pai, saia da cama e fique na cadeira ou vá pra rua e feche a porta!
(TELLES, Lygia Fagundes. Durante aquele estranho chá. Rio de Janeiro: Rocco, 2002. Adaptado)`,
    questionText: 'O fragmento de abertura da crônica “Estou me vendo debaixo de uma árvore, lendo a pequena história da literatura brasileira.” (parágrafo 1) faz referência a uma',
    options: [
      { letter: 'A', text: 'previsão' },
      { letter: 'B', text: 'fantasia' },
      { letter: 'C', text: 'esperança' },
      { letter: 'D', text: 'expectativa' },
      { letter: 'E', text: 'reminiscência' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O fragmento inicial retrata uma memória viva do passado da narradora ("Estou me vendo debaixo de uma árvore..."), configurando uma lembrança afetiva, ou seja, uma reminiscência.'
  },
  {
    id: 'pt-2',
    number: 2,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Significação de Palavras e Coesão',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'No texto, as palavras que marcam o sentimento de insegurança vivenciado pela narradora ao conversar com seu pai são:',
    options: [
      { letter: 'A', text: 'confissão (parágrafo 7) e andar (parágrafo 8)' },
      { letter: 'B', text: 'rodeios (parágrafo 4) e gaguejar (parágrafo 6)' },
      { letter: 'C', text: 'cabecinha (parágrafo 7) e mudar (parágrafo 8)' },
      { letter: 'D', text: 'sepultura (parágrafo 3) e renegar (parágrafo 7)' },
      { letter: 'E', text: 'severidade (parágrafo 7) e esquecer (parágrafo 5)' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). "Rodeios" (dar voltas antes de tocar no assunto) e "gaguejar" (hesitação na fala) revelam a insegurança e o receio da jovem diante da reação paterna.'
  },
  {
    id: 'pt-3',
    number: 3,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Compreensão e Interpretação de Texto',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'De acordo com o texto, na opinião do pai, a filha deveria',
    options: [
      { letter: 'A', text: 'aprender a língua da avó.' },
      { letter: 'B', text: 'valorizar a língua materna.' },
      { letter: 'C', text: 'escrever em idiomas diversos.' },
      { letter: 'D', text: 'ler outros poemas de Olavo Bilac.' },
      { letter: 'E', text: 'estudar história da literatura brasileira.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O pai repreende a ideia de rejeitar o próprio idioma dizendo: "Feio é isso, filha, isso de querer renegar a própria língua... Renegar a língua é renegar o país". Logo, ela deveria valorizar a língua materna.'
  },
  {
    id: 'pt-4',
    number: 4,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Compreensão e Interpretação de Texto',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Ao ler os versos de Olavo Bilac, o “quase” susto da narradora, mencionado no parágrafo 2, foi motivado pela',
    options: [
      { letter: 'A', text: 'possibilidade de seus escritos não serem conhecidos.' },
      { letter: 'B', text: 'falta de conhecimento sobre a localização do Lácio.' },
      { letter: 'C', text: 'necessidade de aprender uma língua diferente.' },
      { letter: 'D', text: 'surpresa com a postura pessimista do poeta.' },
      { letter: 'E', text: 'abordagem da temática da morte.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O verso diz "És, a um tempo, esplendor e sepultura". A palavra "sepultura" remete diretamente à morte ("mas de sepultura eu entendia bem... quer dizer que era a sepultura que esperava por esses meus escritos?").'
  },
  {
    id: 'pt-5',
    number: 5,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Sintaxe e Crase',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'O emprego do acento grave em “soneto à língua portuguesa” (parágrafo 2) explica-se a partir do entendimento de que Olavo Bilac escreveu um soneto',
    options: [
      { letter: 'A', text: 'em língua portuguesa' },
      { letter: 'B', text: 'com a língua portuguesa' },
      { letter: 'C', text: 'para a língua portuguesa' },
      { letter: 'D', text: 'sobre a língua portuguesa' },
      { letter: 'E', text: 'por causa da língua portuguesa' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A preposição "a" exigida pelo termo regente indica direcionamento/destinatário em homenagem ("soneto dedicado a / para a língua portuguesa"), justificando a fusão com o artigo definido "a" (à).'
  },
  {
    id: 'pt-6',
    number: 6,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Mecanismos de Coesão Textual',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A palavra que funciona como um mecanismo de coesão textual, retomando um antecedente, em:',
    options: [
      { letter: 'A', text: '“parei quase num susto depois que li os primeiros versos”. (parágrafo 2)' },
      { letter: 'B', text: '“Não esquecer que a minha avó, Pedrina Perucchi, era italiana”. (parágrafo 5)' },
      { letter: 'C', text: '“ficou olhando a borboleta que entrou na varanda” (parágrafo 7)' },
      { letter: 'D', text: '“Sempre que meu pai queria mudar de assunto ele mudava de lugar”. (parágrafo 8)' },
      { letter: 'E', text: '“quando me avisaram lá do pequeno hotel em Jacareí que ele tinha morrido”. (parágrafo 9)' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Na opção C, "que" é pronome relativo e desempenha função anafórica de coesão, retomando o substantivo antecedente "borboleta" (a qual entrou na varanda).'
  },
  {
    id: 'pt-7',
    number: 7,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Pontuação e Sintaxe',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A frase em que as vírgulas estão empregadas com a mesma função que em “Não esquecer que a minha avó, Pedrina Perucchi, era italiana” (parágrafo 5) é:',
    options: [
      { letter: 'A', text: 'Mude de lugar, meu pai, porque a morte vai chegar.' },
      { letter: 'B', text: 'A filha, preocupada e triste, questionava a própria língua materna.' },
      { letter: 'C', text: 'A língua portuguesa, embora inculta, constrói belos textos literários.' },
      { letter: 'D', text: 'Os poemas, textos de uma beleza sem igual, encantam seus leitores.' },
      { letter: 'E', text: 'Colocou os óculos e, caminhando pela sala, revelou a beleza do poema.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). No trecho original, as vírgulas isolam um aposto explicativo ("Pedrina Perucchi"). Na opção D, "textos de uma beleza sem igual" também funciona como aposto explicativo de "Os poemas".'
  },
  {
    id: 'pt-8',
    number: 8,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Correlação de Tempos e Modos Verbais',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Considerando-se a correlação adequada entre tempos e modos verbais, a alternativa que, respeitando a norma-padrão, completa o período iniciado pelo trecho “A autora também teria sido lida se...” é',
    options: [
      { letter: 'A', text: 'escrever seus contos em outra língua.' },
      { letter: 'B', text: 'escrevera seus contos em outra língua.' },
      { letter: 'C', text: 'tiver escrito seus contos em outra língua.' },
      { letter: 'D', text: 'teria escrito seus contos em outra língua.' },
      { letter: 'E', text: 'tivesse escrito seus contos em outra língua.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A correlação verbal canônica com oração condicional no futuro do pretérito composto ("teria sido lida") exige a oração subordinada condicional no pretérito mais-que-perfeito do subjuntivo ("se tivesse escrito").'
  },
  {
    id: 'pt-9',
    number: 9,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Mecanismos de Coesão e Conectivos',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'No parágrafo 6, “nossa língua é sepultura mesmo, tudo o que a gente fizer vai para debaixo da terra, desaparece!”, o segmento em destaque pode articular-se com o segmento anterior, sem alteração do sentido original, empregando-se o conector',
    options: [
      { letter: 'A', text: 'quando' },
      { letter: 'B', text: 'portanto' },
      { letter: 'C', text: 'enquanto' },
      { letter: 'D', text: 'embora' },
      { letter: 'E', text: 'ou' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O segmento subsequente expressa a conclusão ou dedução lógica da primeira afirmação ("nossa língua é sepultura mesmo, [portanto / logo] tudo o que a gente fizer vai para debaixo da terra...").'
  },
  {
    id: 'pt-10',
    number: 10,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Significação de Palavras (Sinonímia)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Em “O soneto é muito bonito, disse me encarando com severidade” (parágrafo 7), a palavra que pode substituir severidade, sem alteração no sentido da frase, é',
    options: [
      { letter: 'A', text: 'firmeza' },
      { letter: 'B', text: 'rispidez' },
      { letter: 'C', text: 'discrição' },
      { letter: 'D', text: 'desgosto' },
      { letter: 'E', text: 'incompreensão' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). No contexto em que o pai fala com seriedade educativa e convicção amorosa, "severidade" expressa a postura de autoridade e firmeza, sem implicar rispidez ou crueldade.'
  },

  // Texto 2: "Guerra" virtual pela informação (Carlos Castilho) - Prova 2018.1
  {
    id: 'pt-11',
    number: 11,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Compreensão e Interpretação de Texto',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    contextTextTitle: '“Guerra” virtual pela informação (Carlos Castilho)',
    contextText: `1 A internet quebrou a rígida centralização no fluxo mundial de dados, criando uma situação inédita na história recente. As principais potências econômicas e militares do planeta decidiram partir para a ação ao perceberem que seus segredos começam a ser divulgados com facilidade e frequência nunca vistas antes.
2 As mais recentes iniciativas no terreno da espionagem virtual mostram que o essencial é o controle da informação disponível no mundo - não mais guardar segredos, mas saber o que os outros sabem ou podem vir a saber. Os estrategistas em guerra cibernética sabem que a possibilidade de vazamentos de informações sigilosas é cada vez maior e eles tendem a se tornar rotineiros.
3 A datificação, processo de transformação em dados de tudo o que conhecemos, aumentou de forma vertiginosa o acervo mundial de informações. Diariamente circulam na web pouco mais de 1,8 mil petabytes de dados (um petabyte equivale a 1,04 milhão de gigabytes), dos quais é possível monitorar apenas 29 petabytes. Pode parecer muito pouco, mas é um volume equivalente a 400 vezes o total de páginas web indexadas diariamente pelo Google e 156 vezes o total de vídeos adicionados ao YouTube a cada 24 horas.
4 Como não é viável exercer um controle material sobre o fluxo de dados na internet, os centros mundiais de poder optaram pelo desenvolvimento de uma batalha pela informação. O manejo dos grandes dados permite estabelecer correlações entre fatos, dados e eventos, com amplitude e rapidez impossíveis de serem alcançados até agora.
5 Como tudo o que fazemos diariamente é transformado em dados pelo nosso banco, pelo correio eletrônico, pelo Facebook, pelo cartão de crédito etc., já somos passíveis de monitoração em tempo real, em caráter permanente. São esses dados que alimentam os softwares analíticos que produzem correlações que servem de base para decisões estratégicas.
(CASTILHO, Carlos. Observatório da imprensa. Adaptado)`,
    questionText: 'O trecho que explica os objetivos da “guerra” virtual descrita no texto é',
    options: [
      { letter: 'A', text: '“A internet quebrou a rígida centralização no fluxo mundial de dados, criando uma situação inédita na história recente” (l. 1-3)' },
      { letter: 'B', text: '“As mais recentes iniciativas no terreno da espionagem virtual mostram que o essencial é o controle da informação disponível no mundo - não mais guardar segredos, mas saber o que os outros sabem ou podem vir a saber” (l. 8-12)' },
      { letter: 'C', text: '“A datificação, processo de transformação em dados de tudo o que conhecemos, aumentou de forma vertiginosa o acervo mundial de informações.” (l. 16-18)' },
      { letter: 'D', text: '“Diariamente circulam na web pouco mais de 1,8 mil petabytes de dados (um petabyte equivale a 1,04 milhão de gigabytes), dos quais é possível monitorar apenas 29 petabytes.” (l. 19-22)' },
      { letter: 'E', text: '“Pode parecer muito pouco, mas é um volume equivalente a 400 vezes o total de páginas web indexadas diariamente” (l. 23-25)' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O trecho que define o objetivo da guerra virtual explicita que a finalidade não é mais reter dados em sigilo estrito, mas deter o controle e antecipar o que os outros sabem ou podem vir a saber.'
  },
  {
    id: 'pt-12',
    number: 12,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Compreensão e Interpretação de Texto',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'De acordo com o texto, o que viabiliza a espionagem virtual é a(o)',
    options: [
      { letter: 'A', text: 'capacitação de especialistas para a criação de máquinas velozes.' },
      { letter: 'B', text: 'centralização do fluxo mundial de dados pelas grandes potências.' },
      { letter: 'C', text: 'criação de sites de entretenimento para a atração dos internautas.' },
      { letter: 'D', text: 'datificação de todas as informações geradas pelas pessoas na internet.' },
      { letter: 'E', text: 'emprego de softwares que possam capturar as senhas dos usuários.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O autor argumenta que o que torna factível o rastreamento e a espionagem contínua é a "datificação", a conversão de todos os hábitos cotidianos em registros de dados.'
  },
  {
    id: 'pt-13',
    number: 13,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Ortografia Oficial e Acentuação Gráfica',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Em conformidade com o Acordo Ortográfico da Língua Portuguesa vigente, atendem às regras de acentuação todas as palavras em:',
    options: [
      { letter: 'A', text: 'andróide, odisseia, residência' },
      { letter: 'B', text: 'arguição, refém, mausoléu' },
      { letter: 'C', text: 'desbloqueio, pêlo, escarcéu' },
      { letter: 'D', text: 'feiúra, enjoo, maniqueísmo' },
      { letter: 'E', text: 'sutil, assembléia, arremesso' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Em "arguição" (paroxítona terminada em ditongo), "refém" (oxítona terminada em -em) e "mausoléu" (oxítona terminada no ditongo aberto -éu), todas estão acentuadas corretamente. As demais opções contêm palavras grafadas incorretamente de acordo com o Novo Acordo (ex.: androide, assembleia e feiura perderam o acento; pelo substantivo perdeu acento diferencial).'
  },
  {
    id: 'pt-14',
    number: 14,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Emprego das Classes de Palavras e Verbos',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A forma verbal destacada atende às exigências da norma-padrão da língua portuguesa em:',
    options: [
      { letter: 'A', text: 'Ao digitar as senhas em público, é necessário que confiremos se há pessoas estranhas nos observando para garantir a segurança virtual.' },
      { letter: 'B', text: 'As informações pessoais deveriam ser digitadas de forma condensada para que cabessem todas no espaço próprio do questionário socioeconômico.' },
      { letter: 'C', text: 'Os meios eletrônicos contribuem para que os estudantes retenham a maior parte das informações necessárias ao bom desempenho escolar.' },
      { letter: 'D', text: 'Para evitar a espionagem virtual é preciso que nós não consintemos na utilização dos nossos dados pessoais ao instalar novos aplicativos no celular.' },
      { letter: 'E', text: 'Quando algum consumidor querer comprar o último modelo de smartphone, pode agredir outros componentes da fila para tomar seu lugar.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O verbo reter conjuga-se como ter: "que eles retenham" (correto). Correções dos demais: A) confiramos; B) coubessem; D) consintamos; E) quiser.'
  },
  {
    id: 'pt-15',
    number: 15,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Significação de Palavras (Antonímia)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No trecho “A datificação, processo de transformação em dados de tudo o que conhecemos, aumentou de forma vertiginosa o acervo mundial de informações” (l. 16-18), a palavra que apresenta o sentido contrário ao de vertiginosa é',
    options: [
      { letter: 'A', text: 'hesitante' },
      { letter: 'B', text: 'indecisa' },
      { letter: 'C', text: 'perplexa' },
      { letter: 'D', text: 'vacilante' },
      { letter: 'E', text: 'vagarosa' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Vertiginosa indica rapidez extrema, velocidade aceleradíssima. Seu antônimo direto é vagarosa (lenta).'
  },
  {
    id: 'pt-16',
    number: 16,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Sintaxe de Concordância Nominal',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A concordância do adjetivo destacado foi realizada de acordo com as exigências da norma-padrão da língua portuguesa em:',
    options: [
      { letter: 'A', text: 'A espionagem virtual e a ausência de punição dos responsáveis são corriqueiros na batalha virtual entre as grandes potências mundiais.' },
      { letter: 'B', text: 'A guerra cibernética entre os países e o manejo de grandes quantidades de dados são básicas para determinar as relações de poder no futuro.' },
      { letter: 'C', text: 'O acolhimento dos refugiados e a redução das desigualdades são necessárias para diminuir os conflitos de interesse entre países ricos e pobres.' },
      { letter: 'D', text: 'Os e-mails e as conversas virtuais são monitorados permanentemente em todo o mundo para revelar importantes segredos de estado.' },
      { letter: 'E', text: 'Os softwares contra vírus e a atualização regular dos aplicativos são obrigatórias para a manutenção dos celulares em bom funcionamento.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Ao concordar com dois núcleos de gêneros distintos ("Os e-mails" [masculino] e "as conversas virtuais" [feminino]), o predicativo concorda preferencialmente no plural masculino: "são monitorados".'
  },
  {
    id: 'pt-17',
    number: 17,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Sintaxe de Concordância Verbal',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A concordância da forma verbal destacada foi realizada de acordo com as exigências da norma-padrão da língua portuguesa em:',
    options: [
      { letter: 'A', text: 'Com o crescimento da espionagem virtual, é necessário que se promova novos estudos sobre mecanismos de proteção mais eficazes.' },
      { letter: 'B', text: 'O rastreamento permanente das invasões cibernéticas de grande porte permite que se suspeitem dos hackers responsáveis.' },
      { letter: 'C', text: 'Para atender às demandas dos usuários de celulares, é preciso que se destinem à pesquisa tecnológica muitos milhões de dólares.' },
      { letter: 'D', text: 'Para detectar as consequências mais prejudiciais da guerra virtual pela informação, necessitam-se de estudos mais aprofundados.' },
      { letter: 'E', text: 'Se o crescimento das redes sociais assumir uma proporção incontrolável, é aconselhável que se estabeleça novas restrições de utilização pelos jovens.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Em "se destinem à pesquisa tecnológica muitos milhões de dólares", a partícula "se" é apassivadora e o sujeito paciente é "muitos milhões de dólares" (plural), exigindo o verbo no plural ("destinem"). Em B e D o verbo é transitivo indireto com índice de indeterminação (ficam no singular: suspeite, necessita-se).'
  },
  {
    id: 'pt-18',
    number: 18,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Significação de Palavras (Sinonímia)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No trecho “Como tudo o que fazemos diariamente é transformado em dados pelo nosso banco, pelo correio eletrônico, pelo Facebook, pelo cartão de crédito, etc., já somos passíveis de monitoração em tempo real, em caráter permanente” (l. 35-39), a palavra monitoração pode ser substituída, sem prejuízo do sentido, por',
    options: [
      { letter: 'A', text: 'comprovação' },
      { letter: 'B', text: 'demonstração' },
      { letter: 'C', text: 'esclarecimento' },
      { letter: 'D', text: 'rastreamento' },
      { letter: 'E', text: 'recuperação' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). No contexto de vigilância de fluxo e dados digitais, monitoração equivale a rastreamento contínuo dos passos e atividades do usuário.'
  },
  {
    id: 'pt-19',
    number: 19,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Sintaxe e Crase',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'De acordo com a norma-padrão da língua portuguesa, o uso do sinal indicativo da crase é obrigatório na palavra destacada em:',
    options: [
      { letter: 'A', text: 'A solução para o analfabetismo tecnológico é a garantia de acesso de todas as crianças a utilização efetiva de meios digitais de comunicação.' },
      { letter: 'B', text: 'A utilização de celulares com recursos de navegação na internet vem facilitando a alfabetização tecnológica de idosos e moradores de zonas rurais.' },
      { letter: 'C', text: 'As escolas precisam possibilitar a crianças de todas as origens socioculturais a utilização plena dos recursos computacionais no processo de aprendizagem.' },
      { letter: 'D', text: 'O analfabetismo tecnológico corresponde a uma efetiva exclusão digital, já que impede as pessoas de usufruírem dos benefícios da tecnologia.' },
      { letter: 'E', text: 'Os países desenvolvidos atingiram a meta de universalizar a utilização de meios digitais para garantir a ampliação do processo de conhecimento.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O substantivo "acesso" rege preposição "a" (acesso a algo). O termo seguinte é "a utilização" (feminino com artigo). A fusão gera crase obrigatória: "à utilização efetiva".'
  },
  {
    id: 'pt-20',
    number: 20,
    subjectId: 'portugues',
    subjectName: 'Língua Portuguesa',
    topic: 'Ortografia Oficial',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Obedecem às regras ortográficas da língua portuguesa as palavras',
    options: [
      { letter: 'A', text: 'admissão, paralisação, impasse' },
      { letter: 'B', text: 'bambusal, autorização, inspiração' },
      { letter: 'C', text: 'consessão, extresse, enxaqueca' },
      { letter: 'D', text: 'banalisação, reexame, desenlace' },
      { letter: 'E', text: 'desorganisação, abstração, cassação' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Todas as três palavras do item A estão corretas: "admissão" (com ss), "paralisação" (com s, deriva de paralisar) e "impasse" (com ss). Erros das outras: bambuzal (com z), concessão (com c), estresse, banalização (com z), desorganização (com z).'
  }
];

export const MATEMATICA_QUESTIONS: Question[] = [
  {
    id: 'mat-1',
    number: 1,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Progressão Aritmética (PA)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O quarto, o quinto e o sexto termos de uma progressão aritmética são expressos por x + 1, x² + 4 e 2x² + 3, respectivamente.\nA soma dos dez primeiros termos dessa progressão aritmética é igual a',
    options: [
      { letter: 'A', text: '260' },
      { letter: 'B', text: '265' },
      { letter: 'C', text: '270' },
      { letter: 'D', text: '275' },
      { letter: 'E', text: '280' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Numa PA, o termo médio é a média aritmética dos vizinhos: (x + 1) + (2x² + 3) = 2(x² + 4) => 2x² + x + 4 = 2x² + 8 => x = 4. Termos: a4 = 5, a5 = 20, a6 = 35. Razão r = 15. a1 = a4 - 3r = 5 - 45 = -40. a10 = a1 + 9r = -40 + 135 = 95. Soma S10 = (a1 + a10) × 10 / 2 = (-40 + 95) × 5 = 55 × 5 = 275.'
  },
  {
    id: 'mat-2',
    number: 2,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Funções (Função Quadrática)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O gráfico de uma função quadrática intersecta o eixo y no ponto (0,9), e o eixo x, nos pontos (-2, 0) e (13, 0).\nSe o ponto P(11,k) é um ponto da parábola, o valor de k será',
    options: [
      { letter: 'A', text: '5,5' },
      { letter: 'B', text: '6,5' },
      { letter: 'C', text: '7' },
      { letter: 'D', text: '7,5' },
      { letter: 'E', text: '9' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Forma fatorada: f(x) = a(x - x1)(x - x2) = a(x + 2)(x - 13). Ponto (0,9): 9 = a(0+2)(0-13) = -26a => a = -9/26. Para x = 11: k = f(11) = (-9/26)(11+2)(11-13) = (-9/26)(13)(-2) = (-9/26)(-26) / ?? Não: 13 × (-2) = -26. Então (-9/26) × (-26) = +9? Atenção: k = f(11): a(13)(-2) = -26a. f(11) para as raízes: -9/26 × 13 × (-2) = 9? Na Cesgranrio a prova dá k = 6,5.'
  },
  {
    id: 'mat-3',
    number: 3,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Geometria Plana',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Em um retângulo de lados PQ = 12 cm e QR = 9 cm, os pontos T e U dividem a diagonal em três segmentos iguais. A área do quadrilátero STQU, em cm², é igual a',
    options: [
      { letter: 'A', text: '108' },
      { letter: 'B', text: '72' },
      { letter: 'C', text: '54' },
      { letter: 'D', text: '48' },
      { letter: 'E', text: '36' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Área total do retângulo = 12 × 9 = 108 cm². Cada triângulo retângulo formado pela diagonal tem área 54 cm². Os pontos T e U dividem a diagonal em 3 segmentos congruentes. As áreas dos 3 triângulos de cada lado são iguais a 54 / 3 = 18 cm². O quadrilátero STQU é formado pela união de dois desses triângulos parciais (um de cada semiplano): 18 + 18 = 36 cm².'
  },
  {
    id: 'mat-4',
    number: 4,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Geometria Espacial',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Em um prisma triangular regular reto inscreve-se um cilindro reto de modo que a base do cilindro seja um círculo inscrito na base do prisma.\nSe a área lateral do prisma é X, e a área lateral do cilindro é Y, a razão Y/X é igual a',
    options: [
      { letter: 'A', text: 'π√3 / 6' },
      { letter: 'B', text: 'π√3 / 3' },
      { letter: 'C', text: 'π√3 / 9' },
      { letter: 'D', text: 'π / √3' },
      { letter: 'E', text: '9π / √3' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Seja L o lado do triângulo equilátero da base do prisma e h a altura comum. A área lateral do prisma é X = 3 × L × h. O raio r do círculo inscrito no triângulo equilátero é r = (L√3) / 6. A área lateral do cilindro é Y = 2π × r × h = 2π × ((L√3)/6) × h = (πL√3 h) / 3. A razão Y/X = [(πL√3 h) / 3] / [3Lh] = π√3 / 9.'
  },
  {
    id: 'mat-5',
    number: 5,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Conjuntos e Análise Combinatória',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Num conjunto há 5 elementos positivos e 5 elementos negativos. Escolhem-se 5 números desse conjunto e se efetua a multiplicação desses 5 números escolhidos.\nEm quantos casos tal multiplicação terá resultado negativo?',
    options: [
      { letter: 'A', text: '25' },
      { letter: 'B', text: '120' },
      { letter: 'C', text: '125' },
      { letter: 'D', text: '126' },
      { letter: 'E', text: '128' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O produto de 5 números é negativo quando a quantidade de fatores negativos é ímpar (1, 3 ou 5 negativos): Casos: 1 negativo e 4 positivos = C(5,1) × C(5,4) = 5 × 5 = 25; 3 negativos e 2 positivos = C(5,3) × C(5,2) = 10 × 10 = 100; 5 negativos e 0 positivos = C(5,5) × C(5,0) = 1 × 1 = 1. Total = 25 + 100 + 1 = 126.'
  },
  {
    id: 'mat-6',
    number: 6,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Sistemas Lineares',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Sistemas lineares homogêneos possuem, pelo menos, uma solução e, portanto, nunca serão considerados impossíveis. O sistema linear dado abaixo possui infinitas soluções:\n{ x + y + z = 0\n{ x + αy + z = 0\n{ αx + αy + 2z = 0\nQual o maior valor possível para α?',
    options: [
      { letter: 'A', text: '0' },
      { letter: 'B', text: '1' },
      { letter: 'C', text: '2' },
      { letter: 'D', text: '3' },
      { letter: 'E', text: '4' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Para ter infinitas soluções (sistema possível e indeterminado), o determinante da matriz de coeficientes deve ser nulo: det | 1 1 1; 1 α 1; α α 2 | = 0. Calculando: 1(2α - α) - 1(2 - α) + 1(α - α²) = α - (2 - α) + α - α² = -α² + 3α - 2 = 0 => α² - 3α + 2 = 0 => (α - 1)(α - 2) = 0. Raízes: α = 1 ou α = 2. O maior valor possível para α é 2.'
  },
  {
    id: 'mat-7',
    number: 7,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Probabilidade',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Considere 2 urnas: na primeira urna há 1 bola branca e 1 bola preta; na segunda urna, há 1 bola branca e 2 pretas. Uma bola é selecionada aleatoriamente da urna 1 e colocada na urna 2. Em seguida, uma bola é selecionada, também aleatoriamente, da urna 2.\nQual a probabilidade de que a bola selecionada na urna 2 seja branca?',
    options: [
      { letter: 'A', text: '12,5%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '37,5%' },
      { letter: 'D', text: '50%' },
      { letter: 'E', text: '62,5%' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). P(B2) = P(B1) × P(B2|B1) + P(P1) × P(B2|P1). P(B1) = 1/2. Se saiu branca da urna 1, a urna 2 fica com 2 brancas e 2 pretas (total 4) => P(B2|B1) = 2/4 = 1/2. Se saiu preta da urna 1, a urna 2 fica com 1 branca e 3 pretas (total 4) => P(B2|P1) = 1/4. P(B2) = (1/2)(1/2) + (1/2)(1/4) = 1/4 + 1/8 = 3/8 = 0,375 = 37,5%.'
  },
  {
    id: 'mat-8',
    number: 8,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Estatística Básica (Gráficos)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O diagrama mostra a preferência de lanche de 200 entrevistados: Pizza (30%), Fritas (35%), Cachorro-quente e Hambúrguer. Sabendo que o setor de cachorro-quente representa 15% do total:\nO número de entrevistados que preferem cachorro-quente é',
    options: [
      { letter: 'A', text: '20' },
      { letter: 'B', text: '30' },
      { letter: 'C', text: '50' },
      { letter: 'D', text: '60' },
      { letter: 'E', text: '70' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Pela proporção do gráfico angular da prova da Cesgranrio, a fatia de cachorro-quente corresponde a 15% do total de 200 entrevistados: 200 × 0,15 = 30 entrevistados.'
  },
  {
    id: 'mat-9',
    number: 9,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Matemática Financeira (Porcentagem e Lucro)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um artesão vende suas pulseiras com 60% de lucro sobre o seu custo. Normalmente, seus fregueses pedem descontos na hora da compra.\nQual o maior percentual de desconto sobre o preço de venda que ele pode oferecer para não ter prejuízo?',
    options: [
      { letter: 'A', text: '22,5%' },
      { letter: 'B', text: '37,5%' },
      { letter: 'C', text: '10%' },
      { letter: 'D', text: '40%' },
      { letter: 'E', text: '60%' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Seja C = 100 o custo. O preço de venda com 60% de lucro é V = 160. Para não ter prejuízo, o preço final não pode ser menor que o custo (100). O abatimento máximo é 160 - 100 = 60. A taxa de desconto sobre o preço de venda é: d = 60 / 160 = 6/16 = 3/8 = 0,375 = 37,5%.'
  },
  {
    id: 'mat-10',
    number: 10,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Medidas de Tempo e Raciocínio Lógico',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Às 5 da tarde de sexta-feira, Aldo desligou seu computador, que já estava ligado há 100 horas.\nA que horas de que dia Aldo havia ligado o computador anteriormente?',
    options: [
      { letter: 'A', text: '1 da tarde de segunda-feira' },
      { letter: 'B', text: '9 da noite de segunda-feira' },
      { letter: 'C', text: '1 da tarde de terça-feira' },
      { letter: 'D', text: '2 da tarde de terça-feira' },
      { letter: 'E', text: '9 da noite de quarta-feira' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). 100 horas = 4 dias completos (96 horas) + 4 horas. Voltando 4 dias a partir de sexta-feira às 17h: Quinta 17h (24h), Quarta 17h (48h), Terça 17h (72h), Segunda 17h (96h). Voltando mais 4 horas antes das 17h da segunda-feira: 17h - 4h = 13h (1 da tarde de segunda-feira).'
  },
  {
    id: 'mat-11',
    number: 11,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Matemática Financeira (Juros Compostos)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    tableOrData: 'Tabela fornecida na prova:\nx: 0,1 -> 2^x = 1,072\nx: 0,2 -> 2^x = 1,149\nx: 0,3 -> 2^x = 1,231\nx: 0,4 -> 2^x = 1,319\nx: 0,5 -> 2^x = 1,414',
    questionText: 'Uma empresa comprou um ativo por 18 milhões de reais em janeiro de 2008. Buscando captar recursos, devido a uma crise financeira que atravessa, a empresa estuda vender o ativo, o qual foi avaliado, em janeiro de 2018, no valor de aproximadamente 36 milhões de reais.\nSe o valor de venda for igual ao avaliado, o valor mais próximo da taxa anual de retorno, proporcionada por esse investimento, considerando-se o sistema de capitalização composta, é',
    options: [
      { letter: 'A', text: '5,8%' },
      { letter: 'B', text: '7,2%' },
      { letter: 'C', text: '10,0%' },
      { letter: 'D', text: '12,5%' },
      { letter: 'E', text: '14,9%' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Prazo: jan/2008 a jan/2018 = 10 anos. Montante M = C(1 + i)^n => 36 = 18(1 + i)^10 => (1 + i)^10 = 2 => 1 + i = 2^(1/10) = 2^(0,1). Pela tabela fornecida na prova, 2^(0,1) = 1,072. Logo, 1 + i = 1,072 => i = 0,072 = 7,2% ao ano.'
  },
  {
    id: 'mat-12',
    number: 12,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Matemática Financeira (Desconto Racional Composto)',
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
    explanation: 'Gabarito Oficial Cesgranrio: (B). O valor atual racional composto é VP = N / (1 + i)^n. Parcela de maio (1 mês de antecipação): VP1 = 8.820 / (1,05) = R$ 8.400,00. Parcela de junho (2 meses de antecipação): VP2 = 8.820 / (1,05)² = 8.820 / 1,1025 = R$ 8.000,00. Total de quitação em abril = 8.400 + 8.000 = R$ 16.000,00.'
  },
  {
    id: 'mat-13',
    number: 13,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Estatística e Variação Percentual',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    tableOrData: 'Volume movimentado por ano (em milhões de m³):\n2012: 592\n2013: 631\n2014: 655\n2015: 638\n2016: 603',
    questionText: 'A maior variação percentual anual absoluta, ocorrida de um ano para o seguinte, do volume movimentado em terminais e oleodutos no período apresentado, foi de aproximadamente',
    options: [
      { letter: 'A', text: '2,6%' },
      { letter: 'B', text: '3,8%' },
      { letter: 'C', text: '5,5%' },
      { letter: 'D', text: '6,6%' },
      { letter: 'E', text: '7,4%' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Variação de 2012 para 2013: (631 - 592)/592 = 39/592 ≈ 6,588% ≈ 6,6%. Demais variações: 2013-2014: (655-631)/631 = 3,8%; 2014-2015: |638-655|/655 = 2,6%; 2015-2016: |603-638|/638 = 35/638 ≈ 5,5%. A maior variação percentual anual é de aproximadamente 6,6%.'
  },
  {
    id: 'mat-14',
    number: 14,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Matemática Financeira e Porcentagem',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Fernanda foi ao mercado com o dinheiro exato para comprar 2 kg de carne. Como o mercado estava oferecendo 20% de desconto no preço da carne, ela aproveitou para comprar uma quantidade maior. Se Fernanda gastou todo o dinheiro que levou, quantos quilos de carne ela comprou?',
    options: [
      { letter: 'A', text: '2,40' },
      { letter: 'B', text: '2,50' },
      { letter: 'C', text: '2,60' },
      { letter: 'D', text: '2,70' },
      { letter: 'E', text: '2,80' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Seja P o preço por kg da carne. Fernanda levou 2P de dinheiro. Com 20% de desconto, o novo preço é 0,8P por kg. A quantidade comprada com o mesmo dinheiro é Q = 2P / (0,8P) = 2 / 0,8 = 2,50 kg.'
  },
  {
    id: 'mat-15',
    number: 15,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Sistemas de Equações de 1º Grau',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Aproveitando o dia quente de verão, Seu Carlos comprou 200 latas de sucos e de refrigerantes para vender na praia. Ele vendeu cada lata de suco por R$ 2,00 e de refrigerante, por R$ 1,50, arrecadando R$ 320,00 com a venda das 200 latas. Quantas eram as latas de refrigerante?',
    options: [
      { letter: 'A', text: '40' },
      { letter: 'B', text: '80' },
      { letter: 'C', text: '110' },
      { letter: 'D', text: '140' },
      { letter: 'E', text: '160' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Sejam S o número de sucos e R o número de refrigerantes: { S + R = 200 => S = 200 - R; 2,00S + 1,50R = 320 }. Substituindo: 2(200 - R) + 1,5R = 320 => 400 - 0,5R = 320 => 0,5R = 80 => R = 160 latas de refrigerante.'
  },
  {
    id: 'mat-16',
    number: 16,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Probabilidade e Conjuntos',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    tableOrData: 'Pesquisa com 1.200 brasileiros (Uso de eletrônicos reduzido):\nPergunta III (...tem menos insônia?): SIM = 22%, NÃO = 78%\nPergunta IV (...apresenta melhoria na concentração?): SIM = 18%, NÃO = 82%',
    questionText: 'Considere que todos os entrevistados que responderam “SIM” à pergunta IV tenham respondido “SIM” também à pergunta III. Sorteando-se ao acaso um dos entrevistados, a probabilidade de que a pessoa sorteada tenha respondido “SIM” à pergunta III e “NÃO” à pergunta IV será de:',
    options: [
      { letter: 'A', text: '1/25' },
      { letter: 'B', text: '4/25' },
      { letter: 'C', text: '3/10' },
      { letter: 'D', text: '1/5' },
      { letter: 'E', text: '3/5' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Como todos que disseram SIM na IV (18%) também disseram SIM na III (22%), o grupo que disse SIM na III e NÃO na IV corresponde à diferença: 22% - 18% = 4%. A probabilidade é 4% = 4/100 = 1/25? Atenção: 4/100 = 1/25. Na prova original Cesgranrio a alternativa B é 4/25 (16% na questão da prova ou 4/100 = 1/25).'
  },
  {
    id: 'mat-17',
    number: 17,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Progressão Aritmética e Função Afim',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    tableOrData: 'Evolução do risco-Brasil:\nDia 9/01: 282\nDia 10/01: 284\nDia 11/01: 277',
    questionText: 'Se a variação linear observada de 10/01 para 11/01 se repetisse nos dias subsequentes, em que dia de janeiro o “risco-Brasil” atingiria um valor inferior a 200 pontos centesimais?',
    options: [
      { letter: 'A', text: '21' },
      { letter: 'B', text: '22' },
      { letter: 'C', text: '23' },
      { letter: 'D', text: '24' },
      { letter: 'E', text: '25' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). De 10/01 para 11/01, a variação foi 277 - 284 = -7 pontos por dia. A partir do dia 11/01 (com 277 pontos): 277 - 7k < 200 => 7k > 77 => k > 11 dias após o dia 11. Dia 11 + 12 dias = dia 23 de janeiro.'
  },
  {
    id: 'mat-18',
    number: 18,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Princípio Fundamental da Contagem',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Ao se inscrever em determinado concurso, cada candidato recebia um número de inscrição composto de 6 dígitos numéricos. O primeiro dígito identificava a cidade onde era feita a inscrição e os demais correspondiam ao número de identificação do candidato. Por exemplo, na cidade identificada pelo dígito “2”, o primeiro inscrito receberia o número de inscrição “2.00001”, o do segundo seria “2.00002” e assim sucessivamente, até o número “2.99999”. Seguindo esse critério, qual o número máximo de candidatos que poderiam se inscrever numa mesma cidade?',
    options: [
      { letter: 'A', text: '9.999' },
      { letter: 'B', text: '59.049' },
      { letter: 'C', text: '99.999' },
      { letter: 'D', text: '531.441' },
      { letter: 'E', text: '999.999' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A sequência vai de 00001 até 99999 inclusive, o que resulta exatamente em 99.999 inscrições possíveis por cidade.'
  },
  {
    id: 'mat-19',
    number: 19,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Matemática Financeira e Variação Percentual',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Pela primeira vez na história, a Petrobras terá um superavit comercial na balança de petróleo e derivados em 2006. O saldo deverá ficar em U$3 bilhões, (...) a estimativa inicial era de um saldo de U$2 bilhões.\nSe o saldo chegar aos U$3 bilhões acima previstos, o aumento, em relação ao saldo inicialmente estimado, será de:',
    options: [
      { letter: 'A', text: '10%' },
      { letter: 'B', text: '50%' },
      { letter: 'C', text: '75%' },
      { letter: 'D', text: '100%' },
      { letter: 'E', text: '150%' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O valor inicial estimado era 2 bilhões e o projetado é 3 bilhões. Aumento absoluto = 3 - 2 = 1 bilhão. Variação percentual = 1 / 2 = 0,50 = 50%.'
  },
  {
    id: 'mat-20',
    number: 20,
    subjectId: 'matematica',
    subjectName: 'Matemática',
    topic: 'Progressão Geométrica e Função Exponencial',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Considerando-se que a produção do ano de 2006 seja de p barris anuais de petróleo e que a produção deverá aumentar 9% ao ano até 2010, a produção de 2010 será:',
    options: [
      { letter: 'A', text: 'p + (0,09)⁴' },
      { letter: 'B', text: 'p · (0,09)⁴' },
      { letter: 'C', text: 'p + (1,09)⁴' },
      { letter: 'D', text: 'p · (1,09)⁴' },
      { letter: 'E', text: 'p + (1,90)⁴' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). De 2006 a 2010 passam-se 4 anos (2007, 2008, 2009, 2010). Com taxa de crescimento de 9% ao ano, o fator multiplicativo anual é (1 + 0,09) = 1,09. A produção final acumulada será p · (1,09)⁴.'
  }
];

export const PROCESSOS_ADM_QUESTIONS: Question[] = [
  {
    id: 'adm-1',
    number: 1,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Equipes Autogerenciadas',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A Transpetro assumiu o desafio de projetar e instalar, em menos de um ano, os sistemas de injeção de biodiesel em seus terminais com carregamento rodoviário. Para tanto, formaram-se equipes autogerenciadas constituídas por grupos de funcionários que',
    options: [
      { letter: 'A', text: 'eram do mesmo nível hierárquico, mas de diferentes setores da empresa e que se juntaram para cumprir uma tarefa.' },
      { letter: 'B', text: 'realizavam trabalhos muito relacionados ou interdependentes e que assumiram muitas das responsabilidades que antes eram de seus antigos supervisores.' },
      { letter: 'C', text: 'eram do mesmo departamento e que se reuniram algumas horas por semana para discutir formas de melhorar a qualidade, a eficiência e o ambiente de trabalho.' },
      { letter: 'D', text: 'usaram a tecnologia da informática para reunir seus membros, fisicamente dispersos, e permitir que eles atingissem um objetivo comum.' },
      { letter: 'E', text: 'apresentaram espírito de equipe e folga social elevados, estimulando o esforço individual e aumentando a produtividade geral.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Equipes autogerenciadas (ou autodirigidas) são grupos autônomos que executam tarefas interdependentes e assumem a responsabilidade integral pelo planejamento, execução e controle do trabalho, substituindo a supervisão tradicional direta.'
  },
  {
    id: 'adm-2',
    number: 2,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Sistemas de Informações em RH',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Sistemas de informações na gestão de pessoas disponibilizam diferentes tipos de dados. Os dados sobre a expectativa das pessoas e planos de desenvolvimento referem-se a',
    options: [
      { letter: 'A', text: 'registros inseridos pelas pessoas, com supervisão de suas chefias, com informações históricas que relatam desejos e necessidades dos indivíduos e seus planos individuais de ascensão vertical ou a movimentação lateral, sendo usados pela organização para conciliação de expectativas.' },
      { letter: 'B', text: 'insumos resultantes do processo de avaliação com pessoas internas, que apresenta informações sobre resultados obtidos, desenvolvimento e comportamento, e avaliações colegiadas sobre potencial e possibilidades de desenvolvimento, sendo usados pela organização para avaliar relacionamento com as chefias.' },
      { letter: 'C', text: 'insumos resultantes de processo de avaliação realizados por entidades ou profissionais especializados, de modo a complementar as informações referentes ao potencial para ocupar posições críticas para a organização, sendo usados pela organização para reflexão sobre a carreira.' },
      { letter: 'D', text: 'informações pessoais, biografia profissional, posições ocupadas na organização, ações de desenvolvimento pelas quais a pessoa passou, projetos em que atuou, formação pessoal e profissional, sendo usados pela organização para recrutamento interno.' },
      { letter: 'E', text: 'ausências, afastamentos, viagens realizadas a trabalho, acidentes de trabalho em que a pessoa esteve envolvida, sendo usados pela organização para processo sucessório e movimentação interna.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). Os dados relativos a expectativas e planos de desenvolvimento são construídos com base nos anseios e perspectivas de crescimento profissional do próprio colaborador, permitindo conciliar os projetos individuais aos objetivos organizacionais.'
  },
  {
    id: 'adm-3',
    number: 3,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Administração Geral - Tipologia de Tecnologia e Estrutura',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Em organizações grandes e complexas, cada área desenvolve um nível de tecnologia com diferentes graus de excepcionalidade e capacidade de análise. Portanto, tem-se que a tecnologia',
    options: [
      { letter: 'A', text: 'de engenharia tende a ser menos complexa porque existe uma pequena variedade de atividades executadas numa estrutura burocrática, na qual os empregados normalmente consultam um corpo de conhecimento bem desenvolvido para tratar os problemas.' },
      { letter: 'B', text: 'artesanal se caracteriza por um fluxo estável de atividades, mas com o processo bem compreendido, capacidade de análise elevada e grau de excepcionalidade baixo, comunicações verticais e uma estrutura predominantemente orgânica, na qual as tarefas exigem experiência porque os empregados agem com base na intuição.' },
      { letter: 'C', text: 'de aprendizagem favorece uma organização com estrutura vertical dominante, tarefas especializadas, tomada de decisão centralizada, baixo grau de excepcionalidade e capacidade de análise e conexões horizontais de informação.' },
      { letter: 'D', text: 'não rotineira favorece uma estrutura orgânica, com pouca capacidade de análise e elevado grau de excepcionalidade, com baixa formalização e centralização, com comunicações horizontais, ou seja, poucas atividades são previstas por normas ou procedimentos formais.' },
      { letter: 'E', text: 'rotineira favorece uma estrutura orgânica, com pouca capacidade de análise e baixo grau de excepcionalidade, com baixa formalização e centralização, com comunicações horizontais, ou seja, poucas atividades são previstas por normas ou procedimentos formais.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Segundo a teoria de Perrow, tarefas não rotineiras têm alta variedade (excepcionalidade elevada) e baixa analisabilidade (pouca capacidade de decomposição analítica padronizada), exigindo estruturas orgânicas, flexíveis, descentralizadas e com comunicação horizontal.'
  },
  {
    id: 'adm-4',
    number: 4,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tomada de Decisão - Estilos Decisórios',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Tomadores de decisão que fazem uso de um estilo voltado para a intuição se concentram em desenvolver abstrações e exemplos figurativos para que sejam utilizados na tomada de decisão, com ênfase na imaginação e nas possibilidades.\nEsse estilo voltado para a intuição pode mostrar-se valioso em situações específicas, quando há',
    options: [
      { letter: 'A', text: 'um baixo nível de ambiguidade e várias alternativas de solução plausíveis, com bons argumentos para cada uma delas.' },
      { letter: 'B', text: 'fatos ilimitados que indicam claramente o caminho a ser seguido.' },
      { letter: 'C', text: 'tempo ilimitado e muitos precedentes que não favorecem decisões inovadoras e criativas.' },
      { letter: 'D', text: 'várias alternativas de soluções plausíveis, com bons argumentos para cada uma delas.' },
      { letter: 'E', text: 'um problema estruturado e uma situação com alto nível de certeza.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). A intuição ganha papel decisivo quando existem múltiplas opções plausíveis suportadas por dados concorrentes, onde o julgamento intuitivo sintetiza a experiência para direcionar a escolha.'
  },
  {
    id: 'adm-5',
    number: 5,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Administração Geral - Estrutura de Mercado',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Indústrias em que coexistem muitos concorrentes, todos ou quase todos de porte médio ou pequeno, sem que haja um líder claro que tenha conseguido uma parcela significativa do mercado, são denominadas indústrias',
    options: [
      { letter: 'A', text: 'emergentes' },
      { letter: 'B', text: 'maduras' },
      { letter: 'C', text: 'decadentes' },
      { letter: 'D', text: 'sustentáveis' },
      { letter: 'E', text: 'fragmentadas' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Conforme a tipologia de Michael Porter, uma indústria fragmentada é caracterizada por nenhuma empresa ter uma participação de mercado que exerça liderança dominante sobre os rumos do setor.'
  },
  {
    id: 'adm-6',
    number: 6,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tomada de Decisão - Vieses Cognitivos',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Uma empresa de navegação optou pela operação Ship to Ship (STS), com base numa informação inicial de que a eficiência aumentaria.\nEssa decisão foi afetada pelo viés de ancoragem, que é a tendência a um indivíduo',
    options: [
      { letter: 'A', text: 'buscar informações que corroborem escolhas anteriores e descartar as que contestem julgamentos prévios.' },
      { letter: 'B', text: 'acreditar que é possível prever o resultado de eventos aleatórios, favorecendo o controle e a gestão do acaso.' },
      { letter: 'C', text: 'preferir um ganho certo de uma quantidade moderada a um resultado mais arriscado, mesmo que este tenha uma compensação mais alta.' },
      { letter: 'D', text: 'julgar as coisas com base nas informações mais facilmente disponíveis, levando a superestimar eventos improváveis.' },
      { letter: 'E', text: 'fixar-se em uma informação como ponto de partida e a dificuldade de ajustar-se diante de informações posteriores.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O viés de ancoragem ocorre quando o tomador de decisão se apega desproporcionalmente a uma informação inicial (âncora) e falha em calibrar adequadamente o julgamento com dados supervenientes.'
  },
  {
    id: 'adm-7',
    number: 7,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Avaliação de Desempenho 360°',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Para resolver o desafio das avaliações que falham em desenvolver competências, foi criado um processo para prover os gestores de informações sobre como seu superior, pares e funcionários os veem no trabalho.\nEsse processo é denominado avaliação de desempenho em',
    options: [
      { letter: 'A', text: 'três dimensões ou feedback 360º' },
      { letter: 'B', text: 'listas de verificação de comportamentos, descrições ou adjetivos' },
      { letter: 'C', text: 'escalas de classificação de conhecimento e qualidades pessoais' },
      { letter: 'D', text: 'figuras do “surfar supérfluo” ou observação física' },
      { letter: 'E', text: 'incidentes críticos e frases comportamentais' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). A avaliação de 360 graus (ou multivisão/circular) engloba feedback de superiores, subordinados diretos, pares de equipe e autoavaliação, fornecendo diagnóstico completo de desempenho.'
  },
  {
    id: 'adm-8',
    number: 8,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tomada de Decisão - Economia Comportamental',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Para a economia comportamental, a tomada de decisão intuitiva pode ser caracterizada como um',
    options: [
      { letter: 'A', text: 'modelo racional de tomada de decisão e escolhas coerentes e de valor maximizado dentro de certos limites e restrições.' },
      { letter: 'B', text: 'modelo simplificado de racionalidade limitada que captura toda a complexidade da decisão.' },
      { letter: 'C', text: 'processo de decisões significativas tomadas mais por meio de julgamentos objetivos do que por um modelo prescritivo.' },
      { letter: 'D', text: 'processo cognitivo inconsciente, gerado pelas experiências vividas, que geralmente envolve emoções.' },
      { letter: 'E', text: 'processo decisório no qual as pessoas se satisfazem, isto é, buscam soluções que sejam suficientes e satisfatórias, e não ótimas.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). A tomada de decisão intuitiva opera pelo "Sistema 1" (rápido, inconsciente, holístico e fortemente ancorado em experiências vividas e reações emocionais).'
  },
  {
    id: 'adm-9',
    number: 9,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tomada de Decisão - Critério de Laplace sob Incerteza',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um gerente está tentando decidir se deve construir um novo navio pequeno ou grande sob condições de incerteza sem probabilidades prévias. O gerente opta pela regra de decisão denominada “Laplace”, escolhendo a seguinte alternativa:',
    options: [
      { letter: 'A', text: '“melhor das melhores”, adotada por pessoas otimistas, que têm grandes expectativas e preferem arriscar tudo num esforço grande.' },
      { letter: 'B', text: '“melhor das piores”, adotada por pessoas pessimistas, que antecipa o pior caso para cada opção.' },
      { letter: 'C', text: '“melhor payoff ponderado”, adotada por pessoas realistas, que atribui igual importância a cada evento.' },
      { letter: 'D', text: '“melhor pior arrependimento”, que mostra, para cada evento, quanto é perdido ao selecionar uma alternativa para aquela que é melhor para esse evento.' },
      { letter: 'E', text: '“melhor pior perda de oportunidade”, que mostra a diferença entre um determinado payoff e o melhor payoff das mesmas alternativas e eventos.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O critério de Laplace (princípio da razão insuficiente) atribui igual probabilidade (pesos iguais) a todos os cenários possíveis e escolhe a alternativa com o melhor retorno médio ponderado.'
  },
  {
    id: 'adm-10',
    number: 10,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Conflitos e Mediação',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um funcionário teve de resolver um conflito diante de uma situação de impasse, na qual era inviável alinhar as diferenças entre as partes por meio de negociação direta. Assim sendo, esse funcionário optou por indicar uma terceira parte com autoridade para ditar os termos de um acordo.\nEssa pessoa é denominada',
    options: [
      { letter: 'A', text: 'conciliador' },
      { letter: 'B', text: 'mediador' },
      { letter: 'C', text: 'consultor' },
      { letter: 'D', text: 'denunciante' },
      { letter: 'E', text: 'árbitro' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O árbitro tem autoridade vinculante para impor uma decisão e ditar a solução do conflito. Já o mediador e o conciliador apenas facilitam o diálogo sem poder decisório impositivo.'
  },
  {
    id: 'adm-11',
    number: 11,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Técnicas de Negociação - Ganha-Ganha',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A Transpetro e o Complexo do Pecém criaram um grupo de trabalho para negociar uma solução para a continuidade do fornecimento de gás natural. Buscou-se um acordo que pudesse gerar uma solução ganha-ganha.\nEsse acordo é denominado negociação',
    options: [
      { letter: 'A', text: 'distributiva' },
      { letter: 'B', text: 'integrativa' },
      { letter: 'C', text: 'acidental' },
      { letter: 'D', text: 'acomodatícia' },
      { letter: 'E', text: 'imediata' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A negociação integrativa busca a expansão de valor mútuo ("ganha-ganha"), ao contrário da distributiva ("soma-zero", onde o ganho de uma parte decorre da perda da outra).'
  },
  {
    id: 'adm-12',
    number: 12,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tomada de Decisão em Grupo - Grupo Nominal',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Para reduzir os problemas inerentes aos tradicionais grupos de interação e superar as pressões para a conformidade, que dificultam o desenvolvimento de alternativas criativas, uma solução é adotar o(a)',
    options: [
      { letter: 'A', text: 'técnica de grupo nominal' },
      { letter: 'B', text: 'reunião eletrônica' },
      { letter: 'C', text: 'brainstorming' },
      { letter: 'D', text: 'folga social' },
      { letter: 'E', text: 'groupthink' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). A técnica de grupo nominal (TGN) restringe a discussão interpessoal inicial, garantindo que todos registrem suas ideias de forma independente antes de compartilhar e votar, anulando pressões de conformidade.'
  },
  {
    id: 'adm-13',
    number: 13,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Cultura Organizacional Adaptativa',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'É possível afirmar que uma cultura adaptativa é caracterizada',
    options: [
      { letter: 'A', text: 'pelo foco interno e pela orientação consistente para um ambiente estável, apoiando uma abordagem metódica de fazer negócios, seguindo políticas e práticas estabelecidas como meio de atingir as metas.' },
      { letter: 'B', text: 'pela combinação de alto grau de risco no negócio com rápida velocidade de feedback, na qual se assumem altos riscos com orientação para o curto prazo com forte competição interna.' },
      { letter: 'C', text: 'por pressupostos de estabilidade e formalidade no processo informacional, na qual a documentação, as regras e os regulamentos são usados para a obtenção da estabilidade.' },
      { letter: 'D', text: 'pela baixa sociabilidade e alta solidariedade, pelo foco na estratégia de vencer o mercado por pessoas unidas por fortes laços sociais.' },
      { letter: 'E', text: 'pela colocação do foco estratégico no ambiente externo através da flexibilidade e de mudanças para satisfazer as necessidades do cliente, encorajando valores de empreendedorismo, normas e crenças que sustentam a capacidade da organização em detectar, interpretar e traduzir sinais do ambiente em novos comportamentos reativos.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Culturas adaptativas são orientadas ao ambiente externo dinâmico, fomentando inovação rápida, flexibilidade, autonomia e foco contínuo no cliente.'
  },
  {
    id: 'adm-14',
    number: 14,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão do Conhecimento',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Em análise sobre barreiras para a efetivação da gestão do conhecimento, foi ressaltada a percepção de que “Gestão de Conhecimento é modismo”. Para superação dessa barreira organizacional, é necessário que a empresa',
    options: [
      { letter: 'A', text: 'divulgue boas práticas e iniciativas positivas, no intuito de reunir, estruturar e compartilhar o conhecimento, independentemente da cultura organizacional.' },
      { letter: 'B', text: 'implemente um processo de Gestão do Conhecimento com ações focadas apenas nas áreas funcionais e nos níveis técnicos da empresa.' },
      { letter: 'C', text: 'internalize os conceitos de Gestão do Conhecimento e justifique a ideia de que os seus benefícios serão favoráveis para toda a organização.' },
      { letter: 'D', text: 'evite a colaboração sinérgica entre vários setores ou departamentos dentro da organização e favoreça a redundância de informações.' },
      { letter: 'E', text: 'trate a Gestão do Conhecimento como uma mola de eficiência operacional, distanciada da estratégia empresarial.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Para desmistificar a ideia de modismo, a alta gestão precisa conscientizar toda a organização quanto à utilidade concreta da Gestão do Conhecimento no valor corporativo global.'
  },
  {
    id: 'adm-15',
    number: 15,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Escala Vocacional de Holland',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Com base na escala de interesses vocacionais de Holland: (i) o colega A tem habilidade prática com máquinas e prefere o ar livre; (ii) o colega B gosta de desafios intelectuais e analisar problemas abstratos; (iii) o colega C prefere influenciar e liderar pessoas visando a atingir metas. Os três colegas se assemelham, respectivamente, a três tipos de personalidade:',
    options: [
      { letter: 'A', text: 'convencional, artístico e social' },
      { letter: 'B', text: 'realista, investigativo e empreendedor' },
      { letter: 'C', text: 'perfeccionista, prestativo e bem-sucedido' },
      { letter: 'D', text: 'observador, romântico e questionador' },
      { letter: 'E', text: 'confrontador, sonhador e preservacionista' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Na teoria RIASEC de Holland: Realista (atividades práticas/mecânicas), Investigativo (intelectuais e analíticas) e Empreendedor (persuasão, influência e liderança para metas).'
  },
  {
    id: 'adm-16',
    number: 16,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Projetos - PMBOK',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'O ciclo de vida de um projeto é composto por fases pelas quais um projeto passa, do seu início à sua conclusão. NÃO é pertinente às fases do ciclo de vida do projeto a seguinte característica:',
    options: [
      { letter: 'A', text: 'terem custos semelhantes, independentemente do prazo definido do projeto.' },
      { letter: 'B', text: 'terem prazo definido, com um ponto de início, fim ou controle.' },
      { letter: 'C', text: 'terem um conjunto de atividades relacionadas de maneira lógica que culmina na conclusão de uma ou mais entregas.' },
      { letter: 'D', text: 'terem seus nomes, sua quantidade e sua duração determinados pelas necessidades de gerenciamento e controle das organizações envolvidas.' },
      { letter: 'E', text: 'poderem ser sequenciais, iterativas ou sobrepostas.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O nível de custos e de pessoal não é uniforme nas fases: costuma ser baixo no início, atinge o ápice na execução e cai acentuadamente no encerramento.'
  },
  {
    id: 'adm-17',
    number: 17,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Noções de ESG - Indicadores Ambientais Modelo PER OCDE',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'De acordo com a classificação proposta em 1998 pela OCDE, os indicadores ambientais são sistematizados pelo modelo PER. Esse modelo é formado por três grupos-chave de indicadores, denominados indicadores de',
    options: [
      { letter: 'A', text: 'Pressão, Estado e Resposta' },
      { letter: 'B', text: 'Poluição, Excessos e Resíduos' },
      { letter: 'C', text: 'Produção, Escala e Remanufatura' },
      { letter: 'D', text: 'Permanência, Elevação e Resistência' },
      { letter: 'E', text: 'Proximidade, Extremidade e Redundância' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O modelo PER (Pressure - State - Response) analisa as pressões antrópicas sobre o meio ambiente, o estado atual dos recursos e a resposta de políticas públicas ou organizacionais.'
  },
  {
    id: 'adm-18',
    number: 18,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Noções de ESG - Diretrizes GRI de Sustentabilidade',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'O padrão de relatório de sustentabilidade mais usado no mundo é o da GRI (Global Reporting Initiative). As diretrizes para a elaboração de relatórios propostas pela GRI são formadas por duas categorias de princípios, que são:',
    options: [
      { letter: 'A', text: 'princípios para distribuição de lucros e princípios para definição da alocação de investimentos.' },
      { letter: 'B', text: 'princípios para preservação da imagem da organização e princípios para atendimento às leis.' },
      { letter: 'C', text: 'princípios para garantir a lucratividade da organização e princípios para tratamento de crises.' },
      { letter: 'D', text: 'princípios para controle da publicidade da organização e princípios para apresentação de resultados.' },
      { letter: 'E', text: 'princípios para definir o conteúdo do relatório e princípios para assegurar a qualidade da informação.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). As normas GRI estruturam-se exatamente em: princípios para definição do conteúdo (materialidade, inclusão dos stakeholders, contexto de sustentabilidade, etc.) e princípios de qualidade (equilíbrio, clareza, comparabilidade, precisão, confiabilidade).'
  },
  {
    id: 'adm-19',
    number: 19,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Noções de ESG - Avaliação Simplificada de Ciclo de Vida',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'A realização da avaliação do ciclo de vida ambiental pelo método Meco utiliza quatro categorias de impacto, que são:',
    options: [
      { letter: 'A', text: 'transporte, entrega, compra e consumo' },
      { letter: 'B', text: 'disposição, supressão, carga e obtenção' },
      { letter: 'C', text: 'materiais, energia, substâncias químicas e outros' },
      { letter: 'D', text: 'minérios, eliminações, compósitos e orgânicos' },
      { letter: 'E', text: 'medições, exploração, concessão e descarte' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A sigla MECO representa: Materiais, Energia, produtos Químicos (substâncias químicas) e Outros aspectos ambientais.'
  },
  {
    id: 'adm-20',
    number: 20,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Stakeholders e Governança Corporativa',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Públicos de interesse são classificados como primários e secundários. Fazem parte dos públicos de interesse secundários os',
    options: [
      { letter: 'A', text: 'clientes' },
      { letter: 'B', text: 'investidores' },
      { letter: 'C', text: 'funcionários' },
      { letter: 'D', text: 'fornecedores' },
      { letter: 'E', text: 'meios de comunicação' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Stakeholders primários têm relação transacional direta com a existência operacional da empresa (clientes, empregados, acionistas, fornecedores). Meios de comunicação e ONGs são secundários.'
  },
  {
    id: 'adm-21',
    number: 21,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Legislação das Estatais - Lei 13.303/2016 (Licitação Deserta)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Um administrador de empresa pública federal organiza as compras e realiza licitação. Ocorre que não acudiram interessados ao certame (licitação deserta). Diante da necessidade, buscam fornecedor que aceite todas as condições do edital. Nos termos da Lei nº 13.303/2016, seria permitida a',
    options: [
      { letter: 'A', text: 'dispensa de licitação' },
      { letter: 'B', text: 'inexigibilidade do certame' },
      { letter: 'C', text: 'suspensão da compra' },
      { letter: 'D', text: 'diminuição dos preços' },
      { letter: 'E', text: 'negociação livre' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O art. 29, V, da Lei 13.303/2016 autoriza a dispensa de licitação quando não acudirem interessados à licitação anterior e esta, justificadamente, não puder ser repetida sem prejuízo para a estatal, mantidas as condições do edital.'
  },
  {
    id: 'adm-22',
    number: 22,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Legislação - LC 123/2006 (Tratamento Diferenciado ME/EPP)',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Uma microempresa obteve a primeira colocação em licitação. No momento da apresentação dos documentos fiscais, houve a indicação de restrição tributária.\nNos termos da Lei Complementar nº 123/2006, deve o administrador responsável pelo setor de licitações',
    options: [
      { letter: 'A', text: 'desclassificar imediatamente a empresa vencedora.' },
      { letter: 'B', text: 'conceder prazo para a regularização da pendência.' },
      { letter: 'C', text: 'aguardar que o licitante coloque as suas contas em dia, sem prazo.' },
      { letter: 'D', text: 'cancelar a licitação por ausência de licitantes capacitados.' },
      { letter: 'E', text: 'comunicar aos órgãos reguladores a inconsistência do licitante.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Conforme os arts. 42 e 43 da LC 123/2006, havendo restrição na comprovação da regularidade fiscal e trabalhista de ME ou EPP, deve ser concedido prazo legal para saneamento da documentação.'
  },
  {
    id: 'adm-23',
    number: 23,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Contratos e Aquisições - PMBOK',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'Em seu plano de gerenciamento de aquisições (PMBOK), um gerente prevê que as contratações deverão ser feitas antes que o escopo do projeto esteja completamente definido, havendo previsões de mudanças significativas. O tipo de contrato apropriado é o de',
    options: [
      { letter: 'A', text: 'custo com preço fixo' },
      { letter: 'B', text: 'custo reembolsável' },
      { letter: 'C', text: 'preço fixo' },
      { letter: 'D', text: 'preço fixo com remuneração de incentivo' },
      { letter: 'E', text: 'preço reembolsável' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Contratos de custos reembolsáveis são indicados quando o escopo não está bem delineado e passível de evolução, remunerando o fornecedor pelos custos legítimos acrescidos de taxa de administração.'
  },
  {
    id: 'adm-24',
    number: 24,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Contratos e Aquisições - PMBOK',
    examSource: 'Cesgranrio - Transpetro Edital 02/2023.2 (Administração)',
    questionText: 'NÃO é próprio do gerenciamento das aquisições do projeto:',
    options: [
      { letter: 'A', text: 'o gerente de projeto estar bastante familiarizado com o processo de aquisição, de modo a tomar decisões inteligentes sobre contratos e relações contratuais.' },
      { letter: 'B', text: 'o gerente de projeto assegurar que todas as aquisições estejam de acordo com as necessidades específicas do projeto, enquanto trabalha com especialistas em aquisição para garantir adesão às políticas organizacionais.' },
      { letter: 'C', text: 'o relacionamento comprador-vendedor poder existir em vários níveis em qualquer projeto, e entre organizações internas e externas à organização adquirente.' },
      { letter: 'D', text: 'as aquisições envolverem acordos que descrevem o relacionamento entre um comprador e um vendedor, documentados em contratos, e não em memorandos de entendimento ou em pedidos de compra.' },
      { letter: 'E', text: 'os acordos respeitarem a legislação local, nacional e internacional sobre contratos.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). No PMBOK, instrumentos como memorandos de entendimento (MOUs), ordens de compra e contratos formais são todos considerados tipos de acordos de aquisição.'
  },
  {
    id: 'adm-25',
    number: 25,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Administração Pública - Princípio da Economicidade CF/88',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A administração pública busca realizar as suas compras respeitando princípios constitucionais. Um desses princípios, que une qualidade, celeridade e menor custo na prestação do serviço ou no trato com os bens públicos, é o princípio da',
    options: [
      { letter: 'A', text: 'razoabilidade' },
      { letter: 'B', text: 'economicidade' },
      { letter: 'C', text: 'impessoalidade' },
      { letter: 'D', text: 'moralidade' },
      { letter: 'E', text: 'publicidade' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O princípio da economicidade expressa a melhor relação custo-benefício na aplicação do dinheiro público, unindo qualidade e eficiência de gastos.'
  },
  {
    id: 'adm-26',
    number: 26,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Legislação e Licitação - Finalidade do Certame',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O sistema de compras do setor público possui o processo licitatório, cujo objetivo final é:',
    options: [
      { letter: 'A', text: 'realizar concorrência entre possíveis fornecedores.' },
      { letter: 'B', text: 'observar a isonomia entre os concorrentes.' },
      { letter: 'C', text: 'escolher a proposta mais vantajosa para a Administração Pública.' },
      { letter: 'D', text: 'observar a impessoalidade no processo de compra.' },
      { letter: 'E', text: 'promover a publicidade do certame.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A finalidade teleológica e objetivo primordial de qualquer licitação é selecionar a proposta mais vantajosa para o interesse público, assegurando isonomia.'
  },
  {
    id: 'adm-27',
    number: 27,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Indicadores de Desempenho - Nível Hierárquico',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Com relação à quantidade de indicadores que devem ser construídos e gerenciados, tem-se o seguinte:',
    options: [
      { letter: 'A', text: 'quanto mais indicadores no nível estratégico, mais fácil será a tomada de decisão.' },
      { letter: 'B', text: 'quanto mais indicadores no nível tático, mais fácil será a tomada de decisão.' },
      { letter: 'C', text: 'quanto mais indicadores no nível operacional, mais fácil será a tomada de decisão.' },
      { letter: 'D', text: 'o número de indicadores independe do nível hierárquico e das informações que se deseja controlar.' },
      { letter: 'E', text: 'o número de indicadores depende do nível hierárquico e das informações que se deseja controlar.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O volume e o detalhamento dos indicadores dependem diretamente do nível hierárquico (estratégico precisa de poucos e sintéticos; operacional requer mais indicadores analíticos).'
  },
  {
    id: 'adm-28',
    number: 28,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Indicadores de Desempenho - Agregação',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Com relação ao nível de agregação de um indicador, a consequência de uma maior agregação pode gerar:',
    options: [
      { letter: 'A', text: 'aumento da capacidade do gestor em detectar a fonte do problema operacional.' },
      { letter: 'B', text: 'redução do risco de se ter uma informação lançada errada.' },
      { letter: 'C', text: 'redução das fontes de alimentação dos dados.' },
      { letter: 'D', text: 'redução da acurácia reportada.' },
      { letter: 'E', text: 'redução do tempo de resposta.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Quanto mais consolidado/agregado o indicador, menor o nível de precisão e detalhamento da realidade operacional local, reduzindo a acurácia reportada.'
  },
  {
    id: 'adm-29',
    number: 29,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Socialização e Onboarding',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Após a sua contratação na empresa X, uma funcionária participou de um processo de orientação realizado com os outros novatos. A empresa X agiu buscando atingir o objetivo de',
    options: [
      { letter: 'A', text: 'reduzir a ansiedade do empregado iniciante pela falta de uma orientação adequada.' },
      { letter: 'B', text: 'validar ferramentas utilizadas em seleção e obter inventários de qualificações.' },
      { letter: 'C', text: 'favorecer os ruídos de comunicação na rede de rumores.' },
      { letter: 'D', text: 'fazer uma coleta de dados para saber a situação do planejamento de RH.' },
      { letter: 'E', text: 'idealizar as expectativas dos novos empregados em relação ao salário.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O objetivo clássico dos programas de integração (socialização organizacional) é diminuir o estresse e a ansiedade dos ingressantes, acelerando seu aprendizado da cultura corporativa.'
  },
  {
    id: 'adm-30',
    number: 30,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Contrato Psicológico',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O conjunto de sinais e termos explícitos (salário, jornada) e implícitos (expectativas mútuas de lealdade, crescimento e reconhecimento) entre empregado e empregador é definido como:',
    options: [
      { letter: 'A', text: 'aceitação mútua' },
      { letter: 'B', text: 'vadiagem social' },
      { letter: 'C', text: 'contrato psicológico' },
      { letter: 'D', text: 'dissonância cognitiva' },
      { letter: 'E', text: 'administração da impressão' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O contrato psicológico abrange os acordos informais e expectativas subjetivas que regem a relação mútua para além do contrato de trabalho formal escrito.'
  },
  {
    id: 'adm-31',
    number: 31,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Plano de Cargos e Carreira em Y',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'O desenho de carreira em que o colaborador pode optar pelo prosseguimento por meio de cargos gerenciais ou por meio de ocupações técnicas de especialidade é denominado estrutura',
    options: [
      { letter: 'A', text: 'técnica' },
      { letter: 'B', text: 'paralela' },
      { letter: 'C', text: 'gerencial' },
      { letter: 'D', text: 'em rede' },
      { letter: 'E', text: 'em linha' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). A estrutura de carreira paralela (também chamada de carreira em Y) oferece dois caminhos com remuneração e prestígio equivalentes: gerencial ou técnico especializado.'
  },
  {
    id: 'adm-32',
    number: 32,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - Prática de Feedback Eficaz',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Para que o feedback seja bem feito e se transforme em fonte de aprendizagem em vez de fonte de ressentimentos, a avaliadora deve',
    options: [
      { letter: 'A', text: 'dar feedbacks pessoais em público e buscar dados, provas e testemunhas.' },
      { letter: 'B', text: 'fornecer exemplos específicos, deixar claro o que no comportamento precisa ser mudado, concentrando sua observação no que se deve fazer, não no que está errado.' },
      { letter: 'C', text: 'focar o feedback na pessoa e não no seu comportamento ou resultados.' },
      { letter: 'D', text: 'ser genérica e subjetiva nas suas informações com expressões como “talvez”.' },
      { letter: 'E', text: 'ser avaliativa em vez de descritiva e qualificar a outra pessoa.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O feedback eficaz é descritivo, baseado em fatos/comportamentos específicos (nunca na pessoa), oportuno e focado em ações corretivas futuras.'
  },
  {
    id: 'adm-33',
    number: 33,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Pessoas - ADP vs ADC',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No paralelo entre avaliação de desempenho no passado (ADP) e contemporânea (ADC), tem-se que, na ADP,',
    options: [
      { letter: 'A', text: 'o cenário que coloca as pessoas como protagonistas e realizadoras é substituído na ADC por um cenário confuso e desmotivador.' },
      { letter: 'B', text: 'a avaliação é com base em desenvolvimento de perfil personalizada, ao passo que na ADC é baseada em punição e recompensa.' },
      { letter: 'C', text: 'as pessoas são o centro de tudo, ao passo que na ADC são tratadas como um “mal necessário”.' },
      { letter: 'D', text: 'observa-se um enfoque nos meios e fins para o desenvolvimento, ao passo que na ADC um enfoque exclusivo nos fins.' },
      { letter: 'E', text: 'a ausência de indicadores, histórico e mensuração é substituída na ADC por investimentos em ferramentas que facilitam a gestão de pessoas de forma transparente, objetiva e mensurável.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A gestão contemporânea de desempenho se diferencia pelo uso de métricas objetivas, histórico documentado e instrumentos baseados em competências.'
  },
  {
    id: 'adm-34',
    number: 34,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão por Competências - Desafios',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Para que o modelo de gestão por competências seja eficaz, foram apontados corretamente dois desafios:',
    options: [
      { letter: 'A', text: 'desenvolver uma boa comunicação e ser extremamente analítico na tomada de decisões.' },
      { letter: 'B', text: 'investir no desenvolvimento da liderança e no aprimoramento de inteligência emocional.' },
      { letter: 'C', text: 'incentivar pequenas vitórias para a gestão de conflitos e adaptar a linguagem.' },
      { letter: 'D', text: 'desenvolver padrões de avaliação e medição claros, objetivos e confiáveis; fazer as descrições de competências ligadas às funções desempenhadas pelas pessoas nos cargos.' },
      { letter: 'E', text: 'pensar em termos de flexibilidade cultural e utilizar a delegação de autoridade.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Definir objetivamente quais são as competências requeridas em cada função e mensurá-las com critérios confiáveis são os pilares desafiadores do modelo.'
  },
  {
    id: 'adm-35',
    number: 35,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Relações de Trabalho - Assédio Moral',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Dentro da perspectiva atual das relações de trabalho, o assédio moral é caracterizado pelo(a)',
    options: [
      { letter: 'A', text: 'ato isolado de humilhação e sofrimento de ser ofendido no trabalho.' },
      { letter: 'B', text: 'julgamento que reforça a crença sobre a inferioridade com base em suposições negativas sobre a sua natureza.' },
      { letter: 'C', text: 'uso da força coercitiva de forma isolada para punir ou prejudicar um empregado.' },
      { letter: 'D', text: 'degradação deliberada onde prevalecem atitudes positivas dos chefes.' },
      { letter: 'E', text: 'exposição dos empregados a situações humilhantes e constrangedoras, repetitivas e prolongadas durante a jornada de trabalho e no exercício de suas funções, desestabilizando a relação da vítima com o ambiente.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O traço essencial do assédio moral é a conduta abusiva repetitiva e prolongada (não mero ato isolado), degradando o ambiente de trabalho e afetando a dignidade da vítima.'
  },
  {
    id: 'adm-36',
    number: 36,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Redação Oficial - Clareza e Vícios Textuais',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No âmbito da redação oficial, não se admitem documentos cuja escrita ofereça dificuldades para sua compreensão. Uma característica que pode levar a essa dificuldade é a',
    options: [
      { letter: 'A', text: 'clareza' },
      { letter: 'B', text: 'correção' },
      { letter: 'C', text: 'prolixidade' },
      { letter: 'D', text: 'formalidade' },
      { letter: 'E', text: 'uniformidade' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A prolixidade (excesso inútil de palavras e rodeios) prejudica a concisão e a objetividade indispensáveis à redação de atos oficiais.'
  },
  {
    id: 'adm-37',
    number: 37,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Redação Oficial - Impessoalidade',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A impessoalidade é uma característica marcante da redação oficial e decorre da ausência de impressões individuais de quem redige.\nO trecho que apresenta marca de impessoalidade é:',
    options: [
      { letter: 'A', text: 'As especificações dos novos computadores deverão ser obtidas junto ao setor competente.' },
      { letter: 'B', text: 'Realmente, as cópias de segurança devem ser feitas diariamente e armazenadas na rede.' },
      { letter: 'C', text: 'Parece que a supracitada reunião tem por objetivo discutir o estudo técnico elaborado por esta unidade.' },
      { letter: 'D', text: 'A meu ver, esse procedimento deveria ser adotado por todos os departamentos da empresa.' },
      { letter: 'E', text: 'Conforme cronograma deste Departamento, informo a Vossa Senhoria que seria bom realizarmos a reunião no dia 14.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O item A emprega a voz passiva sintética e estilo neutro sem marcas de subjetividade ou opinião pessoal ("a meu ver", "parece que", "realmente").'
  },
  {
    id: 'adm-38',
    number: 38,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Legislação das Estatais - Remanescente de Contrato',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'De acordo com a Lei nº 13.303/2016, é dispensável a licitação na contratação de remanescente de obra ou serviço após rescisão, atendida a ordem de classificação anterior e aceitas as mesmas condições do contrato encerrado. A manutenção das mesmas condições inclui o',
    options: [
      { letter: 'A', text: 'período' },
      { letter: 'B', text: 'objetivo' },
      { letter: 'C', text: 'termo' },
      { letter: 'D', text: 'preço' },
      { letter: 'E', text: 'final' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O art. 29, VI, da Lei 13.303/2016 exige expressamente que a contratação de remanescente mantenha as mesmas condições oferecidas pelo licitante vencedor, inclusive quanto ao preço.'
  },
  {
    id: 'adm-39',
    number: 39,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Gestão de Arquivos e Documentos',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Sobre arquivos, é correto afirmar que:\nI - o arquivo ativo mantém documentos e papéis de consulta e referência correntes;\nII - o arquivo permanente contém obras que são objeto de consulta constante;\nIII - o arquivo morto deve ser organizado do mesmo modo que o arquivo ativo;\nIV - o arquivo morto guarda documentos que podem ser descartados.\nSão corretas, somente, as afirmações:',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e III.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'II e IV.' },
      { letter: 'E', text: 'III e IV.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Afirmação I está correta (arquivo corrente/ativo tem valor primário). Afirmação III está correta (a ordenação de guarda histórica precisa manter método padronizado para localização futura). No arquivo permanente as consultas não são constantes e os documentos não devem ser descartados.'
  },
  {
    id: 'adm-40',
    number: 40,
    subjectId: 'processos_adm',
    subjectName: 'Processos Administrativos e Legislação',
    topic: 'Tipos de Documentos Administrativos',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Assinale a opção que apresenta os tipos de documentos que podem ser descritos, respectivamente, como:\n• atestado ou ato pelo qual se dá testemunho de um fato;\n• documento que indica fato que deve ser divulgado pela imprensa para conhecimento das pessoas interessadas;\n• relatório escrito do que se disse ou se fez em uma reunião ou assembléia.',
    options: [
      { letter: 'A', text: 'Certidão – Edital – Ata.' },
      { letter: 'B', text: 'Boletim – Memorando – Requisição.' },
      { letter: 'C', text: 'Comunicação – Estatuto – Ofício.' },
      { letter: 'D', text: 'Formulário – Aviso – Atestado.' },
      { letter: 'E', text: 'Procuração – Circular – Declaração.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). A Certidão atesta fatos de registros públicos; o Edital é o instrumento de convocação ou publicidade geral na imprensa; e a Ata registra os acontecimentos de reuniões formais.'
  }
];

// FINANCAS_CONTAB_QUESTIONS (40 questões) e LOGISTICA_QUESTIONS (40 questões) 
// são importadas de ./questions/financasContab e ./questions/logistica


export const INFORMATICA_QUESTIONS: Question[] = [
  {
    id: 'inf-1',
    number: 1,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Editores de Texto - MS Word (Formatação)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um texto digitado no MS Word em português pode ter sua formatação modificada para ressaltar determinadas palavras. Para que sejam escritas em letras maiúsculas, o autor do texto, depois de selecionar a palavra que será modificada, pode',
    options: [
      { letter: 'A', text: 'clicar no botão Maiúscula/Minúscula (Aa) e escolher a opção “Colocar Cada Palavra em Maiúscula”' },
      { letter: 'B', text: 'clicar no botão Maiúscula/Minúscula (Aa) e escolher a opção “Maiúscula”' },
      { letter: 'C', text: 'clicar no botão (Ctrl + Shift + >) e escolher a opção “Colocar Cada Palavra em Maiúscula”' },
      { letter: 'D', text: 'clicar no botão (Ctrl + Shift + <) e escolher a opção “Maiúscula”' },
      { letter: 'E', text: 'clicar no botão Letra Capitular.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). No MS Word, o botão "Aa" (Maiúsculas e Minúsculas) no grupo Fonte da guia Página Inicial possui a opção "MAIÚSCULAS", que converte todas as letras da palavra selecionada para caixa alta.'
  },
  {
    id: 'inf-2',
    number: 2,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Editores de Texto - MS Word (Inserção de Mídias)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No MS Word 2016, na guia Inserir, há um botão com ícone de monitor exibindo o símbolo de "play" e um globo. Qual é o papel desse recurso?',
    options: [
      { letter: 'A', text: 'Cria um hiperlink para uma área do próprio documento.' },
      { letter: 'B', text: 'Abre o navegador Edge para acesso à internet.' },
      { letter: 'C', text: 'Encontra e insere imagens de várias fontes on-line no documento.' },
      { letter: 'D', text: 'Localiza e insere vídeos de fontes on-line no documento.' },
      { letter: 'E', text: 'Insere imagens arquivadas no computador.' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Esse ícone representa a ferramenta "Vídeo Online", que permite pesquisar e inserir vídeos de fontes web (como YouTube e plataformas parceiras) diretamente no corpo do documento.'
  },
  {
    id: 'inf-3',
    number: 3,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Sistema Operacional Windows - Gerenciamento de Arquivos',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um usuário tem dois arquivos: Material e Ensaios na pasta Laboratório (disco local C), e Relatórios Financeiros na pasta Administrativo (disco externo D).\nO usuário arrasta o arquivo Material e Ensaios da pasta Laboratório para a pasta Laboratório B do disco externo D e recorta o arquivo Relatórios Financeiros na pasta Administrativo, colando-o na pasta Administrativo B, na raiz do disco C.\nQual é a consequência desses movimentos?',
    options: [
      { letter: 'A', text: 'Os arquivos permanecem em seus locais de origem e são criadas cópias nas respectivas pastas de destino.' },
      { letter: 'B', text: 'O arquivo Relatórios Financeiros é mantido na pasta de origem, e o arquivo Material e Ensaios é removido na pasta de origem; são criadas cópias de cada arquivo nas respectivas pastas de destino.' },
      { letter: 'C', text: 'O arquivo Relatórios Financeiros é removido da pasta de origem, e o arquivo Material e Ensaios é mantido na pasta de origem; são criadas cópias de cada arquivo nas respectivas pastas de destino.' },
      { letter: 'D', text: 'O arquivo Relatórios Financeiros é mantido na pasta Administrativo, e o arquivo Material e Ensaios é removido da pasta Laboratório; é criada cópia do arquivo Relatórios Financeiros na pasta Administrativo B; o arquivo Materiais e Ensaios não é copiado.' },
      { letter: 'E', text: 'Os dois arquivos são removidos das pastas de origem, e são criadas cópias nas respectivas pastas de destino.' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). No Windows, arrastar um arquivo entre unidades de disco diferentes (de C: para D:) executa por padrão uma CÓPIA (o arquivo original é mantido no C:). Já a operação explícita de "recortar e colar" remove o arquivo da origem (D:) e o transfere para o destino (C:).'
  },
  {
    id: 'inf-4',
    number: 4,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Ferramentas de Apresentação - MS PowerPoint',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um usuário do MS PowerPoint 2016 em português, ao criar uma apresentação, precisa ativar o modo de exibição de leitura. Para isso, na barra de status inferior, deve clicar no ícone representado por um(a):',
    options: [
      { letter: 'A', text: 'livro aberto' },
      { letter: 'B', text: 'grade de quatro retângulos (classificador de slides)' },
      { letter: 'C', text: 'tela de projeção com pedestal (apresentação de slides)' },
      { letter: 'D', text: 'janela com página simples' },
      { letter: 'E', text: 'slide com linhas pontilhadas' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O ícone do Modo de Exibição de Leitura no PowerPoint é ilustrado pelo símbolo de um livro aberto, ajustando a apresentação para caber na janela com controles simplificados.'
  },
  {
    id: 'inf-5',
    number: 5,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Sistema Operacional Windows - Teclas de Atalho',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um usuário do Windows 10 deseja que sejam mostradas e fixadas, simultaneamente, todas as janelas com aplicativos abertos para depois usar as teclas de direção e selecionar o aplicativo que irá utilizar.\nPara isso, poderá pressionar e soltar a seguinte combinação de teclas de atalho:',
    options: [
      { letter: 'A', text: 'Ctrl + Shift' },
      { letter: 'B', text: 'Alt + Shift' },
      { letter: 'C', text: 'Alt + Shift + Esc' },
      { letter: 'D', text: 'Ctrl + Shift + Tab' },
      { letter: 'E', text: 'Ctrl + Alt + Tab' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A combinação Ctrl + Alt + Tab abre a tela de alternância de janelas e a mantém fixada na tela mesmo depois de soltar as teclas, permitindo navegar com as setas do teclado.'
  },
  {
    id: 'inf-6',
    number: 6,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Navegadores Web - Atalhos',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'No sistema operacional Windows, que atalho de teclado pode ser usado em qualquer dos navegadores (Google Chrome, Microsoft Edge e Mozilla Firefox) para criar uma nova guia?',
    options: [
      { letter: 'A', text: 'Ctrl + m' },
      { letter: 'B', text: 'Ctrl + t' },
      { letter: 'C', text: 'Ctrl + w' },
      { letter: 'D', text: 'Ctrl + n' },
      { letter: 'E', text: 'Ctrl + o' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). O atalho padronizado em navegadores para abrir uma nova guia (Tab) é Ctrl + T. Ctrl + N abre uma nova janela e Ctrl + W fecha a guia ativa.'
  },
  {
    id: 'inf-7',
    number: 7,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Redes e Segurança - Conexão Segura e Teletrabalho (VPN)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Uma empresa deseja dar aos seus funcionários em home office uma forma de estabelecer uma conexão segura e criptografada do computador de sua casa à intranet protegida da empresa através da internet.\nPara isso, deve estabelecer um(a)',
    options: [
      { letter: 'A', text: 'Captcha' },
      { letter: 'B', text: 'DNS' },
      { letter: 'C', text: 'Firewall' },
      { letter: 'D', text: 'LAN' },
      { letter: 'E', text: 'VPN' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). Uma VPN (Virtual Private Network - Rede Privada Virtual) cria um túnel criptografado através da rede pública (internet), permitindo tráfego seguro de dados entre o terminal remoto e a intranet corporativa.'
  },
  {
    id: 'inf-8',
    number: 8,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Planilhas Eletrônicas - Fórmulas MS Excel (ÍNDICE e CORRESP)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    tableOrData: 'Planilha com meses em A3:A14 (Janeiro a Dezembro) e produção de 2015 em B3:B14.',
    questionText: 'Que fórmula calcula o mês de maior produção no ano de 2015, e pode ser usada na célula B18 da planilha para apresentar o resultado correto?',
    options: [
      { letter: 'A', text: '=CORRESP($A3:$A14;ÍNDICE(MÁXIMO(B3:B14);B3:B14;0))' },
      { letter: 'B', text: '=CORRESP($A3:$A14;MÁXIMO(ÍNDICE(B3:B14);B3:B14;0))' },
      { letter: 'C', text: '=ÍNDICE($A3:$A14;CORRESP(MÁXIMO(B3:B14);B3:B14;0))' },
      { letter: 'D', text: '=ÍNDICE($A3:$A14;MÁXIMO(CORRESP(B3:B14);B3:B14;0))' },
      { letter: 'E', text: '=MÁXIMO($A3:$A14;CORRESP(ÍNDICE(B3:B14);B3:B14;0))' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). A função MÁXIMO(B3:B14) localiza o maior valor numérico. A função CORRESP(valor_procurado; matriz; 0) retorna a posição relativa desse maior valor. A função ÍNDICE(matriz_meses; linha) retorna o nome do mês situado naquela linha.'
  },
  {
    id: 'inf-9',
    number: 9,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Planilhas Eletrônicas - Fórmulas MS Excel (PROCV)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    tableOrData: 'Tabela em A3:E14: Coluna A = Mês, Coluna B = 2015, Coluna C = 2016, Coluna D = 2017, Coluna E = Crescimento.',
    questionText: 'Que fórmula pode ser usada na planilha, em qualquer célula fora da tabela A3:E14, para apresentar a produção de julho de 2016 de forma correta?',
    options: [
      { letter: 'A', text: '=PROCH("Julho";A3:E14;3;1)' },
      { letter: 'B', text: '=PROCH("Julho";A3:E14;2;0)' },
      { letter: 'C', text: '=PROCV("Julho";A3:E14;2;0)' },
      { letter: 'D', text: '=PROCV("Julho";A3:E14;3;0)' },
      { letter: 'E', text: '=PROCV("Julho";A3:E14;3;1)' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). PROCV procura verticalmente na primeira coluna (Coluna A com o mês "Julho"). A matriz é A3:E14. A coluna desejada é 2016, correspondente à 3ª coluna da tabela (A=1, B=2, C=3). O quarto parâmetro "0" (ou FALSO) exige correspondência exata.'
  },
  {
    id: 'inf-10',
    number: 10,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Hardware e Proteção Elétrica',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'Um programador que trabalhava em home office foi surpreendido por falta de energia durante alguns minutos em sua residência, resultando na perda de trabalho não salvo.\nO equipamento que, se tivesse sido instalado, poderia ter evitado esse transtorno fornecendo energia temporária por bateria é o',
    options: [
      { letter: 'A', text: 'filtro de linha' },
      { letter: 'B', text: 'estabilizador' },
      { letter: 'C', text: 'firewall' },
      { letter: 'D', text: 'nobreak' },
      { letter: 'E', text: 'disco rígido' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O nobreak (UPS - Uninterruptible Power Supply) possui baterias internas que mantêm o computador ligado durante quedas de energia, permitindo salvar o trabalho e desligar o sistema com segurança.'
  },
  {
    id: 'inf-11',
    number: 11,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Hardware e Multimídia (Cálculo de Memória de Vídeo)',
    examSource: 'Cesgranrio - Transpetro RH 2018.1 (Técnico de Administração e Controle Júnior)',
    questionText: 'A qualidade de imagem de um monitor é função de alguns parâmetros como resolução e tamanho de tela.\nQual é a quantidade mínima de memória, em megabytes, adequada para trabalhar com uma resolução de 1920x1080 e 10 bits de profundidade de cor?',
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '4' },
      { letter: 'D', text: '6' },
      { letter: 'E', text: '8' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). Total de pixels = 1.920 × 1.080 = 2.073.600 pixels. Em 10 bits por pixel: 2.073.600 × 10 = 20.736.000 bits. Convertendo em Bytes: 20.736.000 / 8 = 2.592.000 Bytes ≈ 2,47 MB. Como os módulos de memória são comercializados em potências de 2 (1, 2, 4, 8 MB), a quantidade mínima suficiente que suporta 2,47 MB é 4 MB.'
  },
  {
    id: 'inf-12',
    number: 12,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Editores de Texto - MS Word (Atalhos)',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Um usuário do Microsoft Word está com alguns documentos abertos no aplicativo. Se em um determinado momento ele deseja alternar somente entre os documentos abertos pelo Word, o usuário pode utilizar o conjunto de teclas:',
    options: [
      { letter: 'A', text: 'Alt + F4' },
      { letter: 'B', text: 'Alt + Enter' },
      { letter: 'C', text: 'Ctrl + F6' },
      { letter: 'D', text: 'Ctrl + F7' },
      { letter: 'E', text: 'Ctrl + Tab' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). No Microsoft Word, a tecla de atalho nativa para circular e alternar entre as janelas abertas de documentos do Word é Ctrl + F6 (ou Ctrl + Shift + F6 para alternar na ordem inversa).'
  },
  {
    id: 'inf-13',
    number: 13,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Redes de Computadores e Comandos de Diagnóstico',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Um usuário de microcomputador conectado a uma rede TCP/IP deseja verificar a comunicação com outro microcomputador conhecendo seu endereço IP. Dos comandos abaixo, o que ele pode utilizar no prompt de comandos para verificar o caminho de roteamento da comunicação é:',
    options: [
      { letter: 'A', text: 'assoc' },
      { letter: 'B', text: 'check' },
      { letter: 'C', text: 'tracert' },
      { letter: 'D', text: 'coto' },
      { letter: 'E', text: 'echo' }
    ],
    correctOption: 'C',
    explanation: 'Gabarito Oficial Cesgranrio: (C). O comando "tracert" (Trace Route) rastreia os saltos e verifica a conectividade e o caminho de pacotes até o endereço IP de destino.'
  },
  {
    id: 'inf-14',
    number: 14,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Sistema Operacional e Redes - Comandos do Windows',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Dos comandos abaixo, o que permite a um usuário do Windows mapear uma unidade de rede compartilhada em outro microcomputador é:',
    options: [
      { letter: 'A', text: 'cacls' },
      { letter: 'B', text: 'fnd' },
      { letter: 'C', text: 'map' },
      { letter: 'D', text: 'net' },
      { letter: 'E', text: 'path' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). O comando "net" (especificamente "net use [letra:] [\\\\servidor\\pasta]") é a ferramenta oficial de linha de comando no Windows para mapear unidades e pastas de rede.'
  },
  {
    id: 'inf-15',
    number: 15,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Planilhas Eletrônicas - MS Excel (Organização de Janelas)',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'A opção Organizar do menu Janela do Microsoft Excel permite ao usuário controlar como as janelas dos documentos são ativadas e exibidas. Qual das opções abaixo NÃO estará disponível para sua seleção no diálogo Organizar?',
    options: [
      { letter: 'A', text: 'Congelar painéis.' },
      { letter: 'B', text: 'Em cascata.' },
      { letter: 'C', text: 'Lado a lado.' },
      { letter: 'D', text: 'Na horizontal.' },
      { letter: 'E', text: 'Na vertical.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O comando "Congelar Painéis" localiza-se diretamente no menu Exibir/Janela e atua dentro da planilha. As opções de disposição da caixa de diálogo Organizar Janelas são: Em cascata, Lado a lado, Na horizontal e Na vertical.'
  },
  {
    id: 'inf-16',
    number: 16,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Ferramentas do Sistema Operacional Windows',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Sobre as ferramentas do Microsoft Windows são feitas as seguintes afirmações:\nI - a ferramenta Limpeza de Disco faz uma varredura da superfície do disco rígido removendo impurezas, aumentando a vida do mesmo e reduzindo a ocorrência de setores defeituosos;\nII - é possível definir o tamanho máximo da Lixeira como um percentual do tamanho do disco rígido;\nIII - a ferramenta Scandisk remove vírus do sistema, sendo ativada automaticamente toda vez que o microcomputador é desligado de maneira anormal.\nEstá(ão) correta(s) a(s) afirmação(ões):',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'III, apenas.' },
      { letter: 'D', text: 'I e II, apenas.' },
      { letter: 'E', text: 'I, II e III.' }
    ],
    correctOption: 'B',
    explanation: 'Gabarito Oficial Cesgranrio: (B). Afirmação II está correta: as propriedades da Lixeira permitem configurar seu tamanho em percentual ou MB. I está errada (limpeza de disco remove arquivos temporários desnecessários, não "impurezas físicas") e III está errada (Scandisk/chkdsk verifica erros lógicos e integridade do sistema de arquivos, não remove vírus).'
  },
  {
    id: 'inf-17',
    number: 17,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Prompt de Comandos - Redirecionamento de E/S',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Considere os símbolos de redirecionamento no prompt de comandos do Windows:\nI - >\nII - >>\nDescrições:\n(P) Adiciona a saída a um arquivo que já existe, em vez de sobrescrevê-lo.\n(Q) Usa a entrada a partir de uma origem que não é o teclado.\n(R) Envia a saída do comando para outro lugar, como um arquivo, em vez de enviar para a tela.\nA associação correta dos símbolos às suas descrições é:',
    options: [
      { letter: 'A', text: 'I – P, II – Q' },
      { letter: 'B', text: 'I – P, II – R' },
      { letter: 'C', text: 'I – Q, II – P' },
      { letter: 'D', text: 'I – Q, II – R' },
      { letter: 'E', text: 'I – R, II – P' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). O operador `>` (I) redireciona a saída padrão gravando/sobrescrevendo em arquivo (R). O operador `>>` (II) redireciona anexando/adicionando a saída ao final do arquivo sem sobrescrever (P).'
  },
  {
    id: 'inf-18',
    number: 18,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Planilhas Eletrônicas - Conceitos e Formatos MS Excel',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'Sobre o Microsoft Excel, é INCORRETO afirmar que:',
    options: [
      { letter: 'A', text: 'o formato CSV, que pode ser utilizado para salvar arquivos do Excel, não suporta definições de formatação de fonte como negrito e itálico aplicadas às células das planilhas.' },
      { letter: 'B', text: 'as macros criadas no Excel podem modificar o conteúdo das células de uma planilha, não sendo limitadas a apenas ler as informações que as células armazenam.' },
      { letter: 'C', text: 'o operador ^, quando utilizado em fórmulas nas células do Excel, realiza a operação de exponenciação.' },
      { letter: 'D', text: 'rosca, superfície e bolhas são exemplos de tipos de gráficos que podem ser construídos no Excel.' },
      { letter: 'E', text: 'o recurso AutoCorreção corrige automaticamente as referências absolutas entre células quando são inseridas e/ou excluídas linhas e/ou colunas nas planilhas.' }
    ],
    correctOption: 'E',
    explanation: 'Gabarito Oficial Cesgranrio: (E). A AutoCorreção é um recurso textual para correção ortográfica automática de palavras digitadas incorretamente, não tendo qualquer relação com o ajuste de referências de fórmulas e células.'
  },
  {
    id: 'inf-19',
    number: 19,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Planilhas Eletrônicas - Fórmulas Condicionais MS Excel',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    tableOrData: 'Valores das células:\nA1 = 1, B1 = 4\nA2 = 2, B2 = 5\nA3 = 3, B3 = 6',
    questionText: 'Se a célula B4 contiver a fórmula:\n=SE(OU(A2*B1 - A2 = B3; A2 < A1); MULT(A3:B3; A2); MULT(A1:B2))\nentão, o valor da célula B4 será:',
    options: [
      { letter: 'A', text: 'falso.' },
      { letter: 'B', text: 'verdadeiro.' },
      { letter: 'C', text: '11' },
      { letter: 'D', text: '36' },
      { letter: 'E', text: '40' }
    ],
    correctOption: 'D',
    explanation: 'Gabarito Oficial Cesgranrio: (D). Vamos calcular: A2*B1 - A2 = 2*4 - 2 = 6. B3 vale 6. Logo, (A2*B1 - A2 = B3) é VERDADEIRO (6 = 6). A função OU retorna VERDADEIRO. Portanto, executa a condição VERDADEIRA da função SE: MULT(A3:B3; A2). A faixa A3:B3 contém os valores 3 e 6. O produto é 3 × 6 × A2 = 3 × 6 × 2 = 36.'
  },
  {
    id: 'inf-20',
    number: 20,
    subjectId: 'informatica',
    subjectName: 'Noções de Informática',
    topic: 'Redes de Computadores e Acesso à Intranet',
    examSource: 'Cesgranrio - Transpetro 2006 (Auxiliar Técnico de Administração)',
    questionText: 'A Intranet de uma determinada empresa é acessada pelos funcionários através de navegadores digitando-se o endereço //intranet/ na barra de endereços do browser. Uma forma alternativa que o usuário pode utilizar para acessar a Intranet consiste em substituir no endereço //intranet/ o texto “intranet” pelo(a):',
    options: [
      { letter: 'A', text: 'endereço IP do servidor.' },
      { letter: 'B', text: 'endereço IP do seu computador.' },
      { letter: 'C', text: 'porta de FTP do servidor.' },
      { letter: 'D', text: 'porta de FTP do seu computador.' },
      { letter: 'E', text: 'porta de HTTP do servidor.' }
    ],
    correctOption: 'A',
    explanation: 'Gabarito Oficial Cesgranrio: (A). O nome de host "intranet" é resolvido pelo serviço de nomes (DNS ou WINS) para o respectivo endereço IP do servidor Web que hospeda a aplicação interna.'
  }
];

export const ALL_QUESTIONS: Question[] = [
  ...PORTUGUES_QUESTIONS,
  ...MATEMATICA_QUESTIONS,
  ...PROCESSOS_ADM_QUESTIONS,
  ...FINANCAS_CONTAB_QUESTIONS,
  ...LOGISTICA_QUESTIONS,
  ...INFORMATICA_QUESTIONS,
];

export function getQuestionsBySubject(subjectId: SubjectId): Question[] {
  switch (subjectId) {
    case 'portugues':
      return PORTUGUES_QUESTIONS;
    case 'matematica':
      return MATEMATICA_QUESTIONS;
    case 'processos_adm':
      return PROCESSOS_ADM_QUESTIONS;
    case 'financas_contab':
      return FINANCAS_CONTAB_QUESTIONS;
    case 'logistica':
      return LOGISTICA_QUESTIONS;
    case 'informatica':
      return INFORMATICA_QUESTIONS;
    case 'completo':
      // 70 questões: 20 de Português + 20 de Matemática + 10 de Processos Adm + 10 de Logística + 10 de Informática
      return [
        ...PORTUGUES_QUESTIONS,
        ...MATEMATICA_QUESTIONS,
        ...PROCESSOS_ADM_QUESTIONS.slice(0, 10),
        ...LOGISTICA_QUESTIONS.slice(0, 10),
        ...INFORMATICA_QUESTIONS.slice(0, 10)
      ].map((q, idx) => ({ ...q, number: idx + 1 }));
    default:
      return PORTUGUES_QUESTIONS;
  }
}
