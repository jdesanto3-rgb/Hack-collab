export default {
  title: 'Design Tokens/Reference',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visual reference for all design tokens — colors, spacing, border-radius, typography scale, and shadows.',
      },
    },
  },
};

/* ── helpers ─────────────────────────────────────────── */
function Swatch({ name, value, textColor = '#fff' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div
        style={{
          background: value,
          borderRadius: '6px',
          height: '48px',
          border: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '4px 6px',
        }}
      >
        <span style={{ fontSize: '9px', color: textColor, opacity: 0.8, fontWeight: 500 }}>
          {value}
        </span>
      </div>
      <span style={{ fontSize: '10px', color: 'var(--text2)', fontWeight: 500 }}>{name}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text3)',
          margin: '0 0 16px',
          paddingBottom: '8px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SwatchGrid({ items }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '12px',
      }}
    >
      {items.map((item) => (
        <Swatch key={item.name} {...item} />
      ))}
    </div>
  );
}

/* ── Color data ───────────────────────────────────────── */
const NEUTRALS = [
  { name: '--bg', value: '#f7f6f3', textColor: '#1a1916' },
  { name: '--surface', value: '#ffffff', textColor: '#1a1916' },
  { name: '--surface2', value: '#f0efe9', textColor: '#1a1916' },
  { name: '--border', value: '#e2e0d8', textColor: '#1a1916' },
  { name: '--border2', value: '#ccc9be', textColor: '#1a1916' },
  { name: '--text', value: '#1a1916' },
  { name: '--text2', value: '#6b6960' },
  { name: '--text3', value: '#9c9a90', textColor: '#1a1916' },
];

const BRAND_COLORS = [
  { name: '--purple', value: '#534AB7' },
  { name: '--purple-mid', value: '#AFA9EC', textColor: '#1a1916' },
  { name: '--purple-light', value: '#EEEDFE', textColor: '#534AB7' },
  { name: '--teal', value: '#0F6E56' },
  { name: '--teal-mid', value: '#5DCAA5', textColor: '#1a1916' },
  { name: '--teal-light', value: '#E1F5EE', textColor: '#0F6E56' },
  { name: '--amber', value: '#854F0B' },
  { name: '--amber-mid', value: '#EF9F27', textColor: '#1a1916' },
  { name: '--amber-light', value: '#FAEEDA', textColor: '#854F0B' },
  { name: '--red', value: '#a32d2d' },
  { name: '--red-light', value: '#fcebeb', textColor: '#a32d2d' },
  { name: '--npt', value: '#1B4B6B' },
  { name: '--npt-light', value: '#e8f0f6', textColor: '#1B4B6B' },
];

/* ── Spacing ──────────────────────────────────────────── */
const SPACING = [
  { name: '--space-xs', value: '4px' },
  { name: '--space-sm', value: '8px' },
  { name: '--space-md', value: '12px' },
  { name: '--space-lg', value: '16px' },
  { name: '--space-xl', value: '24px' },
  { name: '--space-2xl', value: '32px' },
  { name: '--space-3xl', value: '48px' },
];

/* ── Radius ───────────────────────────────────────────── */
const RADIUS = [
  { name: '--radius-sm', value: '4px' },
  { name: '--radius', value: '6px' },
  { name: '--radius-lg', value: '8px' },
  { name: '--radius-pill', value: '20px' },
  { name: '--radius-full', value: '9999px' },
];

/* ── Typography ───────────────────────────────────────── */
const TYPE_SCALE = [
  { name: 'h1', size: '30px', weight: 700, sample: 'The quick brown fox' },
  { name: 'h2', size: '24px', weight: 700, sample: 'The quick brown fox' },
  { name: 'h3', size: '20px', weight: 600, sample: 'The quick brown fox' },
  { name: 'body', size: '13px', weight: 400, sample: 'Body text for reading comfort and clarity.' },
  { name: 'small', size: '12px', weight: 400, sample: 'Smaller supporting descriptions.' },
  { name: 'label', size: '11px', weight: 500, sample: 'SECTION LABEL' },
  { name: 'caption', size: '10px', weight: 400, sample: 'Last updated 2 hours ago' },
];

/* ── Shadows ──────────────────────────────────────────── */
const SHADOWS = [
  { name: '--shadow-sm', value: '0 1px 2px rgba(0,0,0,0.06)' },
  { name: '--shadow-md', value: '0 2px 8px rgba(0,0,0,0.08)' },
  { name: '--shadow-lg', value: '0 4px 16px rgba(0,0,0,0.10)' },
];

/* ── Stories ──────────────────────────────────────────── */
export const Colors = {
  render: () => (
    <div>
      <Section title="Neutrals">
        <SwatchGrid items={NEUTRALS} />
      </Section>
      <Section title="Brand & Semantic Colors">
        <SwatchGrid items={BRAND_COLORS} />
      </Section>
    </div>
  ),
};

export const Spacing = {
  render: () => (
    <Section title="Spacing Scale">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {SPACING.map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: value,
                height: '20px',
                background: 'var(--purple)',
                borderRadius: '3px',
                flexShrink: 0,
                minWidth: '4px',
              }}
            />
            <span style={{ fontSize: '11px', color: 'var(--text2)', fontWeight: 500, minWidth: '120px' }}>
              {name}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text3)' }}>{value}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

export const BorderRadius = {
  render: () => (
    <Section title="Border Radius">
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {RADIUS.map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'var(--purple-light)',
                border: '2px solid var(--purple)',
                borderRadius: value === '9999px' ? '50%' : value,
              }}
            />
            <span style={{ fontSize: '10px', color: 'var(--text2)', fontWeight: 500, textAlign: 'center' }}>
              {name}
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text3)' }}>{value}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

export const TypographyScale = {
  render: () => (
    <Section title="Typography Scale">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {TYPE_SCALE.map(({ name, size, weight, sample }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div style={{ minWidth: '80px' }}>
              <span style={{ fontSize: '10px', color: 'var(--text3)', fontWeight: 500 }}>
                {name} / {size} / {weight}
              </span>
            </div>
            <span style={{ fontSize: size, fontWeight: weight, color: 'var(--text)', lineHeight: 1.3 }}>
              {sample}
            </span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

export const Shadows = {
  render: () => (
    <Section title="Shadows">
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {SHADOWS.map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                background: 'var(--surface)',
                borderRadius: '8px',
                boxShadow: value,
                border: '1px solid var(--border)',
              }}
            />
            <span style={{ fontSize: '10px', color: 'var(--text2)', fontWeight: 500 }}>{name}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
};

export const FullReference = {
  name: 'Full Reference',
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px' }}>
          Design Token Reference
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text2)', margin: 0 }}>
          All tokens are defined in <code>src/tokens/tokens.css</code> and available as CSS custom
          properties. Dark mode values apply automatically via{' '}
          <code>@media (prefers-color-scheme: dark)</code>.
        </p>
      </div>

      <Section title="Neutrals">
        <SwatchGrid items={NEUTRALS} />
      </Section>

      <Section title="Brand & Semantic Colors">
        <SwatchGrid items={BRAND_COLORS} />
      </Section>

      <Section title="Spacing">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {SPACING.map(({ name, value }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: value,
                  height: '16px',
                  background: 'var(--teal)',
                  borderRadius: '3px',
                  minWidth: '4px',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '11px', color: 'var(--text2)', minWidth: '120px' }}>{name}</span>
              <span style={{ fontSize: '11px', color: 'var(--text3)' }}>{value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {RADIUS.map(({ name, value }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--npt-light)',
                  border: '2px solid var(--npt)',
                  borderRadius: value === '9999px' ? '50%' : value,
                  marginBottom: '6px',
                }}
              />
              <div style={{ fontSize: '10px', color: 'var(--text2)', fontWeight: 500 }}>{name}</div>
              <div style={{ fontSize: '10px', color: 'var(--text3)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {TYPE_SCALE.map(({ name, size, weight, sample }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '10px', color: 'var(--text3)', minWidth: '100px' }}>
                {name} · {size}
              </span>
              <span style={{ fontSize: size, fontWeight: weight, color: 'var(--text)' }}>
                {sample}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {SHADOWS.map(({ name, value }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--surface)',
                  borderRadius: '8px',
                  boxShadow: value,
                  border: '1px solid var(--border)',
                  marginBottom: '8px',
                }}
              />
              <div style={{ fontSize: '10px', color: 'var(--text2)', fontWeight: 500 }}>{name}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};
