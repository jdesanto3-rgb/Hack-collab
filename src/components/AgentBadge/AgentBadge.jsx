import styles from './AgentBadge.module.css';

/**
 * AgentBadge — compact avatar for an AI agent.
 * @param {{ initials: string, color: string, size?: 'sm'|'md'|'lg'|'xl', shape?: 'square'|'circle' }} props
 */
export function AgentBadge({ initials, color, size = 'md', shape = 'square' }) {
  const sizeClass = styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`];
  const shapeClass = shape === 'circle' ? styles.circle : styles.square;

  return (
    <span
      className={[styles.badge, sizeClass, shapeClass].filter(Boolean).join(' ')}
      style={{ background: color }}
      aria-label={`Agent ${initials}`}
    >
      {initials}
    </span>
  );
}
