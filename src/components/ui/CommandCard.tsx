import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { Command } from '../../types';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { GlassCard } from './GlassCard';

interface CommandCardProps {
  command: Command;
  index: number;
  moduleColor: string;
}

export const CommandCard: React.FC<CommandCardProps> = ({ command, index, moduleColor }) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <GlassCard className="p-5 h-full hover:shadow-xl transition-all duration-500">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <code className="command-kbd">
              {command.keys}
            </code>
            
            {/* Categoria mais visível no claro */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/20">
              {command.category}
            </span>
          </div>

          {/* Título: Slate-800 é o segredo para ter vida no modo claro */}
          <h3 className="font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-accent-cyan transition-colors">
            {command.action}
          </h3>

          {/* Texto: Slate-600 para leitura confortável */}
          <p className="text-xs text-slate-600 dark:text-white/40 leading-relaxed mb-4 flex-1">
            {command.context}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
            <div className="flex gap-1">
              {command.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-white/30 border border-blue-100 dark:border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => copy(command.keys)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                copied 
                ? 'bg-green-500/10 text-green-600' 
                : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:text-white/20 dark:hover:bg-white/10'
              }`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};