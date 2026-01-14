import { mergeConfig } from 'vite';

export default {
  framework: '@storybook/react-vite',
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // You can customize Vite config here if needed
    });
  },
};