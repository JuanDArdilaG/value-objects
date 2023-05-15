import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";
import { ValueObject } from "./ValueObject";

export class EnumValueObjectValidator<T extends Object>
  implements IValidatable<T>
{
  constructor(private _values: T[]) {}

  validate(value: T): boolean {
    return this._values.some((item) => item === value);
  }
}

export abstract class EnumValueObject<T extends Object> extends ValueObject<T> {
  constructor(_values: T[], value: T) {
    super(new EnumValueObjectValidator(_values), value);
  }

  add(_: IValueObject<T>): IValueObject<T> {
    throw new Error("Method not implemented.");
  }
}
