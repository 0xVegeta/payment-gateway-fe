import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": "http://134.209.148.126:3000",
		},
	},
	plugins: [react()],
});
