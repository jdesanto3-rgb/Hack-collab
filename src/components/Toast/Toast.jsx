import { useEffect, createContext, useContext, useState, useCallback } from 'react';
import styles from './Toast.module.css';

// Single Toast
export function Toast({ message, variant = 'default', onClose, duration = 3000 }) {
  useEffect(() => {
    if (!duration) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div className={[styles.toast, styles[variant]].filter(Boolean).join(' ')} role="status" aria-live="polite">
      <span className={styles.message}>{message}</span>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Dismiss">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </div>
  );
}

// Context
const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

let nextId = 1;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((message, variant = 'default', duration = 3000) => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
  }, []);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className={styles.container} aria-live="polite" aria-label="Notifications">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            variant={t.variant}
            duration={t.duration}
            onClose={() => remove(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default Toast;
