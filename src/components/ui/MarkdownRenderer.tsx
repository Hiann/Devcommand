import React from 'react';
import { MarkdownSyntax } from '../../types';

interface MarkdownRendererProps {
  syntax: MarkdownSyntax;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ syntax }) => {
  const renderExample = () => {
    switch (syntax.element) {
      case 'Negrito (Destaque Forte)':
        return <span className="font-bold text-white">dependências</span>;
      case 'Itálico (Ênfase Leve)':
        return <span className="italic text-white/80">background</span>;
      case 'Tachado (Depreciação)':
        return <span className="line-through text-white/50">Bug do login</span>;
      case 'Código Inline':
        return <code className="px-1.5 py-0.5 bg-black/30 rounded text-cyan-300 text-sm">config.json</code>;
      case 'Bloco de Código':
        return (
          <pre className="p-3 bg-black/40 rounded-lg text-xs text-green-400 overflow-x-auto">
            <code>const x = 1;</code>
          </pre>
        );
      case 'Link Embutido':
        return <span className="text-cyan-400 underline cursor-pointer">Documentação</span>;  // Alterado de <a> para <span>
      case 'Nota (Note)':
        return (
          <div className="p-3 bg-blue-500/10 border-l-4 border-blue-400 rounded-r-lg">
            <span className="text-blue-300 text-sm">ℹ Informação útil</span>
          </div>
        );
      case 'Dica (Tip)':
        return (
          <div className="p-3 bg-green-500/10 border-l-4 border-green-400 rounded-r-lg">
            <span className="text-green-300 text-sm">💡 Truque rápido</span>
          </div>
        );
      case 'Aviso (Warning)':
        return (
          <div className="p-3 bg-yellow-500/10 border-l-4 border-yellow-400 rounded-r-lg">
            <span className="text-yellow-300 text-sm">⚠️ Risco de quebra</span>
          </div>
        );
      default:
        return <span className="text-white/60 text-sm">{syntax.example}</span>;
    }
  };

  return (
    <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="text-white font-medium text-sm mb-1">{syntax.element}</h4>
          <code className="text-xs text-cyan-300 bg-black/30 px-2 py-1 rounded block mb-2">
            {syntax.syntax}
          </code>
        </div>
      </div>
      
      <p className="text-white/50 text-xs mb-3 leading-relaxed">
        {syntax.description}
      </p>
      
      <div className="pt-3 border-t border-white/5">
        <span className="text-[10px] text-white/30 uppercase tracking-wider mb-2 block">Preview</span>
        {renderExample()}
      </div>
    </div>
  );
};