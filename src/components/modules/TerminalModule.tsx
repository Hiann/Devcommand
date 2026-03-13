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
        {/* Cabeçalho antigo removido daqui! O App.tsx agora cuida disso. */}
  
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