import { useState, useCallback } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<'form' | 'success' | 'error'>('form');

  const open = useCallback(() => {
    setFormState('form');
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const setSuccess = useCallback(() => setFormState('success'), []);
  const setError = useCallback(() => setFormState('error'), []);
  const reset = useCallback(() => setFormState('form'), []);

  return { isOpen, formState, open, close, setSuccess, setError, reset };
}
