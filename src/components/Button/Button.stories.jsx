import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'teal', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
  },
};

export const Teal = {
  args: {
    variant: 'teal',
    size: 'md',
    children: 'Teal Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Danger Button',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled',
  },
};

export const SmallSize = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const LargeSize = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="teal">Teal</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};
