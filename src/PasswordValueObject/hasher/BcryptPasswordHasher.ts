import { IPasswordHasher } from "./IPasswordHasher";
import { hash, compare, genSalt } from "bcrypt";

export class BcryptPasswordHasher implements IPasswordHasher {
  constructor() {}

  async hash(plain: string): Promise<string> {
    return hash(plain, await genSalt());
  }

  check(hash: string, plain: string): Promise<boolean> {
    return compare(plain, hash);
  }
}
