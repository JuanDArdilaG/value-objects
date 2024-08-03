import { IPasswordHasher } from "./IPasswordHasher";
import { hash, compare } from "bcrypt";

export class BcryptPasswordHasher implements IPasswordHasher {
  constructor(private _saltOrRounds: string | number) {}

  hash(plain: string): Promise<string> {
    return hash(plain, this._saltOrRounds);
  }

  check(hash: string, plain: string): Promise<boolean> {
    return compare(plain, hash);
  }
}
