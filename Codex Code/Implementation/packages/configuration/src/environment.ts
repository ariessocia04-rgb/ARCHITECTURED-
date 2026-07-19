export type EnvironmentClassification = 'public' | 'server-only' | 'test-only';

export type RuntimeEnvironment = 'development' | 'test' | 'production';

export interface EnvironmentVariableDefinition {
  readonly name: string;
  readonly classification: EnvironmentClassification;
  readonly required: boolean;
  readonly description: string;
}

export const environmentVariableDefinitions: readonly EnvironmentVariableDefinition[] = [
  {
    name: 'ARCHITECTURED_ENVIRONMENT',
    classification: 'server-only',
    required: true,
    description: 'Selects the explicitly configured runtime environment.',
  },
  {
    name: 'NEXT_PUBLIC_APP_ORIGIN',
    classification: 'public',
    required: true,
    description: 'Public origin used for technical local development only.',
  },
  {
    name: 'ARCHITECTURED_TEST_CLOCK',
    classification: 'test-only',
    required: false,
    description: 'Optional deterministic clock marker for isolated tests.',
  },
];

export interface BootstrapEnvironment {
  readonly runtime: RuntimeEnvironment;
  readonly appOrigin: URL;
  readonly testClock?: string;
}

export type EnvironmentInput = Readonly<Record<string, string | undefined>>;

export const safeLocalEnvironment: Readonly<Record<string, string>> = {
  ARCHITECTURED_ENVIRONMENT: 'development',
  NEXT_PUBLIC_APP_ORIGIN: 'http://localhost:3000',
};

function requiredValue(input: EnvironmentInput, name: string): string {
  const value = input[name]?.trim();

  if (!value) {
    throw new Error(`${name} is required.`);
  }

  return value;
}

function parseRuntime(value: string): RuntimeEnvironment {
  if (value === 'development' || value === 'test' || value === 'production') {
    return value;
  }

  throw new Error('ARCHITECTURED_ENVIRONMENT must be development, test, or production.');
}

function parseOrigin(value: string): URL {
  let parsed: URL;

  try {
    parsed = new URL(value);
  } catch {
    throw new Error('NEXT_PUBLIC_APP_ORIGIN must be an absolute HTTP(S) URL.');
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('NEXT_PUBLIC_APP_ORIGIN must be an absolute HTTP(S) URL.');
  }

  return parsed;
}

export function parseBootstrapEnvironment(input: EnvironmentInput): BootstrapEnvironment {
  const runtime = parseRuntime(requiredValue(input, 'ARCHITECTURED_ENVIRONMENT'));
  const appOrigin = parseOrigin(requiredValue(input, 'NEXT_PUBLIC_APP_ORIGIN'));
  const testClock = input.ARCHITECTURED_TEST_CLOCK?.trim() || undefined;

  return { runtime, appOrigin, testClock };
}

export function createSafeLocalEnvironment(overrides: EnvironmentInput = {}): BootstrapEnvironment {
  return parseBootstrapEnvironment({ ...safeLocalEnvironment, ...overrides });
}
