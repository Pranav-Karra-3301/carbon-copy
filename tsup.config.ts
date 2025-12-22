import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lib/index.ts', 'src/lib/theme/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
});
