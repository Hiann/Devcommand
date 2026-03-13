import React from 'react';
import { motion } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { Command } from '../../types';
import { FileCode } from 'lucide-react';

interface VSCodeModuleProps {
  commands: Command[];
  searchTerm: string;
}

export const VSCodeModule: React.FC<VSCodeModuleProps> = ({ commands, searchTerm }) => {
  const filtered = commands.filter(cmd => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.context.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Módulo - AJUSTADO PARA O MODO CLARO */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-purple-500/20">
          <FileCode className="text-purple-600 dark:text-purple-400" size={24} />
        </div>
        <div>
          {/* Título: Slate-900 no Light Mode garante a visibilidade */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            VS Code & Desenvolvimento
          </h2>
          {/* Descrição: Slate-500 para contraste suave no branco */}
          <p className="text-slate-500 dark:text-white/40 text-sm">
            Ferramentas de edição cirúrgica, depuração e administração avançada
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((command, idx) => (
          <CommandCard 
            key={command.id} 
            command={command} 
            index={idx}
            moduleColor="from-purple-500 to-pink-600"
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-400 dark:text-white/40"
        >
          <p>Nenhum comando encontrado para "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};