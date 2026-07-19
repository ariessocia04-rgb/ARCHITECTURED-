import { existsSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../..');
const repositoryRoot = resolve(root, '../..');
const requiredPaths = [
  'apps/web',
  'apps/print-agent',
  'packages/design-system',
  'packages/domain',
  'packages/contracts',
  'packages/authorization',
  'packages/database-types',
  'packages/document-rendering',
  'packages/printing-contracts',
  'packages/observability',
  'packages/configuration',
  'packages/testing',
  'supabase',
  'tests/contract',
  'tests/integration',
  'tests/e2e',
  'tests/security',
  'tests/accessibility',
  'tests/performance',
  'tests/recovery',
  'tests/hardware',
  'infrastructure/ci',
  'infrastructure/environments',
  'infrastructure/containers',
  'infrastructure/monitoring',
  'infrastructure/rollback',
  'docs/implementation',
  'docs/runbooks',
  'docs/evidence',
];
const forbiddenRepositoryPaths = ['apps', 'packages', 'supabase', 'tests', 'infrastructure'];

for (const requiredPath of requiredPaths) {
  const absolutePath = resolve(root, requiredPath);
  if (!existsSync(absolutePath) || !statSync(absolutePath).isDirectory()) {
    throw new Error(`Required workspace path is missing: ${requiredPath}`);
  }

  if (readdirSync(absolutePath).length === 0) {
    throw new Error(`Required workspace path is appearance-only and empty: ${requiredPath}`);
  }
}

for (const forbiddenPath of forbiddenRepositoryPaths) {
  if (existsSync(resolve(repositoryRoot, forbiddenPath))) {
    throw new Error(`Forbidden root-level implementation tree exists: ${forbiddenPath}`);
  }
}

console.log(
  'paths: canonical workspace structure is present and no root-level duplicate tree exists.',
);
