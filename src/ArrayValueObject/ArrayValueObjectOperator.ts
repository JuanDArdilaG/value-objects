import { IOperable } from "../ValueObject/IOperable";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectOperator<T extends Object>
  implements IOperable<T[]>
{
  add(a: ArrayValueObject<T>, b: ArrayValueObject<T>): ArrayValueObject<T> {
    return new ArrayValueObject(a.value.concat(b.value));
  }
}
