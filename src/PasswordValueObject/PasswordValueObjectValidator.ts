import { IValidatable } from "../ValueObject/IValidatable";
import { StringLengthOptions } from "../StringValueObject/StringValueObject";

export class PasswordValueObjectValidator implements IValidatable<string> {
  constructor(private _encrypted: boolean, _length?: StringLengthOptions) {}

  validate(val: string): Error | false | void {
    if (!this._encrypted && (val.length < 5 || val.length > 50)) {
      return new Error("Password length must be between 5 and 50 characters");
    }
  }
}
