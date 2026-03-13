import { useState, useCallback } from 'react';

export const useCopyToClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (err) {
      console.error('Falha ao copiar:', err);
      setCopied(false);
      return false;
    }
  }, [timeout]);

  return { copied, copy };
};