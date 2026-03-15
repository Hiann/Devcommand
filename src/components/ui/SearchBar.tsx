import React, { useState, useEffect, useRef } from "react";
import { Search, X, Command as CmdIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SUGGESTIONS = [
  "Buscar comandos...",
  "Tente 'git push -u'...",
  "O que você deseja executar?",
  "Procurar atalhos do VS Code...",
];

// ============================================================================
// 1. MOTOR SÊNIOR: CIPHER SUGGESTION ENGINE (Coesão com o Header)
// ============================================================================
const useCipherSuggestions = (words: string[], isPaused: boolean) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>()[]{}";

  useEffect(() => {
    if (isPaused) {
      setDisplayText(words[0]); // Fixa a primeira sugestão se estiver focado/digitando
      return;
    }

    let animationFrame: number;
    let startTime: number;
    const duration = 1200; // Tempo do embaralhamento
    const pauseTime = 3000; // Tempo que a palavra fica parada na tela para leitura
    const currentWord = words[wordIndex];

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        // Fase 1: Embaralhando e Revelando
        const percentage = progress / duration;
        const lockCount = Math.floor(currentWord.length * percentage);
        let scrambled = currentWord.substring(0, lockCount);

        for (let i = lockCount; i < currentWord.length; i++) {
          scrambled +=
            currentWord[i] === " "
              ? " "
              : chars[Math.floor(Math.random() * chars.length)];
        }
        setDisplayText(scrambled);
        animationFrame = requestAnimationFrame(animate);
      } else if (progress < duration + pauseTime) {
        // Fase 2: Pausa para o usuário ler
        setDisplayText(currentWord);
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Fase 3: Próxima palavra
        setWordIndex((prev) => (prev + 1) % words.length);
        startTime = 0; // Reseta o relógio
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [wordIndex, isPaused, words]);

  return displayText;
};

const useOS = () => {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined")
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent));
  }, []);
  return isMac;
};

// ============================================================================
// 2. A TECLA MECÂNICA (Skeuomorfismo de Alta Fidelidade)
// ============================================================================
const MechanicalKey = ({
  isMac,
  isFocused,
}: {
  isMac: boolean;
  isFocused: boolean;
}) => (
  <motion.div
    key="hint"
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5, scale: 0.9 }}
    className={`
      hidden sm:flex items-center justify-center gap-1 px-2 h-[26px] rounded-[6px] 
      text-[11px] font-mono font-black tracking-widest transition-all duration-300 pointer-events-none select-none
      ${
        isFocused
          ? "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 translate-y-[2px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:bg-cyan-500/20 dark:text-cyan-300"
          : "bg-gradient-to-b from-white to-slate-50 text-slate-400 border border-slate-200/80 shadow-[0_3px_0_rgba(203,213,225,1),0_4px_4px_rgba(0,0,0,0.05)] translate-y-[-1px] dark:from-[#222] dark:to-[#1a1a1a] dark:border-[#333] dark:shadow-[0_3px_0_rgba(10,10,10,1),0_4px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] dark:text-white/40"
      }
    `}
  >
    {isMac ? <CmdIcon size={12} strokeWidth={2.5} /> : <span>Ctrl</span>}
    <span className="mt-[1px]">K</span>
  </motion.div>
);

// ============================================================================
// 3. O CHASSI DO SEARCHBAR (A obra-prima)
// ============================================================================
export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const isMac = useOS();
  const cipherText = useCipherSuggestions(
    SUGGESTIONS,
    value.length > 0 || isFocused,
  );

  // Listener Global Magnético
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (((e.ctrlKey || e.metaKey) && e.key === "k") || e.code === "Slash") {
        if (document.activeElement !== inputRef.current) {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        onChange("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onChange]);

  return (
    <div
      className="relative group w-full flex items-center h-[48px]"
      role="search"
    >
      {/* ATMOSFERA EXTERNA: Brilho que emana do componente focado */}
      <div
        className={`
        absolute -inset-1.5 rounded-[20px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 
        blur-xl transition-all duration-700 pointer-events-none -z-10
        ${isFocused ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      />

      {/* O CHASSI PRINCIPAL */}
      <div
        className={`
        relative w-full h-full flex items-center transition-all duration-500 rounded-xl overflow-hidden
        ${
          isFocused
            ? "bg-white dark:bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(6,182,212,0.6),0_10px_40px_-10px_rgba(6,182,212,0.3)] dark:shadow-[0_0_0_1px_rgba(34,211,238,0.5),inset_0_2px_10px_rgba(0,0,0,0.5)]"
            : "bg-white/70 dark:bg-white/[0.02] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 backdrop-blur-2xl"
        }
      `}
      >
        {/* TEXTURA DE RUÍDO FRACTAL (O segredo do Frosted Glass Perfeito) */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />

        {/* LASER TRACKER: Linha de energia na base do input quando focado */}
        <div
          className={`
          absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent
          w-[200%] transition-opacity duration-500 animate-[pan_3s_linear_infinite]
          ${isFocused ? "opacity-100" : "opacity-0"}
        `}
        />
        <style>{`@keyframes pan { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }`}</style>

        {/* LUPA COM FÍSICA APLICADA */}
        <div className="pl-4 pr-3 flex-shrink-0 relative z-20">
          <motion.div
            animate={{
              rotate: isFocused ? 90 : 0,
              scale: isFocused ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Search
              size={18}
              strokeWidth={isFocused ? 2.5 : 2}
              className={`transition-colors duration-500 ${isFocused ? "text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" : "text-slate-400 dark:text-white/30 group-hover:text-slate-500 dark:group-hover:text-white/50"}`}
            />
          </motion.div>
        </div>

        {/* ÁREA DE DIGITAÇÃO E CIPHER TEXT */}
        <div className="relative w-full h-full flex items-center">
          <AnimatePresence>
            {!value && !isFocused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="absolute inset-0 flex items-center pointer-events-none text-[14.5px] font-medium text-slate-500 dark:text-white/40"
              >
                <span className="tracking-tight">{cipherText}</span>
                {/* Cursor de Terminal (Pisca com times matemáticos perfeitos) */}
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    times: [0, 0.5, 0.5, 1],
                  }}
                  className="inline-block w-[6px] h-[16px] ml-[2px] bg-cyan-500/70 dark:bg-cyan-400/80 rounded-[1px]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? "Ex: docker build, git commit..." : ""}
            className="w-full h-full bg-transparent border-none outline-none text-[14.5px] font-medium tracking-tight text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-white/20 relative z-10"
            autoComplete="off"
            spellCheck="false"
            aria-label="Buscar comandos"
          />
        </div>

        {/* ÁREA DE CONTROLES (Limpar vs Atalho) */}
        <div className="pr-3 flex items-center justify-end min-w-[50px] flex-shrink-0 z-20">
          <AnimatePresence mode="popLayout">
            {value ? (
              <motion.button
                key="clear"
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => {
                  onChange("");
                  inputRef.current?.focus();
                }}
                className="p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:text-rose-400 dark:hover:bg-rose-500/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                type="button"
              >
                <X size={16} strokeWidth={3} />
              </motion.button>
            ) : (
              <MechanicalKey isMac={isMac} isFocused={isFocused} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
