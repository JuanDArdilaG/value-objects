import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { IValidator } from "./IValidator";
import { IValueObject } from "./IValueObject";

export interface PIIOptions {
  key: string;
  iv: string;
}

export interface ValueObjectOptions<T extends Object> {
  validator?: IValidator<T>;
  pii?: PIIOptions;
}

export class ValueObject<T extends Object> implements IValueObject<T> {
  constructor(private _options: ValueObjectOptions<T>, protected _value: T) {
    const validation = this.validate(_value);
    if (validation instanceof Error) {
      throw validation;
    }
  }

  get options(): ValueObjectOptions<T> {
    return this._options;
  }

  static from<T extends Object>(other: ValueObject<T>): ValueObject<T> {
    return new ValueObject<T>(other._options, other.valueOf());
  }

  valueOf(): T {
    return this._value;
  }

  is(o: IValueObject<T>): boolean {
    return this._value === o.valueOf();
  }

  toString(): string {
    return this._value.toString();
  }

  validate(value: T): Error | boolean {
    const validation = this._options.validator?.validate(value);
    if (!this._options.validator || validation === true) return true;
    if (!validation) return false;
    return validation instanceof Error
      ? validation
      : new InvalidArgumentError(this.constructor.name, value);
  }
}
