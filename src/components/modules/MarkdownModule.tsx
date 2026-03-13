import React from 'react';
import { motion } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { Command } from '../../types';
import { Type } from 'lucide-react';

interface MarkdownModuleProps {
  commands: Command[];
  searchTerm: string;
}

export const MarkdownModule: React.FC<MarkdownModuleProps> = ({ commands, searchTerm }) => {
  const filtered = commands.filter(cmd => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.context.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Módulo - Agora sincronizado com o vermelho da Sidebar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-red-500/20 flex items-center justify-center">
          {/* Ícone com tom de vermelho escuro no modo claro e vermelho mais vivo no escuro */}
          <Type className="text-red-600 dark:text-red-400" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Documentação Markdown
          </h2>
          <p className="text-slate-500 dark:text-white/40 text-sm">
            Sintaxe para READMEs, documentações e notas estruturadas
          </p>
        </div>
      </div>

      {/* Grid de Comandos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((command, idx) => (
          <CommandCard 
            key={command.id} 
            command={command} 
            index={idx}
            // Passando o gradiente vermelho para os detalhes dos cards
            moduleColor="from-red-500 to-rose-600"
          />
        ))}
      </div>

      {/* Estado Vazio (Empty State) */}
      {filtered.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-400 dark:text-white/40"
        >
          <div className="mb-4 flex justify-center opacity-20">
            <Type size={48} className="text-red-500" />
          </div>
          <p>Nenhum comando encontrado para "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};