import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../..');
const supabaseRoot = resolve(root, 'supabase');
const futureOwnedPaths = ['migrations', 'functions', 'seed.sql', 'config.toml'];

for (const relativePath of futureOwnedPaths) {
  if (existsSync(resolve(supabaseRoot, relativePath))) {
    throw new Error(
      `Migration validation found future-task Supabase content: supabase/${relativePath}. ` +
        'CX-R1-004 owns Supabase configuration, migrations, functions, and seed data.',
    );
  }
}

console.log(
  'migration-boundary: no future-owned Supabase migration/configuration content is present.',
);
