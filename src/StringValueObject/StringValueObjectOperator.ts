import { IOperable } from "../ValueObject/IOperable";

export class StringValueObjectOperator implements IOperable<string> {
  constructor(private _value: string) {}

  add(other: string): string {
    return this._value + other;
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

  substract(other: string): string {
    return this._value.replace(other, "");
  }

  times(times: number, x: string): string {
    return x.repeat(times);
  }
}
