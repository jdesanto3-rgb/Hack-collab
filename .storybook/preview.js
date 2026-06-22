import '../src/tokens/tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f7f6f3' },
        { name: 'dark', value: '#1a1916' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
