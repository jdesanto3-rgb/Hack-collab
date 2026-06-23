import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  colorPrimary: '#C4B5A8',
  colorSecondary: '#C4B5A8',

  // Sidebar / chrome
  appBg: '#1C1914',
  appContentBg: '#F0ECE5',
  appPreviewBg: '#F0ECE5',
  appBorderColor: '#2E2B23',
  appBorderRadius: 4,

  fontBase: '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  textColor: '#EAE7E0',
  textInverseColor: '#1C1914',
  textMutedColor: '#6B6860',

  // Toolbar (top bar)
  barBg: '#141210',
  barTextColor: '#9C9890',
  barHoverColor: '#EAE7E0',
  barSelectedColor: '#C4B5A8',
  barBorderColor: '#2E2B23',

  // Inputs (controls panel)
  inputBg: '#252219',
  inputBorder: '#3C3830',
  inputTextColor: '#EAE7E0',
  inputBorderRadius: 4,

  brandTitle: 'Hack-collab',
  brandUrl: '/',
  brandTarget: '_self',
});

addons.setConfig({ theme });
