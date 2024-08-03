import { ValueObject } from "../ValueObject";
import { BcryptPasswordCrypter } from "./crypter/BcryptPasswordCrypter";
import { IPasswordCrypter } from "./crypter/IPasswordCrypter";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export type TPasswordValueObject = {
  value: string;
  isEncrypted: boolean;
};

if (!process.env.BCRYPT_SALT)
  throw new Error("BCRYPT_SALT env variable not setted");

export class PasswordValueObject extends ValueObject<TPasswordValueObject> {
  private static _crypter: IPasswordCrypter = new BcryptPasswordCrypter(
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

  static setCrypter(crypter: IPasswordCrypter): void {
    PasswordValueObject._crypter = crypter;
  }

  static raw(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: false });
  }

  static encrypted(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: true });
  }

  async encrypt(): Promise<void> {
    if (this.valueOf().isEncrypted || !PasswordValueObject._crypter) {
      return;
    }
    const encrypted = await PasswordValueObject._crypter.encrypt(
      this.valueOf().value
    );
    this._value.isEncrypted = true;
    this._value.value = encrypted;
  }

  async check(plain: string): Promise<boolean> {
    if (!this.valueOf().isEncrypted || !PasswordValueObject._crypter) {
      return this.valueOf().value === plain;
    }
    const ok = await PasswordValueObject._crypter.check(
      this.valueOf().value,
      plain
    );
    if (!ok) {
      throw new Error("invalid password");
    }
    return ok;
  }
}
