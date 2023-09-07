import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IArithmeticOperator<number> {
  constructor(private _value: NumberValueObject) {}

  plus(other: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value.valueOf() + other.valueOf());
  }

  substract(other: NumberValueObject): NumberValueObject {
    return new NumberValueObject(this._value.valueOf() - other.valueOf());
  }

  times(x: number): NumberValueObject {
    return new NumberValueObject(this._value.valueOf() * x.valueOf());
  }

  equalTo(other: number): boolean {
    return this._value.valueOf() === other;
  }

  differsFrom(other: number): boolean {
    return this._value.valueOf() !== other;
  }

  isLessThan(other: number): boolean {
    return this._value.valueOf() < other;
  }

  isBiggerThan(other: number): boolean {
    return this._value.valueOf() > other;
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
