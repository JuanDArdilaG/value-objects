import { IOperable } from "../ValueObject/IOperable";

export class BooleanValueObjectOperator implements IOperable<boolean> {
  constructor(private _value: boolean) {}

  add(other: boolean): boolean {
    return this._value && other;
  }

  substract(other: boolean): boolean {
    return this._value || other;
  }

  times(_times: number, _x: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  equalTo(other: boolean): boolean {
    return this._value === other;
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
