import { Command } from '../types';

export const TERMINAL_COMMANDS: Command[] = [
  // BASH / POWERSHELL
  {
    id: 'bash-ctrl-l',
    keys: 'Ctrl + L',
    action: 'Limpar Terminal',
    context: 'Varre poluição visual de logs anteriores, disponibilizando console limpo',
    category: 'Bash/PowerShell',
    tags: ['clear', 'limpar', 'console']
  },
  {
    id: 'bash-ctrl-c',
    keys: 'Ctrl + C',
    action: 'Matar Processo (Kill/SIGINT)',
    context: 'Interrompe forçosamente script, servidor local ou container em execução',
    category: 'Bash/PowerShell',
    tags: ['kill', 'interromper', 'processo']
  },
  {
    id: 'bash-arrow-up',
    keys: '↑ (Seta para Cima)',
    action: 'Navegação de Histórico',
    context: 'Recupera cronologicamente últimos comandos inseridos',
    category: 'Bash/PowerShell',
    tags: ['histórico', 'navegar', 'anterior']
  },
  {
    id: 'bash-tab',
    keys: 'Tab',
    action: 'Autocompletar Caminhos',
    context: 'Preenche diretórios e nomes de arquivo baseados nas primeiras letras',
    category: 'Bash/PowerShell',
    tags: ['autocomplete', 'caminho', 'preencher']
  },
  
  // CMD - ATALHOS NATIVOS
  {
    id: 'cmd-f7',
    keys: 'F7',
    action: 'Histórico Visual de Comandos',
    context: 'Abre janela pop-up listando todos comandos da sessão atual',
    category: 'CMD Atalhos',
    tags: ['histórico', 'visual', 'popup']
  },
  {
    id: 'cmd-f3',
    keys: 'F3',
    action: 'Repetir Último Comando',
    context: 'Preenche linha atual com último comando executado',
    category: 'CMD Atalhos',
    tags: ['repetir', 'último', 'comando']
  },
  {
    id: 'cmd-esc',
    keys: 'Esc',
    action: 'Limpar a Linha Atual',
    context: 'Apaga linha inteira instantaneamente sem segurar Backspace',
    category: 'CMD Atalhos',
    tags: ['limpar', 'linha', 'apagar']
  },
  {
    id: 'cmd-alt-enter',
    keys: 'Alt + Enter',
    action: 'Modo Tela Cheia (Fullscreen)',
    context: 'Alterna CMD para tela cheia real, removendo bordas da janela',
    category: 'CMD Atalhos',
    tags: ['fullscreen', 'tela cheia', 'foco']
  },
  
  // NAVEGAÇÃO E ARQUIVOS
  {
    id: 'cmd-dir',
    keys: 'dir',
    action: 'Listar Diretório',
    context: 'Mostra arquivos da pasta atual. Use /a para ocultos, /s para subpastas',
    category: 'Arquivos',
    tags: ['listar', 'diretório', 'arquivos']
  },
  {
    id: 'cmd-cd',
    keys: 'cd ou chdir',
    action: 'Mudar de Diretório',
    context: 'Entra em pastas. cd .. volta uma pasta. Use /d para mudar unidade',
    category: 'Arquivos',
    tags: ['navegar', 'pasta', 'diretório']
  },
  {
    id: 'cmd-mkdir',
    keys: 'mkdir (ou md)',
    action: 'Criar Pasta',
    context: 'Cria novo diretório. Ex: mkdir src\\controllers',
    category: 'Arquivos',
    tags: ['criar', 'pasta', 'diretório']
  },
  {
    id: 'cmd-rmdir',
    keys: 'rmdir (ou rd)',
    action: 'Remover Pasta',
    context: 'Apaga pasta. Use /s /q para apagar à força silenciosamente',
    category: 'Arquivos',
    tags: ['remover', 'apagar', 'pasta']
  },
  {
    id: 'cmd-del',
    keys: 'del',
    action: 'Deletar Arquivo',
    context: 'Apaga arquivos específicos. Ex: del *.log para todos os logs',
    category: 'Arquivos',
    tags: ['deletar', 'apagar', 'arquivo']
  },
  {
    id: 'cmd-type',
    keys: 'type',
    action: 'Ler Arquivo no Terminal',
    context: 'Equivalente ao cat do Linux. Imprime conteúdo na tela',
    category: 'Arquivos',
    tags: ['ler', 'conteúdo', 'arquivo']
  },
  
  // GESTÃO DE PROCESSOS
  {
    id: 'cmd-tasklist',
    keys: 'tasklist',
    action: 'Listar Processos Ativos',
    context: 'Mostra programas e serviços rodando com consumo de memória',
    category: 'Processos',
    tags: ['processos', 'listar', 'memória']
  },
  {
    id: 'cmd-taskkill',
    keys: 'taskkill',
    action: 'Matar Processo',
    context: 'Encerra programa travado à força. Ex: taskkill /F /IM node.exe',
    category: 'Processos',
    tags: ['matar', 'processo', 'forçar']
  },
  {
    id: 'cmd-systeminfo',
    keys: 'systeminfo',
    action: 'Diagnóstico do Sistema',
    context: 'Relatório completo: formatação, tempo ligado, RAM, processador',
    category: 'Processos',
    tags: ['diagnóstico', 'sistema', 'hardware']
  },
  
  // REDE
  {
    id: 'cmd-ipconfig',
    keys: 'ipconfig',
    action: 'Configurações de IP',
    context: 'Mostra IP local. Use /flushdns para limpar cache DNS',
    category: 'Rede',
    tags: ['ip', 'rede', 'dns']
  },
  {
    id: 'cmd-ping',
    keys: 'ping',
    action: 'Testar Conectividade',
    context: 'Verifica se site/servidor está online. Use -t para ping infinito',
    category: 'Rede',
    tags: ['ping', 'conectividade', 'teste']
  },
  {
    id: 'cmd-netstat',
    keys: 'netstat -ano',
    action: 'Monitor de Portas',
    context: 'Lista portas abertas com PID. Ótimo para descobrir quem usa porta 8080/3306',
    category: 'Rede',
    tags: ['portas', 'monitor', 'rede']
  },
  
  // PIPES E REDIRECIONAMENTO
  {
    id: 'cmd-pipe',
    keys: '| (Pipe)',
    action: 'Conectar Comandos',
    context: 'Pega resultado do primeiro comando e joga no segundo',
    category: 'Power User',
    tags: ['pipe', 'conectar', 'redirecionar']
  },
  {
    id: 'cmd-export',
    keys: '> e >>',
    action: 'Exportar para Arquivo',
    context: '> cria/sobrescreve, >> adiciona ao final sem apagar',
    category: 'Power User',
    tags: ['exportar', 'arquivo', 'salvar']
  },
  
  // TRUQUES SEM MOUSE
  {
    id: 'cmd-cls',
    keys: 'cls',
    action: 'Limpar Tela (Clear Screen)',
    context: 'Comando nativo do CMD para limpar poluição visual',
    category: 'Truques',
    tags: ['limpar', 'tela', 'cls']
  },
  {
    id: 'cmd-f1',
    keys: 'F1',
    action: 'Digitar Caractere por Caractere',
    context: 'Refaz último comando inserindo uma letra de cada vez',
    category: 'Truques',
    tags: ['caractere', 'digitar', 'corrigir']
  },
  {
    id: 'cmd-ctrl-m',
    keys: 'Ctrl + M',
    action: 'Modo de Marcação (Mark Mode)',
    context: 'Congela terminal para navegar e selecionar textos sem mouse',
    category: 'Truques',
    tags: ['marcação', 'selecionar', 'copiar']
  },
  {
    id: 'cmd-clip',
    keys: 'clip',
    action: 'Enviar para Área de Transferência',
    context: 'Joga saída direto para Ctrl+C do Windows. Ex: ipconfig | clip',
    category: 'Truques',
    tags: ['clipboard', 'copiar', 'área de transferência']
  },
  
  // MANIPULAÇÃO AVANÇADA
  {
    id: 'cmd-tree',
    keys: 'tree',
    action: 'Árvore de Diretórios Visual',
    context: 'Desenha mapa estrutural em formato de árvore. Use /f para arquivos',
    category: 'Avançado',
    tags: ['árvore', 'estrutura', 'visual']
  },
  {
    id: 'cmd-ren',
    keys: 'ren (ou rename)',
    action: 'Renomear em Massa',
    context: 'Renomeia com curingas. Ex: ren *.txt *.md',
    category: 'Avançado',
    tags: ['renomear', 'massa', 'curinga']
  },
  {
    id: 'cmd-robocopy',
    keys: 'robocopy',
    action: 'Cópia Robusta',
    context: 'Imune a quedas de rede, ignora corrompidos. Ex: robocopy C:\\Origem D:\\Backup /MIR',
    category: 'Avançado',
    tags: ['cópia', 'backup', 'robusto']
  },
  
  // REDES NÍVEL HARD
  {
    id: 'cmd-tracert',
    keys: 'tracert',
    action: 'Trace Route',
    context: 'Mostra por quais servidores/roteadores passa até destino final',
    category: 'Rede Hard',
    tags: ['trace', 'rota', 'roteadores']
  },
  {
    id: 'cmd-nslookup',
    keys: 'nslookup',
    action: 'Pesquisa de DNS',
    context: 'Interroga servidores DNS para verificar propagação de domínio',
    category: 'Rede Hard',
    tags: ['dns', 'pesquisa', 'domínio']
  },
  {
    id: 'cmd-getmac',
    keys: 'getmac',
    action: 'Endereço Físico (MAC)',
    context: 'Retorna endereço MAC da placa de rede. Útil para firewalls corporativos',
    category: 'Rede Hard',
    tags: ['mac', 'endereço', 'físico']
  },
  
  // MANUTENÇÃO SISTEMA
  {
    id: 'cmd-sfc',
    keys: 'sfc /scannow',
    action: 'System File Checker',
    context: 'Varre arquivos vitais do Windows e substitui corrompidos',
    category: 'Manutenção',
    tags: ['sistema', 'arquivos', 'reparar']
  },
  {
    id: 'cmd-chkdsk',
    keys: 'chkdsk /f /r',
    action: 'Check Disk',
    context: 'Analisa HD/SSD por setores defeituosos e tenta reparar',
    category: 'Manutenção',
    tags: ['disco', 'reparar', 'setores']
  },
  {
    id: 'cmd-shutdown',
    keys: 'shutdown',
    action: 'Desligamento e Agendamento',
    context: '/s /t 3600 agenda em 1h, /a cancela, /r /fw /t 0 entra na BIOS',
    category: 'Manutenção',
    tags: ['desligar', 'agendar', 'bios']
  }
];