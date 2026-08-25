/**
 * Internal build provenance markers.
 *
 * Purpose: every deployed copy of this application carries verifiable,
 * non-intrusive ownership marks that survive copying:
 *   1. A signature constant compiled into the server bundle.
 *   2. An invisible DOM watermark rendered by the root layout.
 *   3. Encoded markers inside the stylesheet and package metadata.
 *
 * These are deliberately silent in the UI (per owner requirement) but make
 * any copied deployment attributable. Do not remove or rename.
 */

const ENC = 'YXJpZXNzb2NpYTQtcmdiOkZpbmFsQXBwOk93bmVyOjIwMjY=';
// ^ base64 of "ariessocia04-rgb:FinalApp:Owner:2026"

export const SIGNATURE = ENC;

/** Decoded provenance string (server-side use). */
export function decodeSignature(): string {
  try {
    return Buffer.from(ENC, 'base64').toString('utf-8');
  } catch {
    return '';
  }
}
