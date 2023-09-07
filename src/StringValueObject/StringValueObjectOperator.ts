import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectOperator implements IArithmeticOperator<string> {
  constructor(private _value: string) {}

  plus(other: StringValueObject): StringValueObject {
    return new StringValueObject(this._value + other.valueOf());
  }

  equalTo(other: string): boolean {
    return this._value === other;
  }

  differsFrom(other: string): boolean {
    return this._value !== other;
  }

  isBiggerOrEqualThan(other: string): boolean {
    return this._value > other || this.equalTo(other);
  }

  isBiggerThan(other: string): boolean {
    return this._value > other;
  }

  isLessThan(other: string): boolean {
    return this._value < other;
  }

  substract(other: StringValueObject): StringValueObject {
    return new StringValueObject(this._value.replace(other.valueOf(), ""));
  }

  times(times: number, x: StringValueObject): StringValueObject {
    return new StringValueObject(x.valueOf().repeat(times));
  }
}
