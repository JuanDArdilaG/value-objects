import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { IOperable } from "./IOperable";
import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";

export interface PIIOptions {
  key: string;
  iv: string;
}

export interface ValueObjectOptions<T extends Object> {
  operable?: IOperable<T>;
  validatable: IValidatable<T>;
  pii?: PIIOptions;
}

export class ValueObject<T extends Object> implements IValueObject<T> {
  operator: IOperable<T> | undefined;
  constructor(private _options: ValueObjectOptions<T>, protected _value: T) {
    const validation = this.validate(_value);
    if (validation instanceof Error) {
      throw validation;
    }
    this.operator = _options.operable;
  }

  static from<T extends Object>(other: ValueObject<T>): ValueObject<T> {
    return new ValueObject<T>(other._options, other.valueOf());
  }

  valueOf(): T {
    return this._value;
  }

  equalTo(other: IValueObject<T>): boolean {
    const isEqual = this._options.operable?.equalTo(other.valueOf());
    if (isEqual) {
      return isEqual;
    }
    return this._value === other.valueOf();
  }

  isBiggerThan(other: IValueObject<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (typeof this.valueOf() !== typeof other.valueOf()) {
      return false;
    }

    return this.valueOf() > other.valueOf();
  }

  is(o: IValueObject<T>): boolean {
    return this._value === o.valueOf();
  }

  toString(): string {
    return this._value.toString();
  }

  validate(val: T): Error | void {
    const validation = this._options.validatable.validate(val);
    if (validation instanceof Error) {
      return validation;
    }
    if (validation === false) {
      return new InvalidArgumentError(this.constructor.name, val);
    }
  }

  add(other: IValueObject<T>): IValueObject<T> {
    const addition = this._options.operable?.add(other.valueOf());
    if (addition) {
      return new ValueObject(this._options, addition);
    }
    throw new Error("Method not implemented.");
  }
}
