import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { IOperable } from "./IOperable";
import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";

export interface PIIOptions {
  key: string;
  iv: string;
}

export interface ValueObjectOptions<T extends Object> {
  operable: IOperable<T>;
  validatable: IValidatable<T>;
  pii?: PIIOptions;
}

export abstract class ValueObject<T extends Object> implements IValueObject<T> {
  constructor(private _options: ValueObjectOptions<T>, protected _value: T) {
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

  equal(other: IValueObject<Object>): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (this.constructor.name !== other.constructor.name) {
      return false;
    }

    return this.value === other.value;
  }

  isBiggerThan(other: ValueObject<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }

    if (typeof this.value !== typeof other.value) {
      return false;
    }

    return this.value > other.value;
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

  validate(val: T): Error | void {
    const validation = this._options.validatable.validate(val);
    if (validation instanceof Error) {
      return validation;
    }
    if (validation === false) {
      return new InvalidArgumentError(this.constructor.name, val);
    }
  }

  add(other: ValueObject<T>): ValueObject<T> {
    return this._options.operable.add(this, other);
  }

  async encrypt(val: T): Promise<string> {
    if (!this._options.pii) {
      throw new Error("Cannot encrypt non-PII");
    }
    return this._options.operable.encrypt(val);
  }

  async decrypt(val: string): Promise<T> {
    if (!this._options.pii) {
      throw new Error("Cannot decrypt non-PII");
    }
    return this._options.operable.decrypt(val);
  }
}
