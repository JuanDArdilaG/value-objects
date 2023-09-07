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
    const isEqual = this._options.operable?.equalTo(
      this._value,
      other.valueOf()
    );
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
    const addition = this._options.operable?.add(this._value, other.valueOf());
    if (addition) {
      return new ValueObject(this._options, addition);
    }
    throw new Error("Method not implemented.");
  }

  async encrypt(val: T): Promise<string> {
    if (!this._options.pii) {
      throw new Error("Cannot encrypt non-PII");
    }
    const encryption = this._options.operable?.encrypt(val);
    if (encryption) {
      return encryption;
    }
    throw new Error("Method not implemented.");
  }

  async decrypt(val: string): Promise<T> {
    if (!this._options.pii) {
      throw new Error("Cannot decrypt non-PII");
    }
    const decryption = this._options.operable?.decrypt(val);
    if (decryption) {
      return decryption;
    }
    throw new Error("Method not implemented.");
  }
}
