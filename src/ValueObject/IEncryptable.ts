export interface IEncryptable<T extends Object> {
  encrypt(val: T): Promise<string>;
  decrypt(val: string): Promise<T>;
}
