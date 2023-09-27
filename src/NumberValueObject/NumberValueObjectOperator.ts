import { IOperator } from "../ValueObject/IArithmeticOperator";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IOperator<number> {
  constructor(protected _value: NumberValueObject) {}

  get value(): NumberValueObject {
    return this._value;
  }

  plus(other: NumberValueObject): NumberValueObjectOperator {
    this._value = new NumberValueObject(
      this._value.valueOf() + other.valueOf()
    );
    return this;
  }

  substract(other: NumberValueObject): NumberValueObjectOperator {
    this._value = new NumberValueObject(
      this._value.valueOf() - other.valueOf()
    );
    return this;
  }

  times(x: number): NumberValueObjectOperator {
    this._value = new NumberValueObject(this._value.valueOf() * x.valueOf());
    return this;
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
