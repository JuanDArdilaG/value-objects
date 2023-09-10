import { ValueObject } from "../ValueObject";
import { NoCryptPasswordCrypter } from "./NoCryptPasswordCrypter";
import { PasswordCrypter } from "./PasswordCrypter";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export type TPasswordValueObject = {
  value: string;
  isEncrypted: boolean;
};

export class PasswordValueObject extends ValueObject<TPasswordValueObject> {
  constructor(
    value: TPasswordValueObject,
    private _crypter: PasswordCrypter = new NoCryptPasswordCrypter()
  ) {
    super(
      {
        validator: new PasswordValueObjectValidator(),
      },
      value
    );
  }

  static raw(pass: string, crypter: PasswordCrypter): PasswordValueObject {
    return new PasswordValueObject(
      { value: pass, isEncrypted: false },
      crypter
    );
  }

  static encrypted(
    pass: string,
    crypter: PasswordCrypter
  ): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: true }, crypter);
  }

  async encrypt(): Promise<void> {
    if (this.valueOf().isEncrypted || !this._crypter) {
      return;
    }
    const encrypted = await this._crypter.encrypt(this.valueOf().value);
    this._value.isEncrypted = true;
    this._value.value = encrypted;
  }

  async check(plain: string): Promise<boolean> {
    if (!this.valueOf().isEncrypted || !this._crypter) {
      return this.valueOf().value === plain;
    }
    const ok = await this._crypter.check(this.valueOf().value, plain);
    if (!ok) {
      throw new Error("invalid password");
    }
    return ok;
  }
}
