import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      build: {
        target: 'esnext',
      },
      server: {
        hmr: {
          overlay: true,
        },
        watch: {
          usePolling: true,
          interval: 1000,
        },
      },
    });
  },
};

export default config;
