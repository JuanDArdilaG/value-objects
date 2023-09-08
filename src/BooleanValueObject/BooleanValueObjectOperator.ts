import { IOperator } from "../ValueObject/IArithmeticOperator";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectOperator<T extends Object>
  implements IOperator<boolean>
{
  constructor(private _value: boolean) {}

  plus(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return new BooleanValueObject(this._value || other.valueOf());
  }

  substract(_: BooleanValueObject<T>): BooleanValueObject<T> {
    throw new Error("Method not implemented.");
  }

  times(_times: number, _x: BooleanValueObject<T>): BooleanValueObject<T> {
    throw new Error("Method not implemented.");
  }

  equalTo(other: BooleanValueObject<T>): boolean {
    return this._value === other.valueOf();
  }

  differsFrom(other: BooleanValueObject<T>): boolean {
    return this._value !== other.valueOf();
  }

  isBiggerOrEqualThan(_: BooleanValueObject<T>): boolean {
    throw new Error("Method not implemented.");
  }

  isBiggerThan(_other: BooleanValueObject<T>): boolean {
    throw new Error("Method not implemented.");
  }

  isLessThan(_other: BooleanValueObject<T>): boolean {
    throw new Error("Method not implemented.");
  }

  encrypt(_: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
