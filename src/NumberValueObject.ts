import { BooleanValueObject } from "./BooleanValueObject";
import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export class NumberValueObjectValidator implements IValidatable<number> {
  validate(val: number): boolean {
    return typeof val === "number";
  }
}

export class NumberValueObject extends ValueObject<number> {
  constructor(_value: number, _validator?: IValidatable<number>) {
    super(_validator || new NumberValueObjectValidator(), _value);
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

  isBiggerThan(other: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject(this._value > other._value);
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

  add(value: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value + value._value);
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
