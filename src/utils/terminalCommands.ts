import { TerminalHistoryItem } from '../types';
import { MODULES } from '../data/commands';
import { GIT_WORKFLOW } from '../data/gitWorkflow';

export const AVAILABLE_COMMANDS = [
  'help', 'clear', 'whoami', 'modules', 'module', 
  'sistema', 'vscode', 'git', 'markdown', 'excel',
  'git-workflow', 'search', 'random', 'date', 'exit'
];

const createOutput = (text: string): TerminalHistoryItem => ({ type: 'output', text });
const createSystem = (text: string): TerminalHistoryItem => ({ type: 'system', text });
const createError = (text: string): TerminalHistoryItem => ({ type: 'error', text });
const createSuccess = (text: string): TerminalHistoryItem => ({ type: 'success', text });
const createInput = (text: string): TerminalHistoryItem => ({ type: 'input', text });

export const executeCommand = (
  input: string, 
  currentModule: string,
  setActiveModule: (module: string) => void
): TerminalHistoryItem[] => {
  const cmd = input.toLowerCase().trim();
  const args = cmd.split(' ');
  const command = args[0];
  
  switch (command) {
    case 'help':
      return [createOutput(`Comandos disponíveis:
  help              - Mostra esta ajuda
  clear             - Limpa o terminal
  whoami            - Informações do autor
  modules           - Lista todos os módulos
  module <nome>     - Ativa módulo específico
  sistema           - Ativa módulo Sistema
  vscode            - Ativa módulo VS Code
  git               - Ativa módulo Git
  markdown          - Ativa módulo Markdown
  excel             - Ativa módulo Excel
  git-workflow      - Mostra fluxo de trabalho Git
  search <termo>    - Busca comandos
  random            - Comando aleatório
  date              - Data e hora atual
  exit              - Encerra sessão`)];

    case 'clear':
      return [];

    case 'whoami':
      return [
        createOutput('Hiann Alexander M. de Oliveira'),
        createOutput('Back-end Developer | AI & Computer Vision'),
        createOutput('Goiânia, GO • 2026'),
        createOutput(''),
        createOutput('Autor do Guia Definitivo 5.0'),
        createOutput('Especialista em Produtividade & Setup para Devs')
      ];

    case 'modules':
      return MODULES.map(m => createOutput(`${m.id.padEnd(12)} - ${m.title} (${m.commands.length} comandos)`));

    case 'module':
      if (args[1]) {
        const moduleId = args[1].toLowerCase();
        const module = MODULES.find(m => m.id === moduleId);
        if (module) {
          setActiveModule(moduleId);
          return [createSuccess(`Módulo "${module.title}" ativado.`)];
        }
        return [createError(`Módulo "${args[1]}" não encontrado.`)];
      }
      return [createError('Uso: module <nome_do_modulo>')];

    case 'sistema':
      setActiveModule('sistema');
      return [createSuccess('Módulo Sistema & Produtividade ativado.')];

    case 'vscode':
      setActiveModule('vscode');
      return [createSuccess('Módulo VS Code & Desenvolvimento ativado.')];

    case 'git':
      setActiveModule('git');
      return [createSuccess('Módulo Versionamento Git ativado.')];

    case 'markdown':
      setActiveModule('markdown');
      return [createSuccess('Módulo Documentação Markdown ativado.')];

    case 'excel':
      setActiveModule('excel');
      return [createSuccess('Módulo Excel Corporativo ativado.')];

    case 'git-workflow':
      return GIT_WORKFLOW.flatMap(step => [
        createSystem(`Fase ${step.phase}: ${step.title}`),
        createOutput(step.description),
        ...step.commands.map(cmd => cmd.startsWith('#') ? createSystem(cmd) : createOutput(cmd)),
        createOutput('')
      ]);

    case 'search':
      if (args[1]) {
        const term = args.slice(1).join(' ').toLowerCase();
        const results = MODULES.flatMap(m => 
          m.commands.filter(c => 
            c.action.toLowerCase().includes(term) || 
            c.keys.toLowerCase().includes(term) ||
            c.context.toLowerCase().includes(term)
          ).map(c => `[${m.id}] ${c.keys} - ${c.action}`)
        );
        
        if (results.length === 0) {
          return [createError(`Nenhum comando encontrado para "${term}"`)];
        }
        return [
          createSuccess(`Encontrados ${results.length} resultados:`),
          ...results.map(r => createOutput(r))
        ];
      }
      return [createError('Uso: search <termo_de_busca>')];

    case 'random':
      const allCommands = MODULES.flatMap(m => m.commands);
      const random = allCommands[Math.floor(Math.random() * allCommands.length)];
      const randomModule = MODULES.find(m => m.commands.includes(random));
      return [
        createSystem('Comando aleatório do dia:'),
        createOutput(`[${randomModule?.id}] ${random.keys}`),
        createOutput(`Ação: ${random.action}`),
        createOutput(`Contexto: ${random.context}`)
      ];

    case 'date':
      return [createOutput(new Date().toLocaleString('pt-BR', { 
        dateStyle: 'full', 
        timeStyle: 'long' 
      }))];

    case 'exit':
      return [
        createSystem('Encerrando sessão...'),
        createOutput('Até logo! 👋')
      ];

    default:
      return [createError(`Comando não encontrado: "${input}". Digite "help" para ver os comandos disponíveis.`)];
  }
};