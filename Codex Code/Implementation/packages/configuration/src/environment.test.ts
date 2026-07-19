import { describe, expect, it } from 'vitest';

import {
  createSafeLocalEnvironment,
  parseBootstrapEnvironment,
  safeLocalEnvironment,
} from './environment';

describe('bootstrap environment schema', () => {
  it('accepts explicit safe local defaults', () => {
    const environment = createSafeLocalEnvironment();

    expect(environment.runtime).toBe('development');
    expect(environment.appOrigin.href).toBe('http://localhost:3000/');
    expect(safeLocalEnvironment).toMatchObject({
      ARCHITECTURED_ENVIRONMENT: 'development',
      NEXT_PUBLIC_APP_ORIGIN: 'http://localhost:3000',
    });
  });

  it('rejects a missing required name', () => {
    expect(() => parseBootstrapEnvironment({ ARCHITECTURED_ENVIRONMENT: 'test' })).toThrow(
      'NEXT_PUBLIC_APP_ORIGIN is required.',
    );
  });

  it('rejects an unsupported runtime value', () => {
    expect(() =>
      parseBootstrapEnvironment({
        ARCHITECTURED_ENVIRONMENT: 'preview',
        NEXT_PUBLIC_APP_ORIGIN: 'http://localhost:3000',
      }),
    ).toThrow('ARCHITECTURED_ENVIRONMENT must be development, test, or production.');
  });

  it('rejects a malformed public origin', () => {
    expect(() =>
      parseBootstrapEnvironment({
        ARCHITECTURED_ENVIRONMENT: 'test',
        NEXT_PUBLIC_APP_ORIGIN: 'not-a-url',
      }),
    ).toThrow('NEXT_PUBLIC_APP_ORIGIN must be an absolute HTTP(S) URL.');
  });
});
