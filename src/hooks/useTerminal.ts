import { useState, useCallback, useRef, useEffect } from 'react';
import { TerminalHistoryItem } from '../types';
import { executeCommand } from '../utils/terminalCommands';

const WELCOME_MESSAGE: TerminalHistoryItem[] = [
  { type: 'system', text: '╔══════════════════════════════════════════════════════════╗' },
  { type: 'system', text: '║  Guia Definitivo 5.0                                     ║' },
  { type: 'system', text: '║  Hiann Alexander M. de Oliveira                          ║' },
  { type: 'system', text: '║  Back-end Developer | AI & Computer Vision               ║' },
  { type: 'system', text: '║  Goiania, GO • 2026                                      ║' },
  { type: 'system', text: '╚══════════════════════════════════════════════════════════╝' },
  { type: 'output', text: '' },
  { type: 'output', text: 'Sistema inicializado. Digite "help" para comandos disponiveis.' },
  { type: 'output', text: '' }
];

export const useTerminal = (setActiveModule: (module: string) => void, isOpen: boolean) => {
  const [history, setHistory] = useState<TerminalHistoryItem[]>(WELCOME_MESSAGE);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  // Reset history when opening
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory(WELCOME_MESSAGE);
    }
  }, [isOpen, history.length]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory: TerminalHistoryItem[] = [
      ...history,
      { type: 'input', text: input }
    ];

    const results = executeCommand(input, '', setActiveModule);
    
    if (results.length === 0) {
      setHistory(WELCOME_MESSAGE);
    } else {
      setHistory([...newHistory, ...results]);
    }

    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
    setInput('');
  }, [input, history, setActiveModule]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'clear', 'modules', 'module', 'sistema', 'vscode', 'git', 'markdown', 'excel', 'search'];
      const match = commands.find(cmd => cmd.startsWith(input.toLowerCase()));
      if (match && input.length > 0) {
        setInput(match);
      }
    }
  }, [historyIndex, commandHistory, input]);

  return {
    history,
    input,
    setInput,
    terminalRef,
    handleSubmit,
    handleKeyDown
  };
};