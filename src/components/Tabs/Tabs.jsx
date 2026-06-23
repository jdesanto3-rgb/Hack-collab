import styles from './Tabs.module.css';

export function Tabs({ value, onChange, children }) {
  return (
    <div className={styles.tabs}>
      <div className={styles.list} role="tablist">
        {children && (Array.isArray(children) ? children : [children]).map((child) => {
          if (!child) return null;
          const isActive = child.props.value === value;
          return (
            <button
              key={child.props.value}
              role="tab"
              aria-selected={isActive}
              disabled={child.props.disabled}
              className={[styles.tab, isActive ? styles.active : '', child.props.disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
              onClick={() => !child.props.disabled && onChange?.(child.props.value)}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Tab({ value, label, disabled }) {
  // Tab is a descriptor — rendering handled by Tabs
  return null;
}

export default Tabs;
