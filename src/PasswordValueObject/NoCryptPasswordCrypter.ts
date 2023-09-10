import { PasswordCrypter } from "./PasswordCrypter";

export class NoCryptPasswordCrypter implements PasswordCrypter {
  check(hash: string, plain: string): Promise<boolean> {
    return Promise.resolve(hash === plain);
  }

  encrypt(plain: string): Promise<string> {
    return Promise.resolve(plain);
  }
}
