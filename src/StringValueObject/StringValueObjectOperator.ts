import { IOperator } from "../ValueObject/IArithmeticOperator";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectOperator implements IOperator<string> {
  constructor(private _value: string) {}

  plus(other: StringValueObject): StringValueObject {
    return new StringValueObject(this._value + other.valueOf());
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

  substract(other: StringValueObject): StringValueObject {
    return new StringValueObject(this._value.replace(other.valueOf(), ""));
  }

  times(times: number, x: StringValueObject): StringValueObject {
    return new StringValueObject(x.valueOf().repeat(times));
  }
}
