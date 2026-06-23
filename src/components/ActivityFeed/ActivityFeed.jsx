import { AgentBadge } from '../AgentBadge/AgentBadge';
import styles from './ActivityFeed.module.css';

/* ─────────────────────────────────────────────
   Tag chip mapping
───────────────────────────────────────────── */

const TAG_CONFIG = {
  parallel: { label: 'PARALLEL · 3 AGENTS', className: styles.chipParallel },
  promote:  { label: 'GATE PASSED → PROMOTED', className: styles.chipPromote },
  gate:     { label: 'GOVERNANCE', className: styles.chipGate },
  human:    { label: 'HUMAN IN THE LOOP', className: styles.chipHuman },
};

/* ─────────────────────────────────────────────
   ActivityItem
───────────────────────────────────────────── */

/**
 * @param {{
 *   agentColor: string,
 *   agentShort: string,
 *   agentName: string,
 *   text: string,
 *   tag?: 'parallel'|'promote'|'gate'|'human'|'',
 *   time?: string
 * }} props
 */
export function ActivityItem({ agentColor, agentShort, agentName, text, tag = '', time = 'just now' }) {
  const tagConfig = tag && TAG_CONFIG[tag];

  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <AgentBadge initials={agentShort} color={agentColor} size="sm" shape="square" />
        <span className={styles.itemName}>{agentName}</span>
        <span className={styles.itemTime}>{time}</span>
      </div>
      <p className={styles.itemText}>{text}</p>
      {tagConfig && (
        <span className={[styles.chip, tagConfig.className].join(' ')}>
          {tagConfig.label}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ActivityFeed
───────────────────────────────────────────── */

/**
 * @param {{
 *   events?: Array<{agentColor:string, agentShort:string, agentName:string, text:string, tag?:string, time?:string}>,
 *   emptyText?: string
 * }} props
 */
export function ActivityFeed({ events = [], emptyText = 'No activity yet.' }) {
  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <div className={styles.headerLabel}>ACTIVITY</div>
        <div className={styles.headerTitle}>Agent Activity Feed</div>
      </div>

      {events.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>{emptyText}</p>
        </div>
      ) : (
        <div className={styles.list}>
          {events.map((event, i) => (
            <ActivityItem
              key={i}
              agentColor={event.agentColor}
              agentShort={event.agentShort}
              agentName={event.agentName}
              text={event.text}
              tag={event.tag}
              time={event.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}
