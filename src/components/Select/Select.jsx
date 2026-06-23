import { useId } from 'react';
import styles from './Select.module.css';

export function Select({
  label,
  options = [],
  value,
  onChange,
  error,
  disabled = false,
  placeholder,
}) {
  const generatedId = useId();
  const selectId = generatedId;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={[
            styles.select,
            error ? styles.hasError : '',
            disabled ? styles.disabled : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-describedby={error ? `${selectId}-error` : undefined}
          aria-invalid={error ? 'true' : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span id={`${selectId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Select;
