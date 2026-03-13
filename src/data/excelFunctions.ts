import { ExcelFunction } from '../types';

export const EXCEL_CATEGORIES: ExcelFunction[] = [
  {
    category: 'Navegação e Interface',
    functions: [
      { name: 'Ctrl + Setas', syntax: 'Salto Lógico', description: 'Cursor viaja até última célula preenchida da matriz', shortcut: 'Navegação' },
      { name: 'Ctrl + Shift + Setas', syntax: 'Seleção em Salto', description: 'Seleciona todos os dados do caminho durante o salto', shortcut: 'Seleção' },
      { name: 'Ctrl + A', syntax: 'Seleção de Matriz', description: 'Identifica ilha de dados atual e seleciona inteira. 2x = aba toda', shortcut: 'Seleção' },
      { name: 'Ctrl + Backspace', syntax: 'Foco de Retorno', description: 'Retorna visão para onde cursor ativo está após rolagem', shortcut: 'Navegação' },
      { name: 'Alt + W + F + F', syntax: 'Congelar Painéis', description: 'Trava linhas/colunas mantendo cabeçalhos visíveis', shortcut: 'Visualização' },
      { name: 'Ctrl + F1', syntax: 'Modo Foco', description: 'Oculta/exibe Ribbon liberando 20% mais espaço de tela', shortcut: 'Interface' },
      { name: 'Ctrl + Page Up/Down', syntax: 'Switch de Abas', description: 'Altera velozmente entre planilhas do arquivo ativo', shortcut: 'Navegação' }
    ]
  },
  {
    category: 'Injeção e Automação',
    functions: [
      { name: 'Ctrl + E', syntax: 'Flash Fill', description: 'IA preenche milhares de linhas imitando padrão do exemplo dado', shortcut: 'Automação' },
      { name: 'Ctrl + Enter', syntax: 'Injeção em Massa', description: 'Preenche 50+ células selecionadas com mesmo dado simultaneamente', shortcut: 'Edição' },
      { name: 'Ctrl + D / Ctrl + R', syntax: 'Clonar (Down/Right)', description: 'Copia valor da célula de cima (D) ou da esquerda (R)', shortcut: 'Preenchimento' },
      { name: 'F2', syntax: 'Editar Célula', description: 'Entra na célula para edição limpa sem sobrescrever', shortcut: 'Edição' },
      { name: 'Alt + Enter', syntax: 'Quebra Intracelular', description: 'Pula de linha dentro da mesma célula', shortcut: 'Formatação' },
      { name: 'Alt + A + M', syntax: 'Remover Duplicatas', description: 'Processa base e remove IDs repetidos em frações de segundo', shortcut: 'ETL' },
      { name: 'Alt + A + E', syntax: 'Texto para Colunas', description: 'Quebra strings usando delimitadores (CSV parsing)', shortcut: 'Parsing' },
      { name: 'Alt + A + V + V', syntax: 'Validação de Dados', description: 'Transforma célula em Menu Suspenso (Dropdown)', shortcut: 'Validação' }
    ]
  },
  {
    category: 'Formatação e Tipagem',
    functions: [
      { name: 'Ctrl + 1', syntax: 'Painel Arquitetural', description: 'Hub absoluto: bordas, fundos, fontes, tipos de dado', shortcut: 'Formatação' },
      { name: 'Ctrl + Shift + $', syntax: 'Moeda', description: 'Injeta tipagem monetária imediatamente', shortcut: 'Número' },
      { name: 'Ctrl + Shift + %', syntax: 'Percentual', description: 'Injeta tipagem percentual sem decimais', shortcut: 'Número' },
      { name: 'Ctrl + Shift + #', syntax: 'Data Curta', description: 'Injeta tipagem DD/MM/AAAA', shortcut: 'Data' },
      { name: 'Ctrl + Shift + ~', syntax: 'Geral', description: 'Remove formatação bizarra e devolve tipo genérico', shortcut: 'Limpeza' },
      { name: 'Ctrl + - / Ctrl + +', syntax: 'Eliminar/Adicionar', description: 'Remove ou insere linhas/colunas selecionadas', shortcut: 'Estrutura' },
      { name: 'Alt + H + O + I', syntax: 'Auto-Fit Mágico', description: 'Expande/contrai coluna para caber no maior texto', shortcut: 'Colunas' },
      { name: 'Ctrl + 9 / Ctrl + 0', syntax: 'Ocultar', description: 'Esconde linha inteira (9) ou coluna inteira (0)', shortcut: 'Visualização' },
      { name: 'Ctrl + Alt + V', syntax: 'Colar Especial', description: 'Cola como "Apenas Valores" ou transpõe matriz', shortcut: 'Colagem' }
    ]
  },
  {
    category: 'Matemática e Estatística',
    functions: [
      { name: 'Alt + =', syntax: 'Autossoma', description: 'Identifica células numéricas agrupadas e cria =SOMA()', shortcut: 'Cálculo' },
      { name: 'F4', syntax: 'Absolute Lock ($)', description: 'Alterna travas: A1 → $A$1 → A$1 → $A1', shortcut: 'Referência' },
      { name: 'MÉDIA()', syntax: '=MÉDIA(intervalo)', description: 'Média aritmética dos valores', shortcut: 'Estatística' },
      { name: 'MÁXIMO()', syntax: '=MÁXIMO(intervalo)', description: 'Maior valor no intervalo', shortcut: 'Estatística' },
      { name: 'MÍNIMO()', syntax: '=MÍNIMO(intervalo)', description: 'Menor valor no intervalo', shortcut: 'Estatística' },
      { name: 'CONT.VALORES()', syntax: '=CONT.VALORES(intervalo)', description: 'Conta células não vazias (quantidade de registros)', shortcut: 'Contagem' },
      { name: 'SOMASE()', syntax: '=SOMASE(intervalo; critérios; [soma_intervalo])', description: 'Soma condicional (só se atender critério)', shortcut: 'Condicional' },
      { name: 'CONT.SE()', syntax: '=CONT.SE(intervalo; critérios)', description: 'Conta quantas vezes critério aparece', shortcut: 'Condicional' }
    ]
  },
  {
    category: 'Arrays e Matrizes (M365)',
    functions: [
      { name: 'SOMARPRODUTO()', syntax: '=SOMARPRODUTO(matriz1; matriz2)', description: 'Multiplica matrizes vetoriais linha a linha e soma total', shortcut: 'Matriz' },
      { name: 'ÚNICO()', syntax: '=ÚNICO(matriz)', description: 'Varre base inteira e retorna apenas registros exclusivos', shortcut: 'Matriz' },
      { name: 'FILTRO()', syntax: '=FILTRO(matriz; incluir; [se_vazio])', description: 'Extrai dados que passam em teste lógico', shortcut: 'Matriz' },
      { name: 'CLASSIFICAR()', syntax: '=CLASSIFICAR(matriz; [índice_ordenar])', description: 'Ordena matriz por coluna específica', shortcut: 'Matriz' },
      { name: 'SEQUÊNCIA()', syntax: '=SEQUÊNCIA(linhas; [colunas])', description: 'Gera array de números sequenciais', shortcut: 'Matriz' },
      { name: 'ALEATÓRIOMATRIZ()', syntax: '=ALEATÓRIOMATRIZ(linhas; colunas)', description: 'Gera matriz de números aleatórios', shortcut: 'Matriz' }
    ]
  },
  {
    category: 'Pesquisa e Relacionamento',
    functions: [
      { name: 'PROCV()', syntax: '=PROCV(valor; tabela; col; [aprox])', description: 'Busca ID na 1ª coluna, retorna colunas à direita (LEFT JOIN)', shortcut: 'Busca' },
      { name: 'PROCX()', syntax: '=PROCX(valor; matriz_busca; matriz_retorno)', description: 'Novo imperador: busca em qualquer direção, não quebra', shortcut: 'Busca' },
      { name: 'ÍNDICE()', syntax: '=ÍNDICE(matriz; linha; [coluna])', description: 'Retorna valor em coordenadas específicas da matriz', shortcut: 'Coordenadas' },
      { name: 'CORRESP()', syntax: '=CORRESP(valor; matriz; [tipo])', description: 'Retorna posição relativa do valor na matriz', shortcut: 'Posição' },
      { name: 'ÍNDICE+CORRESP', syntax: '=ÍNDICE(...; CORRESP(...))', description: 'Dupla letal: CORRESP acha coordenada Y, ÍNDICE extrai info', shortcut: 'Combinação' },
      { name: 'SE()', syntax: '=SE(teste; valor_se_verdadeiro; valor_se_falso)', description: 'Condicional base implementada em células', shortcut: 'Lógica' },
      { name: 'SEERRO()', syntax: '=SEERRO(valor; valor_se_erro)', description: 'Envelope que absorve #N/D e retorna texto limpo', shortcut: 'Tratamento' }
    ]
  },
  {
    category: 'Visualização e Dashboards',
    functions: [
      { name: 'Ctrl + Alt + T', syntax: 'Formatar como Tabela', description: 'Converte range em Tabela oficial (absorve novas linhas)', shortcut: 'Estrutura' },
      { name: 'Alt + N + V', syntax: 'Tabela Dinâmica', description: 'Máquina de sumarização por Drag-and-Drop', shortcut: 'Análise' },
      { name: 'F11', syntax: 'Gráfico em Nova Aba', description: 'Cria gráfico dedicado instantaneamente', shortcut: 'Visualização' },
      { name: 'Alt + F1', syntax: 'Gráfico Flutuante', description: 'Gera gráfico lado a lado com dados', shortcut: 'Visualização' },
      { name: 'Alt + H + L', syntax: 'Formatação Condicional', description: 'Gatilho mestre para menus de formatação', shortcut: 'Formatação' }
    ]
  },
  {
    category: 'God Mode: Automação e ETL',
    functions: [
      { name: 'Alt + A + P + T', syntax: 'Carregar no Power Query', description: 'Absorve matriz para "Matrix" do Excel (linguagem M)', shortcut: 'ETL' },
      { name: 'Alt + A + R + A', syntax: 'Refresh All', description: 'Executa todos Power Queries e Macros (botão "Rodar Relatório")', shortcut: 'Atualização' },
      { name: 'Ctrl + Alt + Shift + P', syntax: 'Runtime Python', description: 'Abre terminal Python: DataFrames Pandas, Matplotlib', shortcut: 'Python' },
      { name: 'Alt + F11', syntax: 'VBA IDE', description: 'Editor Visual Basic para loops e automação legada', shortcut: 'VBA' },
      { name: 'Alt + F8', syntax: 'Central de Macros', description: 'Interface de lançamento de automações', shortcut: 'Macro' },
      { name: 'Alt + A + W + G', syntax: 'Atingir Meta', description: 'Engenharia reversa: descobre valor inicial necessário', shortcut: 'Goal Seek' },
      { name: 'Alt + A + W + T', syntax: 'Tabela de Dados', description: 'Simulação de sensibilidade estilo Monte Carlo', shortcut: 'Simulação' },
      { name: 'Alt + A + W + S', syntax: 'Gerenciador de Cenários', description: 'Salva "fotografias": Otimista, Realista, Pessimista', shortcut: 'Cenários' },
      { name: 'Alt + A + Y + 2', syntax: 'Invocar Solver', description: 'Otimização linear com múltiplas variáveis e restrições', shortcut: 'Solver' }
    ]
  },
  {
    category: 'Auditoria e Governança',
    functions: [
      { name: 'Alt + M + V', syntax: 'Avaliar Fórmula', description: 'Debugger passo a passo: executa de dentro para fora', shortcut: 'Debug' },
      { name: 'Alt + M + W', syntax: 'Janela de Inspeção', description: 'Painel flutuante monitorando variáveis cruciais', shortcut: 'Watch' },
      { name: 'Ctrl + [', syntax: 'Precedentes', description: 'Pula para célula que fornece dados (forense)', shortcut: 'Auditoria' },
      { name: 'Ctrl + ]', syntax: 'Dependentes', description: 'Pula para células que dependem do valor atual', shortcut: 'Auditoria' },
      { name: 'Alt + R + P + S', syntax: 'Proteger Planilha', description: 'Bloqueia células com criptografia', shortcut: 'Proteção' },
      { name: 'Ctrl + ~', syntax: 'Modo Raio-X', description: 'Revela todas as fórmulas em texto puro', shortcut: 'Auditoria' },
      { name: 'Ctrl + Shift + O', syntax: 'Selecionar Comentários', description: 'Captura células com anotações (Code Review)', shortcut: 'Revisão' }
    ]
  },
  {
    category: 'Integração Cloud',
    functions: [
      { name: 'SERVIÇOWEB()', syntax: '=SERVIÇOWEB(url)', description: 'Request GET nativo para APIs públicas (retorna JSON/XML)', shortcut: 'API' },
      { name: 'FILTROXML()', syntax: '=FILTROXML(xml; xpath)', description: 'Extrai valor específico de XML usando sintaxe XPath', shortcut: 'Parsing' },
      { name: 'Alt + A + P + W', syntax: 'Obter Dados da Web', description: 'Navegador embarcado para Web Scraping de tabelas HTML', shortcut: 'Web' },
      { name: 'Alt + A + W + Q', syntax: 'Power Automate', description: 'Transforma planilha em gatilho Cloud', shortcut: 'Automate' }
    ]
  },
  {
    category: 'Engenharia de Texto',
    functions: [
      { name: 'UNIRTEXTO()', syntax: '=UNIRTEXTO(delimitador; ignorar_vazio; matriz)', description: 'Funde 100 células ignorando vazias, inserindo delimitadores', shortcut: 'Concatenar' },
      { name: 'DIVIDIRTEXTO()', syntax: '=DIVIDIRTEXTO(texto; delimitador)', description: 'Quebra texto em múltiplas células (Office 365)', shortcut: 'Split' },
      { name: 'ARRUMAR()', syntax: '=ARRUMAR(texto)', description: 'Remove espaços duplos invisíveis (Data Cleaning essencial)', shortcut: 'Trim' },
      { name: 'PRI.MAIÚSCULA()', syntax: '=PRI.MAIÚSCULA(texto)', description: 'Padroniza case: nome próprio', shortcut: 'Case' },
      { name: 'MAIÚSCULA()', syntax: '=MAIÚSCULA(texto)', description: 'Converte para MAIÚSCULAS', shortcut: 'Case' },
      { name: 'MINÚSCULA()', syntax: '=MINÚSCULA(texto)', description: 'Converte para minúsculas', shortcut: 'Case' }
    ]
  },
  {
    category: 'Inteligência Temporal',
    functions: [
      { name: 'FIMMÊS()', syntax: '=FIMMÊS(data_inicial; meses)', description: 'Retorna último dia do mês (28, 30 ou 31)', shortcut: 'Data' },
      { name: 'DIATRABALHO.INTL()', syntax: '=DIATRABALHO.INTL(data; dias; [fim_semana]; [feriados])', description: 'Soma apenas dias úteis, ignorando feriados personalizados', shortcut: 'Trabalho' },
      { name: 'DATADIF()', syntax: '=DATADIF(início; fim; "Y"/"M"/"D")', description: 'Diferença exata em Anos, Meses ou Dias (função fantasma)', shortcut: 'Diferença' },
      { name: 'HOJE()', syntax: '=HOJE()', description: 'Retorna data atual do sistema', shortcut: 'Data' },
      { name: 'AGORA()', syntax: '=AGORA()', description: 'Retorna data e hora atual do sistema', shortcut: 'Data/Hora' }
    ]
  }
];