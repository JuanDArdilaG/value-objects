import { IOperable } from "../ValueObject/IOperable";

export class DateValueObjectOperator implements IOperable<Date> {
  add(a: Date, b: Date): Date {
    return new Date(a.getTime() + b.getTime());
  }

  substract(a: Date, b: Date): Date {
    return new Date(a.getTime() - b.getTime());
  }

  times(_times: number, _x: Date): Date {
    throw new Error("Method not implemented.");
  }

  equalTo(a: Date, b: Date): boolean {
    return a.valueOf() === b.valueOf();
  }

  differsFrom(a: Date, b: Date): boolean {
    return a.valueOf() !== b.valueOf();
  }

  isBiggerOrEqualThan(a: Date, b: Date): boolean {
    return a.valueOf() >= b.valueOf();
  }

  isBiggerThan(a: Date, b: Date): boolean {
    return a.valueOf() > b.valueOf();
  }

  isLessThan(a: Date, b: Date): boolean {
    return a.valueOf() < b.valueOf();
  }

  encrypt(_: Date): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<Date> {
    throw new Error("Method not implemented.");
  }
}
