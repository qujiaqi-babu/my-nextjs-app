import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Bootstrap 等其他 CSS 框架中的网格系统都是基于 12 列的，Tailwind CSS 也采用了同样的设计
      // 可以通过自定义配置来实现 13 列的网格系统
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
  },
  keyframes: {
    shimmer: {
      '100%': {
        transform: 'translateX(100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
