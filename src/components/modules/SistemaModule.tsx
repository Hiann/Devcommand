import React from 'react';
import { motion } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { Command } from '../../types';
import { Cpu } from 'lucide-react'; // Importação do ícone para bater com a Sidebar

interface SistemaModuleProps {
  commands: Command[];
  searchTerm: string;
}

export const SistemaModule: React.FC<SistemaModuleProps> = ({ commands, searchTerm }) => {
  const filtered = commands.filter(cmd => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.context.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Módulo - Ajustado para unificar com o ícone da Sidebar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-cyan-500/20 flex items-center justify-center">
          {/* Substituído o ⊞ pelo ícone Cpu para manter a consistência visual */}
          <Cpu className="text-cyan-600 dark:text-cyan-400" size={24} />
        </div>
        <div>
          {/* Títulos e textos com as cores Slate para vida no modo claro */}
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Sistema & Produtividade
          </h2>
          <p className="text-slate-500 dark:text-white/40 text-sm">
            Dominando o ambiente Windows, multitarefa e atalhos vitais
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
            moduleColor="from-cyan-500 to-blue-600"
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
            <Cpu size={48} />
          </div>
          <p>Nenhum comando encontrado para "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};