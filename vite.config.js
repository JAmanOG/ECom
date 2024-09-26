import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; // Import Terser plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Use the Terser plugin in the build process
      ...terser({
        compress: {
          drop_console: true, // Remove console.* calls
        },
      }),
      apply: 'build', // Apply only during the build process
    },
  ],
  optimizeDeps: {
    include: ['html2pdf.js', '@material-tailwind/react'],
  },
});
