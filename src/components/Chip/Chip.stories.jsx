import { useState } from 'react';
import { Chip } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'purple', 'teal'],
    },
    active: { control: 'boolean' },
    onRemove: { action: 'removed' },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    label: 'Design System',
  },
};

export const WithRemove = {
  args: {
    label: 'Removable Tag',
    onRemove: () => {},
  },
};

export const Active = {
  args: {
    label: 'Active Chip',
    active: true,
    onClick: () => {},
  },
};

export const PurpleVariant = {
  args: {
    label: 'Purple',
    variant: 'purple',
    onClick: () => {},
  },
};

export const TealVariant = {
  args: {
    label: 'Teal',
    variant: 'teal',
    onClick: () => {},
  },
};

export const FilterGroup = {
  render: () => {
    const [active, setActive] = useState('all');
    const filters = ['all', 'design', 'engineering', 'product', 'marketing'];
    return (
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <Chip
            key={f}
            label={f.charAt(0).toUpperCase() + f.slice(1)}
            active={active === f}
            onClick={() => setActive(f)}
            variant={active === f ? 'purple' : 'default'}
          />
        ))}
      </div>
    );
  },
};

export const TagList = {
  render: () => {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Storybook', 'CSS Modules']);
    const remove = (tag) => setTags((prev) => prev.filter((t) => t !== tag));
    return (
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} onRemove={() => remove(tag)} />
        ))}
      </div>
    );
  },
};
