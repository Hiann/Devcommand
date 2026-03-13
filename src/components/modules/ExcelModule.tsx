import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { EXCEL_CATEGORIES } from '../../data/excelFunctions';
import { Command } from '../../types';
import { Database, ChevronDown, ChevronUp, Calculator } from 'lucide-react';


interface ExcelModuleProps {
  commands: Command[];
  searchTerm: string;
}

const CategorySection: React.FC<{ category: typeof EXCEL_CATEGORIES[0]; index: number }> = ({ category, index }) => {
  // ALTERAÇÃO AQUI: Agora inicia sempre como false para começar fechado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <Calculator className="text-green-600 dark:text-green-400" size={20} />
          <div className="text-left">
            <h3 className="text-slate-900 dark:text-white font-semibold">{category.category}</h3>
            <p className="text-slate-500 dark:text-white/40 text-sm">{category.functions.length} funções</p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-slate-400 dark:text-white/40" />
        ) : (
          <ChevronDown size={20} className="text-slate-400 dark:text-white/40" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200 dark:border-white/5"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.functions.map((fn, idx) => (
                <div key={idx} className="p-4 bg-slate-100/50 dark:bg-white/5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-xs text-green-700 dark:text-green-300 bg-green-100 dark:bg-black/30 px-2 py-1 rounded">
                      {fn.syntax}
                    </code>
                    {fn.shortcut && (
                      <span className="text-[10px] text-slate-400 dark:text-white/30 uppercase font-medium">{fn.shortcut}</span>
                    )}
                  </div>
                  <h4 className="text-slate-900 dark:text-white font-medium text-sm mb-1">{fn.name}</h4>
                  <p className="text-slate-500 dark:text-white/50 text-xs">{fn.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ExcelModule: React.FC<ExcelModuleProps> = ({ commands, searchTerm }) => {
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