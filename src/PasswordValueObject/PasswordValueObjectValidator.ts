import { IValidator } from "../ValueObject/IValidator";

export class PasswordValueObjectValidator implements IValidator<string> {
  constructor(private _options: { min: number; max: number }) {}
  validate(val: string): Error | boolean {
    if (val.length < this._options.min || val.length > this._options.max) {
      return new Error(
        `Password length must be between ${this._options.min} and ${this._options.max} characters`
      );
    }
    return true;
  }
}
