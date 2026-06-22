import styles from './Typography.module.css';

const VARIANT_MAP = {
  h1: { tag: 'h1', className: 'h1' },
  h2: { tag: 'h2', className: 'h2' },
  h3: { tag: 'h3', className: 'h3' },
  body: { tag: 'p', className: 'body' },
  small: { tag: 'p', className: 'small' },
  label: { tag: 'span', className: 'label' },
  caption: { tag: 'span', className: 'caption' },
};

export function Typography({
  variant = 'body',
  children,
  color,
  as: asProp,
  className: externalClass,
}) {
  const config = VARIANT_MAP[variant] || VARIANT_MAP.body;
  const Tag = asProp || config.tag;

  return (
    <Tag
      className={[styles[config.className], externalClass].filter(Boolean).join(' ')}
      style={color ? { color } : undefined}
    >
      {children}
    </Tag>
  );
}

export default Typography;
