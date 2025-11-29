import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import('tailwindcss');
    const { default: autoprefixer } = await import('autoprefixer');

    return {
      ...config,
      css: {
        ...config.css,
        postcss: {
          plugins: [
            tailwindcss(
              join(
                dirname(fileURLToPath(import.meta.url)),
                '../tailwind.config.js'
              )
            ),
            autoprefixer(),
          ],
        } as never,
      },
    };
  },
};

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default config;
