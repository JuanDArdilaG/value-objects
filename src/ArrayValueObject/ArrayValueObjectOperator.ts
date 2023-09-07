import { ValueObject } from "../ValueObject";
import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectOperator<T extends ValueObject<Object>>
  implements IArithmeticOperator<T[]>
{
  constructor(private _value: T[]) {}

  plus(other: ArrayValueObject<T>): ArrayValueObject<T> {
    return new ArrayValueObject(this._value.concat(other.valueOf()));
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

  substract(other: ArrayValueObject<T>): ArrayValueObject<T> {
    return new ArrayValueObject(
      this._value.filter((v) => !other.valueOf().includes(v))
    );
  }

  times(times: number): ArrayValueObject<T> {
    return new ArrayValueObject(Array(times).fill(this._value).flat());
  }
}
