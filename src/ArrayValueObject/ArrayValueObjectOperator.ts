import { ValueObject } from "../ValueObject";
import { IOperable } from "../ValueObject/IOperable";

export class ArrayValueObjectOperator<T extends ValueObject<Object>>
  implements IOperable<T[]>
{
  add(a: T[], b: T[]): T[] {
    return a.concat(b);
  }

  encrypt(_: T[]): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  differsFrom(a: T[], b: T[]): boolean {
    return a !== b;
  }

  equalTo(a: T[], b: T[]): boolean {
    return a === b;
  }

  isBiggerOrEqualThan(a: T[], b: T[]): boolean {
    return a >= b;
  }

  isBiggerThan(a: T[], b: T[]): boolean {
    return a > b;
  }

  isLessThan(a: T[], b: T[]): boolean {
    return a < b;
  }

  substract(a: T[], b: T[]): T[] {
    return a.filter((v) => !b.includes(v));
  }

  times(times: number, x: T[]): T[] {
    return Array(times).fill(x).flat();
  }
}
