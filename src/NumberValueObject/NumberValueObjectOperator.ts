import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IArithmeticOperator<number> {
  constructor(private _value: number) {}

  plus(other: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value + other.valueOf());
  }

  substract(other: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value - other.valueOf());
  }

  times(x: number): NumberValueObject {
    return new NumberValueObject(this._value * x.valueOf());
  }

  equalTo(other: number): boolean {
    return this._value === other;
  }

  differsFrom(other: number): boolean {
    return this._value !== other;
  }

  isLessThan(other: number): boolean {
    return this._value < other;
  }

  isBiggerThan(other: number): boolean {
    return this._value > other;
  }

  isBiggerOrEqualThan(other: number): boolean {
    return this.isBiggerThan(other) || this.equalTo(other);
  }

  encrypt(_: number): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<number> {
    throw new Error("Method not implemented.");
  }

  isPositive(n: number): boolean {
    return n > 0;
  }

  isNegative(n: number): boolean {
    return n < 0;
  }

  isZero(n: number): boolean {
    return n === 0;
  }
}
