import { IValidator } from "../ValueObject";
import { IValueObject } from "../ValueObject/IValueObject";

export interface Identifier<T extends Object> extends IValueObject<T> {}

export class IdentifierValueObject<T extends Object> implements Identifier<T> {
  constructor(protected _value: T, protected _validator: IValidator<T>) {
    this.validate(_value);
  }

  is(o: IValueObject<T>): boolean {
    return this.valueOf() === o.valueOf();
  }

  validate(val: T): false | void | Error {
    return this._validator.validate(val);
  }

  valueOf(): T {
    return this._value;
  }
}
