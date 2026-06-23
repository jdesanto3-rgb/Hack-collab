import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  colorPrimary: '#8B3A1E',
  colorSecondary: '#8B3A1E',

  appBg: '#F0ECE5',
  appContentBg: '#FDFAF6',
  appPreviewBg: '#F0ECE5',
  appBorderColor: '#D8D2C6',
  appBorderRadius: 6,

  fontBase: '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"JetBrains Mono", "Fira Mono", monospace',

  textColor: '#1C1914',
  textInverseColor: '#FDFAF6',
  textMutedColor: '#6B6860',

  barBg: '#FDFAF6',
  barTextColor: '#6B6860',
  barHoverColor: '#1C1914',
  barSelectedColor: '#8B3A1E',
  barBorderColor: '#D8D2C6',

  inputBg: '#FDFAF6',
  inputBorder: '#D8D2C6',
  inputTextColor: '#1C1914',
  inputBorderRadius: 6,

  brandTitle: 'Hack-collab DS',
  brandUrl: '/',
  brandTarget: '_self',
});

addons.setConfig({ theme });
