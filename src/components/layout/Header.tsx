import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Terminal } from 'lucide-react'; 
import { SearchBar } from '../ui/SearchBar';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

// ==========================================
// 1. HOOK SÊNIOR: EFEITO DE DECODIFICAÇÃO (CIPHER BOOT)
// Cria o efeito de "terminal decodificando" no carregamento inicial
// ==========================================
const useCipherScramble = (text: string, duration: number = 800) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>()[]{}';

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Quantos caracteres reais já devem ser revelados
      const revealCount = Math.floor(text.length * percentage);
      
      let scrambled = text.substring(0, revealCount);
      // Preenche o resto com caracteres aleatórios
      for (let i = revealCount; i < text.length; i++) {
        // Preserva os espaços para não quebrar o layout
        if (text[i] === ' ') {
          scrambled += ' ';
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(scrambled);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [text, duration]);

  return displayText || text;
};

// ==========================================
// 2. CONFIGURAÇÕES FÍSICAS DE ENTRADA
// ==========================================
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

// ==========================================
// 3. O COMPONENTE DEFINITIVO
// ==========================================
export const Header: React.FC<HeaderProps> = ({ 
  searchValue, 
  onSearchChange,
  isDark,
  onThemeToggle
}) => {
  // Efeito de Boot no Subtítulo
  const bootText = useCipherScramble("Guia Definitivo — Produtividade & Setup", 1200);

  // Física do Spotlight
  const terminalRef = useRef<HTMLDivElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalRef.current) return;
    const { left, top } = terminalRef.current.getBoundingClientRect();
    rawMouseX.set(e.clientX - left);
    rawMouseY.set(e.clientY - top);
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full relative z-40 mb-10"
    >
      {/* ==========================================
          BLOCO ESQUERDO: NARRATIVA E BRANDING
          ========================================== */}
      <motion.div variants={itemVariants} className="flex items-center gap-5 group cursor-default">
        
        {/* --- O ARTEFATO: CÂMARA DO TERMINAL --- */}
        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative flex-shrink-0"
        >
          {/* Ambient Glow */}
          <div className={`
            absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg pointer-events-none
            ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-500/10'}
          `} />
          
          <div 
            ref={terminalRef}
            onMouseMove={handleMouseMove}
            className={`
              relative flex items-center justify-center w-[50px] h-[50px] rounded-[14px] overflow-hidden
              transition-colors duration-300 z-10
              ${isDark 
                ? 'bg-[#0f0f0f] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_15px_rgba(0,0,0,0.5)]' 
                : 'bg-white border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]'
              }
            `}
          >
            {/* EFEITO INOVADOR: Linha de Scanner (Radar) animada por CSS */}
            <div className={`
              absolute left-0 right-0 h-[1px] opacity-30 animate-[scan_3s_ease-in-out_infinite_alternate]
              ${isDark ? 'bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.4)]' : 'bg-cyan-500 shadow-[0_0_8px_2px_rgba(6,182,212,0.3)]'}
            `} />
            <style>{`
              @keyframes scan {
                0% { top: -10%; opacity: 0; }
                10% { opacity: 0.5; }
                90% { opacity: 0.5; }
                100% { top: 110%; opacity: 0; }
              }
            `}</style>

            {/* Spotlight Fluído (Mouse Tracking) */}
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    60px circle at ${mouseX}px ${mouseY}px,
                    ${isDark ? 'rgba(34, 211, 238, 0.15)' : 'rgba(34, 211, 238, 0.08)'},
                    transparent 80%
                  )
                `,
              }}
            />
            
            <Terminal 
              className={`
                relative z-20 transition-all duration-300
                ${isDark ? 'text-cyan-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-cyan-600 group-hover:text-cyan-500 group-hover:drop-shadow-[0_2px_4px_rgba(6,182,212,0.3)]'}
              `} 
              size={22} 
              strokeWidth={2.5} 
            />
          </div>
        </motion.div>
        
        {/* --- TIPOGRAFIA DE PRECISÃO --- */}
        <div className="flex flex-col justify-center pt-0.5">
          <div className="flex items-center gap-3">
            <h1 className="text-[26px] leading-none font-black tracking-tight text-slate-900 dark:text-white flex items-center">
              Dev
              <span className={`
                ml-[1px] text-transparent bg-clip-text
                ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-600'}
              `}>
                Command
              </span>
            </h1>
          </div>

          {/* Subtítulo com Efeito Hacker "Decodificando" no Load */}
          <p className="font-mono text-[12px] md:text-[13px] tracking-tight text-slate-500 dark:text-white/40 mt-1.5 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-white/60">
            {bootText}
            {/* Bloco de cursor estático que acompanha o texto */}
            <span className={`inline-block w-1.5 h-3 ml-1.5 translate-y-[2px] transition-opacity duration-300 ${isDark ? 'bg-cyan-500/50' : 'bg-cyan-500/40'} opacity-0 group-hover:opacity-100`} />
          </p>
        </div>
      </motion.div>

      {/* ==========================================
          BLOCO DIREITO: CONTROLES DE INTERFACE
          ========================================== */}
      <motion.div 
        variants={itemVariants} 
        className="flex items-center gap-4 w-full lg:w-auto"
      >
        <div className="flex-1 lg:w-[320px] relative z-50">
          <SearchBar 
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>
        
        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" aria-hidden="true" />
        
        <div className="flex-shrink-0">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </motion.div>
    </motion.header>
  );
};