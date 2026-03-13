import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandCard } from '../ui/CommandCard';
import { CodeBlock } from '../ui/CodeBlock';
import { Command, GitWorkflowStep } from '../../types';
import { GIT_WORKFLOW } from '../../data/gitWorkflow';
import { GitBranch, ChevronDown, ChevronUp } from 'lucide-react';

interface GitModuleProps {
  commands: Command[];
  searchTerm: string;
}

const WorkflowPhase: React.FC<{ phase: GitWorkflowStep; index: number }> = ({ phase, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-sm">
            {phase.phase}
          </div>
          <div className="text-left">
            <h3 className="text-slate-900 dark:text-white font-semibold">{phase.title}</h3>
            <p className="text-slate-500 dark:text-white/40 text-sm">{phase.description}</p>
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
            <div className="p-6">
              <CodeBlock 
                code={phase.commands.join('\n')}
                language="bash"
                filename={`fase-${phase.phase}-workflow.sh`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const GitModule: React.FC<GitModuleProps> = ({ commands, searchTerm }) => {
  const filtered = commands.filter(cmd => 
    cmd.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keys.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.context.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Se o usuário estiver pesquisando algo, mostra os cards filtrados */}
      {searchTerm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((command, idx) => (
            <CommandCard 
              key={command.id} 
              command={command} 
              index={idx}
              moduleColor="from-orange-500 to-red-600"
            />
          ))}
        </div>
      ) : (
        /* Se NÃO estiver pesquisando, mostra APENAS o Workflow em blocos limpos */
        <div className="space-y-6">
          <div>
            <h3 className="text-slate-400 dark:text-white/60 text-sm uppercase tracking-wider mb-4 font-bold">Workflow Completo</h3>
            {GIT_WORKFLOW.map((phase, idx) => (
              <WorkflowPhase key={phase.phase} phase={phase} index={idx} />
            ))}
          </div>
        </div>
      )}

      {/* Mensagem caso a pesquisa não encontre nada */}
      {filtered.length === 0 && searchTerm && (
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