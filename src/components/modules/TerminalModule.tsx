import React from 'react';
import { motion } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { TERMINAL_COMMANDS } from '../../data/terminalCommands';
import { Terminal } from 'lucide-react';
import { Command } from '../../types';

interface TerminalModuleProps {
  searchTerm: string;
}

export const TerminalModule: React.FC<TerminalModuleProps> = ({ searchTerm }) => {
  const filtered = TERMINAL_COMMANDS.filter((cmd: Command) => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.context.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (cmd.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  // Agrupar por categoria (Mantém sua lógica original)
  const grouped = filtered.reduce((acc, cmd) => {
    const cat = cmd.category || 'Geral';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(cmd);
    return acc;
  }, {} as Record<string, typeof TERMINAL_COMMANDS>);

  const categories = Object.keys(grouped);

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Módulo: Agora visível no modo claro */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-yellow-500/20">
          <Terminal className="text-yellow-600 dark:text-yellow-400" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Terminal Integrado</h2>
          <p className="text-slate-500 dark:text-white/40 text-sm">Operações táticas na linha de comando para não tirar a mão do teclado</p>
        </div>
      </div>

      {searchTerm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((command, idx) => (
            <CommandCard 
              key={command.id} 
              command={command} 
              index={idx}
              moduleColor="from-yellow-500 to-orange-600"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((category, catIdx) => (
            <div key={category}>
              {/* Título da Categoria: Ajustado para slate-500 para contraste no branco */}
              <h3 className="text-slate-500 dark:text-white/40 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-400/60" />
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {grouped[category].map((command, idx) => (
                  <CommandCard 
                    key={command.id} 
                    command={command} 
                    index={catIdx + idx}
                    moduleColor="from-yellow-500 to-orange-600"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

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