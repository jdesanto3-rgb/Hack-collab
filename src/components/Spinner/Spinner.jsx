import styles from './Spinner.module.css';

export function Spinner({ size = 'md', variant = 'purple', label = 'Loading…' }) {
  return (
    <span
      className={[styles.spinner, styles[size], styles[variant]].filter(Boolean).join(' ')}
      role="status"
      aria-label={label}
    >
      <span className={styles.srOnly}>{label}</span>
    </span>
  );
}

export default Spinner;
