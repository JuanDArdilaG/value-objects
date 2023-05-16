import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectOperator<T extends Object>
  implements IOperable<T[]>
{
  add(a: IValueObject<T[]>, b: IValueObject<T[]>): IValueObject<T[]> {
    return new ArrayValueObject<T>(a.value.concat(b.value));
  }
}
