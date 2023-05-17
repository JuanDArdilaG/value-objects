import { BooleanValueObject } from "../BooleanValueObject/BooleanValueObject";
import { ValueObject, ValueObjectOptions } from "../ValueObject/ValueObject";
import { NumberValueObjectOperator } from "./NumberValueObjectOperator";
import { NumberValueObjectValidator } from "./NumberValueObjectValidator";

export class NumberValueObject extends ValueObject<number> {
  constructor(_value: number, _options?: Partial<ValueObjectOptions<number>>) {
    super(
      {
        operable: _options?.operable ?? new NumberValueObjectOperator(),
        validatable: _options?.validatable ?? new NumberValueObjectValidator(),
        pii: _options?.pii,
      },
      _value
    );
  }

  empty(): NumberValueObject {
    return new NumberValueObject(0);
  }

  static zero(): NumberValueObject {
    return new NumberValueObject(0);
  }

  equalsTo(other: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject(this._value === other._value);
  }

  differsFrom(other: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject(this._value !== other._value);
  }

  isLessThan(other: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject(this._value < other._value);
  }

  isPositive(): BooleanValueObject<number> {
    return new BooleanValueObject<number>(this._value > 0);
  }

  isNegative(): BooleanValueObject<number> {
    return new BooleanValueObject<number>(this._value < 0);
  }

  isZero(): BooleanValueObject<number> {
    return new BooleanValueObject<number>(this._value === 0);
  }

  isBiggerOrEqualThan(other: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject<number>(this._value > other._value).or(
      this.equalsTo(other)
    );
  }

  substract(value: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value - value._value);
  }

  times(value: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value * value._value);
  }

  static from(value: NumberValueObject): NumberValueObject {
    return new NumberValueObject(value._value);
  }
}
