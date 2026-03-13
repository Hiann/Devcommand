import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTerminal } from '../../hooks/useTerminal';

interface TerminalProps {
  setActiveModule: (module: string) => void;
  isOpen: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({ setActiveModule, isOpen }) => {
  const { history, input, setInput, terminalRef, handleSubmit, handleKeyDown } = useTerminal(setActiveModule, isOpen);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'input': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'success': return 'text-emerald-400';
      case 'system': return 'text-cyan-400';
      default: return 'text-white/80';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="h-[500px] flex flex-col glass rounded-2xl overflow-hidden border border-white/10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-black/40 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <TerminalIcon size={14} className="text-white/40 ml-2" />
        <span className="text-xs text-white/40 font-mono">terminal — zsh — guia-definitivo-5.0</span>
      </div>

      {/* Content */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-1"
      >
        {history.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={`${getLineColor(item.type)} whitespace-pre-wrap break-words`}
          >
            {item.type === 'input' && <span className="text-purple-400 mr-2">➜</span>}
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-black/20">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-mono text-sm">➜</span>
          <span className="text-cyan-400 font-mono text-sm">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-sm text-white font-mono placeholder-white/20"
            placeholder="Digite um comando... (help para lista)"
            spellCheck={false}
            autoFocus
          />
        </div>
      </form>
    </motion.div>
  );
};