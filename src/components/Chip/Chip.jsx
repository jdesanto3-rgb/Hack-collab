import styles from './Chip.module.css';

export function Chip({
  label,
  onRemove,
  active = false,
  variant = 'default',
  onClick,
}) {
  return (
    <span
      className={[
        styles.chip,
        styles[variant],
        active ? styles.active : '',
        onClick || onRemove ? styles.clickable : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick(e) : undefined}
      aria-pressed={onClick ? active : undefined}
    >
      <span className={styles.label}>{label}</span>
      {onRemove && (
        <button
          type="button"
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label={`Remove ${label}`}
        >
          ×
        </button>
      )}
    </span>
  );
}

export default Chip;
