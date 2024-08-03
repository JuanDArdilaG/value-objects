import { ValueObject } from "../ValueObject";
import { BcryptPasswordHasher } from "./hasher/BcryptPasswordHasher";
import { IPasswordHasher } from "./hasher/IPasswordHasher";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export type TPasswordValueObject = {
  value: string;
  isEncrypted: boolean;
};

if (!process.env.BCRYPT_SALT)
  throw new Error("BCRYPT_SALT env variable not setted");

export class PasswordValueObject extends ValueObject<TPasswordValueObject> {
  private static _hasher: IPasswordHasher = new BcryptPasswordHasher(
    process.env.BCRYPT_SALT ?? ""
  );

  constructor(value: TPasswordValueObject) {
    super(
      {
        validator: new PasswordValueObjectValidator(),
      },
      value
    );
  }

  static setCrypter(hasher: IPasswordHasher): void {
    PasswordValueObject._hasher = hasher;
  }

  static fromRaw(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: false });
  }

  static fromEncrypted(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: true });
  }

  async encrypt(): Promise<void> {
    if (this.valueOf().isEncrypted || !PasswordValueObject._hasher) {
      return;
    }
    const encrypted = await PasswordValueObject._hasher.hash(
      this.valueOf().value
    );
    this._value.isEncrypted = true;
    this._value.value = encrypted;
  }

  async check(plain: string): Promise<boolean> {
    if (!this.valueOf().isEncrypted || !PasswordValueObject._hasher) {
      return this.valueOf().value === plain;
    }
    const ok = await PasswordValueObject._hasher.check(
      this.valueOf().value,
      plain
    );
    if (!ok) {
      throw new Error("invalid password");
    }
    return ok;
  }
}
