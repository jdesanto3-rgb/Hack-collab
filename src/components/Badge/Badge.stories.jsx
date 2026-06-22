import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'purple', 'teal', 'amber', 'red', 'npt'],
    },
    live: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Purple = {
  args: {
    variant: 'purple',
    children: 'In Progress',
  },
};

export const Teal = {
  args: {
    variant: 'teal',
    children: 'Complete',
  },
};

export const Amber = {
  args: {
    variant: 'amber',
    children: 'Warning',
  },
};

export const Red = {
  args: {
    variant: 'red',
    children: 'Error',
  },
};

export const Npt = {
  args: {
    variant: 'npt',
    children: 'NPT',
  },
};

export const LiveBadge = {
  args: {
    variant: 'teal',
    live: true,
    children: 'Live',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="teal">Teal</Badge>
      <Badge variant="amber">Amber</Badge>
      <Badge variant="red">Error</Badge>
      <Badge variant="npt">NPT</Badge>
      <Badge variant="teal" live>Live</Badge>
    </div>
  ),
};
