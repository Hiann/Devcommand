import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-3 rounded-xl border transition-all duration-300 relative overflow-hidden group
        ${isDark 
          ? 'bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10' 
          : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900'
        }
      `}
      title={isDark ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
    >
      <div className="relative z-10 flex items-center justify-center">
        {isDark ? (
          <Sun size={20} className="transition-transform duration-500 rotate-0" />
        ) : (
          <Moon size={20} className="transition-transform duration-500 rotate-0" />
        )}
      </div>

      {/* Efeito de brilho sutil ao passar o mouse */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${isDark ? 'bg-yellow-400/10' : 'bg-slate-200/50'}
      `} />
    </motion.button>
  );
};