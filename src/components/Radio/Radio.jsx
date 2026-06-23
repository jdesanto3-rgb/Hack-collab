import { useId } from 'react';
import styles from './Radio.module.css';

export function Radio({
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  name,
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
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.circle} />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  disabled = false,
}) {
  return (
    <fieldset className={styles.fieldset}>
      {label && <legend className={styles.groupLabel}>{label}</legend>}
      <div className={styles.group}>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onChange={onChange}
            disabled={disabled}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default Radio;
