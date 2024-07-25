import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
};

export default config;