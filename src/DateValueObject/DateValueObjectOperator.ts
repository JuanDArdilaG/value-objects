import { IArithmeticOperator } from "../ValueObject/IArithmeticOperator";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectOperator implements IArithmeticOperator<Date> {
  constructor(private _value: Date) {}

  plus(other: DateValueObject): DateValueObject {
    return new DateValueObject(
      new Date(this._value.getTime() + other.valueOf().getTime())
    );
  }

  substract(other: DateValueObject): DateValueObject {
    return new DateValueObject(
      new Date(this._value.getTime() - other.valueOf().getTime())
    );
  }

  times(_times: number, _x: DateValueObject): DateValueObject {
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
