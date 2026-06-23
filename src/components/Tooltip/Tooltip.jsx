import styles from './Tooltip.module.css';

export function Tooltip({ content, placement = 'top', children }) {
  return (
    <span className={[styles.wrapper, styles[placement]].filter(Boolean).join(' ')}>
      {children}
      <span className={styles.tip} role="tooltip">{content}</span>
    </span>
  );
}

export default Tooltip;
