export interface Command {
  id: string;
  keys: string;
  action: string;
  context: string;
  category?: string;
  tags?: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  commands: Command[];
}

export interface TerminalHistoryItem {
  type: 'input' | 'output' | 'error' | 'system' | 'success';
  text: string;
  timestamp?: number;
}

export interface GitWorkflowStep {
  phase: number;
  title: string;
  description: string;
  commands: string[];
}

export interface MarkdownSyntax {
  element: string;
  syntax: string;
  example: string;
  description: string;
}

export interface ExcelFunction {
  category: string;
  functions: {
    name: string;
    syntax: string;
    description: string;
    shortcut?: string;
  }[];
}

export type Theme = 'dark' | 'light';
export type ModuleId = 'sistema' | 'vscode' | 'git' | 'markdown' | 'excel';