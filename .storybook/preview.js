import '../src/tokens/tokens.css';

// Load design system fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap';
document.head.appendChild(fontLink);

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'Warm cream', value: '#F0ECE5' },
        { name: 'Warm dark', value: '#1C1914' },
        { name: 'Pure white', value: '#FFFFFF' },
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
