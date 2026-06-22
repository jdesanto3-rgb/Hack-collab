import styles from './Badge.module.css';

export function Badge({
  variant = 'default',
  live = false,
  children,
}) {
  return (
    <span
      className={[
        styles.badge,
        styles[variant],
        live ? styles.live : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {live && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;
