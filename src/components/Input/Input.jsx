import { useId } from 'react';
import styles from './Input.module.css';

export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  disabled = false,
  type = 'text',
  id: externalId,
}) {
  const generatedId = useId();
  const inputId = externalId || generatedId;

  const isControlled = value !== undefined;

  const inputProps = isControlled
    ? { value, onChange }
    : { defaultValue };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={[
          styles.input,
          error ? styles.hasError : '',
          disabled ? styles.disabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...inputProps}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
