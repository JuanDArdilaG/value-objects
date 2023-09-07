import { IValidator } from "../ValueObject/IValidator";
import { StringLengthOptions } from "./StringValueOptions";
import { InvalidStringLengthError } from "./errors/InvalidStringLengthError";

export class StringValueObjectValidator implements IValidator<string> {
  constructor(
    private _length: StringLengthOptions = { minLength: 0, maxLength: 100000 }
  ) {}

  validate(value: string): Error | false | void {
    if (typeof value !== "string") {
      return false;
    }
    if (
      value.length > this._length.maxLength ||
      value.length < this._length.minLength
    )
      throw new InvalidStringLengthError(
        `<${this.constructor.name}>`,
        this._length
      );
  }
}
