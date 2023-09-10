import { ValueObject } from "../ValueObject";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";
import argon2 from "argon2";

export type TPasswordValueObject = {
  value: string;
  isEncrypted: boolean;
};

export class PasswordValueObject extends ValueObject<TPasswordValueObject> {
  constructor(value: TPasswordValueObject) {
    super(
      {
        validator: new PasswordValueObjectValidator(),
      },
      value
    );
  }

  static raw(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: false });
  }

  static encrypted(pass: string): PasswordValueObject {
    return new PasswordValueObject({ value: pass, isEncrypted: true });
  }

  async encrypt(): Promise<void> {
    if (this.valueOf().isEncrypted) {
      return;
    }
    const encrypted = await argon2.hash(this.valueOf().value);
    this._value.isEncrypted = true;
    this._value.value = encrypted;
  }

  async check(plain: string): Promise<boolean> {
    if (!this.valueOf().isEncrypted) {
      return this.valueOf().value === plain;
    }
    const ok = await argon2.verify(this._value.value, plain);
    if (!ok) {
      throw new Error("invalid password");
    }
    return ok;
  }
}
