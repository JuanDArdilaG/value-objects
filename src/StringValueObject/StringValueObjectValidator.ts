import { IValidatable } from "../ValueObject/IValidatable";
import { InvalidStringLengthError } from "./errors/InvalidStringLengthError";
import { StringLengthOptions } from "./StringValueObject";

export class StringValueObjectValidator implements IValidatable<string> {
  constructor(
    private _length: StringLengthOptions = { minLength: 0, maxLength: 100000 }
  ) {}

  validate(value: string): Error | false | void {
    if (typeof value !== "string") {
      return false;
    }
    if (this._checkLength(value)) {
      return new InvalidStringLengthError(value, this._length);
    }
  }

  private _checkLength(str: string): boolean {
    if (
      str.length > this._length.maxLength ||
      str.length < this._length.minLength
    )
      throw new InvalidStringLengthError(
        `<${this.constructor.name}>`,
        this._length
      );
    return true;
  }
}
