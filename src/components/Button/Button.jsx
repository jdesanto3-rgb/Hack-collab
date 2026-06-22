import styles from './Button.module.css';

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
