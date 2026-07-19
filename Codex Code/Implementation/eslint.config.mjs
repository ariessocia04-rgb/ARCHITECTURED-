import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'coverage/**',
    'node_modules/**',
    'target/**',
    'apps/web/next-env.d.ts',
  ]),
]);
