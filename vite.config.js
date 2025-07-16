import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use `react` for React projects

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Add other plugins as needed
});