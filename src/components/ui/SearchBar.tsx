import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  // Placeholder estático foi removido, pois agora é gerado pelo array abaixo
}

const SUGGESTIONS = [
  "Buscar comandos...",
  "Tente 'git commit'...",
  "Tente 'limpar cache'...",
  "Procurar atalhos Excel..."
];

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange 
}) => {
  // Lógica da Máquina de Escrever
  const [placeholder, setPlaceholder] = useState('');
  const [sugIndex, setSugIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Se o usuário já começou a digitar, paramos a animação.
    if (value.length > 0) return;

    const currentWord = SUGGESTIONS[sugIndex];
    const delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSugIndex((prev) => (prev + 1) % SUGGESTIONS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setPlaceholder(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sugIndex, value]);

  return (
    <div className="relative group w-full">
      <Search 
        size={18} 
        className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 
                   text-slate-400 group-focus-within:text-cyan-500 
                   dark:text-white/20 dark:group-focus-within:text-cyan-400" 
      />
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full h-12 pl-12 pr-4 rounded-xl border transition-all duration-300 outline-none
          bg-slate-100/50 border-slate-200 text-slate-900 placeholder:text-slate-400
          focus:bg-white focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10
          dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-white/20
          dark:focus:bg-white/10 dark:focus:border-cyan-400/50 dark:focus:ring-cyan-400/10
        `}
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:block">
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 dark:border-white/10 dark:text-white/20">
          /
        </span>
      </div>
    </div>
  );
};