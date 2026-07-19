import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../..');
const releaseLock = JSON.parse(readFileSync(resolve(root, 'RELEASE_LOCK.json'), 'utf8'));
const rootPackage = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const webPackage = JSON.parse(readFileSync(resolve(root, 'apps/web/package.json'), 'utf8'));
const cargoManifest = readFileSync(resolve(root, 'Cargo.toml'), 'utf8');
const rustToolchain = readFileSync(resolve(root, 'rust-toolchain.toml'), 'utf8');

const expectedVersions = {
  node: '24.18.0',
  pnpm: '10.34.0',
  next: '16.2.9',
  react: '19.2.0',
  reactDom: '19.2.0',
  typescript: '5.9.3',
  supabaseCli: '2.101.0',
  tauri: '2.11.2',
  rust: '1.97.1',
};

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label} must be ${expected}; received ${actual ?? 'undefined'}.`);
  }
}

for (const [name, version] of Object.entries(expectedVersions)) {
  assertEqual(releaseLock.versions?.[name], version, `RELEASE_LOCK.json versions.${name}`);
}

assertEqual(rootPackage.packageManager, `pnpm@${expectedVersions.pnpm}`, 'packageManager');
assertEqual(rootPackage.engines?.node, expectedVersions.node, 'engines.node');
assertEqual(rootPackage.engines?.pnpm, expectedVersions.pnpm, 'engines.pnpm');
assertEqual(webPackage.dependencies?.next, expectedVersions.next, 'apps/web next');
assertEqual(webPackage.dependencies?.react, expectedVersions.react, 'apps/web react');
assertEqual(
  webPackage.dependencies?.['react-dom'],
  expectedVersions.reactDom,
  'apps/web react-dom',
);

if (!cargoManifest.includes(`version = \"=${expectedVersions.tauri}\"`)) {
  throw new Error('Cargo.toml does not contain the exact Tauri pin.');
}

if (!rustToolchain.includes(`channel = \"${expectedVersions.rust}\"`)) {
  throw new Error('rust-toolchain.toml does not contain the exact Rust pin.');
}

const packageSpecifications = [
  ...Object.values(rootPackage.dependencies ?? {}),
  ...Object.values(rootPackage.devDependencies ?? {}),
  ...Object.values(webPackage.dependencies ?? {}),
  ...Object.values(webPackage.devDependencies ?? {}),
];

for (const specification of packageSpecifications) {
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(specification)) {
    throw new Error(`Dependency specification is not an exact stable version: ${specification}`);
  }
}

if (process.versions.node !== expectedVersions.node) {
  throw new Error(
    `Validation requires Node ${expectedVersions.node}; received ${process.versions.node}.`,
  );
}

console.log('release-lock: exact versions and package specifications are consistent.');
