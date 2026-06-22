import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'color' },
  },
};

export const WithInitials = {
  args: {
    initials: 'JD',
    size: 'md',
  },
};

export const WithImage = {
  args: {
    src: 'https://i.pravatar.cc/80?img=3',
    alt: 'User avatar',
    size: 'md',
  },
};

export const Small = {
  args: {
    initials: 'AB',
    size: 'sm',
  },
};

export const Large = {
  args: {
    initials: 'XY',
    size: 'lg',
  },
};

export const CustomColor = {
  args: {
    initials: 'TC',
    size: 'lg',
    color: '#0F6E56',
  },
};

export const AvatarGroup = {
  render: () => (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      <Avatar initials="JD" size="md" />
      <Avatar initials="AB" size="md" color="#0F6E56" />
      <Avatar initials="XY" size="md" color="#854F0B" />
      <Avatar src="https://i.pravatar.cc/80?img=5" size="md" />
      <Avatar initials="ZW" size="md" color="#a32d2d" />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Avatar initials="SM" size="sm" />
      <Avatar initials="MD" size="md" />
      <Avatar initials="LG" size="lg" />
    </div>
  ),
};
