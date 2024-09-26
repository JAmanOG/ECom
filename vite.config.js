import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; // Import Terser plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...terser({
        compress: {
          drop_console: true,
        },
      }),
      apply: 'build', 
    },
  ],
  optimizeDeps: {
    include: ['html2pdf.js', '@material-tailwind/react'],
  },
});
