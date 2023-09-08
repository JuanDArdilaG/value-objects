import { IOperator } from "../ValueObject/IArithmeticOperator";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IOperator<number> {
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

  equalTo(other: NumberValueObject): boolean {
    return this._value.valueOf() === other.valueOf();
  }

  differsFrom(other: NumberValueObject): boolean {
    return this._value.valueOf() !== other.valueOf();
  }

  isLessThan(other: NumberValueObject): boolean {
    return this._value.valueOf() < other.valueOf();
  }

  isBiggerThan(other: NumberValueObject): boolean {
    return this._value.valueOf() > other.valueOf();
  }

  isBiggerOrEqualThan(other: NumberValueObject): boolean {
    return this.isBiggerThan(other) || this.equalTo(other);
  }

  encrypt(_: NumberValueObject): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
