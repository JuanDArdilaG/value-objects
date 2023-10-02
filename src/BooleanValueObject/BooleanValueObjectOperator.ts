import { IOperator } from "../ValueObject/IArithmeticOperator";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectOperator implements IOperator<boolean> {
  constructor(private _value: boolean) {}

  get value(): BooleanValueObject {
    return new BooleanValueObject(this._value);
  }

  plus(other: BooleanValueObject): BooleanValueObjectOperator {
    this._value = this._value || other.valueOf();
    return this;
  }

  substract(_: BooleanValueObject): BooleanValueObjectOperator {
    throw new Error("Method not implemented.");
  }

  times(_times: number, _x: BooleanValueObject): BooleanValueObjectOperator {
    throw new Error("Method not implemented.");
  }

  equalTo(other: BooleanValueObject): boolean {
    return this._value === other.valueOf();
  }

  differsFrom(other: BooleanValueObject): boolean {
    return this._value !== other.valueOf();
  }

  isBiggerOrEqualThan(_: BooleanValueObject): boolean {
    throw new Error("Method not implemented.");
  }

  isBiggerThan(_other: BooleanValueObject): boolean {
    throw new Error("Method not implemented.");
  }

  isLessThan(_other: BooleanValueObject): boolean {
    throw new Error("Method not implemented.");
  }

  encrypt(_: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
