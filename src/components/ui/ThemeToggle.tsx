import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

// ============================================================================
// O ARTEFATO: INTERRUPTOR FÍSICO COM SUPORTE A KEYBINDING
// ============================================================================
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isRippling, setIsRippling] = useState(false);

  // 1. FÍSICA DO FLUIDO DE LUZ (Amortecimento de alta precisão)
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 300, mass: 0.2 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top } = buttonRef.current.getBoundingClientRect();
    rawMouseX.set(e.clientX - left);
    rawMouseY.set(e.clientY - top);
  };

  // 2. MOTOR DE FEEDBACK TÁTIL UNIFICADO (Mouse + Teclado)
  const executeToggle = useCallback(() => {
    // Dispara a onda de choque visual independentemente da origem (click ou tecla)
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 400);
    onToggle();
  }, [onToggle]);

  // 3. OUVINTE GLOBAL INTELIGENTE (Atalho 'T')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Regra de Ouro: Ignora o atalho se o usuário estiver digitando em um input/textarea
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA' ||
        e.ctrlKey || e.metaKey || e.altKey // Ignora se estiver usando modificadores (ex: Ctrl+T abre aba)
      ) {
        return;
      }

      if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        executeToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [executeToggle]);

  return (
    <div className="relative group/toggle flex flex-col items-center">
      {/* ==========================================
          O BOTÃO FÍSICO PRINCIPAL
          ========================================== */}
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onClick={executeToggle}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.92, y: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        role="switch"
        aria-checked={isDark}
        aria-label="Alternar tema do sistema (Atalho: T)"
        className={`
          relative flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[14px]
          transition-colors duration-500 outline-none cursor-pointer
          focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2
          ${isDark 
            ? 'bg-[#0f0f0f] shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-1px_1px_rgba(0,0,0,0.5)] border border-white/5' 
            : 'bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] border border-slate-200/60 backdrop-blur-xl'
          }
        `}
      >
        {/* Camada de Choque Cinética */}
        <AnimatePresence>
          {isRippling && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute rounded-full pointer-events-none ${isDark ? 'bg-cyan-400/20' : 'bg-amber-400/20'}`}
              style={{ width: '48px', height: '48px' }}
            />
          )}
        </AnimatePresence>

        {/* Spotlight de Borda Fotorealista (SVG Mask) */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[14px] opacity-0 transition duration-500 group-hover/toggle:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                50px circle at ${mouseX}px ${mouseY}px,
                ${isDark ? 'rgba(34, 211, 238, 0.8)' : 'rgba(245, 158, 11, 0.5)'},
                transparent 80%
              )
            `,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='black' stroke-width='2.5'/%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='black' stroke-width='2.5'/%3E%3C/svg%3E")`
          }}
        />

        {/* Glow Ambiente Central */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover/toggle:opacity-100 mix-blend-screen"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                45px circle at ${mouseX}px ${mouseY}px,
                ${isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(245, 158, 11, 0.05)'},
                transparent 100%
              )
            `,
          }}
        />

        {/* Física Orbital dos Astros */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ y: isDark ? -25 : 25, opacity: 0, rotate: isDark ? -90 : 90, scale: 0.4, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, rotate: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ y: isDark ? 25 : -25, opacity: 0, rotate: isDark ? 90 : -90, scale: 0.4, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 22, mass: 0.7 }}
            className="relative z-10 flex items-center justify-center"
          >
            {isDark ? (
              <Moon size={22} className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
            ) : (
              <Sun size={24} className="text-amber-500 drop-shadow-[0_4px_10px_rgba(245,158,11,0.5)]" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Reflexo de Vidro Dinâmico */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 rounded-[14px] pointer-events-none border-t ${isDark ? 'border-cyan-400/20' : 'border-white'} mix-blend-overlay`} 
        />
      </motion.button>

      {/* ==========================================
          TOOLTIP DE ATALHO (Discoverability Sênior)
          Mostra ao usuário que a tecla 'T' existe
          ========================================== */}
      <div className="absolute top-[100%] mt-3 opacity-0 group-hover/toggle:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/toggle:translate-y-0 pointer-events-none z-50">
        <div className={`
          flex items-center gap-2 px-2.5 py-1.5 rounded-lg shadow-xl backdrop-blur-xl border
          ${isDark 
            ? 'bg-[#1a1a1a]/90 border-white/10 text-white/60' 
            : 'bg-white/90 border-slate-200/80 text-slate-500'
          }
        `}>
          <span className="text-[11px] font-medium tracking-wide">Tema</span>
          <span className={`
            flex items-center justify-center h-[18px] min-w-[18px] px-1 rounded-[4px] font-mono text-[10px] font-bold
            ${isDark 
              ? 'bg-white/10 text-cyan-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.5)]' 
              : 'bg-slate-100 text-slate-600 shadow-[0_1px_0_rgba(203,213,225,1)] border border-slate-200'
            }
          `}>
            T
          </span>
        </div>
      </div>
    </div>
  );
};