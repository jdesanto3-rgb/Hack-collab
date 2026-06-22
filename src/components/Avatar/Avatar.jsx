import styles from './Avatar.module.css';

const SIZE_MAP = {
  sm: 24,
  md: 32,
  lg: 40,
};

const DEFAULT_COLORS = [
  '#534AB7',
  '#0F6E56',
  '#854F0B',
  '#1B4B6B',
  '#a32d2d',
];

function getColorForInitials(initials) {
  if (!initials) return DEFAULT_COLORS[0];
  const code = initials.charCodeAt(0) + (initials.charCodeAt(1) || 0);
  return DEFAULT_COLORS[code % DEFAULT_COLORS.length];
}

export function Avatar({
  initials,
  src,
  size = 'md',
  color,
  alt,
}) {
  const px = SIZE_MAP[size] || SIZE_MAP.md;
  const bg = color || getColorForInitials(initials);
  const display = initials ? initials.slice(0, 2).toUpperCase() : '';

  return (
    <span
      className={[styles.avatar, styles[size]].join(' ')}
      style={{ width: px, height: px, minWidth: px }}
      role={src ? undefined : 'img'}
      aria-label={alt || display || 'Avatar'}
    >
      {src ? (
        <img
          src={src}
          alt={alt || display || 'Avatar'}
          className={styles.img}
          width={px}
          height={px}
        />
      ) : (
        <span
          className={styles.initials}
          style={{ background: bg, fontSize: Math.round(px * 0.38) }}
        >
          {display}
        </span>
      )}
    </span>
  );
}

export default Avatar;
