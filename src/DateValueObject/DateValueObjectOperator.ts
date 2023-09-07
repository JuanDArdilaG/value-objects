import { IOperable } from "../ValueObject/IOperable";

export class DateValueObjectOperator implements IOperable<Date> {
  constructor(private _value: Date) {}

  add(other: Date): Date {
    return new Date(this._value.getTime() + other.getTime());
  }

  substract(other: Date): Date {
    return new Date(this._value.getTime() - other.getTime());
  }

  times(_times: number, _x: Date): Date {
    throw new Error("Method not implemented.");
  }

  equalTo(other: Date): boolean {
    return this._value.valueOf() === other.valueOf();
  }

  differsFrom(other: Date): boolean {
    return this._value.valueOf() !== other.valueOf();
  }

  isBiggerOrEqualThan(other: Date): boolean {
    return this._value.valueOf() >= other.valueOf();
  }

  isBiggerThan(other: Date): boolean {
    return this._value.valueOf() > other.valueOf();
  }

  isLessThan(other: Date): boolean {
    return this._value.valueOf() < other.valueOf();
  }

  encrypt(_: Date): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<Date> {
    throw new Error("Method not implemented.");
  }
}
