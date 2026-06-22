import styles from './Card.module.css';

export function Card({
  children,
  title,
  padding = 'md',
}) {
  return (
    <div className={[styles.card, styles[`pad-${padding}`]].join(' ')}>
      {title && (
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default Card;
