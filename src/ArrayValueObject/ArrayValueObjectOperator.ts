import { ValueObject } from "../ValueObject";
import { IOperable } from "../ValueObject/IOperable";

export class ArrayValueObjectOperator<T extends ValueObject<Object>>
  implements IOperable<T[]>
{
  constructor(private _value: T[]) {}

  add(other: T[]): T[] {
    return this._value.concat(other);
  }

  encrypt(_: T[]): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  differsFrom(other: T[]): boolean {
    return this._value !== other;
  }

  equalTo(other: T[]): boolean {
    return this._value === other;
  }

  isBiggerOrEqualThan(other: T[]): boolean {
    return this._value >= other;
  }

  isBiggerThan(other: T[]): boolean {
    return this._value > other;
  }

  isLessThan(other: T[]): boolean {
    return this._value < other;
  }

  substract(other: T[]): T[] {
    return this._value.filter((v) => !other.includes(v));
  }

  times(times: number, x: T[]): T[] {
    return Array(times).fill(x).flat();
  }
}
