import { IOperable } from "../ValueObject/IOperable";

export class BooleanValueObjectOperator implements IOperable<boolean> {
  add(a: boolean, b: boolean): boolean {
    return a && b;
  }

  substract(a: boolean, b: boolean): boolean {
    return a || b;
  }

  times(_times: number, _x: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  equalTo(a: boolean, b: boolean): boolean {
    return a === b;
  }

  differsFrom(a: boolean, b: boolean): boolean {
    return a !== b;
  }

  isBiggerOrEqualThan(_a: boolean, _b: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  isBiggerThan(_a: boolean, _b: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  isLessThan(_a: boolean, _b: boolean): boolean {
    throw new Error("Method not implemented.");
  }

  encrypt(_: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
