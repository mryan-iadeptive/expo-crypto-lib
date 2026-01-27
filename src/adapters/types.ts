/**
 * Key storage adapter interface.
 * Implement this to use platform-specific secure storage (e.g. Expo SecureStore, in-memory for Node).
 */
export interface IKeyStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

/**
 * Cryptographically secure random values.
 * Implement this to use platform-specific CSPRNG (e.g. expo-crypto, Node crypto.getRandomValues).
 */
export interface IRandomValues {
  getRandomValues<T extends ArrayBufferView | null>(array: T): T;
}
