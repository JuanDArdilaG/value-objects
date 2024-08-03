export interface IPasswordCrypter {
  encrypt(plain: string): Promise<string>;
  check(hash: string, plain: string): Promise<boolean>;
}
