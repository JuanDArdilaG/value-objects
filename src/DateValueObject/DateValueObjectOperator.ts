import { IOperator } from "../ValueObject/IArithmeticOperator";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectOperator implements IOperator<Date> {
  constructor(private _value: Date) {}

  plus(other: DateValueObject): DateValueObjectOperator {
    this._value = new Date(this._value.getTime() + other.valueOf().getTime());
    return this;
  }

  substract(other: DateValueObject): DateValueObjectOperator {
    this._value = new Date(this._value.getTime() - other.valueOf().getTime());
    return this;
  }

  times(_times: number, _x: DateValueObject): DateValueObjectOperator {
    throw new Error("Method not implemented.");
  }

  equalTo(other: DateValueObject): boolean {
    return this._value.valueOf() === other.valueOf().valueOf();
  }

  differsFrom(other: DateValueObject): boolean {
    return this._value.valueOf() !== other.valueOf().valueOf();
  }

  isBiggerOrEqualThan(other: DateValueObject): boolean {
    return this._value.valueOf() >= other.valueOf().valueOf();
  }

  isBiggerThan(other: DateValueObject): boolean {
    return this._value.valueOf() > other.valueOf().valueOf();
  }

  isLessThan(other: DateValueObject): boolean {
    return this._value.valueOf() < other.valueOf().valueOf();
  }

  encrypt(_: Date): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<Date> {
    throw new Error("Method not implemented.");
  }
}
