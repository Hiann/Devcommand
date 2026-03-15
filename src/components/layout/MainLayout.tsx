import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnimatedBackground } from '../ui/AnimatedBackground';

interface MainLayoutProps {
  children: React.ReactNode;
  searchValue: string;
  onSearchChange: (value: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  searchValue,
  onSearchChange,
  isDark,
  onThemeToggle
}) => {
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`
      min-h-screen w-full transition-colors duration-500 ease-in-out relative overflow-hidden
      ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-100 text-slate-900'}
    `}>
      <AnimatedBackground />

      {/* TEXTURA DE RUÍDO (Nova Adição) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* GLOWS DE VIDA PARA O MODO CLARO */}
      {!isDark && (
        <>
          <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col min-h-screen">
        <header className="w-full">
          <Header 
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            isDark={isDark}
            onThemeToggle={onThemeToggle}
          />
        </header>
        
        <AnimatePresence mode="wait">
          <motion.main
            key={isDark ? 'dark' : 'light'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow py-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        
        <footer className="w-full mt-auto pt-10">
          <Footer isDark={isDark} />
        </footer>
      </div>
    </div>
  );
};