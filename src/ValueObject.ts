import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";

export abstract class ValueObject<T extends Object> implements IValueObject<T> {
  private validatable: IValidatable<T>;
  protected _value: T;

  constructor(validatable: IValidatable<T>, val: T) {
    this.validatable = validatable;

    if (!this.validate(val)) {
      throw new InvalidArgumentError(this.constructor.name, val);
    }

    this._value = val;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    if (!this.validate(value)) {
      throw new InvalidArgumentError(this.constructor.name, value);
    }
    this._value = value;
  }

  equalTo(o: IValueObject<T>): boolean {
    if (o === null || o === undefined) {
      return false;
    }

    if (this.constructor.name !== o.constructor.name) {
      return false;
    }

    return this._value === o.value;
  }

  is(o: T): boolean {
    return this._value === o;
  }

  toString() {
    if (this._value) {
      return this._value.toString();
    }

    return this._value;
  }

  validate(value: T): boolean {
    return this.validatable.validate(value);
  }
  abstract add(o: IValueObject<T>): IValueObject<T>;
}
