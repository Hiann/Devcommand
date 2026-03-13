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