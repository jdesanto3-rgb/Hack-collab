import { useId } from 'react';
import styles from './Switch.module.css';

export function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
}) {
  const id = useId();

  const rootClass = [
    styles.root,
    checked ? styles.checked : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label htmlFor={id} className={rootClass}>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
        aria-checked={checked}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export default Switch;
