import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from './components/layout/MainLayout';
import { ModuleSidebar } from './components/ui/ModuleSidebar';
import { Terminal } from './components/ui/Terminal';
// IMPORTAÇÃO CORRETA DO COMMAND CARD (Matando o erro do GlassCard!)
import { CommandCard } from './components/ui/CommandCard';
import { SistemaModule } from './components/modules/SistemaModule';
import { VSCodeModule } from './components/modules/VSCodeModule';
import { GitModule } from './components/modules/GitModule';
import { MarkdownModule } from './components/modules/MarkdownModule';
import { ExcelModule } from './components/modules/ExcelModule';
import { TerminalModule } from './components/modules/TerminalModule';
import { MODULES } from './data/commands';
import { useLocalStorage } from './hooks/useLocalStorage';

import { 
  Zap, Cpu, FileCode, GitBranch, Type, Database, 
  Terminal as TerminalIcon, Triangle, Layout, Server 
} from 'lucide-react';

type ModuleId = 'sistema' | 'vscode' | 'git' | 'markdown' | 'excel' | 'terminal' | 'vercel' | 'frontend' | 'backend-ai';

const ICONS: Record<string, React.ElementType> = {
  Cpu, FileCode, GitBranch, Type, Database, Terminal: TerminalIcon, Triangle, Layout, Server
};

// ==========================================
// RENDERIZADOR SÊNIOR PARA NOVOS MÓDULOS
// ==========================================
const GenericModule = ({ commands, searchTerm, moduleInfo }: { commands: any[], searchTerm: string, moduleInfo: any }) => {
  const filteredCommands = commands.filter((cmd: any) => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (cmd.context && cmd.context.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const groupedCommands = filteredCommands.reduce((acc: any, cmd: any) => {
    const cat = cmd.category || 'Comandos Gerais';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(cmd);
    return acc;
  }, {});

  if (filteredCommands.length === 0) {
    const Icon = ICONS[moduleInfo.icon] || Cpu;
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-slate-400 dark:text-white/40">
        <div className="mb-4 flex justify-center opacity-20">
          <Icon size={48} />
        </div>
        <p>Nenhum comando encontrado para "{searchTerm}"</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(groupedCommands).map(([category, cmds]: [string, any]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest pl-3 border-l-2 border-slate-300 dark:border-white/10">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AQUI ESTÁ A CORREÇÃO: Usando CommandCard em vez de GlassCard */}
            {cmds.map((cmd: any, idx: number) => (
              <CommandCard 
                key={cmd.id} 
                command={cmd} 
                index={idx}
                moduleColor={moduleInfo.gradient}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MODULE_COMPONENTS: Record<string, React.FC<any>> = {
  sistema: SistemaModule,
  vscode: VSCodeModule,
  git: GitModule,
  markdown: MarkdownModule,
  excel: ExcelModule,
  terminal: TerminalModule,
  vercel: GenericModule, 
  frontend: GenericModule,
  'backend-ai': GenericModule
};

function App() {
  const [activeModule, setActiveModule] = useLocalStorage<ModuleId>('gd50_last_module', 'sistema');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useLocalStorage<boolean>('gd50_theme', true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const currentModule = useMemo(() => 
    MODULES.find((m: any) => m.id === activeModule) || MODULES[0]
  , [activeModule]);

  const ActiveComponent = MODULE_COMPONENTS[activeModule] || SistemaModule;
  const HeaderIcon = ICONS[currentModule.icon] || Cpu;

  const stats = useMemo(() => ({
    totalCommands: MODULES.reduce((acc: number, m: any) => acc + m.commands.length, 0),
    totalModules: MODULES.length,
    currentModuleCommands: currentModule.commands.length
  }), [currentModule]);

  return (
    <MainLayout 
      searchValue={searchTerm}
      onSearchChange={setSearchTerm}
      isDark={isDark}
      onThemeToggle={() => setIsDark(!isDark)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* COLUNA DA ESQUERDA */}
        <div className="lg:col-span-1 space-y-6">
          <ModuleSidebar 
            modules={MODULES}
            activeModule={activeModule}
            onModuleChange={(id: string) => setActiveModule(id as ModuleId)}
          />

          <div className="p-5 rounded-2xl bg-white/60 dark:bg-[#121212]/60 border border-slate-200/60 dark:border-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col mt-4 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-cyan-500" />
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-white/40 uppercase m-0">
                  Estatísticas
                </h3>
              </div>
              <span className="text-[9px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">
                v5.0.2
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-widest mb-1">Total Base</span>
                <span className="text-xl font-mono font-semibold text-slate-900 dark:text-white">
                  {stats.totalCommands}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-widest mb-1">Módulos</span>
                <span className="text-xl font-mono font-semibold text-slate-900 dark:text-white">
                  {stats.totalModules}
                </span>
              </div>
            </div>

            <div className="bg-slate-100/50 dark:bg-white/[0.02] rounded-xl p-3.5 border border-slate-200/50 dark:border-white/5">
              <div className="flex justify-between items-end mb-2.5">
                <span className="text-[11px] font-medium text-slate-600 dark:text-white/60">
                  Densidade do Módulo
                </span>
                <div className="flex items-baseline gap-1.5">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={stats.currentModuleCommands}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className={`text-lg font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r ${currentModule.gradient}`}
                    >
                      {stats.currentModuleCommands}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-white/30">
                    / {stats.totalCommands}
                  </span>
                </div>
              </div>

              <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.totalCommands > 0 ? (stats.currentModuleCommands / stats.totalCommands) * 100 : 0}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${currentModule.gradient} opacity-80`}
                />
              </div>
              <div className="mt-1.5 text-right">
                <span className="text-[9px] font-mono text-slate-400 dark:text-white/40">
                  {stats.totalCommands > 0 ? Math.round((stats.currentModuleCommands / stats.totalCommands) * 100) : 0}% da base de dados
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  Operational
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 dark:text-white/30 flex items-center gap-1">
                ping <span className="text-emerald-500">12ms</span>
              </span>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA (CABEÇALHO + CARDS) */}
        <div className="lg:col-span-3 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* CABEÇALHO GLOBAL DINÂMICO (Com o tamanho do título ajustado e sem o bloco branco gigante) */}
              {!isTerminalOpen && (
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentModule.gradient} shadow-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <HeaderIcon size={24} fill={currentModule.id === 'vercel' ? "currentColor" : "none"} strokeWidth={currentModule.id === 'vercel' ? 0 : 2} />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                      {currentModule.title}
                    </h1>
                    <p className="text-slate-500 dark:text-white/60 mt-1 text-sm">
                      {currentModule.description}
                    </p>
                  </div>
                </div>
              )}

              <ActiveComponent 
                commands={currentModule.commands}
                searchTerm={searchTerm}
                moduleInfo={currentModule}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {isTerminalOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Terminal setActiveModule={(id: string) => setActiveModule(id as ModuleId)} isOpen={isTerminalOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;