import { ValueObject } from "../ValueObject";
import { IOperator } from "../ValueObject/IArithmeticOperator";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectOperator<T extends ValueObject<Object>>
  implements IOperator<T[]>
{
  constructor(private _value: T[]) {}

  get value(): T[] {
    return this._value;
  }

  plus(other: ArrayValueObject<T>): ArrayValueObjectOperator<T> {
    this._value = this._value.concat(other.valueOf());
    return this;
  }

  substract(other: ArrayValueObject<T>): ArrayValueObjectOperator<T> {
    this._value = this._value.filter((v) => !other.valueOf().includes(v));
    return this;
  }

  times(times: number): ArrayValueObjectOperator<T> {
    this._value = Array(times).fill(this._value).flat();
    return this;
  }

  encrypt(_: T[]): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  differsFrom(other: ArrayValueObject<T>): boolean {
    return this._value !== other.valueOf();
  }

  equalTo(other: ArrayValueObject<T>): boolean {
    return this._value === other.valueOf();
  }

  isBiggerOrEqualThan(other: ArrayValueObject<T>): boolean {
    return this._value >= other.valueOf();
  }

  isBiggerThan(other: ArrayValueObject<T>): boolean {
    return this._value > other.valueOf();
  }

  isLessThan(other: ArrayValueObject<T>): boolean {
    return this._value < other.valueOf();
  }
}
