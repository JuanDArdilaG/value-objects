import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectOperator<T extends any>
  implements IOperable<boolean>
{
  add(
    a: IValueObject<boolean>,
    b: IValueObject<boolean>
  ): IValueObject<boolean> {
    return new BooleanValueObject<T>(a.value && b.value);
  }
}
