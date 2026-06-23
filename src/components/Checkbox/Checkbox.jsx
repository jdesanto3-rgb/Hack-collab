import { useId, useRef, useEffect } from 'react';
import styles from './Checkbox.module.css';

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
}) {
  const id = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const rootClass = [
    styles.root,
    checked ? styles.checked : '',
    indeterminate ? styles.indeterminate : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label htmlFor={id} className={rootClass}>
      <input
        ref={inputRef}
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
      />
      <span className={styles.box} />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export default Checkbox;
