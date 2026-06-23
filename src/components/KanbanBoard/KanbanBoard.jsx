import { AgentBadge } from '../AgentBadge/AgentBadge';
import styles from './KanbanBoard.module.css';

/* ─────────────────────────────────────────────
   Internal thumbnail helpers (not exported)
───────────────────────────────────────────── */

function WireThumbnail() {
  return (
    <div className={[styles.thumb, styles.thumbWire].join(' ')} style={{ height: 128 }}>
      {/* header line */}
      <div className={styles.thumbLine} style={{ height: 10, width: '60%', background: '#d6d1c7' }} />
      {/* cross area */}
      <div className={styles.thumbCross} />
      {/* footer lines */}
      <div className={styles.thumbLine} style={{ height: 8, width: '80%', background: '#d6d1c7' }} />
      <div className={styles.thumbLine} style={{ height: 8, width: '50%', background: '#d6d1c7' }} />
    </div>
  );
}

function HifiThumbnail({ tone = '#6f57d4' }) {
  return (
    <div className={[styles.thumb, styles.thumbHifi].join(' ')} style={{ height: 128 }}>
      {/* colored header bar */}
      <div style={{ height: 24, background: tone, flexShrink: 0 }} />
      {/* body placeholder */}
      <div style={{ flex: 1, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div className={styles.thumbLine} style={{ height: 8, width: '70%', background: '#e2ddd5' }} />
        <div className={styles.thumbLine} style={{ height: 8, width: '90%', background: '#e2ddd5' }} />
        <div className={styles.thumbLine} style={{ height: 8, width: '55%', background: '#e2ddd5' }} />
      </div>
      {/* colored CTA bar */}
      <div style={{ height: 18, background: tone, opacity: 0.2, flexShrink: 0, margin: '0 10px 8px' , borderRadius: 4 }} />
    </div>
  );
}

function BriefThumbnail() {
  return (
    <div className={[styles.thumb, styles.thumbBrief].join(' ')} style={{ height: 128 }}>
      <div className={styles.thumbLine} style={{ height: 9, width: '45%', background: '#d0ccc4' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '90%', background: '#e2ddd5' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '85%', background: '#e2ddd5' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '70%', background: '#e2ddd5' }} />
      <div className={styles.thumbLine} style={{ height: 1, background: '#e6e1d8', margin: '4px 0' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '40%', background: '#d0ccc4' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '80%', background: '#e2ddd5' }} />
      <div className={styles.thumbLine} style={{ height: 7, width: '60%', background: '#e2ddd5' }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   KanbanCard
───────────────────────────────────────────── */

/**
 * @param {{
 *   kindLabel: string,
 *   kindColor: string,
 *   title: string,
 *   time?: string,
 *   agentName: string,
 *   agentShort: string,
 *   agentColor: string,
 *   thumbnailType?: 'wire'|'hifi'|'brief',
 *   tone?: string,
 *   fresh?: boolean,
 *   onClick?: () => void
 * }} props
 */
export function KanbanCard({
  kindLabel,
  kindColor,
  title,
  time = '',
  agentName,
  agentShort,
  agentColor,
  thumbnailType = 'wire',
  tone,
  fresh = false,
  onClick,
}) {
  const toneColor = tone || agentColor;

  const cardStyle = fresh
    ? {
        borderColor: toneColor,
        boxShadow: `0 0 0 2px ${toneColor}28, var(--shadow-sm)`,
      }
    : {};

  return (
    <div
      className={styles.card}
      style={cardStyle}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {/* Meta row */}
      <div className={styles.cardMeta}>
        <span className={styles.kindLabel} style={{ color: kindColor }}>
          {kindLabel}
        </span>
        {time && <span className={styles.timeLabel}>{time}</span>}
      </div>

      {/* Thumbnail */}
      {thumbnailType === 'wire' && <WireThumbnail />}
      {thumbnailType === 'hifi' && <HifiThumbnail tone={toneColor} />}
      {thumbnailType === 'brief' && <BriefThumbnail />}

      {/* Title */}
      <div className={styles.cardTitle}>{title}</div>

      {/* Footer */}
      <div className={styles.cardFooter}>
        <AgentBadge initials={agentShort} color={agentColor} size="sm" shape="square" />
        <span className={styles.agentName}>{agentName}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   KanbanColumn
───────────────────────────────────────────── */

/**
 * @param {{ label: string, color: string, count?: number, children?: React.ReactNode }} props
 */
export function KanbanColumn({ label, color, count, children }) {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <span className={styles.columnDot} style={{ background: color }} />
        <span className={styles.columnLabel}>{label}</span>
        {count !== undefined && (
          <span className={styles.columnCount}>{count}</span>
        )}
      </div>
      <div className={styles.columnBody}>{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   KanbanBoard
───────────────────────────────────────────── */

/**
 * @param {{ children?: React.ReactNode }} props
 */
export function KanbanBoard({ children }) {
  return <div className={styles.board}>{children}</div>;
}
