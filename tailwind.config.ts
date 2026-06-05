import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(24, 255, 255, 0.18), 0 0 60px rgba(20, 150, 255, 0.12)',
      },
      colors: {
        midnight: '#050816',
        neon: '#33ffff',
        electric: '#2ca8ff',
        glass: 'rgba(11, 24, 46, 0.6)',
      },
      backgroundImage: {
        radialGlow: 'radial-gradient(circle at top, rgba(31, 255, 255, 0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
