import { InvalidStringLengthError } from "./errors/InvalidStringLengthError";
import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export class StringValueObjectValidator implements IValidatable<string> {
  constructor(
    private _length: StringLengthOptions = { minLength: 0, maxLength: 100000 }
  ) {}

  validate(value: string): boolean {
    return this._checkLength(value) && typeof value === "string";
  }

  private _checkLength(str: string): boolean {
    if (
      str.length > this._length.maxLength ||
      str.length < this._length.minLength
    )
      throw new InvalidStringLengthError(
        `<${this.constructor.name}>`,
        this._length
      );
    return true;
  }
}

export class StringValueObject extends ValueObject<string> {
  constructor(
    _value: string,
    _length: StringLengthOptions = StringLengthOptionsDefault,
    _validator?: IValidatable<string>
  ) {
    super(_validator || new StringValueObjectValidator(_length), _value);
  }

  static empty(): StringValueObject {
    return new StringValueObject("");
  }

  isEmpty(): boolean {
    return this._value == "";
  }

  is(value: string): boolean {
    return this.value === value;
  }

  add(other: StringValueObject): StringValueObject {
    return new StringValueObject(this.value + other.value);
  }
}

export const StringLengthOptionsDefault: StringLengthOptions = {
  minLength: 0,
  maxLength: 100000,
};

export type StringLengthOptions = {
  minLength: number;
  maxLength: number;
};
