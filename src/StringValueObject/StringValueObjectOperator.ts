import { IOperator } from "../ValueObject/IArithmeticOperator";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectOperator implements IOperator<string> {
  constructor(private _value: string) {}

  plus(other: StringValueObject): StringValueObjectOperator {
    this._value = this._value + other.valueOf();
    return this;
  }

  substract(other: StringValueObject): StringValueObjectOperator {
    this._value = this._value.replace(other.valueOf(), "");
    return this;
  }

  times(times: number, x: StringValueObject): StringValueObjectOperator {
    this._value = x.valueOf().repeat(times);
    return this;
  }

  equalTo(other: StringValueObject): boolean {
    return this._value === other.valueOf();
  }

  differsFrom(other: StringValueObject): boolean {
    return this._value !== other.valueOf();
  }

  isBiggerOrEqualThan(other: StringValueObject): boolean {
    return this._value > other.valueOf() || this.equalTo(other);
  }

  isBiggerThan(other: StringValueObject): boolean {
    return this._value > other.valueOf();
  }

  isLessThan(other: StringValueObject): boolean {
    return this._value < other.valueOf();
  }
}
