export interface CryptoKeyPair {
  publicKey: string;
  privateKey: string;
}

export interface TransmissionPayload {
  encrypted_key: string;
  encrypted_data: string;
  algorithm: string;
  timestamp: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: string[];
  warnings: string[];
  keyLength?: number;
  publicExponent?: string;
}

export type ProgressCallback = (message: string) => void;
