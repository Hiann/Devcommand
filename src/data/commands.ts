import { Module } from '../types';
import { TERMINAL_COMMANDS } from './terminalCommands';

export const MODULES: Module[] = [
  {
  id: 'sistema',
  title: 'Sistema & Produtividade',
  description: 'Dominando o ambiente Windows, multitarefa e atalhos vitais.',
  icon: 'Cpu',
  color: 'cyan',
  gradient: 'from-cyan-500 to-blue-600',
  commands: [
    // ==========================================
    // SISTEMA OPERACIONAL E MENU INICIAR
    // ==========================================
    {
      id: 'win',
      keys: 'Win',
      action: 'Abrir Menu Iniciar',
      context: 'Busca global por aplicativos, arquivos ou configurações.',
      category: 'Sistema e Menu Iniciar',
      tags: ['menu', 'iniciar', 'busca']
    },
    {
      id: 'win-x',
      keys: 'Win + X',
      action: 'Menu Link Rápido (Admin)',
      context: 'Acesso direto a ferramentas administrativas: Terminal, Gerenciador de Dispositivos.',
      category: 'Sistema e Menu Iniciar',
      tags: ['admin', 'rápido', 'ferramentas']
    },
    {
      id: 'win-i',
      keys: 'Win + I',
      action: 'Abrir Configurações',
      context: 'Acesso instantâneo ao painel central de configurações do Windows.',
      category: 'Sistema e Menu Iniciar',
      tags: ['configurações', 'settings', 'painel']
    },
    {
      id: 'win-a',
      keys: 'Win + A',
      action: 'Configurações Rápidas',
      context: 'Gestão de Wi-Fi, Volume, Brilho e dispositivos Bluetooth.',
      category: 'Sistema e Menu Iniciar',
      tags: ['rápido', 'wifi', 'bluetooth', 'volume']
    },
    {
      id: 'win-n',
      keys: 'Win + N',
      action: 'Notificações e Calendário',
      context: 'Central de notificações integrada ao calendário do sistema.',
      category: 'Sistema e Menu Iniciar',
      tags: ['notificações', 'calendário', 'central']
    },
    {
      id: 'win-l',
      keys: 'Win + L',
      action: 'Bloquear Computador',
      context: 'Bloqueia sessão e retorna à tela de login. Segurança corporativa indispensável.',
      category: 'Sistema e Menu Iniciar',
      tags: ['bloquear', 'segurança', 'login']
    },
    {
      id: 'ctrl-shift-esc',
      keys: 'Ctrl + Shift + Esc',
      action: 'Gerenciador de Tarefas',
      context: 'Encerra processos travados sem necessidade da tela de interrupção (Ctrl+Alt+Del).',
      category: 'Sistema e Menu Iniciar',
      tags: ['tarefas', 'processos', 'kill']
    },
    
    // ==========================================
    // EXPLORADOR DE ARQUIVOS
    // ==========================================
    {
      id: 'win-e',
      keys: 'Win + E',
      action: 'Abrir Explorador de Arquivos',
      context: 'Nova instância focada em "Este Computador" ou "Acesso Rápido".',
      category: 'Explorador de Arquivos',
      tags: ['explorer', 'arquivos', 'pastas']
    },
    {
      id: 'ctrl-t-explorer',
      keys: 'Ctrl + T',
      action: 'Nova Aba (Explorer)',
      context: 'Abre nova guia de navegação dentro da mesma janela do Explorador.',
      category: 'Explorador de Arquivos',
      tags: ['aba', 'nova', 'navegação']
    },
    {
      id: 'ctrl-w-explorer',
      keys: 'Ctrl + W',
      action: 'Fechar Aba Atual',
      context: 'Encerra exclusivamente a guia ativa mantendo o restante da janela intacta.',
      category: 'Explorador de Arquivos',
      tags: ['fechar', 'aba', 'janela']
    },
    {
      id: 'ctrl-shift-n',
      keys: 'Ctrl + Shift + N',
      action: 'Nova Pasta',
      context: 'Cria diretório instantaneamente já com o cursor focado para inserção do nome.',
      category: 'Explorador de Arquivos',
      tags: ['pasta', 'criar', 'novo']
    },
    {
      id: 'alt-enter',
      keys: 'Alt + Enter',
      action: 'Propriedades',
      context: 'Exibe painel de propriedades: tamanho, permissões, metadados.',
      category: 'Explorador de Arquivos',
      tags: ['propriedades', 'metadata', 'tamanho']
    },
    {
      id: 'f2',
      keys: 'F2',
      action: 'Renomear',
      context: 'Edição rápida do nome do item atualmente selecionado.',
      category: 'Explorador de Arquivos',
      tags: ['renomear', 'editar', 'nome']
    },
    
    // ==========================================
    // GESTÃO DE JANELAS E MULTITAREFA
    // ==========================================
    {
      id: 'win-z',
      keys: 'Win + Z',
      action: 'Snap Layouts',
      context: 'Aciona o menu visual de layouts para divisão simétrica da tela.',
      category: 'Gestão de Janelas',
      tags: ['snap', 'layout', 'organizar']
    },
    {
      id: 'win-arrows',
      keys: 'Win + Setas',
      action: 'Organizar Janelas (Snap)',
      context: 'Fixa a janela ativa nas laterais ou quadrantes, maximizando o aproveitamento do monitor.',
      category: 'Gestão de Janelas',
      tags: ['snap', 'organizar', 'quadrantes']
    },
    {
      id: 'win-d',
      keys: 'Win + D',
      action: 'Mostrar Área de Trabalho',
      context: 'Minimiza todas as janelas simultaneamente. Pressionar novamente restaura o estado.',
      category: 'Gestão de Janelas',
      tags: ['desktop', 'minimizar', 'mostrar']
    },
    {
      id: 'win-comma',
      keys: 'Win + ,',
      action: 'Espiar Área de Trabalho (Aero Peek)',
      context: 'Torna as janelas translúcidas para visualizar o desktop temporariamente.',
      category: 'Gestão de Janelas',
      tags: ['peek', 'desktop', 'visualizar']
    },
    {
      id: 'alt-tab',
      keys: 'Alt + Tab',
      action: 'Alternar Janelas',
      context: 'O atalho clássico e indispensável para alternância rápida de foco entre aplicações.',
      category: 'Gestão de Janelas',
      tags: ['alternar', 'janelas', 'multitarefa']
    },
    {
      id: 'win-tab',
      keys: 'Win + Tab',
      action: 'Visão de Tarefas (Task View)',
      context: 'Exibe uma visão panorâmica de todas as janelas ativas e gerencia os Desktops Virtuais.',
      category: 'Gestão de Janelas',
      tags: ['tarefas', 'visão', 'panorâmica']
    },
    
    // ==========================================
    // DESKTOPS VIRTUAIS
    // ==========================================
    {
      id: 'win-ctrl-d',
      keys: 'Win + Ctrl + D',
      action: 'Criar Novo Desktop',
      context: 'Instancia uma nova área de trabalho virtual limpa para separar contextos.',
      category: 'Desktops Virtuais',
      tags: ['desktop', 'virtual', 'novo']
    },
    {
      id: 'win-ctrl-arrows',
      keys: 'Win + Ctrl + ←/→',
      action: 'Navegar entre Desktops',
      context: 'Transita fluidamente entre as áreas de trabalho virtuais ativas.',
      category: 'Desktops Virtuais',
      tags: ['navegar', 'desktop', 'virtual']
    },
    {
      id: 'win-ctrl-f4',
      keys: 'Win + Ctrl + F4',
      action: 'Fechar Desktop Atual',
      context: 'Encerra o desktop atual e migra as janelas para o ambiente imediatamente anterior.',
      category: 'Desktops Virtuais',
      tags: ['fechar', 'desktop', 'virtual']
    },
    
    // ==========================================
    // CAPTURA, CLIPBOARD E UTILITÁRIOS
    // ==========================================
    {
      id: 'win-shift-s',
      keys: 'Win + Shift + S',
      action: 'Ferramenta de Captura Avançada',
      context: 'Permite selecionar regiões customizadas (retangular, livre, janela) para captura de tela.',
      category: 'Captura e Utilitários',
      tags: ['captura', 'screenshot', 'clipboard']
    },
    {
      id: 'win-v',
      keys: 'Win + V',
      action: 'Histórico da Área de Transferência',
      context: 'Acessa o log de itens copiados anteriormente (textos e imagens).',
      category: 'Captura e Utilitários',
      tags: ['clipboard', 'histórico', 'copiar']
    },
    {
      id: 'win-dot',
      keys: 'Win + .',
      action: 'Painel de Emojis e Símbolos',
      context: 'Painel de inserção rápida de emojis, GIFs e caracteres matemáticos/especiais.',
      category: 'Captura e Utilitários',
      tags: ['emoji', 'símbolos', 'caracteres']
    },
    {
      id: 'win-h',
      keys: 'Win + H',
      action: 'Digitação por Voz (Dictation)',
      context: 'Inicia o reconhecimento de voz nativo para transcrição de áudio em texto.',
      category: 'Captura e Utilitários',
      tags: ['voz', 'ditado', 'transcrição']
    },
    {
      id: 'win-k',
      keys: 'Win + K',
      action: 'Conectar Dispositivos (Cast)',
      context: 'Abre interface de projeção sem fio para pareamento com TVs ou monitores externos.',
      category: 'Captura e Utilitários',
      tags: ['cast', 'projeção', 'wireless']
    },
    
    // ==========================================
    // NAVEGADOR E DEBUG WEB
    // ==========================================
    {
      id: 'ctrl-p',
      keys: 'Ctrl + P',
      action: 'Imprimir Página',
      context: 'Abre a interface de impressão, frequentemente usada para exportar páginas em PDF.',
      category: 'Navegador e Debug',
      tags: ['imprimir', 'pdf', 'exportar']
    },
    {
      id: 'ctrl-s',
      keys: 'Ctrl + S',
      action: 'Salvar Página Como...',
      context: 'Realiza o download do documento HTML completo com seus ativos locais.',
      category: 'Navegador e Debug',
      tags: ['salvar', 'download', 'html']
    },
    {
      id: 'ctrl-shift-delete',
      keys: 'Ctrl + Shift + Delete',
      action: 'Limpar Dados de Navegação',
      context: 'Acesso direto à exclusão de cache e cookies. Vital para testes de frontend.',
      category: 'Navegador e Debug',
      tags: ['limpar', 'cache', 'cookies']
    },
    {
      id: 'ctrl-d',
      keys: 'Ctrl + D',
      action: 'Adicionar aos Favoritos',
      context: 'Salva a URL da guia atual na barra de favoritos para acesso futuro.',
      category: 'Navegador e Debug',
      tags: ['favoritos', 'salvar', 'url']
    },
    {
      id: 'ctrl-j',
      keys: 'Ctrl + J',
      action: 'Abrir Gerenciador de Downloads',
      context: 'Exibe a lista cronológica de arquivos baixados pelo navegador.',
      category: 'Navegador e Debug',
      tags: ['downloads', 'gerenciar', 'arquivos']
    },
    {
      id: 'ctrl-h',
      keys: 'Ctrl + H',
      action: 'Abrir Histórico de Navegação',
      context: 'Abre a interface de registro de acessos passados.',
      category: 'Navegador e Debug',
      tags: ['histórico', 'navegação', 'registro']
    },
    {
      id: 'ctrl-u',
      keys: 'Ctrl + U',
      action: 'Ver Código Fonte da Página',
      context: 'Exibe o documento HTML original entregue pelo servidor.',
      category: 'Navegador e Debug',
      tags: ['fonte', 'html', 'código']
    },
    {
      id: 'ctrl-shift-i',
      keys: 'Ctrl + Shift + I / F12',
      action: 'Ferramentas do Desenvolvedor',
      context: 'Inicia o painel avançado: Inspetor de Elementos, Console JS e Monitor de Rede.',
      category: 'Navegador e Debug',
      tags: ['devtools', 'inspecionar', 'debug']
    },
    {
      id: 'ctrl-f',
      keys: 'Ctrl + F',
      action: 'Localizar na Página',
      context: 'Invoca a barra de pesquisa de strings dentro do escopo da página atual.',
      category: 'Navegador e Debug',
      tags: ['buscar', 'localizar', 'texto']
    },
    {
      id: 'ctrl-shift-t',
      keys: 'Ctrl + Shift + T',
      action: 'Reabrir Aba Fechada',
      context: 'Recupera guias encerradas acidentalmente, preservando o histórico da guia.',
      category: 'Navegador e Debug',
      tags: ['reabrir', 'aba', 'fechada']
    },
    {
      id: 'ctrl-0',
      keys: 'Ctrl + 0',
      action: 'Resetar Zoom',
      context: 'Restaura a proporção de visualização da página para o padrão de 100%.',
      category: 'Navegador e Debug',
      tags: ['zoom', 'resetar', 'visualização']
    },
    
    // ==========================================
    // UTILITÁRIO EXECUTAR: SISTEMA E ADMIN
    // ==========================================
    {
      id: 'win-r-wt',
      keys: 'Win + R → wt',
      action: 'Windows Terminal',
      context: 'Inicia o emulador moderno. Obrigatório para Git, SSH, PowerShell e WSL.',
      category: 'Executar: Sistema e Admin',
      tags: ['terminal', 'moderno', 'powershell']
    },
    {
      id: 'win-r-cmd',
      keys: 'Win + R → cmd',
      action: 'Prompt de Comando',
      context: 'Abre o terminal clássico do Windows (Command Prompt).',
      category: 'Executar: Sistema e Admin',
      tags: ['cmd', 'command', 'prompt']
    },
    {
      id: 'win-r-services',
      keys: 'Win + R → services.msc',
      action: 'Gerenciador de Serviços',
      context: 'Painel de controle de serviços em background (Apache, MySQL, Docker).',
      category: 'Executar: Sistema e Admin',
      tags: ['serviços', 'background', 'admin']
    },
    {
      id: 'win-r-appwiz',
      keys: 'Win + R → appwiz.cpl',
      action: 'Adicionar/Remover Programas',
      context: 'Acessa a interface legada e otimizada de gerenciamento de softwares.',
      category: 'Executar: Sistema e Admin',
      tags: ['programas', 'desinstalar', 'gerenciar']
    },
    {
      id: 'win-r-sysdm',
      keys: 'Win + R → sysdm.cpl',
      action: 'Propriedades Avançadas',
      context: 'Rota mais rápida para as Variáveis de Ambiente (registrar binários no Path).',
      category: 'Executar: Sistema e Admin',
      tags: ['variáveis', 'ambiente', 'path']
    },
    {
      id: 'win-r-msconfig',
      keys: 'Win + R → msconfig',
      action: 'Configuração do Sistema',
      context: 'Gerenciamento crítico dos serviços de inicialização (Boot) e diagnóstico.',
      category: 'Executar: Sistema e Admin',
      tags: ['boot', 'inicialização', 'diagnóstico']
    },
    {
      id: 'win-r-regedit',
      keys: 'Win + R → regedit',
      action: 'Editor de Registro',
      context: 'Acesso à base de dados hierárquica do Windows. Atenção às modificações.',
      category: 'Executar: Sistema e Admin',
      tags: ['registro', 'editor', 'sistema']
    },
    {
      id: 'win-r-taskmgr',
      keys: 'Win + R → taskmgr',
      action: 'Gerenciador de Tarefas',
      context: 'Chamada direta via comando caso os atalhos de teclado não respondam.',
      category: 'Executar: Sistema e Admin',
      tags: ['tarefas', 'processos', 'chamada']
    },

    // ==========================================
    // UTILITÁRIO EXECUTAR: REDE E CONEXÕES
    // ==========================================
    {
      id: 'win-r-ncpa',
      keys: 'Win + R → ncpa.cpl',
      action: 'Conexões de Rede',
      context: 'Painel dedicado para adaptadores, IP estático e alteração de DNS.',
      category: 'Executar: Rede e Conexões',
      tags: ['rede', 'adaptadores', 'dns']
    },
    {
      id: 'win-r-mstsc',
      keys: 'Win + R → mstsc',
      action: 'Conexão Remota (RDP)',
      context: 'Cliente nativo para acesso remoto a servidores Windows VPS ou rede local.',
      category: 'Executar: Rede e Conexões',
      tags: ['rdp', 'remoto', 'área de trabalho']
    },
    {
      id: 'win-r-inetcpl',
      keys: 'Win + R → inetcpl.cpl',
      action: 'Propriedades de Internet',
      context: 'Configuração de roteamento de Proxy e gestão de certificados SSL nativos.',
      category: 'Executar: Rede e Conexões',
      tags: ['internet', 'proxy', 'ssl']
    },
    {
      id: 'win-r-firewall',
      keys: 'Win + R → firewall.cpl',
      action: 'Firewall do Defender',
      context: 'Gerenciamento de regras de entrada/saída, vital para liberação de portas.',
      category: 'Executar: Rede e Conexões',
      tags: ['firewall', 'portas', 'segurança']
    },

    // ==========================================
    // UTILITÁRIO EXECUTAR: PASTAS DO SISTEMA
    // ==========================================
    {
      id: 'win-r-dot',
      keys: 'Win + R → .',
      action: 'Pasta Raiz do Usuário',
      context: 'Redireciona imediatamente para o diretório C:\\Users\\SeuUsuario.',
      category: 'Executar: Pastas do Sistema',
      tags: ['home', 'usuário', 'pasta']
    },
    {
      id: 'win-r-dots',
      keys: 'Win + R → ..',
      action: 'Diretório Superior',
      context: 'Redireciona imediatamente para a pasta contêiner C:\\Users.',
      category: 'Executar: Pastas do Sistema',
      tags: ['users', 'diretório', 'superior']
    },
    {
      id: 'win-r-appdata',
      keys: 'Win + R → appdata',
      action: 'Diretório AppData (Roaming)',
      context: 'Local de arquivos de configuração e cache de aplicações.',
      category: 'Executar: Pastas do Sistema',
      tags: ['appdata', 'config', 'cache']
    },
    {
      id: 'win-r-temp',
      keys: 'Win + R → temp',
      action: 'Arquivos Temporários',
      context: 'Acesso aos arquivos de descarte no nível do usuário atual.',
      category: 'Executar: Pastas do Sistema',
      tags: ['temp', 'temporários', 'limpeza']
    },
    {
      id: 'win-r-temp-sys',
      keys: 'Win + R → %temp%',
      action: 'Temp. (Nível de Sistema)',
      context: 'Acesso ao diretório temporário raiz. A limpeza periódica auxilia na performance.',
      category: 'Executar: Pastas do Sistema',
      tags: ['temp', 'sistema', 'performance']
    },
    {
      id: 'win-r-startup',
      keys: 'Win + R → shell:startup',
      action: 'Diretório Inicializar',
      context: 'Qualquer atalho alocado nesta pasta será executado no logon do sistema.',
      category: 'Executar: Pastas do Sistema',
      tags: ['startup', 'inicializar', 'boot']
    },
    {
      id: 'win-r-drivers',
      keys: 'Win + R → drivers',
      action: 'Diretório Drivers',
      context: 'Atalho utilizado para navegar até /etc e editar o arquivo hosts.',
      category: 'Executar: Pastas do Sistema',
      tags: ['drivers', 'hosts', 'sistema']
    },

    // ==========================================
    // UTILITÁRIO EXECUTAR: DIAGNÓSTICO
    // ==========================================
    {
      id: 'win-r-calc',
      keys: 'Win + R → calc',
      action: 'Calculadora',
      context: 'Inicia a aplicação padrão de cálculos do sistema.',
      category: 'Executar: Diagnóstico',
      tags: ['calculadora', 'calc', 'matemática']
    },
    {
      id: 'win-r-notepad',
      keys: 'Win + R → notepad',
      action: 'Bloco de Notas',
      context: 'Abre o editor de texto puro, útil para limpeza de formatação.',
      category: 'Executar: Diagnóstico',
      tags: ['notepad', 'texto', 'editor']
    },
    {
      id: 'win-r-mspaint',
      keys: 'Win + R → mspaint',
      action: 'Microsoft Paint',
      context: 'Editor gráfico rápido, muito usado para salvamento emergencial.',
      category: 'Executar: Diagnóstico',
      tags: ['paint', 'desenho', 'imagem']
    },
    {
      id: 'win-r-snipping',
      keys: 'Win + R → snippingtool',
      action: 'Ferramenta de Captura',
      context: 'Executa a interface dedicada do aplicativo de capturas.',
      category: 'Executar: Diagnóstico',
      tags: ['captura', 'screenshot', 'ferramenta']
    },
    {
      id: 'win-r-charmap',
      keys: 'Win + R → charmap',
      action: 'Mapa de Caracteres',
      context: 'Localização e cópia de caracteres Unicode e símbolos tipográficos.',
      category: 'Executar: Diagnóstico',
      tags: ['caracteres', 'unicode', 'símbolos']
    },
    {
      id: 'win-r-dxdiag',
      keys: 'Win + R → dxdiag',
      action: 'Diagnóstico do DirectX',
      context: 'Relatório abrangente de hardware (Processador, GPU) e validação de drivers.',
      category: 'Executar: Diagnóstico',
      tags: ['directx', 'diagnóstico', 'hardware']
    },
    {
      id: 'win-r-winver',
      keys: 'Win + R → winver',
      action: 'Sobre o Windows',
      context: 'Exibe uma caixa de diálogo confirmando a versão, edição e build do SO.',
      category: 'Executar: Diagnóstico',
      tags: ['versão', 'windows', 'build']
    }
  ]
},
  {
  id: 'vscode',
  title: 'VS Code & Desenvolvimento',
  description: 'Ferramentas de edição cirúrgica, depuração e administração avançada',
  icon: 'FileCode',
  color: 'purple',
  gradient: 'from-purple-500 to-pink-600',
  commands: [
    // ==========================================
    // EDIÇÃO E PRODUTIVIDADE
    // ==========================================
    { 
      id: 'ctrl-s', 
      keys: 'Ctrl + S', 
      action: 'Salvar Arquivo', 
      context: 'Crie a memória muscular de executar este comando após cada bloco lógico de raciocínio concluído.',
      category: 'Edição e Produtividade',
      tags: ['salvar', 'arquivo', 'produtividade']
    },
    { 
      id: 'alt-shift-f', 
      keys: 'Alt + Shift + F', 
      action: 'Formatar Documento Automático', 
      context: 'Aplica as regras do formatter padrão (como Prettier ou PHP CS Fixer), corrigindo indentação e espaçamentos instantaneamente.',
      category: 'Edição e Produtividade',
      tags: ['formatar', 'prettier', 'lint', 'indentação']
    },
    { 
      id: 'ctrl-slash', 
      keys: 'Ctrl + /', 
      action: 'Alternar Comentários de Linha', 
      context: 'Comenta/descomenta linhas individuais (Line Comment).',
      category: 'Edição e Produtividade',
      tags: ['comentar', 'linha', 'toggle']
    },
    { 
      id: 'shift-alt-a', 
      keys: 'Shift + Alt + A', 
      action: 'Alternar Comentários de Bloco', 
      context: 'Aplica formatação de bloco (Block Comment) na seleção.',
      category: 'Edição e Produtividade',
      tags: ['comentar', 'bloco', 'multi-linha']
    },
    { 
      id: 'ctrl-d', 
      keys: 'Ctrl + D', 
      action: 'Seleção Múltipla Dinâmica', 
      context: 'Selecione uma string e pressione para englobar as próximas ocorrências no arquivo. Permite refatoração de variáveis e cursores múltiplos de forma cirúrgica.',
      category: 'Edição e Produtividade',
      tags: ['selecionar', 'múltiplo', 'refatorar', 'cursores']
    },
    { 
      id: 'shift-alt-down', 
      keys: 'Shift + Alt + ↓', 
      action: 'Duplicar Linha/Bloco Abaixo', 
      context: 'Clona a linha atual (ou a seleção completa) para a linha imediatamente inferior, evitando a lentidão do Copiar/Colar convencional.',
      category: 'Edição e Produtividade',
      tags: ['duplicar', 'clonar', 'linha']
    },

    // ==========================================
    // NAVEGAÇÃO E BUSCA
    // ==========================================
    { 
      id: 'ctrl-shift-p', 
      keys: 'Ctrl + Shift + P', 
      action: 'Paleta de Comandos (Command Palette)', 
      context: 'Painel de controle central do editor. Pesquise ações complexas, configurações ou funcionalidades de extensões sem navegar por menus (Ex: "Format", "Git: Clone").',
      category: 'Navegação e Busca',
      tags: ['comandos', 'palette', 'controle']
    },
    { 
      id: 'ctrl-p', 
      keys: 'Ctrl + P', 
      action: 'Busca Rápida de Arquivos (Quick Open)', 
      context: 'Navegação em velocidade máxima. Digite parte do nome do arquivo (ex: index.php ou User.py) e pressione Enter para alternar de contexto.',
      category: 'Navegação e Busca',
      tags: ['arquivos', 'busca', 'rápido', 'navegação']
    },
    { 
      id: 'ctrl-shift-f', 
      keys: 'Ctrl + Shift + F', 
      action: 'Busca Global no Projeto (Find in Files)', 
      context: 'Realiza varreduras de texto ou expressões regulares em toda a base de código do workspace aberto simultaneamente.',
      category: 'Navegação e Busca',
      tags: ['busca', 'global', 'regex', 'pesquisa']
    },
    { 
      id: 'ctrl-f', 
      keys: 'Ctrl + F', 
      action: 'Busca Local no Arquivo', 
      context: 'Localiza instâncias de código apenas no documento atualmente em foco.',
      category: 'Navegação e Busca',
      tags: ['buscar', 'localizar', 'texto', 'pesquisa']
    },

    // ==========================================
    // PAINÉIS E INTERFACE
    // ==========================================
    { 
      id: 'ctrl-comma', 
      keys: 'Ctrl + ,', 
      action: 'Abrir Painel de Configurações (Settings)', 
      context: 'Acesso imediato às configurações de Workspace ou Usuário, permitindo ajustes no arquivo settings.json.',
      category: 'Painéis e Interface',
      tags: ['settings', 'configurações', 'json']
    },
    { 
      id: 'ctrl-apostrophe', 
      keys: 'Ctrl + \' (ou Ctrl + `)', 
      action: 'Alternar Terminal Integrado', 
      context: 'Expande ou retrai o painel inferior (Terminal, Output, Debug Console) mantendo o foco no ambiente de desenvolvimento.',
      category: 'Painéis e Interface',
      tags: ['terminal', 'integrado', 'toggle']
    },
    { 
      id: 'ctrl-shift-g', 
      keys: 'Ctrl + Shift + G', 
      action: 'Painel de Controle de Versão (Source Control)', 
      context: 'Transfere o foco para a interface de gestão do Git para staging e elaboração de commits.',
      category: 'Painéis e Interface',
      tags: ['git', 'source control', 'versionamento']
    },
    { 
      id: 'ctrl-shift-x', 
      keys: 'Ctrl + Shift + X', 
      action: 'Painel de Extensões', 
      context: 'Abre o marketplace interno para busca, instalação e gestão de plugins e temas do ambiente.',
      category: 'Painéis e Interface',
      tags: ['extensões', 'marketplace', 'plugins']
    },
    { 
      id: 'ctrl-shift-e', 
      keys: 'Ctrl + Shift + E', 
      action: 'Painel do Explorador (Explorer)', 
      context: 'Restaura o foco para a árvore de diretórios do projeto na barra lateral esquerda.',
      category: 'Painéis e Interface',
      tags: ['explorer', 'arquivos', 'árvore']
    },
    { 
      id: 'ctrl-b', 
      keys: 'Ctrl + B', 
      action: 'Alternar Visibilidade da Barra Lateral', 
      context: 'Oculta a árvore de arquivos, expandindo horizontalmente o espaço útil do editor de código.',
      category: 'Painéis e Interface',
      tags: ['sidebar', 'toggle', 'visualização']
    },
    { 
      id: 'ctrl-k-z', 
      keys: 'Ctrl + K seguido de Z', 
      action: 'Modo Zen (Zen Mode)', 
      context: 'Imersão total. Remove interface gráfica, barras de rolagem e menus, centralizando puramente o código na tela. (Pressione Esc duplo para retornar).',
      category: 'Painéis e Interface',
      tags: ['zen', 'foco', 'imersão', 'tela cheia']
    },

    // ==========================================
    // ECOSSISTEMA PHP
    // ==========================================
    { 
      id: 'f12', 
      keys: 'F12', 
      action: 'Ir para a Definição (Go to Definition)', 
      context: 'Transfere o cursor diretamente para o arquivo e a linha onde a classe, método ou variável foi originalmente declarada.',
      category: 'Ecossistema PHP',
      tags: ['definição', 'navegar', 'código', 'php']
    },
    { 
      id: 'alt-f12', 
      keys: 'Alt + F12', 
      action: 'Espiar Definição (Peek Definition)', 
      context: 'Renderiza uma janela flutuante com o escopo do código referenciado, permitindo consulta e edição sem perder o contexto do arquivo original.',
      category: 'Ecossistema PHP',
      tags: ['peek', 'visualizar', 'flutuante', 'php']
    },
    { 
      id: 'f2', 
      keys: 'F2', 
      action: 'Renomear Símbolo Globalmente', 
      context: 'Executa uma refatoração segura. Altera o nome de uma entidade (variável/método) propagando a mudança de forma inteligente por todo o projeto.',
      category: 'Ecossistema PHP',
      tags: ['renomear', 'refatorar', 'símbolo', 'php']
    },
    { 
      id: 'ctrl-shift-o', 
      keys: 'Ctrl + Shift + O', 
      action: 'Navegar por Símbolos no Arquivo', 
      context: 'Apresenta um índice de todos os métodos, classes e propriedades do arquivo ativo para navegação estrutural rápida.',
      category: 'Ecossistema PHP',
      tags: ['símbolos', 'índice', 'estrutura', 'php']
    },
    { 
      id: 'ctrl-t', 
      keys: 'Ctrl + T', 
      action: 'Busca Universal de Símbolos (Workspace Symbol)', 
      context: 'Pesquisa por nomes de classes, interfaces ou métodos em toda a extensão do projeto, independentemente do arquivo em que residam.',
      category: 'Ecossistema PHP',
      tags: ['workspace', 'símbolos', 'universal', 'php']
    },
    { 
      id: 'ctrl-dot', 
      keys: 'Ctrl + .', 
      action: 'Correção Rápida (Quick Fix)', 
      context: 'O motor sugerirá a importação automática do namespace (use) ou fornecerá correções de sintaxe estrutural.',
      category: 'Ecossistema PHP',
      tags: ['quick fix', 'import', 'correção', 'namespace', 'php']
    },
    { 
      id: 'phpdoc-generate', 
      keys: '/** + Enter', 
      action: 'Geração Automática de PHPDoc', 
      context: 'Acionado imediatamente acima de um método ou classe. Gera o bloco de comentários estruturados inferindo os tipos de parâmetros e retornos.',
      category: 'Ecossistema PHP',
      tags: ['phpdoc', 'documentação', 'comentários', 'php']
    },
    { 
      id: 'ctrl-shift-backslash', 
      keys: 'Ctrl + Shift + \\', 
      action: 'Pular para a Chave Correspondente', 
      context: 'Permite saltar instantaneamente da chave de abertura { para a respectiva chave de fechamento } em lógicas complexas e extensas de if, while ou function.',
      category: 'Ecossistema PHP',
      tags: ['chaves', 'brackets', 'navegar', 'php']
    },
    
    // ==========================================
    // ECOSSISTEMA PYTHON
    // ==========================================
    { 
      id: 'f5', 
      keys: 'F5', 
      action: 'Iniciar Depuração (Start Debugging)', 
      context: 'Executa o interpretador atrelado ao motor de debug do VS Code, permitindo a interrupção programada da execução via breakpoints.',
      category: 'Ecossistema Python',
      tags: ['debug', 'depuração', 'executar', 'python']
    },
    { 
      id: 'ctrl-f5', 
      keys: 'Ctrl + F5', 
      action: 'Executar sem Depuração (Run Without Debugging)', 
      context: 'Dispara o script com máxima performance, ignorando as marcações de debug.',
      category: 'Ecossistema Python',
      tags: ['executar', 'run', 'performance', 'python']
    },
    { 
      id: 'shift-enter', 
      keys: 'Shift + Enter', 
      action: 'Executar Seleção no Terminal Interativo', 
      context: 'Envia blocos de código isolados ou linhas específicas diretamente para o console Python interativo para testes unitários sob demanda.',
      category: 'Ecossistema Python',
      tags: ['executar', 'seleção', 'console', 'python']
    },
    { 
      id: 'f9', 
      keys: 'F9', 
      action: 'Alternar Breakpoint', 
      context: 'Marca uma linha de código específica sinalizando para o debugger pausar a execução exatamente naquele momento para inspeção de variáveis.',
      category: 'Ecossistema Python',
      tags: ['breakpoint', 'debug', 'pausar', 'python']
    },
    { 
      id: 'f10', 
      keys: 'F10', 
      action: 'Pular Etapa (Step Over)', 
      context: 'Durante o debug, executa a linha atual por completo e avança o cursor lógico para a linha subsequente, sem entrar nos detalhes das funções internas.',
      category: 'Ecossistema Python',
      tags: ['debug', 'step over', 'avançar', 'python']
    },
    { 
      id: 'f11', 
      keys: 'F11', 
      action: 'Entrar na Etapa (Step Into)', 
      context: 'Mergulha na lógica interna de um método ou função invocada na linha atual do debug, permitindo análise atômica do processamento.',
      category: 'Ecossistema Python',
      tags: ['debug', 'step into', 'mergulhar', 'python']
    },
    { 
      id: 'shift-f11', 
      keys: 'Shift + F11', 
      action: 'Sair da Etapa (Step Out)', 
      context: 'Finaliza a execução do bloco de código atual em background e retorna o controle para a linha do contexto pai que havia feito a chamada inicial.',
      category: 'Ecossistema Python',
      tags: ['debug', 'step out', 'sair', 'python']
    },
    { 
      id: 'ctrl-shift-f5', 
      keys: 'Ctrl + Shift + F5', 
      action: 'Reiniciar Sessão de Debug', 
      context: 'Interrompe e reinicializa o processo de depuração desde a estaca zero, ideal para validação imediata de correções aplicadas no código.',
      category: 'Ecossistema Python',
      tags: ['debug', 'reiniciar', 'restart', 'python']
    },
    { 
      id: 'shift-f5', 
      keys: 'Shift + F5', 
      action: 'Interromper Depuração (Stop)', 
      context: 'Encerra abruptamente o runtime do Python e desconecta o debugger do VS Code.',
      category: 'Ecossistema Python',
      tags: ['debug', 'parar', 'stop', 'python']
    },
    { 
      id: 'shift-alt-o', 
      keys: 'Shift + Alt + O', 
      action: 'Otimizar Importações', 
      context: 'Analisa dependências, remove imports não referenciados e os reordena alfabeticamente conforme as normas da PEP 8.',
      category: 'Ecossistema Python',
      tags: ['imports', 'organizar', 'pep8', 'python']
    },
    { 
      id: 'ctrl-space', 
      keys: 'Ctrl + Espaço', 
      action: 'Invocar IntelliSense', 
      context: 'Força o processador de linguagem nativo (Pylance) a reavaliar o contexto e exibir os palpites de sintaxe e autocompletar imediatamente.',
      category: 'Ecossistema Python',
      tags: ['intellisense', 'autocomplete', 'pylance', 'python']
    },
    { 
      id: 'ctrl-k-i', 
      keys: 'Ctrl + K seguido de Ctrl + I', 
      action: 'Exibir Detalhes (Hover Documentation)', 
      context: 'Apresenta a docstring oficial, as assinaturas e a tipagem explícita da classe/função em foco.',
      category: 'Ecossistema Python',
      tags: ['documentação', 'hover', 'docstring', 'python']
    }
  ]
},
  {
    id: 'git',
    title: 'Versionamento Git',
    description: 'Fluxo de trabalho com Git, boas práticas de código aberto',
    icon: 'GitBranch',
    color: 'orange',
    gradient: 'from-orange-500 to-red-600',
    commands: [
      { 
        id: 'git-init', 
        keys: 'git init', 
        action: 'Inicializar Repositório', 
        context: 'Cria .git no diretório raiz do projeto',
        category: 'Inicialização',
        tags: ['init', 'iniciar', 'novo']
      },
      { 
        id: 'git-add', 
        keys: 'git add .', 
        action: 'Stage All Changes', 
        context: 'Prepara TODOS os arquivos modificados para staging',
        category: 'Staging',
        tags: ['add', 'stage', 'preparar']
      },
      { 
        id: 'git-commit', 
        keys: 'git commit -m "msg"', 
        action: 'Consolidar Commit', 
        context: 'Salva na linha do tempo com mensagem semântica',
        category: 'Commit',
        tags: ['commit', 'salvar', 'histórico']
      },
      { 
        id: 'git-remote', 
        keys: 'git remote add origin <url>', 
        action: 'Associar Repositório Remoto', 
        context: 'Conecta diretório local ao GitHub',
        category: 'Remoto',
        tags: ['remote', 'origin', 'github']
      },
      { 
        id: 'git-branch-m', 
        keys: 'git branch -M main', 
        action: 'Definir Branch Principal', 
        context: 'Define main como padrão (indústria moderna)',
        category: 'Branch',
        tags: ['branch', 'main', 'padrão']
      },
      { 
        id: 'git-push-u', 
        keys: 'git push -u origin main', 
        action: 'Primeiro Deploy', 
        context: 'Envia código e estabelece vínculo persistente (upstream)',
        category: 'Deploy',
        tags: ['push', 'deploy', 'upstream']
      },
      { 
        id: 'git-switch-c', 
        keys: 'git switch -c <branch>', 
        action: 'Criar e Mudar para Nova Branch', 
        context: 'Isolamento de features (ex: feature-login, bugfix-header)',
        category: 'Branch',
        tags: ['switch', 'nova branch', 'feature']
      },
      { 
        id: 'git-push-branch', 
        keys: 'git push -u origin <branch>', 
        action: 'Deploy da Ramificação', 
        context: 'Envia branch completa para repositório remoto',
        category: 'Deploy',
        tags: ['push', 'branch', 'remoto']
      },
      { 
        id: 'git-checkout', 
        keys: 'git checkout main', 
        action: 'Retornar para Main', 
        context: 'Altera contexto para linha do tempo de produção',
        category: 'Branch',
        tags: ['checkout', 'main', 'voltar']
      },
      { 
        id: 'git-pull', 
        keys: 'git pull origin main', 
        action: 'Sincronizar com Remoto', 
        context: 'Puxa estado mais recente (previne conflitos)',
        category: 'Sincronização',
        tags: ['pull', 'sincronizar', 'atualizar']
      },
      { 
        id: 'git-merge', 
        keys: 'git merge <branch>', 
        action: 'Fusão (Merge)', 
        context: 'Incorpora histórico da branch de trabalho na main',
        category: 'Integração',
        tags: ['merge', 'fundir', 'integrar']
      },
      { 
        id: 'git-stash', 
        keys: 'git stash', 
        action: 'Salvamento Tático', 
        context: 'Guarda alterações não concluídas em cache seguro',
        category: 'Stash',
        tags: ['stash', 'salvar', 'temporário']
      },
      { 
        id: 'git-stash-pop', 
        keys: 'git stash pop', 
        action: 'Recuperação Tática', 
        context: 'Extrai e aplica alterações guardadas na área de trabalho',
        category: 'Stash',
        tags: ['stash', 'recuperar', 'pop']
      },
      { 
        id: 'git-log', 
        keys: 'git log --oneline --graph', 
        action: 'Auditoria Visual', 
        context: 'Exibe histórico em grafo de linha do tempo colorido',
        category: 'Histórico',
        tags: ['log', 'histórico', 'visual']
      },
      { 
        id: 'git-status', 
        keys: 'git status', 
        action: 'Verificar Status', 
        context: 'Mostra estado atual do working directory',
        category: 'Status',
        tags: ['status', 'estado', 'verificar']
      },
      { 
        id: 'git-diff', 
        keys: 'git diff', 
        action: 'Visualizar Diferenças', 
        context: 'Mostra alterações não staged em detalhe',
        category: 'Comparação',
        tags: ['diff', 'diferenças', 'comparar']
      }
    ]
  },
  {
  id: 'markdown',
  title: 'Documentação Markdown',
  description: 'Sintaxe Markdown nível sênior para READMEs profissionais',
  icon: 'Type',
  color: 'emerald',
  gradient: 'from-emerald-500 to-teal-600',
  commands: [
    // ==========================================
    // FORMATAÇÃO DE TEXTO E TECLAS
    // ==========================================
    { 
      id: 'md-bold', 
      keys: '**texto**', 
      action: 'Negrito (Destaque Forte)', 
      context: 'Ideal para destacar ações ou nomes de ferramentas, guiando os olhos do leitor para o que importa.',
      category: 'Formatação',
      tags: ['negrito', 'bold', 'destaque']
    },
    { 
      id: 'md-italic', 
      keys: '*texto*', 
      action: 'Itálico (Ênfase Leve)', 
      context: 'Útil para destacar termos estrangeiros ou citações informais no meio do texto.',
      category: 'Formatação',
      tags: ['itálico', 'italic', 'ênfase']
    },
    { 
      id: 'md-strike', 
      keys: '~~texto~~', 
      action: 'Tachado (Depreciação)', 
      context: 'Excelente para mostrar que uma funcionalidade antiga foi removida (deprecated) ou um bug foi corrigido.',
      category: 'Formatação',
      tags: ['tachado', 'strike', 'depreciado']
    },
    { 
      id: 'md-code', 
      keys: '`código`', 
      action: 'Código Inline (Termos Técnicos)', 
      context: 'Use sempre que for escrever nomes de variáveis, arquivos, rotas de API ou comandos no meio de uma frase.',
      category: 'Código',
      tags: ['inline', 'code', 'variáveis']
    },
    { 
      id: 'md-kbd', 
      keys: '<kbd>Ctrl</kbd>', 
      action: 'Teclas de Atalho (HTML Embutido)', 
      context: 'Simula visualmente o botão de um teclado. Dá um toque de documentação oficial ao seu projeto.',
      category: 'HTML',
      tags: ['kbd', 'teclas', 'atalhos']
    },
    { 
      id: 'md-escape', 
      keys: '\\*', 
      action: 'Ignorar Formatação (Escape)', 
      context: 'Coloque uma contrabarra antes para digitar um asterisco ou crase real sem ativar a formatação.',
      category: 'Formatação',
      tags: ['escape', 'ignorar', 'barra']
    },

    // ==========================================
    // CABEÇALHOS E ÂNCORAS
    // ==========================================
    { 
      id: 'md-h1', 
      keys: '# Título', 
      action: 'Título Principal (H1)', 
      context: 'Use APENAS UM no topo do documento. O GitHub transforma cada cabeçalho em um "link âncora".',
      category: 'Cabeçalhos',
      tags: ['h1', 'título', 'heading']
    },
    { 
      id: 'md-h2', 
      keys: '## Subtítulo', 
      action: 'Subtítulo (H2)', 
      context: 'Define os grandes blocos de informação do repositório, como "Instalação" ou "Uso".',
      category: 'Cabeçalhos',
      tags: ['h2', 'subtítulo', 'seção']
    },
    { 
      id: 'md-h3', 
      keys: '### Título de Seção', 
      action: 'Título de Seção (H3)', 
      context: 'Organiza tópicos e estruturas mais específicas dentro de um grande bloco H2.',
      category: 'Cabeçalhos',
      tags: ['h3', 'seção', 'tópico']
    },

    // ==========================================
    // LISTAS E CHECKLISTS
    // ==========================================
    { 
      id: 'md-list', 
      keys: '* Item', 
      action: 'Listas Não Ordenadas', 
      context: 'Organizam o pensamento. Use 4 espaços ou 1 Tab para identar e criar estruturas aninhadas.',
      category: 'Listas',
      tags: ['lista', 'bullets', 'aninhamento']
    },
    { 
      id: 'md-task', 
      keys: '- [x] Tarefa', 
      action: 'Lista de Tarefas (Checklist)', 
      context: 'Muito usado em Pull Requests para mostrar o que falta fazer. No GitHub, são caixas interativas e clicáveis.',
      category: 'Listas',
      tags: ['task', 'checkbox', 'todo', 'checklist']
    },

    // ==========================================
    // LINKS E IMAGENS
    // ==========================================
    { 
      id: 'md-link', 
      keys: '[texto](url)', 
      action: 'Link Embutido (Padrão)', 
      context: 'O texto visível para o usuário fica entre colchetes e a URL colada logo em seguida entre parênteses.',
      category: 'Links',
      tags: ['link', 'url', 'href']
    },
    { 
      id: 'md-image', 
      keys: '![alt](url)', 
      action: 'Imagem Embutida', 
      context: 'A sintaxe é idêntica à do link, mas precedida por um ponto de exclamação (!). O texto nos colchetes atua como atributo alt.',
      category: 'Mídia',
      tags: ['imagem', 'image', 'figura']
    },
    { 
      id: 'md-badge', 
      keys: '[![alt](img)](url)', 
      action: 'Imagem Clicável (Truque de Badges)', 
      context: 'Muito usado no topo de repositórios para criar botões de "Deploy" ou selos de status (Shields).',
      category: 'Mídia',
      tags: ['badge', 'botão', 'clicável']
    },
    { 
      id: 'md-link-ref', 
      keys: '[texto][var]', 
      action: 'Link de Referência', 
      context: 'Organização Nível Sênior. Evita poluir o meio do seu parágrafo com URLs gigantescas, criando uma "variável" para o link.',
      category: 'Links',
      tags: ['referência', 'limpo', 'variável']
    },
    { 
      id: 'md-anchor', 
      keys: '[Ir](#título)', 
      action: 'Link para Seção Interna (Âncora)', 
      context: 'Cria um link que pula instantaneamente para outro título dentro do documento (ignora emojis e pontuações na URL).',
      category: 'Links',
      tags: ['âncora', 'sumário', 'pular']
    },

    // ==========================================
    // ESTRUTURAS AVANÇADAS E HTML
    // ==========================================
    { 
      id: 'md-center', 
      keys: '<div align="center">', 
      action: 'Alinhamento Centralizado (HTML)', 
      context: 'Como o Markdown nativo não centraliza itens, usamos uma div HTML para deixar o topo do repositório profissional e simétrico.',
      category: 'HTML',
      tags: ['centralizar', 'div', 'alinhamento']
    },
    { 
      id: 'md-code-diff', 
      keys: '```diff\n- antigo\n+ novo\n```', 
      action: 'Blocos de Código (Diff)', 
      context: 'Além das linguagens padrões, use a linguagem "diff" para mostrar alterações de código (changelogs) pintando as linhas de vermelho ou verde.',
      category: 'Código',
      tags: ['code block', 'diff', 'changelog']
    },
    { 
      id: 'md-details', 
      keys: '<details><summary>', 
      action: 'Menus Expansíveis (Accordion)', 
      context: 'Cria um botão de "Clique para expandir". Ideal para ocultar retornos de JSON gigantes ou logs de erro sem poluir a tela.',
      category: 'HTML',
      tags: ['expansível', 'details', 'ocultar']
    },
    { 
      id: 'md-table', 
      keys: '| Col1 | Col2 |', 
      action: 'Tabelas com Alinhamento', 
      context: 'Perfeitas para documentar rotas de APIs, variáveis de ambiente ou dicionários de dados. Os dois pontos (:) definem o alinhamento.',
      category: 'Estrutura',
      tags: ['tabela', 'table', 'dados']
    },
    { 
      id: 'md-hr', 
      keys: '---', 
      action: 'Linha Divisória', 
      context: 'Sempre que terminar de explicar um grande módulo, limpe a leitura inserindo três hífens em uma linha isolada.',
      category: 'Estrutura',
      tags: ['hr', 'divisória', 'separador']
    },
    { 
      id: 'md-footnote', 
      keys: '[^1]: Nota', 
      action: 'Notas de Rodapé (Footnotes)', 
      context: 'Ideal para colocar referências bibliográficas ou explicações técnicas longas sem quebrar o fluxo de leitura do parágrafo.',
      category: 'Referências',
      tags: ['footnote', 'nota', 'referência']
    },

    // ==========================================
    // MATEMÁTICA E ALERTAS (CALLOUTS)
    // ==========================================
    { 
      id: 'md-latex-inline', 
      keys: '$equação$', 
      action: 'Equação Matemática (Inline)', 
      context: 'Envolva a expressão matemática com cifrão ($) para renderizar algoritmos e fórmulas através do MathJax/LaTeX.',
      category: 'Matemática',
      tags: ['latex', 'math', 'fórmula']
    },
    { 
      id: 'md-latex-block', 
      keys: '$$\nequação\n$$', 
      action: 'Equação em Bloco', 
      context: 'Envolva com duplo cifrão ($$) para gerar uma expressão matemática centralizada e destacada.',
      category: 'Matemática',
      tags: ['latex', 'equation', 'bloco']
    },
    { 
      id: 'md-note', 
      keys: '> [!NOTE]', 
      action: 'Alerta de Nota (Azul)', 
      context: 'Recurso nativo do GitHub. Destaca informações úteis que contextualizam o projeto.',
      category: 'Callouts',
      tags: ['note', 'alerta', 'info']
    },
    { 
      id: 'md-tip', 
      keys: '> [!TIP]', 
      action: 'Alerta de Dica (Verde)', 
      context: 'Transforma a citação numa caixa verde. Um truque rápido ou caminho alternativo para rodar a aplicação.',
      category: 'Callouts',
      tags: ['tip', 'dica', 'truque']
    },
    { 
      id: 'md-important', 
      keys: '> [!IMPORTANT]', 
      action: 'Alerta Importante (Roxo)', 
      context: 'Aviso visual roxo. Algo que não pode ser ignorado para a compilação do projeto dar certo.',
      category: 'Callouts',
      tags: ['important', 'importante', 'obrigatório']
    },
    { 
      id: 'md-warning', 
      keys: '> [!WARNING]', 
      action: 'Alerta de Aviso (Amarelo)', 
      context: 'Caixa amarela. Indica risco de quebrar algo se o passo não for feito corretamente.',
      category: 'Callouts',
      tags: ['warning', 'aviso', 'cuidado']
    },
    { 
      id: 'md-caution', 
      keys: '> [!CAUTION]', 
      action: 'Alerta de Cuidado (Vermelho)', 
      context: 'Caixa de alerta máximo (Ex: "Isso vai apagar o banco de produção").',
      category: 'Callouts',
      tags: ['caution', 'perigo', 'crítico']
    }
  ]
},
  {
  id: 'excel',
  title: 'Excel Corporativo & Operações Avançadas',
  description: 'O guia absoluto, do preenchimento básico à matemática vetorial e automação pesada de dados.',
  icon: 'Database',
  color: 'green',
  gradient: 'from-green-500 to-emerald-600',
  commands: [
    // ==========================================
    // NAVEGAÇÃO E CONTROLE DE INTERFACE
    // ==========================================
    { 
      id: 'excel-jump', 
      keys: 'Ctrl + Setas', 
      action: 'Salto Lógico', 
      context: 'O cursor viaja instantaneamente até a última célula preenchida da matriz atual.',
      category: 'Navegação',
      tags: ['salto', 'movimentação', 'rápido']
    },
    { 
      id: 'excel-jump-select', 
      keys: 'Ctrl + Shift + Setas', 
      action: 'Seleção em Salto', 
      context: 'Seleciona todos os dados do caminho enquanto faz o Salto Lógico.',
      category: 'Seleção',
      tags: ['selecionar', 'matriz', 'caminho']
    },
    { 
      id: 'excel-matrix-select', 
      keys: 'Ctrl + A (ou Ctrl + Shift + Espaço)', 
      action: 'Seleção de Matriz', 
      context: 'O Excel identifica a ilha de dados atual e a seleciona inteira. Apertar duas vezes seleciona a aba toda.',
      category: 'Seleção',
      tags: ['matriz', 'selecionar tudo', 'ilha']
    },
    { 
      id: 'excel-return-focus', 
      keys: 'Ctrl + Backspace', 
      action: 'Foco de Retorno', 
      context: 'Caso você role muito a tela com o mouse, esta tecla puxa sua visão de volta para onde o cursor ativo está.',
      category: 'Navegação',
      tags: ['foco', 'retornar', 'tela']
    },
    { 
      id: 'excel-freeze', 
      keys: 'Alt + W + F + F', 
      action: 'Congelar Painéis', 
      context: 'Trava as linhas acima e colunas à esquerda da célula ativa, mantendo cabeçalhos visíveis enquanto você desce a tela.',
      category: 'Interface',
      tags: ['congelar', 'painéis', 'cabeçalho']
    },
    { 
      id: 'excel-focus-mode', 
      keys: 'Ctrl + F1', 
      action: 'Modo Foco', 
      context: 'Oculta ou exibe a faixa de opções (Ribbon) superior, liberando 20% mais espaço de tela para os dados.',
      category: 'Interface',
      tags: ['foco', 'ribbon', 'tela cheia']
    },
    { 
      id: 'excel-switch-tabs', 
      keys: 'Ctrl + Page Up / Page Down', 
      action: 'Switch de Abas', 
      context: 'Altera velozmente as planilhas (Worksheets) do arquivo ativo.',
      category: 'Navegação',
      tags: ['abas', 'worksheets', 'alternar']
    },
    { 
      id: 'excel-keyboard-focus', 
      keys: 'F6', 
      action: 'Alternar Foco do Teclado', 
      context: 'Alterna o foco do teclado entre a planilha, as abas embaixo e os menus em cima.',
      category: 'Interface',
      tags: ['foco', 'teclado', 'menus']
    },

    // ==========================================
    // INJEÇÃO, EDIÇÃO E LIMPEZA DE DADOS
    // ==========================================
    { 
      id: 'excel-flash', 
      keys: 'Ctrl + E', 
      action: 'Flash Fill (Preenchimento Relâmpago)', 
      context: 'O recurso mais mágico do Excel. Você dá um exemplo de como quer o dado (ex: extrair o primeiro nome de um e-mail), pressiona Ctrl+E, e a IA preenche todas as outras milhares de linhas imitando sua lógica.',
      category: 'Entrada',
      tags: ['flash fill', 'preencher', 'ia', 'automático']
    },
    { 
      id: 'excel-mass-inject', 
      keys: 'Ctrl + Enter', 
      action: 'Injeção em Massa', 
      context: 'Selecione 50 células, digite algo e pressione. Todas as 50 células receberão o mesmo dado ou fórmula simultaneamente.',
      category: 'Entrada',
      tags: ['preencher', 'massa', 'múltiplo']
    },
    { 
      id: 'excel-clone', 
      keys: 'Ctrl + D / Ctrl + R', 
      action: 'Clonar (Down/Right)', 
      context: 'Copia instantaneamente o valor da célula de cima ou da esquerda para a atual.',
      category: 'Edição',
      tags: ['clonar', 'copiar', 'duplicar']
    },
    { 
      id: 'excel-edit-cell', 
      keys: 'F2', 
      action: 'Editar Célula', 
      context: 'Entra na célula ativa para edição limpa sem sobrescrever.',
      category: 'Edição',
      tags: ['editar', 'célula', 'f2']
    },
    { 
      id: 'excel-line-break', 
      keys: 'Alt + Enter', 
      action: 'Quebra Intracelular', 
      context: 'Pula de linha dentro do limite da mesma célula (perfeito para longos textos).',
      category: 'Edição',
      tags: ['quebra', 'linha', 'texto']
    },
    { 
      id: 'excel-remove-duplicates', 
      keys: 'Alt + A + M', 
      action: 'Destruir Duplicatas', 
      context: 'Processa a base de dados em frações de segundo e remove IDs repetidos, garantindo chaves primárias únicas.',
      category: 'Limpeza',
      tags: ['duplicatas', 'remover', 'limpar']
    },
    { 
      id: 'excel-text-to-columns', 
      keys: 'Alt + A + E', 
      action: 'Parsing (Texto para Colunas)', 
      context: 'Abre o motor que "quebra" strings usando delimitadores (como vírgulas de arquivos .csv ou espaços).',
      category: 'Limpeza',
      tags: ['parsing', 'colunas', 'csv', 'separar']
    },
    { 
      id: 'excel-data-validation', 
      keys: 'Alt + A + V + V', 
      action: 'Validação de Dados', 
      context: 'Transforma uma célula comum num Menu Suspenso (Dropdown), restringindo o que o usuário pode digitar.',
      category: 'Validação',
      tags: ['validação', 'dropdown', 'lista']
    },

    // ==========================================
    // FORMATAÇÃO CORPORATIVA E ESTRUTURA
    // ==========================================
    { 
      id: 'excel-format-panel', 
      keys: 'Ctrl + 1', 
      action: 'Painel Arquitetural', 
      context: 'O hub absoluto para configurar bordas, fundos, fontes e tipos de dado.',
      category: 'Formatação',
      tags: ['formato', 'painel', 'células']
    },
    { 
      id: 'excel-type-currency', 
      keys: 'Ctrl + Shift + $', 
      action: 'Tipagem Moeda', 
      context: 'Injeta tipagem Moeda imediatamente.',
      category: 'Tipagem',
      tags: ['moeda', 'dinheiro', 'financeiro']
    },
    { 
      id: 'excel-type-percent', 
      keys: 'Ctrl + Shift + %', 
      action: 'Tipagem Percentual', 
      context: 'Injeta tipagem Percentual (sem decimais).',
      category: 'Tipagem',
      tags: ['porcentagem', 'percentual']
    },
    { 
      id: 'excel-type-date', 
      keys: 'Ctrl + Shift + #', 
      action: 'Tipagem Data Curta', 
      context: 'Injeta tipagem Data Curta (DD/MM/AAAA).',
      category: 'Tipagem',
      tags: ['data', 'calendário', 'formatar']
    },
    { 
      id: 'excel-type-general', 
      keys: 'Ctrl + Shift + ~', 
      action: 'Resetar Tipagem', 
      context: 'Remove qualquer formatação bizarra e devolve o dado ao tipo genérico ("Geral").',
      category: 'Tipagem',
      tags: ['resetar', 'geral', 'limpar formatação']
    },
    { 
      id: 'excel-add-remove', 
      keys: 'Ctrl + - / Ctrl + +', 
      action: 'Eliminar ou Adicionar', 
      context: 'Elimina ou Adiciona instantaneamente linhas/colunas selecionadas.',
      category: 'Estrutura',
      tags: ['linhas', 'colunas', 'excluir', 'inserir']
    },
    { 
      id: 'excel-autofit', 
      keys: 'Alt + H + O + I', 
      action: 'Auto-Fit Mágico', 
      context: 'Expande ou contrai a coluna inteira para caber perfeitamente no maior texto inserido nela.',
      category: 'Estrutura',
      tags: ['autofit', 'ajustar', 'largura']
    },
    { 
      id: 'excel-hide', 
      keys: 'Ctrl + 9 / Ctrl + 0', 
      action: 'Ocultar Linha/Coluna', 
      context: 'Esconde (Ocultar) a linha inteira ou coluna inteira onde você está, limpando o visual sem deletar dados.',
      category: 'Estrutura',
      tags: ['ocultar', 'esconder', 'linhas', 'colunas']
    },
    { 
      id: 'excel-paste-special', 
      keys: 'Ctrl + Alt + V', 
      action: 'Colar Especial', 
      context: 'Um menu crítico. Permite copiar uma fórmula e colar do outro lado como "Apenas Valores" ou transpor matrizes.',
      category: 'Edição',
      tags: ['colar', 'especial', 'valores', 'transpor']
    },

    // ==========================================
    // MOTOR MATEMÁTICO E ÁLGEBRA LINEAR
    // ==========================================
    { 
      id: 'excel-sum', 
      keys: 'Alt + =', 
      action: 'Autossoma Espacial', 
      context: 'A função mais rápida do Excel. Ele identifica as células numéricas agrupadas acima ou à esquerda e cria a fórmula =SOMA() sozinha.',
      category: 'Matemática',
      tags: ['soma', 'autossoma', 'fórmula']
    },
    { 
      id: 'excel-abs', 
      keys: 'F4 (Durante Edição)', 
      action: 'Absolute Lock ($)', 
      context: 'O botão de sobrevivência. Alterna travas de referência para garantir que sua fórmula não se quebre quando for arrastada. (A1 → $A$1 → A$1 → $A1).',
      category: 'Matemática',
      tags: ['absoluto', 'referência', 'trava', 'f4']
    },
    { 
      id: 'excel-stats-basic', 
      keys: '=MÉDIA() / =MÁXIMO() / =MÍNIMO()', 
      action: 'Estatística Descritiva', 
      context: 'Trindade básica de estatística descritiva.',
      category: 'Estatística',
      tags: ['média', 'máximo', 'mínimo']
    },
    { 
      id: 'excel-counta', 
      keys: '=CONT.VALORES()', 
      action: 'Contar Valores', 
      context: 'Conta todas as células que não estão vazias (ótimo para saber quantos registros tem na base).',
      category: 'Estatística',
      tags: ['contar', 'registros', 'vazios']
    },
    { 
      id: 'excel-sumifs', 
      keys: '=SOMASE() / =CONT.SE()', 
      action: 'Soma/Contagem Condicional', 
      context: 'Realiza totalizações mas filtra antes usando critérios (Ex: "Soma só se a coluna Status for igual a \'Pago\'").',
      category: 'Estatística',
      tags: ['somase', 'cont.se', 'condicional']
    },
    { 
      id: 'excel-array', 
      keys: 'Ctrl + Shift + Enter', 
      action: 'Invocação de Array', 
      context: 'Transforma uma fórmula normal numa operação matricial usando {chaves}. (Nota: O Microsoft 365 moderno usa "Spill Arrays" e não precisa mais desse atalho, mas é vital para legacy).',
      category: 'Matrizes',
      tags: ['array', 'matriz', 'chaves']
    },
    { 
      id: 'excel-sumproduct', 
      keys: '=SOMARPRODUTO()', 
      action: 'Somarproduto', 
      context: 'O verdadeiro tanque de guerra. Multiplica matrizes vetoriais linha a linha e depois soma o resultado total. Perfeito para médias ponderadas complexas.',
      category: 'Matrizes',
      tags: ['somarproduto', 'matriz', 'média ponderada']
    },
    { 
      id: 'excel-unique', 
      keys: '=ÚNICO(matriz)', 
      action: 'Extrair Valores Únicos', 
      context: 'Função M365 que varre uma base inteira e gera um array apenas com registros exclusivos.',
      category: 'Matrizes',
      tags: ['único', 'exclusivos', 'distintos']
    },
    { 
      id: 'excel-filter-fn', 
      keys: '=FILTRO(matriz; logica)', 
      action: 'Filtrar Matriz', 
      context: 'Extrai dados de uma tabela para outro lugar se eles passarem num teste lógico (sem precisar usar botões).',
      category: 'Matrizes',
      tags: ['filtro', 'matriz', 'lógica']
    },

    // ==========================================
    // ENGENHARIA LÓGICA E RELACIONAL
    // ==========================================
    { 
      id: 'excel-vlookup', 
      keys: '=PROCV()', 
      action: 'VLOOKUP (Procv)', 
      context: 'O rei deposto do Excel. Busca um ID na primeira coluna de uma matriz e retorna colunas à direita (Equivalente ao LEFT JOIN do SQL).',
      category: 'Pesquisa',
      tags: ['procv', 'vlookup', 'busca', 'join']
    },
    { 
      id: 'excel-xlookup', 
      keys: '=PROCX()', 
      action: 'XLOOKUP (Procx)', 
      context: 'O novo imperador. Pesquisa em qualquer direção, não quebra se inserirem colunas no meio, e já trata erros nativamente. Substitui PROCV, PROCH e ÍNDICE+CORRESP.',
      category: 'Pesquisa',
      tags: ['procx', 'xlookup', 'moderno', 'busca']
    },
    { 
      id: 'excel-index-match', 
      keys: '=ÍNDICE(matriz; CORRESP())', 
      action: 'Índice + Corresp', 
      context: 'A dupla letal das versões antigas. O CORRESP acha a "coordenada Y" do dado, e o ÍNDICE usa essa coordenada para extrair a informação com extrema flexibilidade.',
      category: 'Pesquisa',
      tags: ['índice', 'corresp', 'busca', 'flexível']
    },
    { 
      id: 'excel-if', 
      keys: '=SE(teste; verde; vermelho)', 
      action: 'Função Condicional', 
      context: 'A função condicional base de qualquer linguagem de programação implementada em células.',
      category: 'Lógica',
      tags: ['se', 'if', 'condição']
    },
    { 
      id: 'excel-iferror', 
      keys: '=SEERRO(formula; "Erro Log")', 
      action: 'Tratamento de Erros', 
      context: 'Envelopa funções instáveis. Se o PROCV der o feio #N/D, o SEERRO absorve o impacto e retorna um texto limpo ou zero.',
      category: 'Lógica',
      tags: ['seerro', 'iferror', 'erros']
    },
    { 
      id: 'excel-eval', 
      keys: 'F9 (Com trecho destacado)', 
      action: 'Eval (Depurador em Tempo Real)', 
      context: 'Roda apenas o pedaço da conta que você selecionou e te mostra o resultado na hora. (Aperte Esc para não estragar a fórmula).',
      category: 'Depuração',
      tags: ['eval', 'debug', 'f9', 'testar']
    },
    { 
      id: 'excel-trace', 
      keys: 'Ctrl + [', 
      action: 'Radar Precedente', 
      context: 'Descobre e seleciona exatamente qual célula em outra aba está enviando dados para a sua fórmula atual.',
      category: 'Auditoria',
      tags: ['tracer', 'precedente', 'origem']
    },

    // ==========================================
    // MODELAGEM VISUAL E DASHBOARDS
    // ==========================================
    { 
      id: 'excel-cond-format', 
      keys: 'Alt + H + L', 
      action: 'Menu de Formatação Condicional', 
      context: 'Gatilho mestre para o Menu de Formatação Condicional. (Escalas de Cor, Barras de Dados e Fórmulas Condicionais).',
      category: 'Dashboard',
      tags: ['formatação', 'condicional', 'cores', 'dashboard']
    },
    { 
      id: 'excel-table', 
      keys: 'Ctrl + Alt + T', 
      action: 'Tabela Arquitetural', 
      context: 'Regra de Ouro. Toda base deve virar uma "Tabela" oficial antes de criar um Dashboard, pois ela absorve novas linhas automaticamente.',
      category: 'Dashboard',
      tags: ['tabela', 'oficial', 'dashboard']
    },
    { 
      id: 'excel-pivot', 
      keys: 'Alt + N + V', 
      action: 'Tabela Dinâmica (Pivot Table)', 
      context: 'A máquina de sumarização. Constrói agrupamentos por Drag-and-Drop, permitindo somar lucros por continente e semestre em 15 segundos.',
      category: 'Dashboard',
      tags: ['pivot', 'dinâmica', 'sumarizar']
    },
    { 
      id: 'excel-chart', 
      keys: 'F11', 
      action: 'Gráfico Dedicado', 
      context: 'Cria um Gráfico dedicado instantâneo em uma aba à parte.',
      category: 'Dashboard',
      tags: ['gráfico', 'chart', 'aba']
    },
    { 
      id: 'excel-chart-float', 
      keys: 'Alt + F1', 
      action: 'Gráfico Flutuante', 
      context: 'Gera o mesmo gráfico, porém "flutuando" lado a lado com os dados.',
      category: 'Dashboard',
      tags: ['gráfico', 'flutuante', 'dashboard']
    },

    // ==========================================
    // GOD MODE: AUTOMAÇÃO E ETL
    // ==========================================
    { 
      id: 'excel-power-query', 
      keys: 'Alt + A + P + T', 
      action: 'Carregar no Power Query', 
      context: 'Absorve a matriz para a "Matrix" do Excel. O Power Query opera em linguagem M e cria robôs que limpam acentos, mudam formatos e fundem tabelas antes mesmo do dado "cair" na aba do usuário.',
      category: 'Automação',
      tags: ['power query', 'etl', 'limpeza', 'matrix']
    },
    { 
      id: 'excel-refresh-all', 
      keys: 'Alt + A + R + A', 
      action: 'Refresh All (Atualizar Tudo)', 
      context: 'O botão de "Rodar Relatório". Executa todos os Power Queries e Macros da planilha, buscando as atualizações do banco de dados na hora.',
      category: 'Automação',
      tags: ['refresh', 'atualizar', 'relatório']
    },
    { 
      id: 'excel-python', 
      keys: 'Ctrl + Alt + Shift + P', 
      action: 'Runtime de Python', 
      context: 'Abre o terminal isolado. Substitui as complexidades matemáticas do Excel puro para usar DataFrames do Pandas ou Arrays do NumPy.',
      category: 'Automação',
      tags: ['python', 'pandas', 'numpy', 'script']
    },
    { 
      id: 'excel-vba', 
      keys: 'Alt + F11', 
      action: 'VBA IDE', 
      context: 'O portal para o backend legado. Abre o Editor Visual Basic onde a lógica de loops (For, While) e conexão de arquivos locais opera na veia do software.',
      category: 'Automação',
      tags: ['vba', 'macro', 'backend', 'ide']
    },
    { 
      id: 'excel-macros', 
      keys: 'Alt + F8', 
      action: 'Central de Macros', 
      context: 'Interface de lançamento das automações. Permite disparar robôs que salvam PDFs na rede e enviam relatórios por e-mail no Outlook em um clique.',
      category: 'Automação',
      tags: ['macros', 'robôs', 'automação']
    },

    // ==========================================
    // AUDITORIA EXTREMA E GOVERNANÇA
    // ==========================================
    { 
      id: 'excel-eval-step', 
      keys: 'Alt + M + V', 
      action: 'Avaliar Fórmula (Debugger)', 
      context: 'Abre a janela de avaliação passo a passo. O Excel executa a fórmula de dentro para fora, permitindo rastrear exatamente onde uma lógica complexa está falhando.',
      category: 'Auditoria',
      tags: ['avaliar', 'debugger', 'passo a passo']
    },
    { 
      id: 'excel-watch-window', 
      keys: 'Alt + M + W', 
      action: 'Janela de Inspeção (Watch Window)', 
      context: 'Cria um painel flutuante de monitoramento de variáveis. Permite vigiar o resultado de células cruciais enquanto você trabalha em outras abas.',
      category: 'Auditoria',
      tags: ['watch', 'inspeção', 'monitorar']
    },
    { 
      id: 'excel-audit-jump', 
      keys: 'Ctrl + [ / Ctrl + ]', 
      action: 'Salto Lógico de Auditoria', 
      context: 'Ferramenta forense. Pula imediatamente para a célula que fornece dados para sua fórmula (Precedente) ou para as células que dependem dela (Dependente).',
      category: 'Auditoria',
      tags: ['salto', 'auditoria', 'forense', 'dependente']
    },
    { 
      id: 'excel-protect', 
      keys: 'Alt + R + P + S', 
      action: 'Proteger Planilha', 
      context: 'Bloqueia células específicas com criptografia, impedindo que usuários finais destruam o modelo de dados ou sobrescrevam fórmulas.',
      category: 'Proteção',
      tags: ['proteger', 'bloquear', 'segurança']
    },
    { 
      id: 'excel-xray', 
      keys: 'Ctrl + ~ (Til)', 
      action: 'Modo Raio-X', 
      context: 'Oculta todos os valores numéricos e revela todas as fórmulas em texto puro simultaneamente na tela. Essencial para revisões de arquitetura.',
      category: 'Proteção',
      tags: ['raio-x', 'fórmulas', 'revelar']
    },
    { 
      id: 'excel-comments', 
      keys: 'Ctrl + Shift + O', 
      action: 'Selecionar Comentários', 
      context: 'Captura todas as células que possuem anotações ou threads de revisão da equipe (Code Review no Excel).',
      category: 'Auditoria',
      tags: ['comentários', 'revisão', 'code review']
    },

    // ==========================================
    // INTEGRAÇÃO CLOUD E OFFICE SCRIPTS
    // ==========================================
    { 
      id: 'excel-power-automate', 
      keys: 'Alt + A + W + Q', 
      action: 'Power Automate Connect', 
      context: 'Transforma a planilha em um gatilho Cloud. Permite executar fluxos do Power Automate (enviar e-mails, salvar arquivos no SharePoint) disparados por uma célula.',
      category: 'Integração',
      tags: ['automate', 'cloud', 'gatilho']
    },
    { 
      id: 'excel-web-request', 
      keys: '=SERVIÇOWEB(url)', 
      action: 'Request GET Nativo', 
      context: 'Faz uma chamada HTTP silenciosa para uma URL de API pública e retorna o JSON ou XML bruto diretamente na célula.',
      category: 'API',
      tags: ['request', 'api', 'http', 'json']
    },
    { 
      id: 'excel-xml-scrape', 
      keys: '=FILTROXML(xml; xpath)', 
      action: 'Scraping Direto', 
      context: 'Trabalha em dupla com o SERVIÇOWEB. Utiliza a sintaxe XPath para extrair um valor específico de dentro do XML retornado pela API.',
      category: 'API',
      tags: ['filtroxml', 'scraping', 'xpath']
    },
    { 
      id: 'excel-web-data', 
      keys: 'Alt + A + P + W', 
      action: 'Obter Dados da Web (Data Fetching)', 
      context: 'Abre um navegador embarcado para realizar Web Scraping. O Excel identifica tabelas HTML em sites e conecta a base de dados em tempo real.',
      category: 'API',
      tags: ['web scraping', 'fetching', 'html']
    },

    // ==========================================
    // ENGENHARIA DE TEXTO E CRONOLOGIA
    // ==========================================
    { 
      id: 'excel-textjoin', 
      keys: '=UNIRTEXTO(delimitador; ignorar_vazio; matriz)', 
      action: 'Unirtexto', 
      context: 'O substituto moderno do CONCATENAR. Permite fundir 100 células de uma vez, ignorando as vazias e inserindo vírgulas ou barras entre elas automaticamente.',
      category: 'Texto',
      tags: ['unirtexto', 'concatenar', 'fundir']
    },
    { 
      id: 'excel-textsplit', 
      keys: '=DIVIDIRTEXTO(texto; delimitador)', 
      action: 'Dividirtexto', 
      context: 'A função matricial definitiva (Office 365). Quebra um texto longo em múltiplas células vizinhas usando os delimitadores escolhidos.',
      category: 'Texto',
      tags: ['dividirtexto', 'quebrar', 'matriz']
    },
    { 
      id: 'excel-trim', 
      keys: '=ARRUMAR(texto)', 
      action: 'Arrumar (TRIM)', 
      context: 'A função mais importante de Data Cleaning. Remove todos os espaços duplos invisíveis no meio ou no final de uma string que vieram de importações de banco de dados sujas.',
      category: 'Texto',
      tags: ['arrumar', 'trim', 'limpar', 'espaços']
    },
    { 
      id: 'excel-proper', 
      keys: '=PRI.MAIÚSCULA() / =MAIÚSCULA()', 
      action: 'Padronizar Case', 
      context: 'Padroniza o case das strings (excelente para higienizar listas de nomes próprios e CPFs).',
      category: 'Texto',
      tags: ['maiúscula', 'case', 'higienizar']
    },
    { 
      id: 'excel-eomonth', 
      keys: '=FIMMÊS(data_inicial; meses)', 
      action: 'Fimmês', 
      context: 'Retorna o último dia exato (dia 28, 30 ou 31) do mês em questão. Vital para projetar fluxos de caixa e vencimentos corporativos.',
      category: 'Datas',
      tags: ['fimmês', 'vencimento', 'fluxo']
    },
    { 
      id: 'excel-workday', 
      keys: '=DIATRABALHO.INTL(data; dias_prazo; [fim_semana]; [feriados])', 
      action: 'Dia de Trabalho Internacional', 
      context: 'Calcula a data de entrega de um projeto somando apenas dias úteis, ignorando feriados personalizados e finais de semana específicos da sua região.',
      category: 'Datas',
      tags: ['diatrabalho', 'úteis', 'prazo']
    },
    { 
      id: 'excel-datedif', 
      keys: '=DATADIF(data_inicio; data_fim; "Y" ou "M")', 
      action: 'Datadif', 
      context: 'Uma função "fantasma" do Excel (não aparece no autocomplete). Calcula a diferença exata em Anos, Meses ou Dias entre duas datas (perfeito para cálculo de idade e churn).',
      category: 'Datas',
      tags: ['datadif', 'diferença', 'idade', 'fantasma']
    },

    // ==========================================
    // SIMULAÇÃO DINÂMICA E SOLVER
    // ==========================================
    { 
      id: 'excel-goal-seek', 
      keys: 'Alt + A + W + G', 
      action: 'Atingir Meta (Goal Seek)', 
      context: 'O Excel roda cálculos cíclicos de engenharia reversa para descobrir qual deve ser o valor inicial na "Célula A" para que a "Fórmula da Célula C" resulte exatamente em um valor estipulado.',
      category: 'Simulação',
      tags: ['goal seek', 'meta', 'reversa']
    },
    { 
      id: 'excel-data-table', 
      keys: 'Alt + A + W + T', 
      action: 'Tabela de Dados (Simulação)', 
      context: 'Cria uma matriz de testes de sensibilidade (estilo Monte Carlo básico). Testa milhares de variações de taxas de juros e prazos numa mesma fórmula instantaneamente.',
      category: 'Simulação',
      tags: ['tabela', 'sensibilidade', 'simulação']
    },
    { 
      id: 'excel-scenario', 
      keys: 'Alt + A + W + S', 
      action: 'Gerenciador de Cenários', 
      context: 'Salva "fotografias" de variáveis (Cenário Otimista, Realista e Pessimista). Com um clique, a planilha inteira recalcula a arquitetura financeira com base no cenário carregado.',
      category: 'Simulação',
      tags: ['cenários', 'fotografias', 'recalcular']
    },
    { 
      id: 'excel-solver', 
      keys: 'Alt + A + Y + 2', 
      action: 'Invocação do Solver', 
      context: 'O Suplemento definitivo de pesquisa operacional. Ao invés de testar um valor, o Solver testa múltiplas variáveis ao mesmo tempo, respeitando restrições matemáticas lógicas.',
      category: 'Otimização',
      tags: ['solver', 'otimização', 'restrições']
    }
  ]
},
  {
    id: 'terminal',
    title: 'Terminal Integrado',
    description: 'Operações táticas na linha de comando para não tirar a mão do teclado',
    icon: 'Terminal',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-600',
    commands: TERMINAL_COMMANDS  // Vazio porque usamos TERMINAL_COMMANDS separado
  }
];
