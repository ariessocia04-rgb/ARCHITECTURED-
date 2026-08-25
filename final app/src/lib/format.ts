/**
 * FORMATTING HELPERS
 * Release 1 pilot configuration: PHP currency, Asia/Manila timezone.
 * (RELEASE_MANIFEST.md: primary_currency: PHP, primary_timezone: Asia/Manila)
 */

export function peso(amount: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 2,
  }).format(amount);
}

export function dateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-PH', {
    timeZone: 'Asia/Manila',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export function dateOnly(iso: string): string {
  return new Date(iso).toLocaleDateString('en-PH', {
    timeZone: 'Asia/Manila',
    dateStyle: 'medium',
  });
}
