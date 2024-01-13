import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { qrcode } from 'vite-plugin-qrcode';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ nesting: true }), react()],
  vite: {
    plugins: [qrcode()],
  },
});
