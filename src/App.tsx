import React, { useState, useMemo, useEffect } from 'react'; // Adicionado useEffect
import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from './components/layout/MainLayout';
import { ModuleSidebar } from './components/ui/ModuleSidebar';
import { Terminal } from './components/ui/Terminal';
import { GlassCard } from './components/ui/GlassCard';
import { SistemaModule } from './components/modules/SistemaModule';
import { VSCodeModule } from './components/modules/VSCodeModule';
import { GitModule } from './components/modules/GitModule';
import { MarkdownModule } from './components/modules/MarkdownModule';
import { ExcelModule } from './components/modules/ExcelModule';
import { TerminalModule } from './components/modules/TerminalModule';
import { MODULES } from './data/commands';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Zap } from 'lucide-react';

type ModuleId = 'sistema' | 'vscode' | 'git' | 'markdown' | 'excel' | 'terminal';

const MODULE_COMPONENTS: Record<string, React.FC<any>> = {
  sistema: SistemaModule,
  vscode: VSCodeModule,
  git: GitModule,
  markdown: MarkdownModule,
  excel: ExcelModule,
  terminal: TerminalModule
};

function App() {
  const [activeModule, setActiveModule] = useLocalStorage<ModuleId>('gd50_last_module', 'sistema');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useLocalStorage<boolean>('gd50_theme', true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // EFEITO CRÍTICO: Aplica a classe dark no HTML para o Tailwind funcionar
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const currentModule = useMemo(() => 
    MODULES.find(m => m.id === activeModule) || MODULES[0]
  , [activeModule]);

  const ActiveComponent = MODULE_COMPONENTS[activeModule] || SistemaModule;

  const stats = useMemo(() => ({
    totalCommands: MODULES.reduce((acc, m) => acc + m.commands.length, 0),
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
        <div className="lg:col-span-1 space-y-6">
          <ModuleSidebar 
            modules={MODULES}
            activeModule={activeModule}
            onModuleChange={(id) => setActiveModule(id as ModuleId)}
          />

          {/* VARIÁVEL DE CÁLCULO (Coloque isso ANTES do return do seu App.tsx, ou calcule direto dentro do JSX) */}
{/* const currentPercentage = stats.totalCommands > 0 ? Math.round((stats.currentModuleCommands / stats.totalCommands) * 100) : 0; */}

{/* BLOCO PARA SUBSTITUIR O CARD DE ESTATÍSTICAS NO JSX */}
<div className="p-5 rounded-2xl bg-white/60 dark:bg-[#121212]/60 border border-slate-200/60 dark:border-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col mt-4 shadow-sm">
  
  {/* HEADER E BADGE DE VERSÃO */}
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

  {/* TOTAIS EM GRID (Leitura Rápida) */}
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

  {/* ÁREA DE FOCO: MÓDULO ATUAL COM BARRA DE PROGRESSO */}
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
            className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400"
          >
            {stats.currentModuleCommands}
          </motion.span>
        </AnimatePresence>
        <span className="text-[10px] font-mono text-slate-400 dark:text-white/30">
          / {stats.totalCommands}
        </span>
      </div>
    </div>

    {/* Progresso Dinâmico */}
    <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${stats.totalCommands > 0 ? (stats.currentModuleCommands / stats.totalCommands) * 100 : 0}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
      />
    </div>
    <div className="mt-1.5 text-right">
      <span className="text-[9px] font-mono text-slate-400 dark:text-white/40">
        {stats.totalCommands > 0 ? Math.round((stats.currentModuleCommands / stats.totalCommands) * 100) : 0}% da base de dados
      </span>
    </div>
  </div>

  {/* TELEMETRIA (Status & Latência Simulada) */}
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
</div> {/* <--- ESSA É A DIV QUE ESTAVA FALTANDO! ELA FECHA A COLUNA 1 */}

        <div className="lg:col-span-3 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveComponent 
                commands={currentModule.commands}
                searchTerm={searchTerm}
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
                <Terminal setActiveModule={(id) => setActiveModule(id as ModuleId)} isOpen={isTerminalOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;