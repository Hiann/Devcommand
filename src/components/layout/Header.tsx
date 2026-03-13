import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Terminal } from 'lucide-react'; 
import { SearchBar } from '../ui/SearchBar';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

// Animações de entrada em cascata
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const Header: React.FC<HeaderProps> = ({ 
  searchValue, 
  onSearchChange,
  isDark,
  onThemeToggle
}) => {
  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 w-full relative z-40"
    >
      {/* LADO ESQUERDO: Branding e Títulos */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-default">
        
        {/* Ícone Refinado (Estilo Mac/Linear) */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#2a2a2a] dark:to-[#1a1a1a] border border-slate-300 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-cyan-500/30">
            <Terminal 
              className="text-cyan-600 dark:text-cyan-400 transition-colors duration-300 group-hover:text-purple-500" 
              size={22} 
              strokeWidth={2.5} 
              aria-hidden="true" 
            />
          </div>
        </motion.div>
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2.5">
            <h1 className="text-[26px] leading-none font-extrabold tracking-tight text-slate-900 dark:text-white">
              Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">Command</span>
            </h1>
            
            {/* Badge Premium: Mais alinhada e sutil */}
            <span 
              className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase
                         bg-slate-200/50 text-slate-600 border border-slate-300/50
                         dark:bg-white/10 dark:text-white/60 dark:border-white/10
                         transition-colors"
              aria-label="Versão 5.0"
            >
              v5.0
            </span>
          </div>

          <p className="text-sm font-medium text-slate-500 dark:text-white/40 mt-1">
            Guia Definitivo — Produtividade & Setup
          </p>
        </div>
      </motion.div>

      {/* LADO DIREITO: Controles (Busca e Tema) */}
      <motion.div 
        variants={itemVariants} 
        className="flex items-center gap-4 w-full lg:w-auto"
      >
        <div className="flex-1 lg:w-80 relative z-50">
          <SearchBar 
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>
        
        {/* Divisor Visual */}
        <div className="h-8 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" aria-hidden="true" />
        
        <div className="flex-shrink-0">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </motion.div>
    </motion.header>
  );
};