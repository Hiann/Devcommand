import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, FileCode, GitBranch, Type, Database, Terminal, ChevronRight, 
  Triangle, Layout, Server 
} from 'lucide-react';
import { Module } from '../../types';

// ==========================================
// 1. CONFIGURAÇÕES ESTÁTICAS E ÍCONES
// ==========================================

const ICONS: Record<string, React.ElementType> = {
  Cpu, FileCode, GitBranch, Type, Database, Terminal, Triangle, Layout, Server
};

// MAPEAMENTO CORRIGIDO: Agora usando exatamente os IDs do commands.ts
const MODULE_THEMES: Record<string, { gradient: string; shadow: string; hoverAccent: string }> = {
  sistema: { gradient: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/25', hoverAccent: 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400' },
  vscode: { gradient: 'from-purple-500 to-pink-600', shadow: 'shadow-purple-500/20', hoverAccent: 'group-hover:text-purple-500 dark:group-hover:text-purple-400' },
  git: { gradient: 'from-orange-500 to-red-600', shadow: 'shadow-orange-500/20', hoverAccent: 'group-hover:text-orange-500 dark:group-hover:text-orange-400' },
  markdown: { gradient: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/20', hoverAccent: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400' },
  excel: { gradient: 'from-green-500 to-emerald-600', shadow: 'shadow-green-500/20', hoverAccent: 'group-hover:text-green-500 dark:group-hover:text-green-400' },
  terminal: { gradient: 'from-yellow-500 to-orange-600', shadow: 'shadow-orange-500/20', hoverAccent: 'group-hover:text-yellow-500 dark:group-hover:text-yellow-400' },
  vercel: { gradient: 'from-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/30', hoverAccent: 'group-hover:text-yellow-500 dark:group-hover:text-yellow-400' },
  frontend: { gradient: 'from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/20', hoverAccent: 'group-hover:text-blue-500 dark:group-hover:text-blue-400' },
  'backend-ai': { gradient: 'from-rose-500 to-red-600', shadow: 'shadow-rose-500/20', hoverAccent: 'group-hover:text-rose-500 dark:group-hover:text-rose-400' }
};

const DEFAULT_THEME = { 
  gradient: 'from-slate-500 to-slate-700', 
  shadow: 'shadow-slate-500/25', 
  hoverAccent: 'group-hover:text-slate-500' 
};

// ==========================================
// 2. INTERFACES
// ==========================================

interface NavItemProps {
  module: Module;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface ModuleSidebarProps {
  modules: Module[];
  activeModule: string;
  onModuleChange: (moduleId: string) => void;
}

// ==========================================
// 3. SUB-COMPONENTES
// ==========================================

const AnimatedIcon = ({ icon: Icon, isActive, id }: { icon: any, isActive: boolean, id: string }) => {
  return (
    <motion.div 
      className="relative"
      whileHover={!isActive ? { rotate: [0, -8, 8, 0], scale: 1.1 } : {}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Icon size={20} fill={id === 'vercel' ? "currentColor" : "none"} strokeWidth={id === 'vercel' ? 0 : 2} />
      
      {id === 'terminal' && isActive && (
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="absolute bottom-1 right-1 w-1.5 h-0.5 bg-white"
        />
      )}
    </motion.div>
  );
};

const ModuleNavItem = memo(({ module, isActive, onClick }: NavItemProps) => {
  // LÓGICA CORRIGIDA: Agora busca a cor exata pelo ID, sem margem para erro!
  const theme = MODULE_THEMES[module.id] || DEFAULT_THEME;
  const IconComponent = ICONS[module.icon] || Cpu;

  return (
    <li className="list-none">
      <motion.button
        onClick={() => onClick(module.id)}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className={`
          w-full text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden group outline-none block
          ${isActive 
            ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg ${theme.shadow} border-transparent` 
            : `bg-white/60 border border-slate-200/60 dark:bg-[#121212]/40 dark:border-white/5 text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white`
          }
        `}
      >
        {/* Glow interno ativo */}
        {isActive && <div className="absolute inset-0 bg-white/10 opacity-50 pointer-events-none" />}

        <div className="relative flex items-center gap-3 z-10">
          {/* Container do Ícone */}
          <div className={`
            flex-shrink-0 w-10 h-10 rounded-lg transition-colors duration-300 flex items-center justify-center
            ${isActive 
              ? 'bg-white/20 text-white shadow-inner' 
              : `bg-slate-100 dark:bg-white/5 ${theme.hoverAccent}`
            }
          `}>
            <AnimatedIcon icon={IconComponent} isActive={isActive} id={module.id} />
          </div>
          
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h3 className={`font-semibold text-[13px] leading-snug truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              {module.title}
            </h3>
            <p className={`text-[11px] leading-snug transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-slate-400 dark:text-white/40'}`}>
              {module.commands.length} comandos
            </p>
          </div>
          
          <ChevronRight 
            size={14} 
            className={`flex-shrink-0 transition-all duration-300 ${isActive ? 'translate-x-1 opacity-100 text-white' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400 dark:text-white/60'}`} 
          />
        </div>
      </motion.button>
    </li>
  );
});

ModuleNavItem.displayName = 'ModuleNavItem';

// ==========================================
// 4. COMPONENTE PRINCIPAL
// ==========================================

export const ModuleSidebar: React.FC<ModuleSidebarProps> = ({ 
  modules, 
  activeModule, 
  onModuleChange 
}) => {
  return (
    <nav aria-label="Navegação de Módulos" className="relative z-10">
      <ul className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2.5 no-scrollbar">
        {modules.map((module) => (
          <ModuleNavItem 
            key={module.id}
            module={module}
            isActive={activeModule === module.id}
            onClick={() => onModuleChange(module.id)}
          />
        ))}
      </ul>
    </nav>
  );
};