import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const PWAConfig = {
	includeAssets: ['favicon.ico', 'robots.txt'],
	manifest: {
		short_name: 'Veronika Kolesnikova | Portfolio',
		name: 'Veronika Kolesnikova | Portfolio',
		description:
			`Welcome to the portfolio webiste of Veronika Kolesnikova, a dedicated software engineer passionate about 
      creating elegant solutions and user-friendly experiences. 
      Check out my projects — I’m excited to share my journey with you!`,
		icons: [
			{
				src: 'favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon',
			},
			{
				src: 'logo192.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				src: 'logo512.png',
				type: 'image/png',
				sizes: '512x512',
			},
		],
		start_url: '.',
		display: 'standalone',
		theme_color: '#000000',
		background_color: '#ffffff',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(PWAConfig),],
  server: {
    port: 3000
  },
  test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.ts',
	},
})
