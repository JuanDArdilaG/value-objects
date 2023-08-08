import { ValueObject } from "../ValueObject";
import { IOperable } from "../ValueObject/IOperable";
import { ArrayValueObject } from "./ArrayValueObject";

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
}
