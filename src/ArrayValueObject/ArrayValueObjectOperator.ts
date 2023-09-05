import { BooleanValueObject } from "src/BooleanValueObject";
import { ValueObject } from "../ValueObject";
import { IOperable } from "../ValueObject/IOperable";
import { ArrayValueObject } from "./ArrayValueObject";
import { NumberValueObject } from "src/NumberValueObject";

export class ArrayValueObjectOperator<T extends ValueObject<Object>>
  implements IOperable<T[]>
{
  add(a: ArrayValueObject<T>, b: ArrayValueObject<T>): ArrayValueObject<T> {
    return new ArrayValueObject(a.value.concat(b.value));
  }

  encrypt(_: T[]): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  differsFrom(
    a: ValueObject<T[]>,
    b: ValueObject<T[]>
  ): BooleanValueObject<T[]> {
    return new BooleanValueObject(a.value !== b.value);
  }

  equalTo(a: ValueObject<T[]>, b: ValueObject<T[]>): BooleanValueObject<T[]> {
    return new BooleanValueObject(a.value === b.value);
  }

  isBiggerOrEqualThan(
    a: ValueObject<T[]>,
    b: ValueObject<T[]>
  ): BooleanValueObject<T[]> {
    return new BooleanValueObject(a.value >= b.value);
  }

  isBiggerThan(
    a: ValueObject<T[]>,
    b: ValueObject<T[]>
  ): BooleanValueObject<T[]> {
    return new BooleanValueObject(a.value > b.value);
  }

  isLessThan(
    a: ValueObject<T[]>,
    b: ValueObject<T[]>
  ): BooleanValueObject<T[]> {
    return new BooleanValueObject(a.value < b.value);
  }

  substract(a: ValueObject<T[]>, b: ValueObject<T[]>): ValueObject<T[]> {
    return new ArrayValueObject(a.value.filter((v) => !b.value.includes(v)));
  }

  times(times: NumberValueObject, x: ValueObject<T[]>): ValueObject<T[]> {
    return new ArrayValueObject(Array(times.value).fill(x.value).flat());
  }
}
