/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        's-ls': '480px',
        s: '360px',
        tablet: '768px',
        laptop: '1100px',
        '3xl': '1800px',
      },
      colors: {
        bgGris: '#2E3B46',
        header: '#EEECE2',
        bgWhite: '#FFFCF6',
        text: '#5A4C4C',
      },
      fontFamily: {
        baskerville: ['Baskerville', 'sanserif'],
        agenda: ['Agenda', 'sanserif'],
        trueno: ['Trueno', 'sanserif'],
        minion: ['Minion-Variable-Concept', 'sanserif'],
        myriad: ['Myriad Pro', 'sanserif'],
      },
      spacing: {
        fvh: '100vh',
        fvw: '100%',
      },
    },
  },
  plugins: [],
};
