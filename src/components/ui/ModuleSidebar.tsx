import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, FileCode, GitBranch, Type, Database, Terminal, ChevronRight 
} from 'lucide-react';
import { Module } from '../../types';

// ==========================================
// 1. CONFIGURAÇÕES ESTÁTICAS (Design Tokens)
// ==========================================

const ICONS: Record<string, React.ElementType> = {
  Cpu, FileCode, GitBranch, Type, Database, Terminal
};

const MODULE_THEMES: Record<string, { gradient?: string; shadow: string; hoverAccent: string }> = {
  markdown: { gradient: 'from-red-500 to-rose-600', shadow: 'shadow-red-500/20', hoverAccent: 'group-hover:text-red-500 dark:group-hover:text-red-400' },
  terminal: { gradient: 'from-amber-500 to-orange-600', shadow: 'shadow-orange-500/20', hoverAccent: 'group-hover:text-amber-500 dark:group-hover:text-amber-400' },
  vscode: { gradient: 'from-purple-500 to-fuchsia-600', shadow: 'shadow-purple-500/20', hoverAccent: 'group-hover:text-purple-500 dark:group-hover:text-purple-400' },
  git: { gradient: 'from-orange-500 to-red-600', shadow: 'shadow-orange-500/20', hoverAccent: 'group-hover:text-orange-500 dark:group-hover:text-orange-400' },
  excel: { gradient: 'from-emerald-500 to-green-600', shadow: 'shadow-emerald-500/20', hoverAccent: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400' },
  system: { gradient: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/20', hoverAccent: 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400' }
};

const DEFAULT_THEME = { gradient: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/20', hoverAccent: 'group-hover:text-cyan-500' };

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
      <Icon size={20} />
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
  
  // LÓGICA DE TEMAS CORRIGIDA E À PROVA DE BUGS
  const theme = useMemo(() => {
    const id = module.id.toLowerCase();
    
    // 1. Verificação explícita primeiro para não cair no erro do iterador
    if (id.includes('sistema') || id.includes('system')) {
      return MODULE_THEMES['system'];
    }
    
    // 2. Busca dinâmica para os demais
    const key = Object.keys(MODULE_THEMES).find(k => id.includes(k));
    
    return key ? MODULE_THEMES[key] : DEFAULT_THEME;
  }, [module.id]);

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
        {isActive && <div className="absolute inset-0 bg-white/10 opacity-50 pointer-events-none" />}

        <div className="relative flex items-center gap-3 z-10">
          <div className={`
            flex-shrink-0 w-10 h-10 rounded-lg transition-colors duration-300 flex items-center justify-center
            ${isActive ? 'bg-white/20 text-white' : `bg-slate-100 dark:bg-white/5 ${theme.hoverAccent}`}
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
      <ul className="space-y-2.5 p-0 m-0">
        {modules.map((module) => (
          <ModuleNavItem 
            key={module.id} 
            module={module} 
            isActive={activeModule === module.id} 
            onClick={onModuleChange} 
          />
        ))}
      </ul>
    </nav>
  );
};