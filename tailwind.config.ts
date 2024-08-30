import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFeatureSettings: {
        tnum: "'tnum'",
      },
      fontVariantNumeric: {
        'tabular-nums': 'tabular-nums',
      },
    },
  },
  plugins: [],
};
export default config;
