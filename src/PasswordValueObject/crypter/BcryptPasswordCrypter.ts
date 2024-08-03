import { IPasswordCrypter } from "./IPasswordCrypter";
import { hash, compare } from "bcrypt";

export class BcryptPasswordCrypter implements IPasswordCrypter {
  constructor(private _saltOrRounds: string | number) {}

  encrypt(plain: string): Promise<string> {
    return hash(plain, this._saltOrRounds);
  }

  check(hash: string, plain: string): Promise<boolean> {
    return compare(plain, hash);
  }
}
