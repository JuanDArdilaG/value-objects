import { IPasswordHasher } from "./IPasswordHasher";
import { IValueObject } from "./IValueObject";
import { StringValueObject } from "./StringValueObject";

export type PasswordValueObjectConfig = {
  min: number;
  max: number;
};

export const PasswordValueObjectDefaultConfig: PasswordValueObjectConfig = {
  min: 5,
  max: 20,
};

export class PasswordValueObject extends StringValueObject {
  private static _hasher: IPasswordHasher;

  constructor(
    value: string,
    private _passConfig: PasswordValueObjectConfig = PasswordValueObjectDefaultConfig
  ) {
    super(value);
  }

  validate(): Error | void {
    const stringValidation = super.validate();
    if (stringValidation) return stringValidation;
    if (
      this.value.length < this._passConfig.min ||
      this.value.length > this._passConfig.max
    ) {
      return new Error(
        `Password length must be between ${this._passConfig.min} and ${this._passConfig.max} characters`
      );
    }
  }

  static setHasher(hasher: IPasswordHasher): void {
    PasswordValueObject._hasher = hasher;
  }

  static async fromRaw(
    pass: string,
    config?: PasswordValueObjectConfig
  ): Promise<PasswordValueObject> {
    return new PasswordValueObject(
      await PasswordValueObject._hasher.hash(pass),
      config
    );
  }

  static fromHashed(
    pass: string,
    config?: PasswordValueObjectConfig
  ): PasswordValueObject {
    return new PasswordValueObject(pass, config);
  }

  async check(plain: string): Promise<boolean> {
    return await PasswordValueObject._hasher.check(this.value, plain);
  }

  equalTo(o: IValueObject<string>): boolean {
    return o.value === this.value;
  }
}
