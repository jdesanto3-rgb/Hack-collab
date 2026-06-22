import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'small', 'label', 'caption'],
    },
    color: { control: 'color' },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Heading1 = {
  args: {
    variant: 'h1',
    children: 'The quick brown fox',
  },
};

export const Heading2 = {
  args: {
    variant: 'h2',
    children: 'The quick brown fox',
  },
};

export const Heading3 = {
  args: {
    variant: 'h3',
    children: 'The quick brown fox',
  },
};

export const Body = {
  args: {
    variant: 'body',
    children:
      'Body text is used for the main content of a page. It should be legible at normal reading distance with sufficient line height and contrast.',
  },
};

export const Small = {
  args: {
    variant: 'small',
    children: 'Small text is used for secondary descriptions and supporting information.',
  },
};

export const Label = {
  args: {
    variant: 'label',
    children: 'Section label',
  },
};

export const Caption = {
  args: {
    variant: 'caption',
    children: 'Last updated 2 hours ago',
  },
};

export const TypeScale = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="h1">Heading 1 — 30px Bold</Typography>
      <Typography variant="h2">Heading 2 — 24px Bold</Typography>
      <Typography variant="h3">Heading 3 — 20px Semibold</Typography>
      <Typography variant="body">
        Body — 13px Regular. Used for the main content of a page with comfortable line height.
      </Typography>
      <Typography variant="small">Small — 12px Regular. Supporting descriptions.</Typography>
      <Typography variant="label">Label — 11px Medium Uppercase</Typography>
      <Typography variant="caption">Caption — 10px Regular. Metadata and timestamps.</Typography>
    </div>
  ),
};

export const ColorOverride = {
  args: {
    variant: 'h3',
    children: 'Colored heading',
    color: 'var(--purple)',
  },
};
