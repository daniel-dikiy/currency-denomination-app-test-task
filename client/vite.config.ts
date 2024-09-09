import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
dotenv.config();

const port = process.env.VITE_PORT;

export default defineConfig({
  plugins: [react(), eslintPlugin(), viteSvgr(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: Number(port) || 3000,
  },
});
