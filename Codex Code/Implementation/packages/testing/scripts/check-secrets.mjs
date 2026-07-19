import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '../../..');
const ignoredDirectories = new Set(['.next', '.git', 'node_modules', 'target']);
const ignoredFiles = new Set(['Cargo.lock', 'pnpm-lock.yaml']);
const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i,
  /AKIA[0-9A-Z]{16}/,
  /(?:service[_-]?role|secret|token|api[_-]?key)\s*[:=]\s*['\"][^'\"]{8,}/i,
];

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name) ? [] : collectFiles(absolutePath);
    }

    return ignoredFiles.has(entry.name) ? [] : [absolutePath];
  });
}

for (const file of collectFiles(root)) {
  if (!statSync(file).isFile()) {
    continue;
  }

  const content = readFileSync(file, 'utf8');
  if (patterns.some((pattern) => pattern.test(content))) {
    throw new Error(`Potential secret material detected in ${file.replace(`${root}\\`, '')}.`);
  }
}

console.log('secrets: no configured secret patterns were found in implementation files.');
