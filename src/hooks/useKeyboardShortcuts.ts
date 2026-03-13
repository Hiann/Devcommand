import { useEffect, useCallback } from 'react';

export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = [
      e.ctrlKey ? 'Ctrl' : '',
      e.shiftKey ? 'Shift' : '',
      e.altKey ? 'Alt' : '',
      e.metaKey ? 'Meta' : '',
      e.key
    ].filter(Boolean).join('+');

    const handler = shortcuts[key];
    if (handler) {
      e.preventDefault();
      handler();
    }
  }, [shortcuts]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};