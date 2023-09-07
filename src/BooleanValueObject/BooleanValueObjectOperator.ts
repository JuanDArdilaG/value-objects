import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectOperator<T extends Object>
  implements IArithmeticOperator<boolean>
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

  equalTo(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return new BooleanValueObject(this._value === other.valueOf());
  }

  differsFrom(other: boolean): boolean {
    return this._value !== other;
  }

  isBiggerOrEqualThan(_: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  isBiggerThan(_other: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  isLessThan(_other: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  encrypt(_: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
