import { IOperable } from "../ValueObject/IOperable";

export class NumberValueObjectOperator implements IOperable<number> {
  constructor(private _value: number) {}

  add(other: number): number {
    return this._value + other;
  }

  substract(other: number): number {
    return this._value - other;
  }

  times(x: number): number {
    return this._value * x;
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
