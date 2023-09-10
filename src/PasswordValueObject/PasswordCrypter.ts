export interface PasswordCrypter {
  encrypt(plain: string): Promise<string>;
  check(hash: string, plain: string): Promise<boolean>;
}
