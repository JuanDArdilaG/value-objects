import { IOperable } from "../ValueObject/IOperable";

export class NumberValueObjectOperator implements IOperable<number> {
  add(a: number, b: number): number {
    return a + b;
  }

  substract(a: number, b: number): number {
    return a - b;
  }

  times(a: number, x: number): number {
    return a * x;
  }

  equalTo(a: number, b: number): boolean {
    return a === b;
  }

  differsFrom(a: number, b: number): boolean {
    return a !== b;
  }

  isLessThan(a: number, b: number): boolean {
    return a < b;
  }

  isBiggerThan(a: number, b: number): boolean {
    return a > b;
  }

  isBiggerOrEqualThan(a: number, b: number): boolean {
    return a > b || this.equalTo(a, b);
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
