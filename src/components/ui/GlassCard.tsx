import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  intensity = 'medium'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // 1. Movimento 3D Original
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  // 2. Refração Dinâmica
  const refractionX = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

  // 3. NOVO: Spotlight Engine de Alta Performance (Bypass no React State)
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  // Template dinâmico para o gradiente, processado direto na GPU
  const spotlightBackground = useMotionTemplate`radial-gradient(450px circle at ${spotlightX}px ${spotlightY}px, rgba(34, 211, 238, 0.1), transparent 40%)`;

  const intensityClasses = {
    low: 'bg-white border-slate-200 dark:bg-white/5 dark:border-white/5',
    medium: 'bg-white border-slate-200 dark:bg-white/10 dark:border-white/10',
    high: 'bg-white border-slate-300 dark:bg-white/15 dark:border-white/20'
  };

  // Usando PointerEvents ao invés de MouseEvents (Muito mais preciso no Windows)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;

    if (hover) {
      x.set(pointerX / rect.width - 0.5);
      y.set(pointerY / rect.height - 0.5);
    }

    // Atualiza a posição da luz sem causar re-render no React
    spotlightX.set(pointerX);
    spotlightY.set(pointerY);
  };

  const handlePointerEnter = () => {
    spotlightOpacity.set(1);
  };

  const handlePointerLeave = () => {
    if (hover) { 
      x.set(0); 
      y.set(0); 
    }
    spotlightOpacity.set(0); // Apaga a luz instantaneamente ao sair
  };

  return (
    <motion.div
      ref={divRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ 
        rotateX: hover ? rotateX : 0, 
        rotateY: hover ? rotateY : 0, 
        transformStyle: "preserve-3d" 
      }}
      className={`
        relative backdrop-blur-xl rounded-2xl border transition-colors duration-300 overflow-hidden
        text-slate-900 dark:text-white glass
        ${intensityClasses[intensity]}
        ${glow ? 'shadow-2xl shadow-slate-200 dark:shadow-white/5' : ''}
        ${className}
      `}
    >
      {/* CAMADA DE REFRAÇÃO */}
      <motion.div 
        style={{ x: refractionX }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] dark:via-white/[0.01] to-transparent -skew-x-12 pointer-events-none z-0"
      />

      {/* LUZ DO SPOTLIGHT (Agora com style gerido pelo Framer Motion) */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: spotlightOpacity,
          background: spotlightBackground,
        }}
      />

      {/* Conteúdo principal */}
      <div style={{ transform: "translateZ(30px)" }} className="h-full relative z-10">
        {children}
      </div>
      
      {/* Brilhos e Bordas */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 dark:from-white/10 to-transparent pointer-events-none z-10" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-white/10 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </motion.div>
  );
};