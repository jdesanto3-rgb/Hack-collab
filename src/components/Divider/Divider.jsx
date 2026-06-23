import styles from './Divider.module.css';

export function Divider({ orientation = 'horizontal', label, spacing = 'md' }) {
  if (orientation === 'vertical') {
    return <span className={[styles.vertical, styles[spacing]].filter(Boolean).join(' ')} aria-hidden="true" />;
  }

  if (label) {
    return (
      <div className={[styles.horizontal, styles.withLabel, styles[spacing]].filter(Boolean).join(' ')} role="separator">
        <span className={styles.line} />
        <span className={styles.labelText}>{label}</span>
        <span className={styles.line} />
      </div>
    );
  }

  return <hr className={[styles.horizontal, styles[spacing]].filter(Boolean).join(' ')} aria-hidden="true" />;
}

export default Divider;
