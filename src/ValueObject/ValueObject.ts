import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { IOperable } from "./IOperable";
import { ITypable } from "./ITypable";
import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";

export abstract class ValueObject<T extends Object> implements IValueObject<T> {
  constructor(
    private _operable: IOperable<T>,
    private _typable: ITypable<T>,
    private _validatable: IValidatable<T>,
    protected _value: T
  ) {
    const validation = this.validate(_value);
    if (validation instanceof Error) {
      throw validation;
    }
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

  equal(a: IValueObject<Object>, b: IValueObject<Object>): boolean {
    if (b === null || b === undefined) {
      return false;
    }

    if (a.constructor.name !== b.constructor.name) {
      return false;
    }

    return a.value === b.value;
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

  toType(val: IValueObject<T>): T {
    return this._typable.toType(val);
  }

  fromType(val: T): IValueObject<T> {
    return this._typable.fromType(val);
  }

  validate(val: T): Error | void {
    const validation = this._validatable.validate(val);
    if (validation instanceof Error) {
      return validation;
    }
    if (validation === false) {
      return new InvalidArgumentError(this.constructor.name, val);
    }
  }

  add(a: IValueObject<T>, b: IValueObject<T>): IValueObject<T> {
    return this._operable.add(a, b);
  }
}
