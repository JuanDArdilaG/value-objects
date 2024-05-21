import { IValidator } from "../ValueObject/IValidator";

export class EnumValueObjectValidator<T extends Object>
  implements IValidator<T>
{
  constructor(private _values: T[]) {}

  validate(value: T): Error | boolean {
    if (!this._values.some((item) => item === value)) {
      return false;
    }
  }
}
