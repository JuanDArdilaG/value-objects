import { IValidator } from "../ValueObject/IValidator";

export class MultiEnumValueObjectValidator<T extends Object>
  implements IValidator<T[]>
{
  constructor(private _values: T[]) {}

  validate(value: T[]): Error | boolean {
    try {
      value.forEach((v) => {
        if (this._values.indexOf(v) === -1) {
          throw new Error("invalid value: " + v);
        }
      });
      return true;
    } catch (e) {
      return e as Error;
    }
  }
}
