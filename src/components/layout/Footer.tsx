import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { Github, Linkedin, Cpu, Activity, Coffee } from 'lucide-react';

// ============================================================================
// 1. DOCK FLUIDO (Transições Premium)
// ============================================================================
const FluidDock: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div 
      className={`
        flex items-center gap-1.5 p-1.5 rounded-full backdrop-blur-2xl border transition-all duration-500
        ${isDark ? 'bg-[#0f0f0f]/80 border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)]' : 'bg-white/80 border-slate-200/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_15px_rgba(0,0,0,0.05)]'}
      `}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <a
        href="https://github.com/Hiann"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredIndex('github')}
        className={`relative p-3 rounded-full transition-colors duration-300 z-10 outline-none ${isDark ? 'text-white/40 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'}`}
        aria-label="GitHub"
      >
        {hoveredIndex === 'github' && (
          <motion.div
            layoutId="dock-pill"
            className={`absolute inset-0 rounded-full -z-10 ${isDark ? 'bg-cyan-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-cyan-50 shadow-sm'}`}
            transition={{ type: "spring", mass: 0.5, stiffness: 400, damping: 25 }}
          />
        )}
        <Github size={20} strokeWidth={2} />
      </a>
      
      {/* Fio de Vidro Divisor Ótico */}
      <div className={`w-px h-5 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

      <a
        href="https://www.linkedin.com/in/hiann-alexander"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredIndex('linkedin')}
        className={`relative p-3 rounded-full transition-colors duration-300 z-10 outline-none ${isDark ? 'text-white/40 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'}`}
        aria-label="LinkedIn"
      >
        {hoveredIndex === 'linkedin' && (
          <motion.div
            layoutId="dock-pill"
            className={`absolute inset-0 rounded-full -z-10 ${isDark ? 'bg-cyan-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'bg-cyan-50 shadow-sm'}`}
            transition={{ type: "spring", mass: 0.5, stiffness: 400, damping: 25 }}
          />
        )}
        <Linkedin size={20} strokeWidth={2} />
      </a>
    </div>
  );
};

// ============================================================================
// 2. O TERMINAL DE ENCERRAMENTO (FOOTER SÊNIOR)
// ============================================================================
export const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  
  // Motores de Física com "Massa" para o deslizamento da luz (Efeito Trilho)
  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);
  const mouseX = useSpring(rawMouseX, { mass: 0.5, stiffness: 200, damping: 30 });
  
  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return;
    const { left, top } = footerRef.current.getBoundingClientRect();
    rawMouseX.set(e.clientX - left);
    rawMouseY.set(e.clientY - top);
  };
  
  const handleGlobalMouseLeave = () => {
    rawMouseX.set(-1000); 
    rawMouseY.set(-1000);
  };

  const logRef = useRef<HTMLDivElement>(null);
  const isLogVisible = useInView(logRef, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleGlobalMouseMove}
      onMouseLeave={handleGlobalMouseLeave}
      className="relative mt-24 pb-12 overflow-hidden selection:bg-cyan-500/30 group/footer"
    >
      {/* =====================================================================
          1. HORIZONTE DE LUZ COM FÍSICA DE TRILHO
          ===================================================================== */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] ${isDark ? 'bg-white/[0.03]' : 'bg-slate-200/50'}`}>
        <motion.div 
          className="absolute top-0 bottom-0 w-[400px] -ml-[200px] bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent blur-[2px]"
          style={{ x: mouseX }}
        />
        <motion.div 
          className="absolute top-0 bottom-0 w-[80px] -ml-[40px] bg-white shadow-[0_0_12px_2px_rgba(34,211,238,1)]"
          style={{ x: mouseX }} 
        />
      </div>

      {/* =====================================================================
          2. PAINEL DE INFORMAÇÕES (Espaçamento Arquitetural)
          ===================================================================== */}
      <div className="max-w-7xl mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-14">
          
          {/* IDENTIDADE ESQUERDA */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[30px] font-black tracking-tighter text-slate-900 dark:text-white leading-none mb-5 relative group/name cursor-default">
              Hiann Alexander
              <span className="text-cyan-500 dark:text-cyan-400">.</span>
            </h3>

            <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
              <p className="text-[15px] font-semibold text-slate-600 dark:text-white/70 flex items-center gap-3">
                <span className={`p-1.5 rounded-lg border shadow-sm transition-colors duration-500 ${isDark ? 'bg-[#151515] border-white/5 text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' : 'bg-white border-slate-200 text-cyan-600'}`}>
                  <Cpu size={14} strokeWidth={2.5} />
                </span>
                Back-end Developer & AI Specialist
              </p>
              
              <div className="flex items-center gap-3 text-[10.5px] font-mono font-bold text-slate-400/80 dark:text-white/40 uppercase tracking-[0.25em] mt-1">
                <Activity size={12} className="opacity-50 text-indigo-500" />
                <span>Goiânia, GO • Brasil • {currentYear}</span>
              </div>
            </div>
          </div>

          {/* DOCK DIREITO */}
          <div className="flex flex-col items-center gap-4 relative z-20">
            <div className="flex items-center gap-3 opacity-90 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
              <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-white/40 uppercase tracking-[0.35em] mt-0.5">
                Portfólio / Contato
              </p>
            </div>
            <FluidDock isDark={isDark} />
          </div>

        </div>

        {/* =====================================================================
            4. ASSINATURA DE ENGENHARIA (O "Endgame" do Minimalismo)
            ===================================================================== */}
        <div ref={logRef} className="mt-28 pt-10 flex flex-col items-center relative">
          
          {/* 1. O Horizonte Quebrado (Linha com Núcleo de Energia central) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl flex items-center justify-center opacity-80">
            <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${isDark ? 'to-white/10' : 'to-slate-200'}`} />
            {/* O "Power Core" - Um micro-LED no centro exato da linha */}
            <div className={`w-[2.5px] h-[2.5px] rounded-full mx-1.5 ${isDark ? 'bg-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.8)]' : 'bg-cyan-500 shadow-[0_0_8px_1px_rgba(6,182,212,0.5)]'}`} />
            <div className={`h-px flex-1 bg-gradient-to-l from-transparent ${isDark ? 'to-white/10' : 'to-slate-200'}`} />
          </div>

          {/* 2. Pilares de Arquitetura (Física de Foco Dinâmico Elevada) */}
          <div className="flex items-center gap-6 sm:gap-10 text-[10px] font-mono font-black tracking-[0.5em] uppercase mb-8 group/pillars">
            {['Precisão', 'Arquitetura', 'Inovação'].map((word, i) => (
              <React.Fragment key={word}>
                <span className={`
                  relative cursor-crosshair transition-all duration-500 ease-out
                  ${isDark ? 'text-white/20 group-hover/pillars:text-white/10 hover:!text-white/90 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-slate-400 group-hover/pillars:text-slate-300 hover:!text-slate-900'}
                  hover:-translate-y-0.5
                `}>
                  {word}
                  {/* Micro-sublinhado a laser que surge apenas no hover */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover/pillars:hover:w-full opacity-0 group-hover/pillars:hover:opacity-100" />
                </span>
                
                {/* Micro-dots de engenharia */}
                {i !== 2 && (
                  <span className={`w-[3px] h-[3px] rounded-full transition-colors duration-500 ${isDark ? 'bg-white/15 group-hover/pillars:bg-white/5' : 'bg-slate-300 group-hover/pillars:bg-slate-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 3. Créditos de Stack (Cápsula Cinemática e Cores de Marca Ocultas) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isLogVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-[11.5px] font-medium"
          >
            <span className="text-slate-500 dark:text-white/30">Feito com</span>
            
            {/* O Café agora encapsulado em um visor de acrílico */}
            <div className={`flex items-center justify-center w-[22px] h-[22px] rounded-md border ${isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <Coffee size={12} strokeWidth={2.5} className="text-amber-600 dark:text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.6)] animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            
            <span className="text-slate-500 dark:text-white/30">usando</span>
            
            {/* A Stack vira um Badge Interativo */}
            <div className={`
              flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] border transition-all duration-300 cursor-default
              ${isDark ? 'bg-[#111]/80 border-white/5 hover:border-white/15 hover:bg-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]' : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 shadow-sm'}
            `}>
              {/* O Segredo: Cores originais das tecnologias reveladas apenas no hover */}
              <span className={`font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white/70 hover:text-[#61DAFB]' : 'text-slate-700 hover:text-[#0b7e99]'}`}>
                React
              </span>
              <span className="text-slate-400 dark:text-white/20 font-light text-[10px]">&</span>
              <span className={`font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white/70 hover:text-[#38BDF8]' : 'text-slate-700 hover:text-[#0284c7]'}`}>
                Tailwind
              </span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
};