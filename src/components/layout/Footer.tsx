import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Coffee } from 'lucide-react';

// SUB-COMPONENTE: Magnetic Wrapper (Física de Atração)
// Este componente isola a lógica de imã para não poluir o código principal
const MagneticButton: React.FC<{ children: React.ReactNode; href: string; label: string }> = ({ children, href, label }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Força magnética: O elemento segue o mouse em 35% da distância do centro
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="p-3 rounded-xl bg-white dark:bg-white/[0.03] text-slate-500 dark:text-white/40 
                 hover:text-cyan-500 dark:hover:text-cyan-400 
                 shadow-sm hover:shadow-xl hover:shadow-cyan-500/20 
                 border border-slate-100 dark:border-white/10 transition-colors duration-300"
      aria-label={label}
    >
      {children}
    </motion.a>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  
  // Efeito de Refração no Separador: A luz viaja na linha conforme o scroll
  const refractionX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <footer className="mt-24 pb-12 relative overflow-hidden">
      {/* 1. SEPARADOR COM REFRAÇÃO DINÂMICA */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200 dark:bg-white/5 overflow-hidden">
        <motion.div 
          style={{ x: refractionX }}
          className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-400/30 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
          
          {/* LADO ESQUERDO: Branding & Status */}
          <div className="flex flex-col items-center lg:items-start group">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hiann Alexander Mendes de Oliveira
              </h3>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter">
                  Online
                </span>
              </div>
            </div>

            <div className="space-y-1 text-center lg:text-left">
              <p className="text-sm font-medium text-slate-600 dark:text-white/50 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                Back-end Developer & AI Specialist
              </p>
              <p className="text-[11px] font-mono text-slate-400 dark:text-white/20 uppercase tracking-[0.2em]">
                Goiânia, GO • Brasil • {currentYear}
              </p>
            </div>
          </div>

          {/* LADO DIREITO: Social Dock com Botões Magnéticos */}
          <div className="flex items-center gap-4 bg-white/50 dark:bg-white/[0.02] p-2 rounded-2xl border border-slate-200/50 dark:border-white/5 backdrop-blur-md">
            <MagneticButton href="https://github.com/Hiann" label="GitHub">
              <Github size={20} />
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/hiann-alexander" label="LinkedIn">
              <Linkedin size={20} />
            </MagneticButton>
          </div>
        </div>

        {/* BOTTOM SECTION: Identidade Técnica */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-6 text-[10px] font-mono font-bold text-slate-300 dark:text-white/10 tracking-[0.3em] uppercase mb-4">
            <span>Precisão</span>
            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-white/10" />
            <span>Arquitetura</span>
            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-white/10" />
            <span>Inovação</span>
          </div>

          <p className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-white/20">
            Feito com <Coffee size={12} className="text-amber-500 animate-pulse" /> usando
            <span className="text-slate-600 dark:text-white/40 font-medium"> React & Tailwind</span>
          </p>
          
          {/* Metadata de Build (O toque final de Engenharia) */}
          <div className="mt-4 text-[8px] font-mono text-slate-300 dark:text-white/5 uppercase tracking-widest">
          </div>
        </div>
      </div>
    </footer>
  );
};