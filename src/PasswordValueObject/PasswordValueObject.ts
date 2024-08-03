import { ValueObject } from "../ValueObject";
import { BcryptPasswordHasher } from "./hasher/BcryptPasswordHasher";
import { IPasswordHasher } from "./hasher/IPasswordHasher";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export class PasswordValueObject extends ValueObject<string> {
  static options: { min: number; max: number } = { min: 5, max: 20 };
  private static _hasher: IPasswordHasher = new BcryptPasswordHasher();

  private constructor(value: string) {
    super({}, value);
  }

  static setCrypter(hasher: IPasswordHasher): void {
    PasswordValueObject._hasher = hasher;
  }

  static async fromRaw(pass: string): Promise<PasswordValueObject> {
    const plain = new PasswordValueObject(pass);
    plain.options.validator = new PasswordValueObjectValidator(this.options);
    plain.validate(pass);
    await plain._hash();
    return plain;
  }

  static fromEncrypted(pass: string): PasswordValueObject {
    return new PasswordValueObject(pass);
  }

  private async _hash(): Promise<void> {
    this._value = await PasswordValueObject._hasher.hash(this._value);
  }

  async check(plain: string): Promise<boolean> {
    const ok = await PasswordValueObject._hasher.check(this._value, plain);
    if (!ok) {
      throw new Error("invalid password");
    }
    return ok;
  }
}
