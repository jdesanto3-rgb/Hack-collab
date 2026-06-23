import styles from './PipelineRail.module.css';

/**
 * PipelineRail — sequential agent pipeline visualizer.
 *
 * @param {{
 *   agents: Array<{ key: string, name: string, short: string, color: string }>,
 *   currentPhase?: number,
 *   onReset?: () => void
 * }} props
 *
 * currentPhase semantics:
 *   0           → idle (all pending)
 *   1..n        → agents[0..currentPhase-2] done, agents[currentPhase-1] active, rest pending
 *   > agents.length → all done
 */
export function PipelineRail({ agents = [], currentPhase = 0, onReset }) {
  return (
    <div className={styles.rail}>
      {/* Header */}
      <div className={styles.railHeader}>
        <div className={styles.railLabel}>SEQUENTIAL PIPELINE</div>
        <div className={styles.railTitle}>Design workflow spine</div>
      </div>

      {/* Agent items */}
      {agents.map((agent, idx) => {
        const phase = idx + 1; // 1-based
        const isDone    = currentPhase > phase;
        const isActive  = currentPhase === phase;
        const isPending = currentPhase < phase;
        const isLast    = idx === agents.length - 1;

        let dotClass = styles.dotPending;
        if (isDone)   dotClass = styles.dotDone;
        if (isActive) dotClass = styles.dotActive;

        const dotStyle = isDone || isActive
          ? { background: agent.color }
          : {};

        const connectorStyle = isDone
          ? { background: agent.color, opacity: 0.35 }
          : { background: '#d8d3c7' };

        const statusText = isDone   ? 'Done'
                         : isActive ? 'In progress…'
                         : 'Pending';

        const statusColor = isDone   ? agent.color
                          : isActive ? agent.color
                          : '#a8a499';

        return (
          <div key={agent.key} className={styles.item}>
            <div className={styles.dotCol}>
              {/* Dot */}
              <div
                className={[styles.dot, dotClass].join(' ')}
                style={dotStyle}
              >
                {isDone ? '✓' : agent.short}
                {isActive && (
                  <span
                    className={styles.pulseRing}
                    style={{ borderColor: agent.color }}
                  />
                )}
              </div>

              {/* Connector line (not rendered after last item) */}
              {!isLast && (
                <div className={styles.connector} style={connectorStyle} />
              )}
            </div>

            {/* Info */}
            <div className={styles.info}>
              <div className={styles.agentName}>{agent.name}</div>
              <div className={styles.status} style={{ color: statusColor }}>
                {statusText}
              </div>
            </div>
          </div>
        );
      })}

      {/* Reset */}
      {onReset && (
        <button className={styles.resetBtn} onClick={onReset} type="button">
          Reset pipeline
        </button>
      )}
    </div>
  );
}
