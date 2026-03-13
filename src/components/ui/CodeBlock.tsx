import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'bash',
  showLineNumbers = true,
  filename
}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10">
      {filename && (
        <div className="px-4 py-2 bg-[#252526] border-b border-white/5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-white/40 font-mono">{filename}</span>
        </div>
      )}
      
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: '1.7',
        }}
        lineNumberStyle={{
          color: 'rgba(255,255,255,0.2)',
          paddingRight: '1rem',
          minWidth: '2.5rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};